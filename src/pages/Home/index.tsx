import ZedWallpaper from "../../assets/zed-wallpaper.jpg";
import LowQualityZedWallpaper from "../../assets/low-quality-zed-wallpaper.jpeg";
import {
  TrophyIcon,
  ShieldCheckIcon,
  UsersIcon,
} from "@heroicons/react/24/outline";
import { SVGProps, useRef, useState } from "react";
import { JSX } from "react/jsx-runtime";
import QuadriframeLogo from "../../assets/quadriframe-logo.png";
import CopaRecifeLogo from "../../assets/copa-recife-logo.png";
import { Link } from "react-router-dom";

function Home() {
  const primaryFeatures = [
    {
      name: "Domine os Campos de Batalha",
      description:
        "As inscrições para a Copa Recife de League of Legends começam em 03/12/2023. Não perca a oportunidade de mostrar suas habilidades no universo competitivo. Reúna sua equipe, consulte o regulamento e não perca a chance de se tornar um campeão!",
      href: "https://docs.google.com/forms/d/e/1FAIpQLSeAhNCcrLeccb5o26AdtojU9yVqAeGOMEjGoka8eMeEzss0Wg/viewform?usp=sf_link",
      buttonText: "Inscreva-se",
      icon: TrophyIcon,
    },
    {
      name: "Quem Pode Participar",
      description:
        "Todos são bem-vindos! Não importa se você é um jogador experiente ou se está começando agora no universo de Summoner's Rift. Na Copa Recife, a diversão e a competição andam lado a lado. Envolva-se, faça novos amigos e mergulhe na emoção de disputar partidas épicas!",
      href: "https://docs.google.com/document/d/1jzkpLS9lJo9ZsQtC4ZmpgbJ33VHD1CrmiPXZLHGtGJs/edit?pli=1",
      buttonText: "Veja o Regulamento Oficial",
      icon: UsersIcon,
    },
    {
      name: "Proteção para Monochampions",
      description:
        "Entendemos que cada jogador tem seu próprio estilo único. Se você é um monochampion dedicado, oferecemos condições especiais para você! Queremos que todos os monochampions se sintam valorizados e apoiados ao entrarem no cenário competitivo do nosso amado LoLzinho. Venha mostrar suas habilidades e celebrar a diversidade de estratégias no campo de batalha!",
      href: "#",
      icon: ShieldCheckIcon,
    },
  ];

  const footerNavigation = {
    social: [
      {
        name: "Instagram",
        href: "https://www.instagram.com/coparecifeleagueoflegends",
        icon: (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
          <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
            <path
              fillRule="evenodd"
              d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
              clipRule="evenodd"
            />
          </svg>
        ),
      },
      {
        name: "Twitter",
        href: "https://twitter.com/CopaRecifedeLoL",
        icon: (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
          <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
            <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
          </svg>
        ),
      },
    ],
  };

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
              <button className="text-base lg:text-lg text-white font-bold px-4 rounded hover:text-indigo-400">
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLSeAhNCcrLeccb5o26AdtojU9yVqAeGOMEjGoka8eMeEzss0Wg/viewform?usp=sf_link"
                  target="_blank"
                  rel="noreferrer"
                >
                  Inscreva-se
                </a>
              </button>
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
                to="/resultados"
                className="text-base lg:text-lg text-white font-bold px-4 rounded hover:text-indigo-400"
              >
                Resultados
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
        <div className="flex flex-col gap-y-12 mx-auto mt-8 max-w-7xl px-6 sm:mt-16 lg:px-8 justify-center items-center mb-16 lg:mb-24">
          <h2 className="text-center text-lg font-semibold leading-8 text-white">
            Patrocinadores
          </h2>
          <div className="flex flex-col gap-y-12 justify-center items-center gap-x-12 lg:flex-row">
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
        <footer aria-labelledby="footer-heading" className="relative">
          <h2 id="footer-heading" className="sr-only">
            Footer
          </h2>
          <div className="mx-auto max-w-7xl px-6 pb-8 pt-4 lg:px-8">
            <div className="border-t border-white/10 pt-8 md:flex md:items-center md:justify-between">
              <div className="flex space-x-6 md:order-2">
                {footerNavigation.social.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-gray-500 hover:text-gray-400"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span className="sr-only">{item.name}</span>
                    <item.icon className="h-6 w-6" aria-hidden="true" />
                  </a>
                ))}
              </div>
              <div className="flex flex-col">
                <p className="mt-8 text-xs leading-5 text-gray-400 md:order-1 md:mt-0">
                  Esta competição não é afiliada/patrocinada pela Riot Games,
                  Inc. ou League of Legends/Teamfight Tactics Esports.
                </p>
                <p className="mt-8 text-xs leading-5 text-gray-400 md:order-1 md:mt-4">
                  &copy; 2024 Copa Recife de League of Legends. Todos os
                  direitos reservados.
                </p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default Home;
