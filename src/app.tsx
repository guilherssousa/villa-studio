import Navbar from "./components/navbar";
import Hero from "./components/hero";
import AboutUs from "./components/about-us";
import Stats from "./components/stats";
import Contact from "./components/contact";

export function App() {
  return (
    <div className="min-h-screen antialised scroll-smooth">
      <Navbar />
      <Hero />
      <AboutUs />
      <Stats />
      <Contact />
    </div>
  );
}
