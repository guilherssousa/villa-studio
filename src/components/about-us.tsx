import { FunctionalComponent } from "preact";

const AboutUs: FunctionalComponent = () => {
  return (
    <section className="w-full text-white bg-black py-8">
      <div className="max-w-screen-xl mx-auto p-8 ">
        <div className="lg:flex">
          <div className="lg:w-1/2 lg:sticky top-0 px-2">
            <h2 className="text-4xl lg:text-5xl font-light lg:leading-tight">
              Mais que um estúdio de branding.{" "}
              <strong className="font-bold">
                Somos uma equipe de humanos.
              </strong>
            </h2>
          </div>

          <div className="mt-4 lg:mt-0 lg:w-1/2 px-2">
            <p className="text-2xl">
              No Villa Studio, fazemos mais do que logos para marcas, contamos
              histórias, relacionamentos, experiências e muito mais por meio de
              uma linguagem indispensável: a <strong>linguagem humana</strong>.
            </p>

            <p className="mt-4 text-2xl">
              O diferencial no nsoso processo de criação de marcas está na fase
              de briefing: entender qual a situação do seu negócio, qual seu
              público alvo, seu atual relacionamento com os clientes e quais são
              os seus objetivos com a marca são nossa principal prioridade.
            </p>
          </div>
        </div>
        <div className="lg:flex mt-16">
          <div className="lg:w-1/2 lg:sticky top-0 px-2">
            <h2 className="text-4xl lg:text-5xl font-light lg:leading-tight">
              Acreditamos que <strong>todos</strong> podem ter{" "}
              <strong>uma boa identidade.</strong>
            </h2>
          </div>

          <div className="mt-8 lg:w-1/2 px-2">
            <p className="text-2xl">
              O desenvolvimento profissional da identidade de uma marca
              certamente é um luxo que poucos negócios acabam tendo acesso. É
              comumente associado por um processo demorado, custoso e arriscado.
            </p>

            <p className="mt-4 text-2xl">
              Aqui na Villa temos uma equipe especializada em pequenos negócios,
              onde realizamos uma consultoria completa focada para pessas
              semnoção do processo de criação de identidade.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
