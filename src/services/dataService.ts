import Papa from 'papaparse';
import { Team, Round, Match } from '../types';

const teamLogos = import.meta.glob('../assets/team-logos/*.{png,jpg,jpeg,svg,PNG,JPG,JPEG,SVG}', { eager: true });

const TEAMS_URL = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vR4qBk403Kau0N0B8KlYHnHV4MSYYonQR6mwZqa7bqhU72xDOc9huu1lSYZLTq4gOu-B-08IASUXQDg/pub?gid=0&single=true&output=csv';
const MATCHES_URL = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vR4qBk403Kau0N0B8KlYHnHV4MSYYonQR6mwZqa7bqhU72xDOc9huu1lSYZLTq4gOu-B-08IASUXQDg/pub?gid=1943059921&single=true&output=csv';

interface TeamRow {
  Nome: string;
  Sigla: string;
  Vitorias: string;
  Derrotas: string;
  [key: string]: string;
}

interface MatchRow {
  Fase: string;
  Time1: string;
  Time2: string;
  Vencedor: string;
  Horario?: string;
}

const createTBDMatches = (count: number) => Array.from({ length: count }, () => ({
    team1: "TBD",
    team2: "TBD",
    winner: ""
}));

const generateStructure = (count: number): Round[] => {
    const rounds: Round[] = [];
    const matchesPerRound = Math.ceil(count / 2);

    // Dynamic Swiss Rounds Count
    // 7-10 teams: 4 Rounds
    // 11+ teams: 5 Rounds
    const swissRoundsCount = count <= 10 ? 4 : 5;
    
    for (let i = 1; i <= swissRoundsCount; i++) {
        rounds.push({
            name: `Rodada ${i}`,
            matches: createTBDMatches(matchesPerRound),
            toBeDetermined: true
        });
    }

    // Dynamic Playoffs
    if (count <= 9) {
        // Top 6 Format (Byes for Top 2)
        // Quartas: 3rd vs 6th, 4th vs 5th (2 matches)
        rounds.push({ name: "Quartas de Final", matches: createTBDMatches(2), toBeDetermined: true });
        rounds.push({ name: "Semifinal", matches: createTBDMatches(2), toBeDetermined: true });
        rounds.push({ name: "Final", matches: createTBDMatches(1), toBeDetermined: true });
    } else {
        // Standard Top 8 Format
        rounds.push({ name: "Quartas de Final", matches: createTBDMatches(4), toBeDetermined: true });
        rounds.push({ name: "Semifinal", matches: createTBDMatches(2), toBeDetermined: true });
        rounds.push({ name: "Final", matches: createTBDMatches(1), toBeDetermined: true });
    }

    return rounds;
}

export const fetchTournamentData = async () => {
  const [teamsData, matchesData] = await Promise.all([
    fetchCSV<TeamRow>(TEAMS_URL),
    fetchCSV<MatchRow>(MATCHES_URL)
  ]);

  const teams: Team[] = teamsData.map(row => {
    const members = [];
    for(let i=1; i<=6; i++) {
        const nick = row[`Jog${i}_nick`];
        const mono = row[`Jog${i}_mono`];
        if(nick) {
            members.push(mono ? `${nick}/${mono}` : nick);
        } else {
            members.push("");
        }
    }

    let logoUrl = "";

    // Try to find local logo by Sigla
    if (row.Sigla) {
        const targetSigla = row.Sigla.trim().toLowerCase();
        for (const path in teamLogos) {
            const fileName = path.split('/').pop();
            const nameWithoutExt = fileName?.substring(0, fileName.lastIndexOf('.'));
            
            if (nameWithoutExt?.toLowerCase() === targetSigla) {
                logoUrl = (teamLogos[path] as any).default;
                break;
            }
        }
    }

    return {
        name: row.Nome,
        acronym: row.Sigla,
        logoUrl: logoUrl,
        victories: parseInt(row.Vitorias) || 0,
        loses: parseInt(row.Derrotas) || 0,
        gamesPlayed: (parseInt(row.Vitorias) || 0) + (parseInt(row.Derrotas) || 0),
        members
    };
  }).filter(t => t.name);

  // Group matches by Round (Fase)
  const roundsMap = new Map<string, Round>();
  
  matchesData.forEach(row => {
      if(!row.Fase) return;
      
      const match: Match = {
          team1: row.Time1 || "TBD",
          team2: row.Time2 || "TBD",
          winner: row.Vencedor
      };

      if(!roundsMap.has(row.Fase)) {
          roundsMap.set(row.Fase, {
              name: row.Fase,
              matches: [],
              toBeDetermined: false,
              startAt: row.Horario || "" 
          });
      }
      roundsMap.get(row.Fase)?.matches.push(match);
  });

  const generatedStructure = generateStructure(teams.length);
  const mergedRounds: Round[] = [];
  const processedFaseNames = new Set<string>();

  generatedStructure.forEach(genRound => {
      const stageName = genRound.name || "";
      
      // Find all rounds in roundsMap that belong to this stage
      const matchingRounds: Round[] = [];
      roundsMap.forEach((round, key) => {
          let keyStage = key;
           if (keyStage.startsWith("Rodada")) {
                keyStage = keyStage.split(" ").slice(0, 2).join(" ");
           }
           if (keyStage === stageName || key === stageName) {
               matchingRounds.push(round);
               processedFaseNames.add(key);
           }
      });

      if (matchingRounds.length > 0) {
          mergedRounds.push(...matchingRounds);
      } else {
          mergedRounds.push(genRound);
      }
  });

  // Add any remaining rounds from data that weren't in the structure
  roundsMap.forEach((round, key) => {
      if (!processedFaseNames.has(key)) {
          mergedRounds.push(round);
      }
  });

  return { teams, rounds: mergedRounds };
};

const fetchCSV = <T>(url: string): Promise<T[]> => {
  return new Promise((resolve, reject) => {
    Papa.parse(url, {
      download: true,
      header: true,
      complete: (results) => {
        resolve(results.data as T[]);
      },
      error: (error) => reject(error)
    });
  });
};
