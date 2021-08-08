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
        <h2 data-aos="fade-left">
          I'm a passionate <span>{data.profession}</span> from Bangladesh
        </h2>

        <nav class="nav-menu d-none d-lg-block" data-aos="fade-up">
          <ul>
            <li class={props.item == "/" ? "active" : ""}>
              <Link to="/">Home</Link>
            </li>
            <li class={props.item == "/about" ? "active" : ""}>
              <Link to="/about">About</Link>
            </li>
            <li class={props.item == "/resume" ? "active" : ""}>
              <Link to="/resume">Resume</Link>
            </li>

            <li class={props.item == "/project" ? "active" : ""}>
              <Link to="/project">Projects</Link>
            </li>
            <li class={props.item == "/activity" ? "active" : ""}>
              <Link to="/activity">Activities</Link>
            </li>

            <li class={props.item == "/photography" ? "active" : ""}>
              <Link to="/photography">Photography</Link>
            </li>

            <li class={props.item == "/contact" ? "active" : ""}>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>

        <div class="social-links" data-aos="fade-down">
          <a href="#" class="twitter">
            <i class="icofont-twitter"></i>
          </a>
          <a href="#" class="facebook">
            <i class="icofont-facebook"></i>
          </a>
          <a href="#" class="instagram">
            <i class="icofont-instagram"></i>
          </a>
          <a href="#" class="google-plus">
            <i class="icofont-skype"></i>
          </a>
          <a href="#" class="linkedin">
            <i class="icofont-linkedin"></i>
          </a>
        </div>
      </div>
    </header>
  );
};

export default CustomNavBar;
