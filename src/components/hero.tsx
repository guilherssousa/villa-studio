import { FunctionComponent } from "preact";

const Hero: FunctionComponent = () => {
  return (
    <main className="relative w-full cover bg-hero bg-cover md:bg-auto h-[60vh] md:h-[80vh] flex justify-end md:justify-center flex-col items-center bg-repeat md:bg-center bg-right">
      <div className="absolute inset-0 w-full h-full bg-gradient-to-t md:bg-gradient-to-r opacity-80 md:opacity-30 from-black to-transparent"></div>
      <div className="text-white max-w-screen-xl w-full px-16 z-10 font-serif">
        <div className="mb-8 md:mb-0 md:w-4/6">
          <p className="text-4xl md:text-6xl">
            Todo negócio tem uma história para marcar.
          </p>
          <p className="text-3xl md:text-5xl mt-4">Vamos criar a sua marca?</p>
        </div>
      </div>
    </main>
  );
};

export default Hero;
