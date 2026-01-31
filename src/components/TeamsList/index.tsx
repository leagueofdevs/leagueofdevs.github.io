import { Team } from "../../types";
import PlaceholderLogo from "../../assets/copa-recife-logo.png";

export interface TeamsListProps {
  teams: Array<Team>;
}

function TeamsList({ teams }: TeamsListProps) {
  if (teams.length === 0) {
    return (
      <div className="text-center py-12 bg-gray-800/50 rounded-xl border border-gray-700 border-dashed">
        <h3 className="mt-2 text-xl font-semibold text-gray-200">
          O campeonato começará em breve
        </h3>
        <p className="mt-1 text-sm text-gray-400">
          Aguardando as inscrições das equipes.
        </p>
      </div>
    );
  }

  return (
    <ul
      role="list"
      className="mx-auto grid max-w-2xl grid-cols-1 gap-6 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-8"
    >
      {teams.map((team) => {
        // Extract nicks for Multi-search
        const memberNicks = team.members
          .map((m) => (m ? (m.includes("/") ? m.split("/")[0] : m) : ""))
          .filter((n) => n.length > 0);
        const multiSearchLink = `https://www.op.gg/multisearch/br?summoners=${encodeURIComponent(
          memberNicks.join(",")
        )}`;

        return (
          <li
            key={team.name}
            className="rounded-2xl bg-gray-800 px-8 py-10 transform transition-transform duration-300 hover:scale-105 flex flex-col"
          >
            {team.logoUrl ? (
              <img
                className="mx-auto h-48 w-48 rounded-full md:h-56 md:w-56"
                src={team.logoUrl}
                alt={`${team.name} logo`}
                draggable={false}
              />
            ) : (
              <img
                className="mx-auto h-48 w-48 rounded-full md:h-56 md:w-56 blur"
                src={PlaceholderLogo}
                alt="Placeholder logo"
                draggable={false}
              />
            )}
            
            <div className="mt-6 flex flex-col items-center gap-2 mb-4">
                <h3 className="text-base font-semibold leading-7 tracking-tight text-white">
                    {team.name}
                </h3>
                <a 
                    href={multiSearchLink}
                    target="_blank"
                    rel="noreferrer"
                    className="text-xs bg-indigo-600 hover:bg-indigo-500 text-white py-1 px-3 rounded-full transition-colors font-medium flex items-center gap-1"
                >
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                    Scout no OP.GG
                </a>
            </div>

            <div className="flex flex-col w-full">
                {team.members.map((memberName, index) => {
                if (!memberName) return null;

                const memberNameSplit = memberName.includes("/")
                    ? memberName.split("/")[0]
                    : memberName;
                const championName = memberName.includes("/")
                    ? memberName.split("/")[1]
                    : "";
                
                // Added "RES" for the 7th player
                const role = ["TOP", "JG", "MID", "ADC", "SUP", "RES", "RES"][index] || "RES";
                
                // OP.GG uses - for tag separator in URLs
                const profileUrl = `https://www.op.gg/summoners/br/${encodeURIComponent(memberNameSplit.replace('#', '-'))}`;

                return (
                    <p
                    key={index}
                    className="text-sm leading-6 text-gray-400 flex items-center gap-x-3 w-full border-b border-gray-700/50 last:border-0 py-2"
                    >
                    <span className="text-[10px] font-bold text-indigo-400 w-6 text-right shrink-0 uppercase tracking-wider">
                        {role}
                    </span>
                    
                    <a 
                        href={profileUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="truncate flex-1 text-left hover:text-indigo-300 transition-colors underline decoration-dotted underline-offset-4 decoration-indigo-500/50"
                        title="Ver perfil no OP.GG"
                    >
                        {memberNameSplit}
                    </a>

                    {championName && (
                        <div className="flex bg-indigo-600/80 rounded px-1.5 py-0.5 items-center shrink-0">
                        <span className="text-[10px] text-white font-medium">{championName}</span>
                        </div>
                    )}
                    </p>
                );
                })}
            </div>
          </li>
        );
      })}
    </ul>
  );
}

export default TeamsList;
