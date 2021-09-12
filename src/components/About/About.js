import { ABOUT } from "../../utils/constants";
import CustomNavBar from "../CustomNavBar";
import AboutMe from "./AboutMe";

const About = () => {
  return (
    <>
      <CustomNavBar item={ABOUT} />
      <section id="about" class="about section-show">
        <AboutMe />
        {/* <Count /> */}

        {/* <Interest /> */}
        {/* <Skill /> */}
        {/* <Testimonial /> */}
      </section>
    </>
  );
};

export default About;
