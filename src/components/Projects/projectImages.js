import { useState, useEffect } from "react";
import Lightbox from "react-image-lightbox";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useParams } from "react-router-dom";
import { PROJECTS } from "../../utils/constants";
import data from "../../utils/data";
import CustomNavBar from "../CustomNavBar";

const ProjectImages = (props) => {
  let { projectName } = useParams();
  console.log("sasasdasda", projectName);

  const [selectedImage, setSelectedImage] = useState(null);

  const [selectedImageTitle, setSelectedImageTitle] = useState("All");

  const [isOpen, setIsOpen] = useState(false);

  const [images, setImages] = useState([]);

  const imageArray = [];

  const [photoIndex, setPhotoIndex] = useState(0);

  const [load, setLoad] = useState(true);

  let imagesDiv;

  const loadImages = () => {
    let x = [];
    imagesDiv = null;
    data.projectPhotos.map((type) => {
      if (type.subFolder === projectName) {
        type.subSubFolders.map((subFolder) =>
          subFolder.files.map((file) => x.push(file))
        );
      }
    });
    console.log(x.length);
    setImages(x);
  };
  useEffect(() => {
    loadImages();
  }, [1]);

  const photographyTypes = data.projectPhotos.map((type) => {
    console.log(type.subFolder);
    console.log(projectName);
    if (type.subFolder === projectName) {
      const dev = type.subSubFolders.map((subFolder) => {
        subFolder.files.map((file) => imageArray.push(file));

        return (
          <li
            className={
              selectedImageTitle === subFolder.subSubFolder
                ? "filter-active"
                : ""
            }
            onClick={() => {
              imagesDiv = null;
              setImages(subFolder.files);
              setSelectedImageTitle(subFolder.subSubFolder);
              setLoad(true);
            }}
          >
            {subFolder.subSubFolder}
          </li>
        );
      });
      return dev;
    }
  });

  if (images.length > 0 && load) {
    let indexNo = 0;
    imagesDiv = images.map((image) => {
      return (
        <div class="col-lg-4 col-md-6 portfolio-item">
          <div
            class="portfolio-wrap"
            style={{
              cursor: "pointer",
            }}
            onClick={() => {
              setIsOpen(true);

              for (let p = 0; p < images.length; p++) {
                if (images[p] === image) {
                  setPhotoIndex(p);
                }
              }

              setSelectedImage(image);
            }}
          >
            <LazyLoadImage
              className="img-fluid"
              alt={image}
              src={image}
              effect="blur"
            />
            <div class="portfolio-info">
              <h4>{selectedImageTitle}</h4>
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
  }

  const gap = <div style={{ height: "50px", display: "block" }}></div>;

  return (
    <>
      <CustomNavBar item={PROJECTS} />
      <section
        id="photography"
        class="portfolio section-show"
        data-aos="fade-up"
      >
        <div class="container">
          <div class="section-title">
            <h2>Project Work Photography</h2>
          </div>

          {gap}

          <h1 align="center">{projectName}</h1>
          {gap}

          <div class="row">
            <div class="col-lg-12 d-flex justify-content-center">
              <ul id="portfolio-flters">
                <li
                  data-filter="*"
                  class={selectedImageTitle === "All" ? "filter-active" : ""}
                  onClick={() => {
                    loadImages();
                    setSelectedImageTitle("All");
                  }}
                >
                  All
                </li>
                {photographyTypes}
              </ul>
            </div>
          </div>

          <div class="row portfolio-container">{imagesDiv}</div>
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

export default ProjectImages;
