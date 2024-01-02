import TVXLogo from "../../assets/team-logos/TVX.jpg";
import SHGLogo from "../../assets/team-logos/SHG.jpg";
import ETSLogo from "../../assets/team-logos/ETS.png";
import { Link } from "react-router-dom";
import Table from "../../components/Table";

function Results() {
  const tableItems = [
    {
      teamName: "CRV",
      victories: 0,
      loses: 0,
      gamesPlayed: 0,
    },
    {
      teamName: "ETS",
      logoUrl: ETSLogo,
      victories: 0,
      loses: 0,
      gamesPlayed: 0,
    },
    {
      teamName: "SHG",
      logoUrl: SHGLogo,
      victories: 0,
      loses: 0,
      gamesPlayed: 0,
    },
    {
      teamName: "TVX",
      logoUrl: TVXLogo,
      victories: 0,
      loses: 0,
      gamesPlayed: 0,
    },
  ];

  return (
    <div className="w-full h-full">
      <div className="mx-auto max-w-7xl px-6 text-center lg:px-8 py-12">
        <nav className="text-white flex justify-start w-full gap-x-1 mb-6">
          <Link to="/" className="hover:underline">
            Home
          </Link>
          / <span className="font-bold">Resultados</span>
        </nav>
        <div className="mx-auto max-w-2xl pb-12 ">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Resultados
          </h2>
          <p className="mt-4 text-lg leading-8 text-gray-400">
            Veja os resultados atualizados da Copa Recife de League of Legends!
          </p>
        </div>
        <Table items={tableItems} />
      </div>
    </div>
  );
}

export default Results;