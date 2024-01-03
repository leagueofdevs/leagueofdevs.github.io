import PlaceholderLogo from "../../assets/team-logos/placeholder.jpg";
import { useState } from "react";

function GroupStage() {
  const rounds = Array.from({ length: 6 }, (_, index) => index + 1);
  const [showNote, setShowNote] = useState(true);

  const handleCloseNote = () => {
    setShowNote(false);
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
              A ser definido. Os confrontos serão definidos em breve, fique
              ligado!
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
        {rounds.map((round) => (
          <div
            key={round}
            className="round-container bg-gray-800 p-4 rounded-lg mb-6 w-full transform transition-transform duration-300 hover:scale-105"
          >
            <h4 className="round-title text-white font-bold text-xl mb-4">
              Rodada {round}
            </h4>
            {Array.from({ length: 5 }).map((_, index) => (
              <div
                key={index}
                className="match-card bg-gray-700 p-4 rounded-md flex items-center justify-between mb-2"
              >
                <div className="team-container flex items-center">
                  <img
                    src={PlaceholderLogo}
                    alt={`Team logo ${index}`}
                    className="rounded-full h-10 w-10 mr-2 blur-sm"
                  />
                  <span className="team-name text-white">TBD</span>
                </div>
                <span className="vs text-white mx-2">X</span>
                <div className="team-container flex items-center">
                  <img
                    src={PlaceholderLogo}
                    alt={`Team logo ${index + 1}`}
                    className="rounded-full h-10 w-10 mr-2 blur-sm"
                  />
                  <span className="team-name text-white">TBD</span>
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
