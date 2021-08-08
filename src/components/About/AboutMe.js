import data from "../../utls/data";

const AboutMe = () => {
  return (
    <div class="about-me container">
      <div class="section-title">
        <h2>About</h2>
        <p>Learn more about me</p>
      </div>

      <div class="row">
        <div class="col-lg-4" data-aos="fade-right">
          <img src="assets/img/me.png" class="img-fluid" alt="" />
        </div>
        <div class="col-lg-8 pt-4 pt-lg-0 content" data-aos="fade-left">
          <h3>{data.profession}</h3>
          <p class="font-italic">{data.bio}</p>
          <div class="row">
            <div class="col-lg-6">
              <ul>
                <li>
                  <i class="icofont-rounded-right"></i>{" "}
                  <strong>Birthday:</strong> {data.birthday}
                </li>
                <li>
                  <i class="icofont-rounded-right"></i>{" "}
                  <strong>Website:</strong> {data.website}
                </li>
                <li>
                  <i class="icofont-rounded-right"></i> <strong>Phone:</strong>{" "}
                  {data.phone}
                </li>
                <li>
                  <i class="icofont-rounded-right"></i>{" "}
                  <strong>Address:</strong> {data.address}
                </li>
              </ul>
            </div>
            <div class="col-lg-6">
              <ul>
                <li>
                  <i class="icofont-rounded-right"></i> <strong>Age:</strong>{" "}
                  {data.age}
                </li>
                <li>
                  <i class="icofont-rounded-right"></i> <strong>Degree:</strong>{" "}
                  {data.degree}
                </li>
                <li>
                  <i class="icofont-rounded-right"></i> <strong>Email:</strong>{" "}
                  {data.email}
                </li>
                <li>
                  <i class="icofont-rounded-right"></i>{" "}
                  <strong>Available:</strong> Busy
                </li>
              </ul>
            </div>
          </div>
          <p>{data.about}</p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
