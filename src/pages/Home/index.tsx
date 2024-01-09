import ZedWallpaper from "../../assets/zed-wallpaper.jpg";
import LowQualityZedWallpaper from "../../assets/low-quality-zed-wallpaper.jpeg";
import { TrophyIcon, ShieldCheckIcon, FireIcon } from "@heroicons/react/24/outline";
import { useRef, useState } from "react";
import CopaRecifeLogo from "../../assets/copa-recife-logo.png";
import SAGALogo from "../../assets/sponsors/saga-logo.png";
import CoffeeGankLogo from "../../assets/sponsors/coffee-gank-logo.png";
import QuadriframeLogo from "../../assets/sponsors/quadriframe-logo.png";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer";

function Home() {
  const primaryFeatures = [
    {
      name: "Sintonize na Ação ao Vivo",
      description:
        "As inscrições para a Copa Recife de League of Legends já se encerraram, mas a ação está apenas começando! Sintonize no nosso canal da Twitch a partir do dia 6 de janeiro de 2024 às 11h da manhã para testemunhar as batalhas épicas que definirão o grande campeão. Prepare-se para a emoção,  junte-se a nós ao vivo na Twitch!",
      href: "https://www.twitch.tv/coparecifedelol",
      buttonText: "Assista ao Vivo",
      icon: TrophyIcon,
    },
    {
      name: "Confira o Regulamento",
      description:
        "Queremos que você esteja por dentro de todas as estratégias, regras e reviravoltas emocionantes. Não deixe passar a oportunidade de entender os detalhes que fazem cada partida ser única. Dê uma olhada em nosso Regulamento Oficial, mergulhe nas nuances do torneio e esteja totalmente preparado para a ação. A vitória começa com o conhecimento!",
      href: "https://docs.google.com/document/d/1jzkpLS9lJo9ZsQtC4ZmpgbJ33VHD1CrmiPXZLHGtGJs/edit?pli=1",
      buttonText: "Explore o Regulamento Agora",
      icon: ShieldCheckIcon,
    },
    {
      name: "Conheça a SAGA",
      description:
        "Adentre o universo extraordinário da SAGA, nossa parceira de excelência digital. Sinta a emoção das semifinais e da final presencial em 14 de janeiro, imerso na atmosfera única que só a SAGA pode proporcionar! Descubra o poder da SAGA, a maior comunidade criativa da América Latina. Com 200 mil talentos formados, a essência da arte digital. Acesse o site e conheça mais sobre a SAGA!",
      href: "https://www.saga.com.br/",
      buttonText: "Conheça a SAGA",
      icon: FireIcon,
    }
  ];

  const [imageLoaded, setImageLoaded] = useState(false);

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  const aboutDiv = useRef(null);

  const handleAboutDivScroll = () => {
    if (aboutDiv.current) {
      const rect = (aboutDiv.current as any).getBoundingClientRect();
      window.scrollTo({
        top: rect.top + window.scrollY,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="w-full h-full">
      <div className="relative h-screen">
        <img
          src={LowQualityZedWallpaper}
          alt="Zed Wallpaper Low Quality"
          className="w-screen h-screen object-cover object-center blur-sm"
          style={{ filter: "blur(20px)" }}
          onLoad={handleImageLoad}
          draggable={false}
        />
        <img
          src={ZedWallpaper}
          alt="Zed Wallpaper"
          className={`absolute inset-0 w-full h-full object-cover object-center ${
            imageLoaded ? "opacity-100" : "opacity-0"
          } transition-opacity duration-500 ease-in-out`}
          onLoad={handleImageLoad}
          draggable={false}
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 opacity-100 flex items-center justify-center">
          <span className="text-white text-2xl px-4 font-bold text-center sm:text-4xl">
            <img
              className="h-36 sm:h-64 object-contain animate-pulse"
              src={CopaRecifeLogo}
              alt="Logo da Copa Recife"
              draggable={false}
            />
            <div className="flex mt-8 gap-x-4 justify-center items-center flex-col">
              <button
                className="text-base lg:text-lg text-white font-bold px-4 rounded hover:text-indigo-400"
                onClick={handleAboutDivScroll}
              >
                Saiba Mais
              </button>
              <Link
                to="/equipes"
                className="text-base lg:text-lg text-white font-bold px-4 rounded hover:text-indigo-400"
              >
                Equipes
              </Link>
              <Link
                to="/confrontos"
                className="text-base lg:text-lg text-white font-bold px-4 rounded hover:text-indigo-400"
              >
                Confrontos
              </Link>
            </div>
          </span>
        </div>
        <div ref={aboutDiv} className="mb-16 lg:mb-24" />
        <div className="mx-auto mb-16 max-w-7xl px-6 lg:px-8 lg:mb-24">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-base font-semibold leading-7 text-indigo-400">
              Seja Bem-Vindo à Copa Recife de League of Legends!
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Na Copa Recife, estamos comprometidos em proporcionar uma
              experiência inclusiva e divertida para todos os participantes,
              independentemente do nível de habilidade ou do número de campeões
              em seu repertório.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
              {primaryFeatures.map((feature) => (
                <div key={feature.name} className="flex flex-col">
                  <dt className="text-base font-semibold leading-7 text-white">
                    <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-500">
                      <feature.icon
                        className="h-6 w-6 text-white"
                        aria-hidden="true"
                      />
                    </div>
                    {feature.name}
                  </dt>
                  <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-gray-300">
                    <p className="flex-auto">{feature.description}</p>
                    {feature.buttonText && (
                      <p className="mt-6">
                        <a
                          href={feature.href}
                          className="text-sm font-semibold leading-6 text-indigo-400"
                          target="_blank"
                          rel="noreferrer"
                        >
                          {feature.buttonText} <span aria-hidden="true">→</span>
                        </a>
                      </p>
                    )}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
        <div className="flex flex-col gap-y-12 mx-auto mt-8 max-w-7xl px-6 sm:mt-16 lg:px-8 justify-center items-center">
          <h2 className="text-center text-lg font-semibold leading-8 text-white">
            Patrocinadores
          </h2>
          <img
            className="max-h-28 lg:max-h-36 object-contain hover:opacity-50 transition-opacity duration-300 cursor-pointer"
            src={SAGALogo}
            alt="Logo da SAGA"
            draggable={false}
            onClick={() => {
              window.open("https://www.instagram.com/escolasaga/", "_blank");
            }}
          />
          <div className="flex flex-col gap-y-12 justify-center items-center gap-x-12 lg:flex-row">
            <img
              className="max-h-28 object-contain hover:opacity-50 transition-opacity duration-300 cursor-pointer"
              src={CoffeeGankLogo}
              alt="Logo do Coffee Gank"
              draggable={false}
              onClick={() => {
                window.open("https://www.instagram.com/coffee_gank/", "_blank");
              }}
            />
            <img
              className="max-h-12 object-contain hover:opacity-50 transition-opacity duration-300 cursor-pointer"
              src={QuadriframeLogo}
              alt="Logo do Quadriframe"
              draggable={false}
              onClick={() => {
                window.open("https://www.quadriframe.com.br/", "_blank");
              }}
            />
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default Home;
