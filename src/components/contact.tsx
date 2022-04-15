import { FunctionalComponent } from "preact";

const Contact: FunctionalComponent = () => {
  return (
    <div className="bg-villa text-white">
      <div className="max-w-screen-xl mx-auto min-h-[60vh] pb-24">
        <div className="flex items-center justify-center flex-col">
          <h1 className="text-4xl font-serif">
            Vamos transformar sua ideia em realidade?
          </h1>

          <form className="flex flex-col justify-center mt-8">
            <input
              type="text"
              placeholder="Nome da empresa"
              name="name"
              id="name"
              className="mt-6 w-96 bg-villa ring-white ring-2 p-2 rounded-md outline-none focus:ring-yellow-600"
            />
            <input
              type="email"
              placeholder="Email de contato"
              name="email"
              id="email"
              className="mt-6 w-96 bg-villa ring-2 ring-white p-2 rounded-md outline-none focus:ring-yellow-600"
            />
            <textarea
              placeholder="Descreva sua ideia..."
              name="text"
              id="text"
              className="mt-6 w-96 bg-villa ring-white ring-2 p-2 rounded-md outline-none focus:ring-yellow-600 h-36"
            />

            <button
              type="submit"
              className="mt-4 hover:bg-yellow-500 bg-yellow-600 py-4 rounded-md"
            >
              <span className="text-white font-bold">Enviar</span>
            </button>
          </form>

          <div className="font-serif mt-16 w-full flex flex-col items-center justify-center">
            <p className="text-2xl">
              Você também pode nos encontrar nas redes sociais:
            </p>
            <ul className="mt-6 list-none flex text-lg w-[60%] justify-between cursor-pointer">
              <li>Instagram</li>
              <li>Behance</li>
              <li>Dribble</li>
              <li>Facebook</li>
              <li>Twitter</li>
            </ul>

            <p className="text-2xl mt-6">
              Ou entrar em contato via email:
              <span className="underline text-yellow-400 ml-2">
                ola@villastudio.com.br
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
