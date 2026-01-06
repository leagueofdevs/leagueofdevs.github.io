import { Team } from "../../types";
import PlaceholderLogo from "../../assets/team-logos/placeholder.jpg";

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
      {teams.map((team) => (
        <li
          key={team.name}
          className="rounded-2xl bg-gray-800 px-8 py-10 transform transition-transform duration-300 hover:scale-105"
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
          <h3 className="mt-6 text-base font-semibold leading-7 tracking-tight text-white">
            {team.name}
          </h3>
          {team.members.map((memberName, index) => {
            if (!memberName) return null;

            const memberNameSplit = memberName.includes("/")
              ? memberName.split("/")[0]
              : memberName;
            const championName = memberName.includes("/")
              ? memberName.split("/")[1]
              : "";
            const role = ["TOP", "JG", "MID", "ADC", "SUP", "RES"][index];

            return (
              <p
                key={index}
                className="text-sm leading-6 text-gray-400 flex items-center gap-x-3 w-full border-b border-gray-700/50 last:border-0 py-1"
              >
                <span className="text-[10px] font-bold text-indigo-400 w-6 text-right shrink-0 uppercase tracking-wider">
                  {role}
                </span>
                <span className="truncate flex-1 text-left">{memberNameSplit}</span>
                {championName && (
                  <div className="flex bg-indigo-600/80 rounded px-1.5 py-0.5 items-center shrink-0">
                    <span className="text-[10px] text-white font-medium">{championName}</span>
                  </div>
                )}
              </p>
            );
          })}
        </li>
      ))}
    </ul>
  );
}

export default TeamsList;
