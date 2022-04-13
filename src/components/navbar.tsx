import { FunctionalComponent } from "preact";

const Navbar: FunctionalComponent = () => {
  return (
    <div className="fixed top-0 h-20 w-full z-20">
      <div className="w-full relative h-full text-white">
        <div className="w-full absolute h-full bg-gradient-to-t opacity-50 to-black from-transparent"></div>

        <nav className="max-w-screen-xl mx-auto px-8 relative flex items-center justify-between h-full text-xl">
          <div className=" font-serif text-4xl md:text-5xl">
            <a className="cursor-pointer" href="/">
              V
            </a>
          </div>
          <div className="font-bold">
            <ul className="flex gap-x-8 cursor-pointer">
              <li>
                <a href="#sobre-nos">Sobre Nós</a>
              </li>
              <li>
                <a href="#trabalhos">Trabalhos</a>
              </li>
              <li>
                <a href="#contato">Contato</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
