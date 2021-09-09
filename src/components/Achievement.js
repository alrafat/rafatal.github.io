import { LazyLoadImage } from "react-lazy-load-image-component";
import data from "../utls/data";
import CustomNavBar from "./CustomNavBar";

const Achievements = () => {
  const gap = <div style={{ height: "50px", display: "block" }}></div>;

  const achievements = data.achievements.map((achievement) => {
    const image = achievement.image.toString();
    return (
      <div
        className="container"
        style={{ backgroundColor: "rgba(99,211,111,0.5)", margin: "5px" }}
      >
        <div className="row">
          <div class="col-lg-6 d-flex justify-content-center">
            <LazyLoadImage
              className="card-img-top"
              src={image}
              alt={achievement.title}
              style={{ width: "100%" }}
            />
          </div>
          <div
            class="col-lg-6 d-flex justify-content-center"
            // style={{ backgroundColor: "#7AADC2" }}
          >
            <div>
              <h3
                class="card-title"
                align="center"
                style={{ color: "white", fontWeight: "bold" }}
              >
                {achievement.title}
              </h3>

              <hr></hr>

              <h5 className="pull-left">By {achievement.issuedBy}</h5>

              <h5 className="pull-right"> {achievement.date}</h5>

              {gap}

              <p class="card-text" style={{ color: "black" }}>
                {achievement.detail}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  });

  return (
    <>
      <CustomNavBar item="/award-achievements" />
      <section id="project" class="portfolio section-show" data-aos="fade-up">
        <div class="container">
          <p align="center">
            <q className="quote"> LONG HAUL, DILIGENCE AND SELF-ESTEEM </q>
          </p>
          {gap}

          <div class="section-title" data-aos="fade-right">
            <h2>AWARDS & ACHIEVEMENTS</h2>
          </div>

          <div class="row">{achievements}</div>
        </div>
      </section>
    </>
  );
};

export default Achievements;
