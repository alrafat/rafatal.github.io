import data from "../utls/data";
import CustomNavBar from "./CustomNavBar";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";
import { useEffect, useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

const Photography = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const [selectedImageTitle, setSelectedImageTitle] = useState("All");

  const [isOpen, setIsOpen] = useState(false);

  const [images, setImages] = useState([]);

  const imageArray = [];

  const [load, setLoad] = useState(true);

  let imagesDiv;

  const loadImages = () => {
    let x = [];
    imagesDiv = null;
    data.photography.map((type) => {
      type.subSubFolders.map((subFolder) =>
        subFolder.files.map((file) => x.push(file))
      );
    });
    console.log(x);
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
          <div class="portfolio-wrap">
            <LazyLoadImage
              className="img-fluid"
              alt={image}
              src={image}
              effect="blur"
            />
            <div class="portfolio-info">
              <h4>{selectedImageTitle}</h4>
              <div class="portfolio-links">
                <a
                  style={{
                    cursor: "pointer",
                  }}
                  onClick={() => {
                    setIsOpen(true);
                    setSelectedImage(image);
                  }}
                  data-gall="portfolioGallery"
                  class="venobox"
                >
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
      <CustomNavBar item="/art-photography" />
      <section
        id="photography"
        class="portfolio section-show"
        data-aos="fade-up"
      >
        <div class="container">
          <p align="center">
            <q> YOU DON'T TAKE A PHOTOGRAPH, YOU MAKE IT </q>
          </p>

          {gap}

          <div class="section-title">
            <h2>Gallery</h2>
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
              mainSrc={selectedImage}
              onCloseRequest={() => setIsOpen(false)}
            />
          )}
        </div>
      </section>
    </>
  );
};

export default Photography;
