import { HashRouter as Router, Route, Switch } from "react-router-dom";
import About from "../components/About/About";
import Activity from "../components/Activity";
import Contact from "../components/Contact";
import CustomNavBar from "../components/CustomNavBar";
import Portfolio from "../components/Photography";
import Project from "../components/Project";
import Resume from "../components/Resume";
import "./App.css";
import Aos from "aos";
import "aos/dist/aos.css";
import Academic from "../components/Academic.";
import ResearchExperience from "../components/ResearchExperience";

function App() {
  Aos.init();
  return (
    // <Fade>
    <Switch>
      <Route path="/" exact render={() => <CustomNavBar item="/" />} />
      <Route path="/academic" component={Academic} />
      <Route path="/research-experience" component={ResearchExperience} />
      <Route path="/contact" component={Contact} />
      <Route path="/resume" component={Resume} />
      <Route path="/about" component={About} />
      <Route path="/photography" component={Portfolio} />
      <Route path="/project" component={Project} />
      <Route path="/activity" component={Activity} />
    </Switch>
    // </Fade>
  );
}

export default App;
