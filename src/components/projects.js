import data from "../myData.json";
import MediaViewer from "./MediaViewer";

const Projects = () => {
  return (
    <section className="section" id="projects">
      <div className="container text-center">
        <h1 className="mb-4">Projects</h1>
        <div className="section-title">
          {data.projects.map((project, id) => {
            return (
              <div key={id} className="blog-card">
                <div className="blog-card-header">
                  <img
                    src={project.photo}
                    className="blog-card-img w-100 zoom about-img border"
                    alt=""
                  />
                </div>
                <div className="blog-card-body">
                  <h5 className="blog-card-title">{project.name}</h5>
                  <p className="text-primary mb-1">
                    {project.startYear}
                    {project.endYear ? " - " : ""}
                    {project.endYear}
                  </p>
                  <p className="whitespace-pre-line">{project.summary}</p>
                  {project.media && <MediaViewer media={project.media} />}

                  {project.link && (
                    <a
                      href={project.link}
                      className="btn btn-primary h4"
                      target="_blank"
                      rel="noreferrer"
                    >
                      {project.linkCaption}
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

export default Projects;
