import Navbar from "./components/navbar";
import Hero from "./components/hero";
import AboutUs from "./components/about-us";

export function App() {
  return (
    <div className="min-h-screen bg-villa antialised scroll-smooth">
      <Navbar />
      <Hero />
      <AboutUs />
    </div>
  );
}
