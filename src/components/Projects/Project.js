import data from "../../utls/data";
import CustomNavBar from "../CustomNavBar";
import "react-image-lightbox/style.css";
import { Link } from "react-router-dom";

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
              {project.description}
            </p>
          </div>
          {gap}
          <div class="card-footer" style={{ textAlign: "center" }}>
            <Link to={`/projects/${project.project}`}> View Gallery</Link>
          </div>
        </div>
      </div>
    );
  });

  return (
    <>
      <CustomNavBar item="/projects" />
      <section id="project" class="portfolio section-show" data-aos="fade-up">
        <div class="container">
          <p align="center">
            <q> EXERTING INNOVATION </q>
          </p>
          {gap}

          <div class="section-title" data-aos="fade-right">
            <h2>Projects</h2>
          </div>

          <div class="row">{projects}</div>
        </div>
      </section>
    </>
  );
};

export default Project;
