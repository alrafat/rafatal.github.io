import { Row, Col } from "react-bootstrap";
import data from "../utls/data";
import CustomNavBar from "./CustomNavBar";

const Resume = () => {
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

  const expItems = data.experience.map((exp) => {
    const tasks = exp.tasks.map((task) => {
      return <li>{task}</li>;
    });

    return (
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
    );
  });

  const trainingItems = data.training.map((item) => {
    return (
      <div className="resume-item">
        <div
          style={{
            // backgroundColor: "#F2F2F2",
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

  const journals = data.journals.map((journal) => (
    <li>
      <div style={{ padding: "5px" }}>
        <p
          style={{ fontSize: "19px", fontFamily: "sans-serif" }}
          className="test-items"
        >
          {journal.title}
        </p>
        <p>{journal.proceeding}</p>
        <p>Authors : {journal.authors}</p>
        <a href={journal.link}>
          <em>
            {journal.journal} {journal.impact_factor}
          </em>
        </a>
      </div>
    </li>
  ));
  const papers = data.papers.map((paper) => (
    <li>
      <div style={{ padding: "5px" }}>
        <p
          style={{ fontFamily: "sans-serif", fontSize: "19px" }}
          className="test-items"
        >
          {paper.title}
        </p>

        <ul>
          <li>
            {" "}
            <p>{paper.proceeding}</p>
          </li>

          <li>
            {" "}
            <p>Authors : {paper.authors}</p>
          </li>

          <li>
            {" "}
            <em>{paper.venue}</em>
          </li>
        </ul>
      </div>
    </li>
  ));

  const scoreTables = data.standard_scores.map((table) => {
    const tableHeader = table.fields.map((header) => {
      return (
        <th style={{ textAlign: "center", color: "white" }}>
          <p>{header.name}</p>
        </th>
      );
    });

    const tableData = table.fields.map((data) => {
      return (
        <td style={{ textAlign: "center", color: "white" }}>
          <p>{data.score}</p>
        </td>
      );
    });

    return (
      <div
        style={{
          paddingBottom: "10px",
          marginBottom: "10px",
          color: "green",
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

  const membershipItems = data.memberships.map((item) => {
    return (
      <li style={{ display: "inline" }}>
        <Row>
          <Col lg={9}>
            <p className="test-items">{item.institute}</p>
          </Col>
          <Col lg={3}>MemberID : {item.memberId}</Col>
        </Row>
      </li>
    );
  });

  return (
    <>
      <CustomNavBar item="/resume" />
      <section id="resume" class="resume section-show">
        <div class="container">
          <div class="section-title">
            <h2>Resume</h2>
            <p>Check My Resume</p>
          </div>

          <div class="row">
            <div class="col-lg-6">
              <h3 class="resume-title">Sumary</h3>
              <div class="resume-item pb-0">
                <h4>{data.name}</h4>
                <p>
                  <em>{data.resume_intro}</em>
                </p>
                <p>
                  <ul>
                    <li>{data.address}</li>
                    <li>{data.phone}</li>
                    <li>{data.email}</li>
                  </ul>
                </p>
              </div>

              <h3 class="resume-title">Education</h3>
              {eduItems}
            </div>
            <div class="col-lg-6">
              <h3 class="resume-title">Professional Experience</h3>
              {expItems}
            </div>
          </div>

          {/* Paper and Conference  */}
          <div className="row">
            <div className="col-lg-12" data-aos="fade-up">
              <h3 className="resume-title">Journal Publications</h3>
              <hr></hr>
              <ul>{journals}</ul>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12" data-aos="fade-up">
              <h3 className="resume-title">Conference Papers</h3>
              <hr></hr>
              <ul>{papers}</ul>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12" data-aos="fade-up">
              <h3 className="resume-title">STANDARDIZED TEST SCORES</h3>

              {scoreTables}
            </div>
          </div>
          {/* Training (Non Academic) */}

          <div className="row">
            <div className="col-lg-12" data-aos="fade-up">
              <h3 className="resume-title">Training (Non Academic)</h3>

              <div className="row" style={{ padding: "10px" }}>
                {trainingItems}
              </div>
            </div>
          </div>

          {/* PROFESSIONAL MEMBERSHIPS */}

          <div className="row">
            <div className="col-lg-12" data-aos="fade-up">
              <h3 className="resume-title">PROFESSIONAL MEMBERSHIPS</h3>

              <ul>{membershipItems}</ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Resume;
