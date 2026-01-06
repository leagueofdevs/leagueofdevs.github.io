import { useState, useEffect } from "react";
import Breadcrumb from "../../components/Breadcrumb";
import TeamsList from "../../components/TeamsList";
import Footer from "../../components/Footer";
import { fetchTournamentData } from "../../services/dataService";
import { Team } from "../../types";

function Teams() {
  const [teams, setTeams] = useState<Team[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchTournamentData()
      .then((data) => {
        setTeams(data.teams);
      })
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="w-full h-full">
      <div className="mx-auto max-w-7xl px-6 text-center lg:px-8 pt-12">
        <Breadcrumb
          previousPath="/"
          previousPathName="Home"
          currentPathName="Equipes"
        />
        <div className="mx-auto max-w-2xl pb-12 ">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Equipes
          </h2>
          <p className="mt-4 text-lg leading-8 text-gray-400">
            Conheça as equipes inscritas na Copa Recife de League of Legends!
          </p>
        </div>
        
        {loading ? (
            <div className="flex justify-center items-center py-20">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-500"></div>
            </div>
        ) : (
            <TeamsList teams={teams} />
        )}
      </div>
      <Footer />
    </div>
  );
}

export default Teams;
