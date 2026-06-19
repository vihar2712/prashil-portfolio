import { neon } from '@netlify/neon';
import { useState } from 'react';

function delay(time) {
  return new Promise(resolve => setTimeout(resolve, time));
}

const sendData = async () => {
  await delay(2000);
  const sql = neon(process.env.REACT_APP_NEON_DB_STRING);
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const comments = document.getElementById("comments").value;
  await sql`INSERT INTO contact (name, email, comments) VALUES (${name}, ${email}, ${comments});`;
  await delay(1000);
}

const Contact = () => {
  const [buttonText, setButtonText] = useState("Send Message");
  const handleSubmit = async (e) => {
    e.preventDefault();
    setButtonText("Sending...")
    try {
      sendData();
      setButtonText("Sent !!")
    }
    catch (error) {
      console.error(error.message);
      setButtonText("Try again");
    } finally {
      setTimeout(() => {
        setButtonText("Send Message");
      }, 2000)
    }

  }
  return (
    <section className="section" id="contact">
      <div className="container text-center">
        <p className="section-subtitle">How can you communicate?</p>
        <h6 className="section-title mb-5">Contact Me</h6>
        <form className="contact-form col-md-10 col-lg-8 m-auto" onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-group col-sm-6">
              <input
                type="text"
                size="50"
                id="name"
                className="form-control"
                placeholder="Your Name"
                required
              />
            </div>
            <div className="form-group col-sm-6">
              <input
                type="email"
                id="email"
                className="form-control"
                placeholder="Enter Email"
                required
              />
            </div>
            <div className="form-group col-sm-12">
              <textarea
                name="comments"
                id="comments"
                rows="6"
                className="form-control"
                placeholder="Write Something"
              ></textarea>
            </div>
            <div className="form-group col-sm-12 mt-3">
              <input
                type="submit"
                value={buttonText}
                className="btn btn-outline-primary rounded"
              />
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};
export default Contact;
