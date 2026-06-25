import data from "../myData.json";
import MediaViewer from "./MediaViewer";
const TopProjects = () => {
  return (
    <section className="section" id="certificates">
      <div className="container text-center">
        <h1 className="mb-4">Certificates</h1>
        <div className="section-title">
          {data.certificates.map((certificate, id) => {
            return (
              <div key={id} className="blog-card">
                <div className="blog-card-header">
                  <img
                    src={certificate.photo}
                    className="blog-card-img w-100 zoom about-img border"
                    alt=""
                    style={{maxHeight:"400px"}}
                  />
                </div>
                <div className="blog-card-body">
                  <h5 className="blog-card-title">{certificate.title}</h5>
                  <p className="text-primary mb-1">
                    {certificate.startYear}
                    {certificate.endYear ? " - " : ""}
                    {certificate.endYear}
                  </p>
                  <p className="whitespace-pre-line">{certificate.description}</p>
                  {certificate.media && <MediaViewer media={certificate.media} />}

                  {certificate.link && (
                    <a
                      href={certificate.link}
                      className="btn btn-primary h4"
                      target="_blank"
                      rel="noreferrer"
                    >
                      {certificate.linkCaption}
                      <i className="ti-angle-double-right"></i>
                    </a>
                  )}
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
