import data from "../myData.json";

const Skills = () => {
  return (
    <section className="section" id="skills">
      <div
        className="col-lg-6 wow fadeInUp container text-center"
        data-wow-delay="0.1s"
        style={{
          visibility: "visible",
          animationDelay: "0.1s",
          animationName: "fadeInUp",
        }}
      >
        <h1 className="mb-4">My Skills</h1>
        <div className="p-0">
          <div className="row gy-5 gx-4 all-skills">
            {data.skills.map((skill, id) => {
              return (
                <div key={id} className="skill mb-4 ml-4">
                  <div className="d-flex justify-content-between">
                    <span className="font-weight-bold ">{skill[0]}</span>
                  </div>
                  <div className="progress">
                    <div
                      className={"btn-" + skill[1]}
                      style={{ width: "100%" }}
                    ></div>
                  </div>
                </div>
              );
            })}
            <p className="text-primary ml-4 font-weight-normal">
              and many more....{" "}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
