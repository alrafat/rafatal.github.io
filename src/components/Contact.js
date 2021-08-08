import { useState } from "react";
import data from "../utls/data";
import CustomNavBar from "./CustomNavBar";

import { Button } from "react-bootstrap";

const Contact = () => {
  const [name, setName] = useState();
  const [subject, setSubject] = useState();
  const [message, setMessage] = useState();

  const handleSubject = (e) => {
    setSubject(e.target.value);
  };
  const handleMessage = (e) => {
    setMessage(e.target.value);
  };

  const handleName = (e) => {
    setName(e.target.value);
  };

  const handleButton = () => {
    if (name && subject && message)
      window.open(
        `mailto:${data.email}?subject=${subject}&body=hey i'm ${name} %0d%0a${message}`,
        "_blank"
      );
  };

  const handleFrom = (e) => {
    e.preventDefault();
  };

  return (
    <>
    <CustomNavBar item="/contact" />
      <section id="contact" class="contact section-show">
      <div class="container">
        <div class="section-title">
          <h2>Contact</h2>
          <p>Contact Me</p>
        </div>

        <div class="row mt-2">
          <div class="col-md-6 d-flex align-items-stretch">
            <div class="info-box">
              <i class="bx bx-map"></i>
              <h3>My Address</h3>
              <p>{data.address}</p>
            </div>
          </div>

          <div class="col-md-6 mt-4 mt-md-0 d-flex align-items-stretch">
            <div class="info-box">
              <i class="bx bx-share-alt"></i>
              <h3>Social Profiles</h3>
              <div class="social-links">
                <a href="#" class="twitter">
                  <i class="icofont-twitter"></i>
                </a>
                <a href="#" class="facebook">
                  <i class="icofont-facebook"></i>
                </a>
                <a href="#" class="instagram">
                  <i class="icofont-instagram"></i>
                </a>
                <a href="#" class="google-plus">
                  <i class="icofont-skype"></i>
                </a>
                <a href="#" class="linkedin">
                  <i class="icofont-linkedin"></i>
                </a>
              </div>
            </div>
          </div>

          <div class="col-md-6 mt-4 d-flex align-items-stretch">
            <div class="info-box">
              <i class="bx bx-envelope"></i>
              <h3>Email Me</h3>
              <p>{data.email}</p>
            </div>
          </div>
          <div class="col-md-6 mt-4 d-flex align-items-stretch">
            <div class="info-box">
              <i class="bx bx-phone-call"></i>
              <h3>Call Me</h3>
              <p>{data.phone}</p>
            </div>
          </div>
        </div>

        <form role="form" class="php-email-form mt-4" onSubmit={handleFrom}>
          <div class="form-row">
            <div class="col-md-6 form-group">
              <input
                required
                type="text"
                name="name"
                class="form-control"
                id="name"
                placeholder="Your Name"
                data-rule="minlen:4"
                data-msg="Please enter at least 4 chars"
                onChange={handleName}
              />
              <div class="validate"></div>
            </div>
            <div class="col-md-6 form-group">
              <input
                type="email"
                class="form-control"
                name="email"
                id="email"
                placeholder="Your Email"
                data-rule="email"
                data-msg="Please enter a valid email"
              />
              <div class="validate"></div>
            </div>
          </div>
          <div class="form-group">
            <input
              required
              type="text"
              class="form-control"
              name="subject"
              id="subject"
              placeholder="Subject"
              data-rule="minlen:4"
              data-msg="Please enter at least 8 chars of subject"
              onChange={handleSubject}
            />
            <div class="validate"></div>
          </div>
          <div class="form-group">
            <textarea
              required
              class="form-control"
              name="message"
              rows="5"
              data-rule="required"
              data-msg="Please write something for us"
              placeholder="Message"
              onChange={handleMessage}
            ></textarea>
            <div class="validate"></div>
          </div>
          <div class="mb-3">
            <div class="loading">Loading</div>
            <div class="error-message"></div>
            <div class="sent-message">
              Your message has been sent. Thank you!
            </div>
          </div>
          <div class="text-center">
            <Button
              type="submit"
              className="submitButton"
              target="_blank"
              onClick={handleButton}
            >
              {" "}
              Send Message{" "}
            </Button>
          </div>
        </form>
      </div>
    </section>
    </>
  );
};

export default Contact;
