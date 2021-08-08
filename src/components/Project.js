import data from "../utls/data";
import CustomNavBar from "./CustomNavBar";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";
import { useEffect, useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

// import $ from 'jquery';

const Project = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const [selectedImageTitle, setSelectedImageTitle] = useState("All");

  const [isOpen, setIsOpen] = useState(false);

  const [images, setImages] = useState([]);

  const imageArray = [];

  const [load, setLoad] = useState(true);

  const loadImages = () => {
    let x = [];
    data.projects.map((type) => {
      type.files.map((file) => x.push(file));
    });
    setImages(x);
  };
  useEffect(() => {
    loadImages();
  }, [1]);

  const photographyTypes = data.projects.map((type) => {
    type.files.map((file) => imageArray.push(file));

    return (
      <li
        className={selectedImageTitle === type.folder ? "filter-active" : ""}
        onClick={() => {
          setImages(type.files);
          setSelectedImageTitle(type.folder);
          setLoad(true);
        }}
      >
        {type.folder}
      </li>
    );
  });

  let imagesDiv;
  if (images.length > 0 && load) {
    imagesDiv = images.map((image) => {
      return (
        <div class="col-lg-4 col-md-6 portfolio-item">
          <div class="portfolio-wrap">
            <LazyLoadImage className="img-fluid" alt={image} src={image} />
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

  // const [images, setImage] = useState(null);

  // const [photoIndex, setPhotoIndex] = useState(0);
  // const [isOpen, setIsOpen] = useState(false);

  // const projects = data.projects.map((project) => {
  //   let rm = project.folder.replaceAll(" ", "");
  //   rm = rm.replaceAll("-", "");
  //   rm = rm.replaceAll("(", "");
  //   rm = rm.replaceAll(")", "");
  //   rm = rm.replaceAll(",", "");
  //   let filter = ".filter-" + rm;
  //   console.log(filter);
  //   return <li data-filter={filter}>{project.folder}</li>;
  // });

  // const sections = data.projects.map((project) => {
  //   let rm = project.folder.replaceAll(" ", "");
  //   rm = rm.replaceAll("-", "");
  //   rm = rm.replaceAll("(", "");
  //   rm = rm.replaceAll(")", "");
  //   rm = rm.replaceAll(",", "");
  //   const className = `col-lg-4 col-md-6 portfolio-item filter-${rm}`;
  //   console.log(className);
  //   // project.files = project.files.sort(() => Math.random() - 0.5);
  //   const images = project.files.map((image) => {
  //     return (
  //       <div class={className}>
  //         <div class="portfolio-wrap">
  //           <img src={image} class="img-fluid" alt="" />
  //           <div class="portfolio-info">
  //             <h4>{project.folder}</h4>

  //             <div class="portfolio-links">
  //               <a
  //                 // href={image}
  //                 style={{
  //               cursor: "pointer",
  //             }}
  //                 onClick={() => {
  //               setIsOpen(true);
  //               setImage(project.files);
  //               console.log(images);
  //             }}
  //                 data-gall="portfolioGallery"
  //                 class="venobox"
  //                 title={project.folder}
  //               >
  //                 <i class="bx bx-detail"></i>
  //               </a>
  //             </div>
  //           </div>
  //         </div>
  //       </div>
  //     );
  //   });
  //   return images;
  // });

  return (
    <>
      <CustomNavBar item="/project" />
      <section id="project" class="portfolio section-show">
        <div class="container">
          <div class="section-title">
            <h2>Projects</h2>
            <p>My Project Photographs</p>
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

export default Project;
