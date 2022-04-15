import { FunctionalComponent } from "preact";

interface StatProps {
  value: string;
}

const Stat: FunctionalComponent<StatProps> = ({ value, children }) => {
  return (
    <div className="flex items-center justify-center flex-col">
      <div className="relative">
        <div className="relative z-10 text-6xl font-serif">{value}</div>
        <div
          className="-rotate-6 z-0 -skew-x-6 absolute bottom-0 w-[110%] bg-stat bg-statSize h-2/6"
          id="backmark-label"
        />
      </div>
      <div className=" text-center text-2xl font-serif mt-4">{children}</div>
    </div>
  );
};

const Stats: FunctionalComponent = () => {
  return (
    <section className="bg-villa text-white pt-16 pb-36">
      <div className=" max-w-screen-xl w-full mx-auto px-8 flex flex-col items-center justify-center">
        <h2 className="text-4xl font-serif">
          Entenda nosso impacto em números
        </h2>
        <div className="grid grid-cols-3 mt-16">
          <Stat value="36">Clientes atendidos</Stat>
          <Stat value="42">Projetos finalizados</Stat>
          <Stat value="14.5%">dos clientes voltam a trabalhar conosco.</Stat>
        </div>
      </div>
    </section>
  );
};

export default Stats;
