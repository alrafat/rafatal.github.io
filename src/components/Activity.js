import data from "../utls/data";
import AOS from "aos";
import Service from "./Service";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";
import { useState } from "react";
import CustomNavBar from "./CustomNavBar";
import { LazyLoadImage } from "react-lazy-load-image-component";

const Activity = () => {
  AOS.init();
  const [images, setImages] = useState(null);

  const [photoIndex, setPhotoIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const leadItems = data.leadership.map((lead) => {
    return (
      <div className="resume-item">
        <div>
          <h4>{lead.position}</h4>
          <h5>{lead.date}</h5>
          <p>
            <em>{lead.institute}</em>
          </p>
        </div>
      </div>
    );
  });

  const activityItems = data.activities.map((item) => {
    return (
      <div className="resume-item">
        <div
          style={{
            padding: "10px",
          }}
        >
          <p className="test-items">{item.position}</p>

          <p>
            <em>{item.description}</em>
          </p>
        </div>
      </div>
    );
  });

  const culturalPrograms = data.culturalPrograms.map((program) => {
    const images = program.files.map((image) => {
      return (
        <div class="col-lg-4 col-md-6 portfolio-item">
          <div
            class="portfolio-wrap"
            style={{
              cursor: "pointer",
            }}
            onClick={() => {
              setIsOpen(true);

              setImages(program.files);

              for (let p = 0; p < images.length; p++) {
                if (images[p] === image) {
                  console.log(p);
                  setPhotoIndex(p);
                  break;
                }
              }
            }}
          >
            <LazyLoadImage
              className="img-fluid"
              alt={program.subSubFolder}
              src={image}
              effect="blur"
            />
            <div class="portfolio-info">
              <h4>{program.subSubFolder}</h4>
              <div class="portfolio-links">
                <a data-gall="portfolioGallery" class="venobox">
                  <i class="bx bx-detail"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      );
    });
    return images;
  });

  const programs = data.programsSAUPS.map((program) => {
    let randomNumber = Math.round(Math.random() % program.files.length);
    let img = program.files[Math.round(randomNumber * 10)];
    const bal = 'url("' + img + '")';

    return (
      <div
        class="col-lg-4 col-md-6  imageCard"
        onClick={() => {
          setIsOpen(true);
          setImages(program.files);
          console.log(images);
        }}
        style={{
          cursor: "pointer",
          backgroundImage: bal,
          backgroundRepeat: "no-repeat",
          backgroundSize: "100% 100%",
          backgroundPosition: "center",
          backgroundColor: "rgba(0,0,0,0.5)",
          backgroundBlendMode: "darken",
        }}
      >
        <div className="icon-box">
          <div className="icon">
            <i className="bx bx-file"></i>
          </div>
          <h4>
            <a>{program.subSubFolder}</a>
          </h4>
          {/* <p>{item.description}</p> */}
        </div>
      </div>
    );
  });

  const gap = <div style={{ height: "50px", display: "block" }}></div>;

  return (
    <>
      <CustomNavBar item="/activity" />

      <section id="activity" className="resume section-show">
        <div className="container">
          <p align="center">
            <q className="quote">
              {" "}
              YOU CAN’T DO A GOOD JOB IF YOUR JOB IS ALL YOU DO{" "}
            </q>
          </p>
          {gap}
          <div class="section-title" data-aos="fade-right">
            <h2>Extra Curricular</h2>
          </div>
          <div className="row" data-aos="fade-up">
            <div className="col-lg-6" data-aos="fade-right">
              <h3 className="resume-title">LEADERSHIP</h3>
              {leadItems}
            </div>
            <div className="col-lg-6" data-aos="fade-left" data-aos-delay="100">
              <h3 className="resume-title">EXTRA-CURRICULAR ACTIVITIES</h3>
              {activityItems}
            </div>
          </div>
          <div style={{ height: "20px" }}></div>

          {gap}

          <div className="services" data-aos="fade-up">
            <div class="section-title" data-aos="fade-right">
              <h2>SAUPS Program Photographs</h2>
            </div>
            <div className="row">{programs}</div>
          </div>

          {gap}

          <div class="portfolio section-show">
            <div className="services">
              <div class="section-title">
                <h2>Cultural Programs</h2>
              </div>
              <div className="row portfolio-container">{culturalPrograms}</div>
            </div>
          </div>

          {isOpen && (
            <Lightbox
              mainSrc={images[photoIndex]}
              nextSrc={images[(photoIndex + 1) % images.length]}
              prevSrc={images[(photoIndex + images.length - 1) % images.length]}
              onCloseRequest={() => setIsOpen(false)}
              onMovePrevRequest={() =>
                setPhotoIndex(photoIndex + images.length - 1) % images.length
              }
              onMoveNextRequest={() =>
                setPhotoIndex((photoIndex + 1) % images.length)
              }
            />
          )}
        </div>
      </section>
    </>
  );
};

export default Activity;
