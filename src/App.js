import Navbar from "./components/Navbar";
import AheadApp from "./components/AheadApp";
import BuiltOut from "./components/BuiltOut";
import DoesThis from "./components/DoesThis";
import EqBeatsIQ from "./reUseableComponents/EqBeats";
import Footer from "./components/Footer";
import LetYour from "./components/LetYour";
import OpenVacancies from "./components/OpenVacancies";
import WeTake from "./components/WeTake";
import WorkWithUs from "./components/WorkWithUs";
import WrongWith from "./components/WrongWith";
import "./index.css";

//animations
import FirstAnimation from "./animations/FirstAnimation";
import SecondAnimation from "./animations/SecondAnimation";
import ScrollAnimation from "./animations/ScrollAnimation";

function App() {

  return (
    <div className="app-container">
      <ScrollAnimation/>
      <Navbar />
      <FirstAnimation />
      <AheadApp />
      <EqBeatsIQ
        first="EQ beats"
        second="People with high emotional intelligence (EQ) live more fulfilled lives. They tend to be happier and have healthier relationships."
        third="They are more successful in their purcuits and make for inspiring leaders. According to science, they earn $29k a year."
      />
      <DoesThis />
      <BuiltOut />
      <SecondAnimation />
      <WrongWith />
      <EqBeatsIQ
        first="Be the best you with EQ"
        second="Not having your own emotions under control might be holding you back."
        third="Additionlly, not understanding those of others stops you from being parent, friend you can be."
      />
      <LetYour />
      <WeTake />
      <WorkWithUs />
      <OpenVacancies />
      <Footer />
    </div>
  );
}

export default App;
