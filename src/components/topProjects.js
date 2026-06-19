import data from "../myData.json";
const TopProjects = () => {
  return (
    <section className="section" id="top-projects">
      <div className="container text-center">
        <h1 className="section-title mb-4">
          Top 3 Projects ({" "}
          <a href="#projects" style={{ textDecoration: "underline" }}>
            {" "}
            See other projects{" "}
          </a>
          )
        </h1>
        <div className="pricing-wrapper all-awards">
          {data.awards.map((award, id) => {
            return (
              <div key={id} className="pricing-card">
                <div className="pricing-card-header">
                  <img
                    src={award.photo}
                    alt={award.title}
                    width={"100%"}
                    style={{ borderRadius: "8px" }}
                    className="zoom"
                  />
                  <a href={award.link} target="_blank" rel="noreferrer">
                    <h3 className="mt-4">{award.title}</h3>
                  </a>
                  <span className="display-6">{award.issuedOn}</span>
                </div>
                <div className="pricing-card-body mt-2">
                  <p>{award.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TopProjects;
