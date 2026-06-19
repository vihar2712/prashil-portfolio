import data from "../myData.json";

const Recommendation = () => {
  return (
    <section className="section" id="testimonial">
      <div className="container text-center">
        <p className="section-subtitle">What Clients Think About Me ?</p>
        <h6 className="section-title mb-6">Testimonial</h6>
        <div className="row">
          {data.recommendations.map((recommendation, id) => {
            return (
              <div key={id} className="col-md-6">
                <div className="testimonial-card">
                  <div className="testimonial-card-img-holder">
                    <img
                      src={recommendation.photo}
                      className="testimonial-card-img"
                      alt={recommendation.name}
                    />
                  </div>
                  <div className="testimonial-card-body">
                    <p className="testimonial-card-subtitle">
                      {recommendation.desc}
                    </p>
                    <h6 className="testimonial-card-title">
                      {recommendation.name}
                    </h6>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Recommendation;
