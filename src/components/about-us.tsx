import { FunctionalComponent } from "preact";

const AboutUs: FunctionalComponent = () => {
  return (
    <section className="bg-villa" id="sobre-nos">
      <div className="pt-24 max-w-screen-xl mx-auto min-h-screen text-white px-16">
        <h2 className="text-4xl md:text-5xl font-serif">
          Mais que uma agência de Branding.
        </h2>

        <div className="md:flex w-full mt-16 gap-x-8 items-center justify-center">
          <div className="w-4/8 relative z-10">
            <p className="text-lg md:text-2xl font-light">O que fazemos</p>
            <h3 className="font-bold text-2xl md:text-3xl mt-2">
              Construímos relacionamento para marcas.
            </h3>
            <p className="text-base md:text-2xl mt-2">
              Somos especializados em criar identidades que comunicam com seu
              público alvo. Acreditamos que conectar pessoas é fundamental para
              o sucesso do negócio e usamos o visual para potencializar os
              diferenciais.
            </p>
          </div>
          <div className="mt-8 md:mt-0 w-4/8 relative">
            <div className="hidden md:block absolute top-8 right-8 h-72 aspect-video w-auto border-8 border-yellow-600"></div>
            <div className="z-10 relative aspect-video w-full md:h-72 md:w-auto overflow-hidden flex items-center">
              <img
                alt="Construímos relacinament para marcas."
                height="288"
                width="162"
                className="w-full object-fill"
                src="/section-2.webp"
              ></img>
            </div>
          </div>
        </div>

        <h2 className="text-center mt-24 text-4xl font-serif">
          Nossos princípios
        </h2>

        <div className="md:grid grid-cols-3 mt-8 md:mt-16">
          <div>
            <p className="font-serif text-3xl">Personalidade</p>
            <p className="text-base mt-4 leading-6">
              Construção de uma essência única que traga personalidade através
              de uma prposota de Valor e potencialize os diferenciais do produto
              ou serviço oferecido pela marca.
            </p>
          </div>
          <div className="mt-8 md:mt-0">
            <p className="font-serif text-3xl">Compreensão</p>
            <p className="text-base mt-4 leading-6">
              Formas falam e tem sua própria identidade e significados
              diferentes para variados públicos. Vamos entender seu negócio e
              apontar o norte, além da beleza.
            </p>
          </div>
          <div className="mt-8 md:mt-0">
            <p className="font-serif text-3xl">Personalidade</p>
            <p className="text-base mt-4 leading-6">
              Acreditamos que, para que um negócio consiga comunicar bem usando
              usa marca, é necessário ser comunicativo durante seu processo de
              ciração.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
