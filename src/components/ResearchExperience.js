import { RESEARCH_EXPERIENCES } from "../utils/constants";
import data from "../utils/data";
import CustomNavBar from "./CustomNavBar";

const ResearchExperience = () => {
  const journals = data.journals.map((journal) => {
    let authors = BoldedText({
      text: journal.authors,
      shouldBeBold: journal.authors.includes("Dev, S.")
        ? "Dev, S."
        : journal.authors.includes("S. Dev")
        ? "S. Dev"
        : journal.authors.includes("Dev, S.")
        ? "Dev, S."
        : journal.authors.includes("Dev. S.")
        ? "Dev. S."
        : "",
    });

    return (
      <li>
        <div style={{ padding: "5px" }}>
          <p
            style={{ fontSize: "19px", fontFamily: "sans-serif" }}
            className="test-items"
          >
            {journal.title}
          </p>
          <p>{journal.proceeding}</p>
          <p>Authors : {authors}</p>
          <a href={journal.link}>
            <em>
              {journal.journal}, {journal.impact_factor}
            </em>
          </a>
        </div>
      </li>
    );
  });
  function BoldedText({ text, shouldBeBold }) {
    const textArray = text.split(shouldBeBold);
    return (
      <span>
        {textArray.map((item, index) => (
          <>
            {item}
            {index !== textArray.length - 1 && <b>{shouldBeBold}</b>}
          </>
        ))}
      </span>
    );
  }
  const papers = data.papers.map((paper) => {
    let authors = BoldedText({
      text: paper.authors,
      shouldBeBold: paper.authors.includes("Dev, S.")
        ? "Dev, S."
        : paper.authors.includes("S. Dev")
        ? "S. Dev"
        : paper.authors.includes("Dev, S.")
        ? "Dev, S."
        : "",
    });

    return (
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

            <li>{authors}</li>

            <li>
              {" "}
              <em>{paper.venue}</em>
            </li>
          </ul>
        </div>
      </li>
    );
  });

  const gap = <div style={{ height: "50px", display: "block" }}></div>;

  const researchInterests = data.researchInterest.map((item) => {
    return (
      <div class="" style={{ margin: "10px" }}>
        <div class="icon-box">
          <i class="ri-bar-chart-box-line" style={{ color: "#5578ff" }}></i>
          <h3>{item}</h3>
        </div>
      </div>
    );
  });

  const thesis = data.theses.map((thesis) => {
    const thesisDetail = thesis.detail.map((item) => {
      return (
        <li>
          <p>{item}</p>
        </li>
      );
    });

    return (
      <li>
        <div style={{ padding: "5px" }}>
          <p
            style={{ fontFamily: "sans-serif", fontSize: "19px" }}
            className="test-items"
          >
            {thesis.title}
          </p>

          <p>{thesis.supervisor}</p>

          <ul>{thesisDetail}</ul>
        </div>
      </li>
    );
  });

  return (
    <>
      <CustomNavBar item={RESEARCH_EXPERIENCES} />
      <section class="resume section-show" data-aos="fade-up">
        <div class="container">
          <p align="center">
            <q className="quote"> UNRAVELING THE MYSTERY </q>
          </p>
          {gap}
          <div className="row">
            <div class="interests container">
              <div class="section-title">
                <h2>RESEARCH INTERESTS</h2>
              </div>
              <div class="row">{researchInterests}</div>
            </div>
          </div>
          {/* Paper and Conference  */}
          {gap}
          <div className="row">
            <div className="col-lg-12" data-aos="fade-up">
              <div class="section-title">
                <h2>JOURNAL PUBLICATION</h2>
              </div>
              <hr></hr>
              <ul>{journals}</ul>
            </div>
          </div>
          {gap}
          <div className="row">
            <div className="col-lg-12">
              <div class="section-title">
                <h2>CONFERENCE PAPERS</h2>
              </div>
              <hr></hr>
              <ul>{papers}</ul>
            </div>
          </div>

          {gap}
          <div className="row">
            <div className="col-lg-12">
              <div class="section-title">
                <h2>GRADUATE/ MS THESIS</h2>
              </div>
              <hr></hr>
              <ul>{thesis}</ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ResearchExperience;
