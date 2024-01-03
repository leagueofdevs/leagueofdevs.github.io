import Breadcrumb from "../../components/Breadcrumb";
import Table from "../../components/Table";
import Footer from "../../components/Footer";
import { teams } from "../../utils/constants";

function Results() {
  return (
    <div className="w-full h-full">
      <div className="mx-auto max-w-7xl px-6 text-center lg:px-8 pt-12">
        <Breadcrumb
          previousPath="/"
          previousPathName="Home"
          currentPathName="Resultados"
        />
        <div className="mx-auto max-w-2xl pb-12 ">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Resultados
          </h2>
          <p className="mt-4 text-lg leading-8 text-gray-400">
            Veja os resultados atualizados da Copa Recife de League of Legends!
          </p>
        </div>
        <Table items={teams} />
      </div>
      <Footer />
    </div>
  );
}

export default Results;
