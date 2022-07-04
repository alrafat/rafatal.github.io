import { Link } from "react-router-dom";
import data from "../utils/data";
import {
  HOME,
  ACADEMIC,
  AWARDS_ACHIEVEMENTS,
  EXPERIENCES,
  EXTRA_CURRICULAR_ACTIVITIES,
  RESEARCH_EXPERIENCES,
  ABOUT,
  GALLERY,
  PROJECTS,
  ART_PHOTOGRAPHY,
} from "../utils/constants";

const CustomNavBar = (props) => {
  console.log(props.item);
  return (
    <header
      id="header"
      class={props.item === HOME ? "header-tops" : "header-tops header-top"}
    >
      <div class="container" style={{ overflow: "hidden" }}>
        <h1 data-aos="fade-right">
          <Link to={HOME}>{data.name}</Link>
        </h1>
        <h2 data-aos="fade-left">{data.profession}</h2>

        <nav class="nav-menu d-none d-lg-block" data-aos="fade-up">
          <ul>
            <li class={props.item === HOME ? "active" : ""}>
              <Link to={HOME}>Home</Link>
            </li>
            <li class={props.item === ACADEMIC ? "active" : ""}>
              <Link to={ACADEMIC}>Academic</Link>
            </li>
            <li class={props.item === RESEARCH_EXPERIENCES ? "active" : ""}>
              <Link to={RESEARCH_EXPERIENCES}>Research Experience</Link>
            </li>

            <li class={props.item === PROJECTS ? "active" : ""}>
              <Link to={PROJECTS}>Projects</Link>
            </li>

            <li class={props.item === EXPERIENCES ? "active" : ""}>
              <Link to={EXPERIENCES}>Experiences</Link>
            </li>

            <li class={props.item === ART_PHOTOGRAPHY ? "active" : ""}>
              <Link to={ART_PHOTOGRAPHY}>Art Photography</Link>
            </li>

            <li class={props.item === AWARDS_ACHIEVEMENTS ? "active" : ""}>
              <Link to={AWARDS_ACHIEVEMENTS}>Awards and Achievements</Link>
            </li>

            <li
              class={props.item === EXTRA_CURRICULAR_ACTIVITIES ? "active" : ""}
            >
              <Link to={EXTRA_CURRICULAR_ACTIVITIES}>
                Extra-Curricular Activities
              </Link>
            </li>

            <li class={props.item === GALLERY ? "active" : ""}>
              <Link to={GALLERY}>Gallery</Link>
            </li>

            <li class={props.item === ABOUT ? "active" : ""}>
              <Link to={ABOUT}>About</Link>
            </li>
          </ul>
        </nav>

        <div
          class="social-links"
          data-aos="fade-down"
          style={{
            display: "flex",
            flexWrap: "wrap",
          }}
        >
          <a href={`mailto:${data.email}`} target="blank">
            <i class="icofont-email"></i>
          </a>
          <a href={data.linkedIn} target="blank" class="linkedin">
            <i class="icofont-linkedin"></i>
          </a>
          <a href={data.researchGate} target="blank">
            <i class="fab fa-researchgate"></i>
          </a>
          <a href={data.googleScholar} target="blank">
            <i class="ai ai-google-scholar-square"></i>
          </a>

          <a href={data.youTube} target="blank">
            <i class="icofont-youtube"></i>
          </a>

          <a href={data.facebook} target="blank" class="facebook">
            <i class="icofont-facebook"></i>
          </a>

          <a href={data.flickr} target="blank">
            <i
              class="icofont-flikr"
              aria-hidden="true"
              style={{ color: "white" }}
            ></i>
          </a>

          <a href={data.twitter} target="blank" class="twitter">
            <i class="icofont-twitter"></i>
          </a>

          <a href={data.instagram} target="blank" class="instagram">
            <i class="icofont-instagram"></i>
          </a>
        </div>
      </div>
    </header>
  );
};

export default CustomNavBar;
