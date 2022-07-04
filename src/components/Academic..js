import { ACADEMIC } from "../utils/constants";
import data from "../utils/data";
import CustomNavBar from "./CustomNavBar";

const Academic = () => {
  const eduItems = data.education.map((degree) => {
    return (
      <div className="resume-item">
        <div
          style={{
            // backgroundColor: "#F2F2F2",
            padding: "10px",
          }}
        >
          <h4 id="master_degree">{degree.degree}</h4>
          <h5>{degree.date}</h5>
          <p>
            <em>{degree.varsity}</em>
          </p>
          <p>
            {degree.about}
            <br />
            CGPA: {degree.cgpa}
          </p>
        </div>
      </div>
    );
  });

  const scoreTables = data.standard_scores.map((table) => {
    const tableHeader = table.fields.map((header) => {
      return (
        <th style={{ textAlign: "center", color: "white" }}>
          <p>{header.name}</p>
        </th>
      );
    });

    const tableData = table.fields.map((data, index) => {
      return (
        <td style={{ textAlign: "center", color: "white" }}>
          {index === 0 ? <b>{data.score}</b> : <p>{data.score}</p>}
        </td>
      );
    });

    return (
      <div
        style={{
          paddingBottom: "10px",
          marginBottom: "10px",
          color: "green",
          overflowX: "auto",
        }}
      >
        <h4 align="center" className="test-items">
          {table.standard_name} ({table.date})
        </h4>

        <div style={{ height: "20px" }}></div>

        <table class="table table-bordered">
          <thead>
            <tr>{tableHeader}</tr>
          </thead>
          <tbody>
            <tr>{tableData}</tr>
          </tbody>
        </table>
      </div>
    );
  });

  const gap = <div style={{ height: "50px", display: "block" }}></div>;

  const technicalSkills = data.technical_skills.map((skill) => {
    return (
      <>
        <tr>
          <td style={{ textAlign: "center", color: "white" }}>
            <p>{skill.type}</p>
          </td>
          <td style={{ textAlign: "center", color: "white" }}>
            <p> {"------>"} </p>
          </td>

          <td style={{ textAlign: "center", color: "white" }}>
            <p>{skill.skills}</p>
          </td>
        </tr>
      </>
    );
  });

  return (
    <>
      <CustomNavBar item={ACADEMIC} />
      <section id="resume" class="resume section-show" data-aos="fade-up">
        <div class="container">
          <p align="center">
            <div className="quote">
              <q>
                LEARNING IS A TREASURE THAT WILL FOLLOW ITS OWNER EVERYWHERE
              </q>
            </div>
          </p>

          {gap}

          <div className="row">
            <div className="col-lg-12" data-aos="fade-up">
              <div class="section-title">
                <h2>ACADEMIC CREDENTIALS</h2>
              </div>

              <div className="row" style={{ padding: "10px" }}>
                {eduItems}
              </div>
            </div>
          </div>

          {gap}

          <div className="row">
            <div className="col-lg-12">
              <div class="section-title">
                <h2>STANDARDIZED TEST SCORES</h2>
              </div>
              {scoreTables}
            </div>
          </div>

          {gap}

          <div className="row">
            <div className="col-lg-12">
              <div class="section-title">
                <h2>TECHNICAL SKILLS</h2>
              </div>

              <div
                style={{
                  paddingBottom: "10px",
                  marginBottom: "10px",
                  color: "green",
                }}
              >
                <div style={{ height: "20px" }}></div>

                <table class="table">
                  <tbody>{technicalSkills}</tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Academic;
