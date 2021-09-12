import data from "../../utils/data";

const AboutMe = () => {
  const aboutDiv = data.about.map((section) => <p>{section}</p>);

  return (
    <div class="about-me container">
      <div class="section-title">
        <h2>ABOUT</h2>
        <p>Learn more about me</p>
      </div>

      <div class="row">
        <div class="col-lg-4" data-aos="fade-right">
          <img src="assets/img/me.png" class="img-fluid" alt="" />
        </div>
        <div class="col-lg-8 pt-4 pt-lg-0 content" data-aos="fade-left">
          {aboutDiv}
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
