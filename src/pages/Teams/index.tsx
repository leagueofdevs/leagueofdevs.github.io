import PlaceholderLogo from "../../assets/team-logos/placeholder.jpg";
import { teams } from "../../utils/constants";
import { Link } from "react-router-dom";

function Teams() {
  return (
    <div className="w-full h-full">
      <div className="mx-auto max-w-7xl px-6 text-center lg:px-8 py-12">
        <nav className="text-white flex justify-start w-full gap-x-1 mb-6">
          <Link to="/" className="hover:underline">
            Home
          </Link>
          / <span className="font-bold">Equipes</span>
        </nav>
        <div className="mx-auto max-w-2xl pb-12 ">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Equipes
          </h2>
          <p className="mt-4 text-lg leading-8 text-gray-400">
            Conheça as equipes inscritas na Copa Recife de League of Legends!
          </p>
        </div>
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
              {team.members.map((member) => (
                <p key={member} className="text-sm leading-6 text-gray-400">
                  {member}
                </p>
              ))}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Teams;
