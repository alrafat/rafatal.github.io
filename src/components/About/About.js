import CustomNavBar from "../CustomNavBar";
import AboutMe from "./AboutMe";
import Count from "./Count";
import Interest from "./Interest";
import Skill from "./Skill";
import Testimonial from "./Testimonial";

const About = () => {
  return (
    <>
      <CustomNavBar item="/about" />
      <section id="about" class="about section-show">
        <AboutMe />
        {/* <Count /> */}

        <Interest />
        <Skill />
        {/* <Testimonial /> */}
      </section>
    </>
  );
};

export default About;
