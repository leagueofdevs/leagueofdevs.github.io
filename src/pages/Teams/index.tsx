import TeamsList from "../../components/TeamsList";
import Footer from "../../components/Footer";
import { Link } from "react-router-dom";
import { teams } from "../../utils/constants";

function Teams() {
  return (
    <div className="w-full h-full">
      <div className="mx-auto max-w-7xl px-6 text-center lg:px-8 pt-12">
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
        <TeamsList teams={teams} />
      </div>
      <Footer />
    </div>
  );
}

export default Teams;
