import Footer from "./components/Footer";
import GridView from "./components/GridView";
import Header from "./components/Header";
import HeroBanner from "./components/HeroBanner";
import NewEvent from "./components/NewEvent";
import OnlyBest from "./components/OnlyBest";
import OurStory from "./components/OurStory";
import Testimonial from "./components/Testimonial";

function App() {
  return (
    <>
      <Header />
      <HeroBanner />
      <OurStory />
      <OnlyBest />
      <GridView />
      <Testimonial />
      <NewEvent />
      <Footer />
    </>
  );
}

export default App;
