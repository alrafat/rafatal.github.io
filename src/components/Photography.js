import data from "../utils/data";
import CustomNavBar from "./CustomNavBar";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";
import { useEffect, useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { ART_PHOTOGRAPHY } from "../utils/constants";

const Photography = () => {
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
    imagesDiv = [];
    data.photography.map((type) => {
      type.subSubFolders.map((subFolder) =>
        subFolder.files.map((file) => x.push(file))
      );
    });
    setImages(x);
  };
  useEffect(() => {
    loadImages();
  }, [1]);

  const photographyTypes = data.photography.map((type) => {
    const dev = type.subSubFolders.map((subFolder) => {
      subFolder.files.map((file) => imageArray.push(file));

      return (
        <li
          className={
            selectedImageTitle === subFolder.subSubFolder ? "filter-active" : ""
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
  });

  if (images.length > 0 && load) {
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
      <CustomNavBar item={ART_PHOTOGRAPHY} />
      <section
        id="photography"
        class="portfolio section-show"
        data-aos="fade-up"
      >
        <div class="container">
          <p align="center">
            <q className="quote"> YOU DON'T TAKE A PHOTOGRAPH, YOU MAKE IT </q>
          </p>

          {gap}

          <div class="section-title">
            <h2>ART PHOTOGRAPHY</h2>
          </div>

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
                setPhotoIndex((photoIndex + images.length - 1) % images.length)
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

export default Photography;
