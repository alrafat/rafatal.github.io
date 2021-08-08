import ProgressBar from "react-bootstrap/ProgressBar";
import data from "../../utls/data";

const Skill = () => {
  const skillsDiv = data.technical_skills.map((skill) => {
    const sks = skill.skills.map((sk) => (
      <div className="progress">
        <span className="skill" style={{ fontSize: "12px" }}>
          {sk.name} <i className="val">{sk.expertize}%</i>
        </span>
        <ProgressBar now={sk.expertize} />;
      </div>
    ));

    return (
      <>
        <div className="col-lg-6">
          <div className="section-title">
            <h3 className="resume-title" style={{ color: "#18d26e" }}>
              <b>{skill.type}</b>
            </h3>
          </div>
          {sks}
          <hr></hr>
        </div>
      </>
    );
  });

  return (
    <div class="skills container" data-aos="fade-up">
      <div class="section-title">
        <h2>Technical Skills</h2>
      </div>

      <div class="row skills-content">{skillsDiv}</div>
    </div>
  );
};

export default Skill;
