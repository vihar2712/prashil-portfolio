import data from "../myData.json";

const About = () => {
  return (
    <section className="section" id="about">
      <div className="container text-center">
        <div className="about">
          <div className="about-img-holder">
            <img src={data.profilePicture} className="about-img" alt="" />
          </div>
          <div className="about-caption">
            <p className="section-subtitle">Who Am I ?</p>
            <h2 className="section-title mb-3">About Me</h2>
            <p className="about-me">{data.description}</p>
            <i className="ti-location-pin text-primary"></i>{" "}
            <span className="font-weight-bolder text-primary">
              {" "}
              {data.location}{" "}
            </span>
            <br />
            <a
              className="btn-rounded btn btn-outline-primary mt-4"
              href={process.env.REACT_APP_RESUME_LINK}
              target="_blank"
              rel="noreferrer"
            >
              Checkout my resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
