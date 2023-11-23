import IreliaWallpaper from "../../assets/irelia-wallpaper.jpg";

export default function Home() {
  return (
    <div className="relative h-screen">
      <img
        src={IreliaWallpaper}
        alt="Irelia Wallpaper"
        className="w-screen h-screen object-cover object-center"
      />
      <div className="absolute inset-0 bg-black opacity-50 flex items-center justify-center">
        <div className="flex flex-col gap-y-6 items-center">
          <span className="text-white text-4xl font-bold">
            COPA RECIFE DE LEAGUE OF LEGENDS
          </span>
          <span className="text-white text-xl">Em breve...</span>
        </div>
      </div>
    </div>
  );
}
