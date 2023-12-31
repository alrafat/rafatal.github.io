import { Row, Col } from "react-bootstrap";
import { EXPERIENCES } from "../utils/constants";
import data from "../utils/data";
import CustomNavBar from "./CustomNavBar";

const Experience = () => {
  const professionalExperiences = data.professional_experiences.map((exp) => {
    const tasks = exp.tasks.map((task) => {
      return <li>{task}</li>;
    });

    return (
      <div className="col-lg-6">
        <div className="row" style={{ padding: "10px" }}>
          <div className="resume-item">
            <div
              style={{
                // backgroundColor: "#F2F2F2",
                padding: "10px",
              }}
            >
              <h4>{exp.title}</h4>
              <h5>{exp.date}</h5>
              <p>
                <em>{exp.institute}</em>
              </p>

              <ul>{tasks}</ul>
            </div>
          </div>
        </div>
      </div>
    );
  });

  const teachingExperiences = data.teaching_experiences.map((exp) => {
    const tasks = exp.tasks.map((task) => {
      return <li>{task}</li>;
    });

    return (
      <div className="col-lg-12">
        <div className="row" style={{ padding: "10px" }}>
          <div className="resume-item">
            <div
              style={{
                // backgroundColor: "#F2F2F2",
                padding: "10px",
              }}
            >
              <h4>{exp.title}</h4>
              <h5>{exp.date}</h5>
              <p>
                <em>{exp.institute}</em>
              </p>

              <ul>{tasks}</ul>
            </div>
          </div>
        </div>
      </div>
    );
  });

  const trainingItems = data.training_experiences.map((item) => {
    return (
      <div
        className="resume-item"
        style={{
          margin: "10px",
        }}
      >
        <div
          style={{
            padding: "10px",
          }}
        >
          <h4>{item.title}</h4>
          <h5>
            {item.time} ({item.date})
          </h5>
          <p>
            <em>By {item.institute}</em>
          </p>
        </div>
      </div>
    );
  });

  const organizationalExp = data.organizational_experiences.map((item) => {
    return (
      <div className="col-lg-6">
        <div className="row" style={{ padding: "10px" }}>
          <div className="resume-item">
            <div
              style={{
                // backgroundColor: "#F2F2F2",
                padding: "10px",
              }}
            >
              <h4>{item.position}</h4>
              <h5>{item.date}</h5>
              <p>
                <em>{item.program}</em>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  });

  const gap = <div style={{ height: "50px", display: "block" }}></div>;

  return (
    <>
      <CustomNavBar item={EXPERIENCES} />
      <section id="resume" class="resume section-show" data-aos="fade-up">
        <div class="container">
          <p align="center">
            <q className="quote"> STRIVING FOR EXCELLENCE </q>
          </p>
          {gap}

          <div class="section-title">
            <h2>PROFESSIONAL AND RESEARCH EXPERIENCES</h2>
          </div>

          <div className="row">{professionalExperiences}</div>

          {gap}

          <div class="section-title">
            <h2>TEACHING EXPERIENCE</h2>
          </div>

          <div className="row">{teachingExperiences}</div>

          {gap}

          {/* Training (Non Academic) */}

          <div className="row">
            <div className="col-lg-12">
              <div class="section-title">
                <h2>TRAINING EXPERIENCES</h2>
              </div>

              <div className="row" style={{ padding: "10px" }}>
                {trainingItems}
              </div>
            </div>
          </div>

          {gap}

          <div className="row">
            <div className="col-lg-12">
              <div class="section-title">
                <h2>ORGANIZATIONAL EXPERIENCES</h2>
              </div>

              <div className="row" style={{ padding: "10px" }}>
                {organizationalExp}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Experience;
