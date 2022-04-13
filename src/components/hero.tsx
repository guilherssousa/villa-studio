import { FunctionComponent } from "preact";

const Hero: FunctionComponent = () => {
  return (
    <main
      className="w-full h-[80vh] flex justify-center flex-col items-center bg-no-repeat bg-center mix-blend-overlay"
      style={{
        backgroundImage:
          "url(/bg.jpg),linear-gradient(to left, rgb(0 0 0 / 50%), rgb(0 0 0 / 0%), rgb(0 0 0 / 50%))",
      }}
    >
      <div className="text-white text-5xl max-w-screen-xl w-full px-8">
        <p className="font-bold">Todo negócio tem uma história.</p>
        <p className="mt-4">Que tal contarmos a sua juntos?</p>

        <a
          href="#storytelling"
          className="block text-xl mt-8 cursor-pointer bg-yellow-600 w-fit rounded-md p-2 px-4"
        >
          Entenda como ter uma marca ajuda a contar histórias &rarr;
        </a>
      </div>
    </main>
  );
};

export default Hero;
