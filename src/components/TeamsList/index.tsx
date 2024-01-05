import { Team } from "../../types";
import PlaceholderLogo from "../../assets/team-logos/placeholder.jpg";

export interface TeamsListProps {
  teams: Array<Team>;
}

function TeamsList({ teams }: TeamsListProps) {
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
          {team.members.map((memberName) => {
            const memberNameSplit = memberName.includes("/")
              ? memberName.split("/")[0]
              : memberName;
            const championName = memberName.includes("/")
              ? memberName.split("/")[1]
              : "";

            return (
              <p
                key={memberNameSplit}
                className="text-sm leading-6 text-gray-400 flex items-center justify-center gap-x-1 w-full"
              >
                {memberNameSplit}
                {championName && (
                  <div className="flex bg-indigo-500 rounded-lg p-1 justify-end gap-x-1">
                    <span className="text-gray-300">Mono</span>
                    <span className="text-gray-300">{championName}</span>
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
