import data from "../../utils/data";
import CustomNavBar from "../CustomNavBar";
import "react-image-lightbox/style.css";
import { Link } from "react-router-dom";
import { PROJECTS } from "../../utils/constants";

const Project = () => {
  const gap = <div style={{ height: "50px", display: "block" }}></div>;

  const projects = data.projects.map((project) => {
    const image = project.defaultImage.toString();
    return (
      <div class="col-lg-12 d-flex justify-content-center">
        <div class="card" style={{ margin: "10px" }}>
          <div class="card-header">
            <h3
              class="card-title"
              align="center"
              style={{ color: "black", fontWeight: "bold" }}
            >
              {project.project}
            </h3>
          </div>
          <div class="card-body" style={{ alignItems: "center" }}>
            <img
              class="card-img-top"
              src={image}
              alt={project.project}
              style={{ width: "100%" }}
            />

            {gap}

            <p class="card-text" style={{ color: "black" }}>
              {project.description} You can enjoy some interesting video from
              Edible Insects research from{" "}
              <a href="https://www.youtube.com/playlist?list=PL-Ab1DY7nFK9Qhjb6SR4JwqiOyWjPOPQk">
                here
              </a>
            </p>
          </div>
          {gap}
          <div class="card-footer" style={{ textAlign: "center" }}>
            <Link to={`${PROJECTS}/${project.project}`}> View Gallery</Link>
          </div>
        </div>
      </div>
    );
  });

  return (
    <>
      <CustomNavBar item={PROJECTS} />
      <section id="project" class="portfolio section-show" data-aos="fade-up">
        <div class="container">
          <p align="center">
            <q className="quote"> EXERTING INNOVATION </q>
          </p>
          {gap}

          <div class="section-title" data-aos="fade-right">
            <h2>PROJECTS</h2>
          </div>

          <div class="row">{projects}</div>
        </div>
      </section>
    </>
  );
};

export default Project;
