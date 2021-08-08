import data from "../utls/data";
import Service from "./Service";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";
import { useState } from "react";
import CustomNavBar from "./CustomNavBar";


const Activity = () => {
  const [images, setImage] = useState(null);

  const [photoIndex, setPhotoIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const leadItems = data.leadership.map((lead) => {
    return (
      <div className="resume-item">
        <div
          style={
            {
              // backgroundColor: "#F2F2F2",
              // padding: "10px",
            }
          }
        >
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
            // backgroundColor: "#F2F2F2",
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

  const activityPhotos = data.activityPhotos.map((item) => {
    let img = item.files[0];
    const bal = 'url("' + img + '")';

    return (
      <div
        class="col-lg-4 col-md-6 d-flex align-items-stretch imageCard"
        style={{
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
            <a
              // href="#"
              style={{
                cursor: "pointer",
              }}
              onClick={() => {
                setIsOpen(true);
                setImage(item.files);
                console.log(images);
              }}
            >
              {item.folder}{" "}
            </a>
          </h4>
          <p>{item.description}</p>
        </div>
      </div>
    );
  });

  const programs = data.programsSAUPS.map((item) => {
    let img = item.files[0];
    const bal = 'url("' + img + '")';

    return (
      <div
        class="col-lg-4 col-md-6 d-flex align-items-center imageCard"
        style={{
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
            <a
              // href="#"
              style={{
                cursor: "pointer",
              }}
              onClick={() => {
                setIsOpen(true);
                setImage(item.files);
                console.log(images);
              }}
            >
              {item.folder}
            </a>
          </h4>
          <p>{item.description}</p>
        </div>
      </div>
    );
  });

  return (
    <>
      <CustomNavBar item="/activity" />

      <section id="activity" className="resume section-show">
        <div className="container">
          <div class="section-title">
            <h2>Activities</h2>
            <p>My extra curricular activities</p>
          </div>
          <div className="row" data-aos="fade-up">
            <div className="col-lg-6" data-aos="fade-up">
              <h3 className="resume-title">LEADERSHIP</h3>
              {leadItems}
            </div>
            <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
              <h3 className="resume-title">EXTRA-CURRICULAR ACTIVITIES</h3>
              {activityItems}
            </div>
          </div>
          <div style={{ height: "20px" }}></div>
          <div className="services">
            <h3 className="resume-title">SAUPS Program Photographs</h3>
            <div className="row">{programs}</div>
          </div>

          <div className="services">
            <h3 className="resume-title">
              Other Photographs Of My Activities{" "}
            </h3>
            <div className="row">{activityPhotos}</div>
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
