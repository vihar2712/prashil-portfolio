import data from "../myData.json";

const Education = () => {
  return (
    <section className="section pt-0" id="education">
      <div
        className="col-lg-6 wow fadeInUp container text-center mb-5"
        data-wow-delay="0.5s"
        style={{
          visibility: "visible",
          animationDelay: "0.1s",
          animationName: "fadeInUp",
        }}
      >
        <h1 className="mb-4">Education</h1>
        <div className="p-0">
          <div className="row gy-5 gx-4">
            {data.education.map((ed, id) => {
              return (
                <div key={id} className="col-sm-6 ">
                  <img
                    src={ed.photo}
                    className="about-img"
                    style={{ height: "150px" }}
                    alt={ed.placeName}
                  />
                  <h4 className="mb-0">{ed.placeName}</h4>
                  <p className="text-primary mb-1">
                    {ed.startYear}-{ed.endYear}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
