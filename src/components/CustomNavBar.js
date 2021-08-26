import { Link } from "react-router-dom";
import data from "../utls/data";

const CustomNavBar = (props) => {
  return (
    <header
      id="header"
      class={props.item === "/" ? "header-tops" : "header-tops header-top"}
    >
      <div class="container">
        <h1 data-aos="fade-right">
          <Link to="/">{data.name}</Link>
        </h1>
        <h2 data-aos="fade-left">{data.profession}</h2>

        <nav class="nav-menu d-none d-lg-block" data-aos="fade-up">
          <ul>
            <li class={props.item == "/" ? "active" : ""}>
              <Link to="/">Home</Link>
            </li>
            <li class={props.item == "/academic" ? "active" : ""}>
              <Link to="/academic">Academic</Link>
            </li>
            <li class={props.item == "/research-experience" ? "active" : ""}>
              <Link to="/research-experience">Research Experience</Link>
            </li>

            <li class={props.item == "/projects" ? "active" : ""}>
              <Link to="/projects">Projects</Link>
            </li>

            <li class={props.item == "/experiences" ? "active" : ""}>
              <Link to="/experiences">Experiences</Link>
            </li>

            <li class={props.item == "/art-photography" ? "active" : ""}>
              <Link to="/art-photography">Photography</Link>
            </li>

            <li class={props.item == "/award-achievements" ? "active" : ""}>
              <Link to="/award-achievements">Achievements</Link>
            </li>

            <li class={props.item == "/activity" ? "active" : ""}>
              <Link to="/activity">Extra Curricular</Link>
            </li>

            <li class={props.item == "/gallery" ? "active" : ""}>
              <Link to="/gallery">Gallery</Link>
            </li>

            {/* <li class={props.item == "/contact" ? "active" : ""}>
              <Link to="/contact">Contact</Link>
            </li> */}

            <li class={props.item == "/about" ? "active" : ""}>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </nav>

        <div class="social-links" data-aos="fade-down">
          <a href={data.twitter} target="blank" class="twitter">
            <i class="icofont-twitter"></i>
          </a>
          <a href={data.facebook} target="blank" class="facebook">
            <i class="icofont-facebook"></i>
          </a>
          <a href={data.instagram} target="blank" class="instagram">
            <i class="icofont-instagram"></i>
          </a>
          <a href={data.skype} target="blank" class="google-plus">
            <i class="icofont-skype"></i>
          </a>
          <a href={data.linkedIn} target="blank" class="linkedin">
            <i class="icofont-linkedin"></i>
          </a>
        </div>
      </div>
    </header>
  );
};

export default CustomNavBar;
