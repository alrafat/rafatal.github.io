import data from "../../utls/data";

const Interest = () => {
  const items = data.researchInterest.map((item) => {
    return (
      <div class="" style={{ margin: "10px" }}>
        <div class="icon-box">
          <i class="ri-bar-chart-box-line" style={{ color: "#5578ff" }}></i>
          <h3>{item}</h3>
        </div>
      </div>
    );
  });

  return (
    <div class="interests container" data-aos="fade-up">
      <div class="section-title">
        <h2>Research Interests</h2>
      </div>

      <div class="row">{items}</div>
    </div>
  );
};

export default Interest;
