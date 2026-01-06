import { useState, useEffect } from "react";
import Breadcrumb from "../../components/Breadcrumb";
import GroupStage from "../../components/GroupStage";
import Table from "../../components/Table";
import Footer from "../../components/Footer";
import { fetchTournamentData } from "../../services/dataService";
import { Team, Round } from "../../types";

function Matches() {
  const [teams, setTeams] = useState<Team[]>([]);
  const [rounds, setRounds] = useState<Round[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState<'swiss' | 'playoffs'>('swiss');

  useEffect(() => {
    fetchTournamentData()
      .then((data) => {
        setTeams(data.teams);
        setRounds(data.rounds);
      })
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, []);

  const swissRounds = rounds.filter(r => r.name?.startsWith("Rodada"));
  const playoffRounds = rounds.filter(r => !r.name?.startsWith("Rodada"));

  return (
    <div className="w-full h-full">
      <div className="mx-auto max-w-7xl px-6 text-center lg:px-8 pt-12">
        <Breadcrumb
          previousPath="/"
          previousPathName="Home"
          currentPathName="Confrontos"
        />
        <div className="mx-auto max-w-2xl pb-12 ">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Confrontos
          </h2>
          <p className="mt-4 text-lg leading-8 text-gray-400">
            Veja os confrontos e resultados da Copa Recife de League of Legends!
          </p>
        </div>
        
        {loading ? (
            <div className="flex justify-center items-center py-20">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-500"></div>
            </div>
        ) : (
            <div className="flex flex-col gap-y-8 w-full">
              
              <div className="flex space-x-6 border-b border-gray-700 mb-4 justify-center">
                  <button
                    className={`pb-2 px-4 font-bold text-lg transition-colors focus:outline-none ${activeTab === 'swiss' ? 'text-indigo-400 border-b-2 border-indigo-400' : 'text-gray-400 hover:text-white'}`}
                    onClick={() => setActiveTab('swiss')}
                  >
                    Fase Suíça
                  </button>
                  <button
                    className={`pb-2 px-4 font-bold text-lg transition-colors focus:outline-none ${activeTab === 'playoffs' ? 'text-indigo-400 border-b-2 border-indigo-400' : 'text-gray-400 hover:text-white'}`}
                    onClick={() => setActiveTab('playoffs')}
                  >
                    Mata-mata
                  </button>
              </div>

              {activeTab === 'swiss' ? (
                  <GroupStage rounds={swissRounds} teams={teams} title="Fase Suíça" />
              ) : (
                  <GroupStage rounds={playoffRounds} teams={teams} title="Mata-mata" />
              )}
              
              <Table items={teams} />
            </div>
        )}
      </div>
      <Footer />
    </div>
  );
}

export default Matches;
