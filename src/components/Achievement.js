import { LazyLoadImage } from "react-lazy-load-image-component";
import { AWARDS_ACHIEVEMENTS } from "../utils/constants";
import data from "../utils/data";
import CustomNavBar from "./CustomNavBar";

const Achievements = () => {
  const gap = <div style={{ height: "50px", display: "block" }}></div>;

  const achievements = data.achievements.map((achievement) => {
    const image = achievement.image.toString();
    return (
      <div
        class="container col-sm-5 justify-content-evenly"
        style={{
          backgroundColor: "rgb(99,211,111,0.6)",
          margin: "5px",
          padding: "20px",
        }}
      >
        <h3
          class="card-title"
          align="center"
          style={{ color: "white", fontWeight: "bold" }}
        >
          {achievement.title}
        </h3>

        <hr></hr>
        <div className="row">
          <div className="col-10">By {achievement.issuedBy}</div>
          <div className="col-2">{achievement.date}</div>
        </div>

        {gap}

        <p class="card-text" style={{ color: "black" }}>
          {achievement.detail}
        </p>
      </div>
    );
  });

  return (
    <>
      <CustomNavBar item={AWARDS_ACHIEVEMENTS} />
      <section id="project" class="portfolio section-show" data-aos="fade-up">
        <div class="container">
          <p align="center">
            <q className="quote"> LONG HAUL, DILIGENCE AND SELF-ESTEEM </q>
          </p>
          {gap}

          <div class="section-title" data-aos="fade-right">
            <h2>AWARDS & ACHIEVEMENTS</h2>
          </div>

          <div class="row justify-content-center">{achievements}</div>
        </div>
      </section>
    </>
  );
};

export default Achievements;
