import { Route, Switch } from "react-router-dom";
import About from "../components/About/About";
import Activity from "../components/Activity";
import CustomNavBar from "../components/CustomNavBar";
import Project from "../components/Projects/Project";
import "./App.css";
import Aos from "aos";
import "aos/dist/aos.css";
import Academic from "../components/Academic.";
import ResearchExperience from "../components/ResearchExperience";
import Experience from "../components/Experience";
import Gallery from "../components/Gallery";
import Photography from "../components/Photography";
import ProjectImages from "../components/Projects/projectImages";
import Achievements from "../components/Achievement";
import {
  ABOUT,
  ACADEMIC,
  ART_PHOTOGRAPHY,
  AWARDS_ACHIEVEMENTS,
  EXPERIENCES,
  EXTRA_CURRICULAR_ACTIVITIES,
  GALLERY,
  HOME,
  PROJECTS,
  RESEARCH_EXPERIENCES,
} from "../utils/constants";

function App() {
  Aos.init();
  return (
    <Switch>
      <Route path={HOME} exact render={() => <CustomNavBar item={HOME} />} />
      <Route path={ACADEMIC} component={Academic} />
      <Route path={RESEARCH_EXPERIENCES} component={ResearchExperience} />
      <Route path={EXPERIENCES} component={Experience} />
      <Route path={GALLERY} component={Gallery} />
      <Route path={AWARDS_ACHIEVEMENTS} component={Achievements} />
      <Route path={ABOUT} component={About} />
      <Route path={ART_PHOTOGRAPHY} component={Photography} />
      <Route path={PROJECTS} exact component={Project} />
      <Route path={`${PROJECTS}/:projectName}`} component={ProjectImages} />
      <Route path={EXTRA_CURRICULAR_ACTIVITIES} component={Activity} />
    </Switch>
  );
}

export default App;
