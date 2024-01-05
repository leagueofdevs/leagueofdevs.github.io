import PlaceholderLogo from "../../assets/team-logos/placeholder.jpg";
import { SVGProps, useState } from "react";
import { teams, rounds } from "../../utils/constants";

function GroupStage() {
  const [showNote, setShowNote] = useState(true);

  const handleCloseNote = () => {
    setShowNote(false);
  };

  const getTeamLogo = (teamName: string) => {
    const team = teams.find((t) => t.acronym === teamName);
    return team ? team.logoUrl : false;
  };

  const twitchButton = {
    name: "Twitch",
    href: "https://www.twitch.tv/coparecifedelol",
    icon: (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
      <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
        <path d="m11.481 6.259v6.259h-2.091v-6.259zm5.74 0v6.259h-2.091v-6.259zm0 10.962 3.649-3.663v-11.467h-17.221v15.13h4.702v3.13l3.13-3.13zm5.74-17.221v14.61l-6.259 6.259h-4.702l-3.13 3.13h-3.13v-3.129h-5.74v-16.702l1.572-4.168z" />
      </svg>
    ),
  };

  return (
    <div className="flex flex-col gap-y-6">
      <div className="flex flex-col gap-y-4">
        <h4 className="flex text-xl font-bold tracking-tight text-white sm:text-2xl justify-start">
          Fase de grupos
        </h4>
        {showNote && (
          <div className="flex items-center justify-between p-4 bg-indigo-500 text-white rounded-lg">
            <p className="text-sm font-medium">
              <span className="font-bold">Nota:</span> TBD (To Be Determined) -
              A ser definido. Os confrontos da primeira rodada já foram
              definidos; os demais serão determinados com base nos resultados
              dos jogos!
            </p>
            <button
              type="button"
              onClick={handleCloseNote}
              className="text-white font-bold"
            >
              X
            </button>
          </div>
        )}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8">
        {rounds.map((round, index) => (
          <div
            key={index + 1}
            className="round-container bg-gray-800 p-4 rounded-lg mb-6 w-full transform transition-transform duration-300 hover:scale-105"
          >
            <h4 className="round-title text-white font-bold text-xl">
              Rodada {index + 1}
            </h4>
            <div className="w-full flex gap-x-1 items-center text-gray-400 text-base mb-4 justify-center">
              {round.startAt} - Ao vivo na
              <a
                key={twitchButton.name}
                href={twitchButton.href}
                className="text-gray-500 hover:text-gray-400"
                target="_blank"
                rel="noreferrer"
              >
                <span className="sr-only">{twitchButton.name}</span>
                <twitchButton.icon className="h-6 w-6" aria-hidden="true" />
              </a>
            </div>
            {round.toBeDetermined &&
              Array.from({ length: 7 }).map((_, index) => (
                <div
                  key={index}
                  className="match-card bg-gray-700 p-4 rounded-md flex items-center justify-between mb-2"
                >
                  <div className="team-container flex items-center">
                    <img
                      src={PlaceholderLogo}
                      alt={`Team logo ${index}`}
                      className="rounded-full h-10 w-10 mr-2 blur-sm"
                      draggable={false}
                    />
                    <span className="team-name text-white">TBD</span>
                  </div>
                  <span className="vs text-white mx-2">X</span>
                  <div className="team-container flex items-center">
                    <img
                      src={PlaceholderLogo}
                      alt={`Team logo ${index + 1}`}
                      className="rounded-full h-10 w-10 mr-2 blur-sm"
                      draggable={false}
                    />
                    <span className="team-name text-white">TBD</span>
                  </div>
                </div>
              ))}
            {!round.toBeDetermined &&
              round.matches &&
              round.matches.map((match, index) => {
                const team1Logo = getTeamLogo(match.team1);
                const team2Logo = getTeamLogo(match.team2);
                return (
                  <div
                    key={index}
                    className={`match-card bg-gray-700 p-4 rounded-md flex items-center justify-between mb-2 shadow-md ${
                      match.winner !== "" && "bg-gray-900"
                    }`}
                  >
                    <div className="team-container flex items-center">
                      {team1Logo ? (
                        <img
                          src={team1Logo}
                          alt={`${match.team1} logo`}
                          className={`rounded-full h-10 w-10 mr-2 ${
                            match.winner === match.team1
                              ? "border-green-500 border-2"
                              : match.winner !== "" && "border-red-500 border-2"
                          }`}
                          draggable={false}
                        />
                      ) : (
                        <img
                          src={PlaceholderLogo}
                          alt="Placeholder logo"
                          className={`rounded-full h-10 w-10 mr-2 blur-sm ${
                            match.winner === match.team1
                              ? "border-green-500 border-2"
                              : match.winner !== "" && "border-red-500 border-2"
                          }`}
                          draggable={false}
                        />
                      )}
                      <span
                        className={`team-name text-white ${
                          match.winner === match.team1
                            ? "text-green-500"
                            : match.winner !== "" && "text-red-500"
                        }`}
                      >
                        {match.team1}
                      </span>
                    </div>
                    <span className="vs text-white mx-2">X</span>
                    <div className="team-container flex items-center">
                      {team2Logo ? (
                        <img
                          src={team2Logo}
                          alt={`${match.team2} logo`}
                          className={`rounded-full h-10 w-10 mr-2 ${
                            match.winner === match.team2
                              ? "border-green-500 border-2"
                              : match.winner !== "" && "border-red-500 border-2"
                          }`}
                          draggable={false}
                        />
                      ) : (
                        <img
                          src={PlaceholderLogo}
                          alt="Placeholder logo"
                          className={`rounded-full h-10 w-10 mr-2 blur-sm ${
                            match.winner === match.team2
                              ? "border-green-500 border-2"
                              : match.winner !== "" && "border-red-500 border-2"
                          }`}
                          draggable={false}
                        />
                      )}
                      <span
                        className={`team-name text-white ${
                          match.winner === match.team2
                            ? "text-green-500"
                            : match.winner !== "" && "text-red-500"
                        }`}
                      >
                        {match.team2}
                      </span>
                    </div>
                  </div>
                );
              })}
          </div>
        ))}
      </div>
    </div>
  );
}

export default GroupStage;
