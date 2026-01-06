import { useState } from "react";
import { Round, Team } from "../../types";

interface GroupStageProps {
  rounds: Round[];
  teams: Team[];
  title?: string;
}

function GroupStage({ rounds, teams, title = "Fase Suíça" }: GroupStageProps) {
  const [showNote, setShowNote] = useState(true);

  const handleCloseNote = () => {
    setShowNote(false);
  };

  const getTeamLogo = (teamName: string) => {
    const team = teams.find((t) => t.acronym === teamName);
    return team ? team.logoUrl : false;
  };

  // Group rounds by their stage (Rodada 1, Rodada 2, etc.)
  const roundsByStage = rounds.reduce((acc, round) => {
    // Extract "Rodada X" from the name if it starts with Rodada
    let stageName = round.name || "Outros";
    if (stageName.startsWith("Rodada")) {
      stageName = stageName.split(" ").slice(0, 2).join(" ");
    }

    if (!acc[stageName]) {
      acc[stageName] = [];
    }
    acc[stageName].push(round);
    return acc;
  }, {} as Record<string, Round[]>);

  return (
    <div className="flex flex-col gap-y-6">
      <div className="flex flex-col gap-y-4">
        <div className="flex items-center justify-between">
            <h4 className="text-xl font-bold tracking-tight text-white sm:text-2xl">
            {title}
            </h4>
            <a
                href="https://www.twitch.tv/coparecifedelol"
                target="_blank"
                rel="noreferrer"
                className="text-indigo-400 hover:text-indigo-300 font-semibold flex items-center gap-2"
            >
                Assista na Twitch
                <svg fill="currentColor" viewBox="0 0 24 24" className="h-5 w-5">
                    <path d="m11.481 6.259v6.259h-2.091v-6.259zm5.74 0v6.259h-2.091v-6.259zm0 10.962 3.649-3.663v-11.467h-17.221v15.13h4.702v3.13l3.13-3.13zm5.74-17.221v14.61l-6.259 6.259h-4.702l-3.13 3.13h-3.13v-3.129h-5.74v-16.702l1.572-4.168z" />
                </svg>
            </a>
        </div>
        
        {showNote && (
          <div className="flex items-center justify-between p-4 bg-indigo-500 text-white rounded-lg">
            <p className="text-sm font-medium">
              <span className="font-bold">Nota:</span> TBD (To Be Determined) -
              A ser definido. Os confrontos serão atualizados conforme o andamento do campeonato.
            </p>
            <button
              type="button"
              onClick={handleCloseNote}
              className="text-white font-bold hover:text-gray-200"
            >
              X
            </button>
          </div>
        )}
      </div>

      <div className="flex gap-6 overflow-x-auto pb-6 snap-x">
        {Object.entries(roundsByStage).map(([stageName, stageRounds]) => (
          <div key={stageName} className="min-w-[320px] flex flex-col gap-y-4 snap-start">
            <div className="bg-gray-900/50 p-2 rounded-lg text-center border border-indigo-500/30">
                <h3 className="text-lg font-bold text-white uppercase tracking-wider">{stageName}</h3>
            </div>
            
            {stageRounds.map((round, index) => (
              <div
                key={index}
                className="bg-gray-800 p-4 rounded-lg border border-gray-700 shadow-lg flex flex-col gap-y-3"
              >
                {round.name && round.name.length > stageName.length && (
                     <h4 className="text-indigo-300 text-sm font-bold uppercase tracking-wide border-b border-gray-700 pb-2">
                        {round.name.replace(stageName, "").replace(/[()]/g, "").trim()}
                     </h4>
                )}
                
                <div className="flex flex-col gap-y-2">
                    {round.matches.map((match, matchIndex) => {
                    const team1Logo = getTeamLogo(match.team1);
                    const team2Logo = getTeamLogo(match.team2);

                    return (
                        <div
                        key={matchIndex}
                        className={`flex items-center justify-between bg-gray-700/50 p-2 rounded hover:bg-gray-700 transition-colors ${
                             match.winner ? "border-l-2 border-green-500" : ""
                        }`}
                        >
                        {/* Team 1 */}
                        <div className="flex items-center gap-2 flex-1 overflow-hidden">
                            {team1Logo ? (
                            <img src={team1Logo} className="w-6 h-6 rounded-full" alt="" />
                            ) : (
                            <div className="w-6 h-6 rounded-full bg-gray-600 flex items-center justify-center text-xs text-gray-400">
                                {match.team1 === "TBD" ? "?" : match.team1.substring(0,1)}
                            </div>
                            )}
                            <span className={`text-sm truncate ${match.winner === match.team1 ? "text-green-400 font-bold" : "text-gray-200"}`}>
                                {match.team1}
                            </span>
                        </div>

                        <span className="text-gray-500 text-xs px-2">VS</span>

                        {/* Team 2 */}
                        <div className="flex items-center gap-2 flex-1 justify-end overflow-hidden">
                             <span className={`text-sm truncate text-right ${match.winner === match.team2 ? "text-green-400 font-bold" : "text-gray-200"}`}>
                                {match.team2}
                            </span>
                            {team2Logo ? (
                            <img src={team2Logo} className="w-6 h-6 rounded-full" alt="" />
                            ) : (
                             <div className="w-6 h-6 rounded-full bg-gray-600 flex items-center justify-center text-xs text-gray-400">
                                {match.team2 === "TBD" ? "?" : match.team2.substring(0,1)}
                            </div>
                            )}
                        </div>
                        </div>
                    );
                    })}
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default GroupStage;
