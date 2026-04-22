import { ThemeProvider } from './ThemeContext';
import CatalogueHeader from "./catalogueheader";
import HeroContent from "./herocontent";
import StatsRow from "./staterow";
import Howitworks from "./howitworks";
import Isitfor from "./isitfor";
import Testimonials from "./testimonial";
import Cta from "./cta";
import Footer from "./footer";

function App() {
  return (
    <ThemeProvider>
      <div className="bg-glow"></div>

      <CatalogueHeader />

      <main>
        <HeroContent />
        <StatsRow />
        <Howitworks />
        <Isitfor />
        <Testimonials />
        <Cta />
      </main>

      <Footer />
    </ThemeProvider>
  );
}

export default App;