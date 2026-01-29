import Papa from 'papaparse';
import { Team, Round, Match } from '../types';

const teamLogos = import.meta.glob('../assets/team-logos/*.{png,jpg,jpeg,svg,PNG,JPG,JPEG,SVG}', { eager: true });

const TEAMS_URL = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vR4qBk403Kau0N0B8KlYHnHV4MSYYonQR6mwZqa7bqhU72xDOc9huu1lSYZLTq4gOu-B-08IASUXQDg/pub?gid=0&single=true&output=csv';
const MATCHES_URL = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vR4qBk403Kau0N0B8KlYHnHV4MSYYonQR6mwZqa7bqhU72xDOc9huu1lSYZLTq4gOu-B-08IASUXQDg/pub?gid=1943059921&single=true&output=csv';

interface TeamRow {
  Nome: string;
  Sigla: string;
  Logo: string;
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

const DEFAULT_ROUNDS: Round[] = [
  { name: "Rodada 1", matches: createTBDMatches(8), toBeDetermined: true },
  { name: "Rodada 2 (1-0)", matches: createTBDMatches(4), toBeDetermined: true },
  { name: "Rodada 2 (0-1)", matches: createTBDMatches(4), toBeDetermined: true },
  { name: "Rodada 3 (2-0)", matches: createTBDMatches(2), toBeDetermined: true },
  { name: "Rodada 3 (1-1)", matches: createTBDMatches(4), toBeDetermined: true },
  { name: "Rodada 3 (0-2)", matches: createTBDMatches(2), toBeDetermined: true },
  { name: "Rodada 4 (2-1)", matches: createTBDMatches(3), toBeDetermined: true },
  { name: "Rodada 4 (1-2)", matches: createTBDMatches(3), toBeDetermined: true },
  { name: "Rodada 5 (2-2)", matches: createTBDMatches(3), toBeDetermined: true },
  { name: "Quartas de Final", matches: createTBDMatches(4), toBeDetermined: true },
  { name: "Semifinal", matches: createTBDMatches(2), toBeDetermined: true },
  { name: "Final", matches: createTBDMatches(1), toBeDetermined: true },
];

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

    let logoUrl = row.Logo;
    let localLogoFound = false;

    // 1. Try to find local logo by Sigla
    if (row.Sigla) {
        const targetSigla = row.Sigla.trim().toLowerCase();
        for (const path in teamLogos) {
            const fileName = path.split('/').pop();
            const nameWithoutExt = fileName?.substring(0, fileName.lastIndexOf('.'));
            
            if (nameWithoutExt?.toLowerCase() === targetSigla) {
                logoUrl = (teamLogos[path] as any).default;
                localLogoFound = true;
                break;
            }
        }
    }

    // 2. If not found by Sigla, try to use row.Logo as a filename match (legacy/fallback)
    if (!localLogoFound && logoUrl && !logoUrl.startsWith('http')) {
        const cleanName = logoUrl.split('/').pop();
        for (const path in teamLogos) {
            if (path.includes(cleanName!)) {
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

  const mergedRounds: Round[] = [];
  const processedNames = new Set<string>();

  DEFAULT_ROUNDS.forEach(defaultRound => {
      const name = defaultRound.name || "";
      if (roundsMap.has(name)) {
          mergedRounds.push(roundsMap.get(name)!);
      } else {
          mergedRounds.push(defaultRound);
      }
      processedNames.add(name);
  });

  roundsMap.forEach((round, name) => {
      if (!processedNames.has(name)) {
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
