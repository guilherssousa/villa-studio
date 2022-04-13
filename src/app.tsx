import Hero from "./components/hero";
import AboutUs from "./components/about-us";
import SectionDivider from "./components/section-divider";

export function App() {
  return (
    <div className="min-h-screen">
      <Hero />
      <AboutUs />
      <SectionDivider image="/section.jpg" />
      <SectionDivider image="/section-2.jpg" />
    </div>
  );
}
