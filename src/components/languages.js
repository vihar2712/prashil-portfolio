import data from "../myData.json";

const Languages = () => {
  return (
    <section className="section pt-0" id="languages">
      <div
        className="col-lg-6 wow fadeInUp container text-center"
        data-wow-delay="0.1s"
        style={{
          visibility: "visible",
          animationDelay: "0.1s",
          animationName: "fadeInUp",
        }}
      >
        <h1 className="mb-4">Languages</h1>
        <div className="p-0">
          <div className="row gy-5 gx-4 all-languages">
            {data.languages.map((lang, id) => {
              return (
                <div key={id} className="skill mb-4 ml-4">
                  <div className="d-flex justify-content-between">
                    <span className="font-weight-bold ">{lang[0]}</span>
                  </div>
                  <div className="progress">
                    <div
                      className={"btn-" + lang[1]}
                      style={{ width: "100%" }}
                    ></div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Languages;
