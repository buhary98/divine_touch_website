import React, { useState, useCallback, useEffect } from "react";
import debounce from "lodash.debounce";

import ContactImg from "../../assets/images/contact-dec.png";
import ContactLeft from "../../assets/images/contact-left-dec.png";

import "./Contact.css";

/* const ContactImg = React.lazy(() =>
  import("../../assets/images/contact-dec.png")
);
const ContactLeft = React.lazy(() =>
  import("../../assets/images/contact-left-dec.png")
); */

const Contact = React.memo(() => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [formError, setFormError] = useState(null);
  const [formSuccess, setFormSuccess] = useState(null);
  const [contactImgLoaded, setContactImgLoaded] = useState(false);

  const handleChange = useCallback(
    debounce((e) => {
      setFormData((prevFormData) => ({
        ...prevFormData,
        [e.target.name]: e.target.value,
      }));
    }, 300),
    []
  );

  const handleSubmit = useCallback(async (e) => {
    e.preventDefault();
    setFormError(null);
    setFormSuccess(null);

    try {
      const emailjs = await import("emailjs-com");
      const result = await emailjs.sendForm(
        "service_87iwmac",
        "template_d66np3l",
        e.target,
        "OCjA3FLwp1URC4qCR"
      );
      console.log(result.text);
      setFormSuccess("Mission Accomplished!");
      setFormData({ name: "", email: "", message: "" });

      setTimeout(() => {
        setFormSuccess(null);
      }, 4000);
    } catch (error) {
      console.error("EmailJS Error:", error);
      setFormError("Oops! Give it Another Shot.");
      setTimeout(() => {
        setFormError(null);
      }, 4000);
    }
  }, []);

  useEffect(() => {
    const imgObserver = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setContactImgLoaded(true);
      }
    });
    const target = document.querySelector(".contact-dec");
    if (target) {
      imgObserver.observe(target);
    }
    return () => imgObserver.disconnect();
  }, []);

  return (
    <div id="contact" className="contact-us section">
      <div className="container">
        <div className="row">
          <div className="col-lg-7">
            <div className="section-heading">
              <h2>
                Feel free to <em>Contact</em> our <span>Exports</span>
              </h2>
              <div id="map">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3691.500268890293!2d114.17258617474927!3d22.29691224301928!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x340400f1e009f217%3A0xd3e0b06815da4dde!2sEu%20Yan%20Sang%20Tower%2C%2011-15%20Chatham%20Rd%20S%2C%20Tsim%20Sha%20Tsui%2C%20Hong%20Kong!5e0!3m2!1sen!2sin!4v1727140077005!5m2!1sen!2sin"
                  title="Google Map"
                  width="100%"
                  height="360px"
                  frameBorder="0"
                  loading="lazy"
                  style={{ border: "0" }}
                  allowFullScreen
                />
              </div>
              <div className="info">
                <span>
                  <i className="fa fa-phone"></i>
                  <p>+852-6060-6457</p>
                </span>
                <span>
                  <i className="fa fa-envelope"></i>
                  <p>info@company.com</p>
                </span>
              </div>
            </div>
          </div>
          <div className="col-lg-5 align-self-center">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="row">
                <div className="col-lg-12">
                  <fieldset>
                    <input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleChange}
                      aria-label="Name"
                      required
                    />
                  </fieldset>
                </div>
                <div className="col-lg-12">
                  <fieldset>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      pattern="[^ @]*@[^ @]*"
                      placeholder="Your Email"
                      aria-label="Email"
                      required
                    />
                  </fieldset>
                </div>
                <div className="col-lg-12">
                  <fieldset>
                    <textarea
                      name="message"
                      placeholder="Your Message"
                      value={formData.message}
                      onChange={handleChange}
                      aria-label="Message"
                      required
                    />
                  </fieldset>
                </div>
                <div className="col-lg-12">
                  <fieldset>
                    <button type="submit" aria-label="Send Message">
                      Send Message
                    </button>
                  </fieldset>
                </div>
              </div>
              {formError && <p style={{ color: "red" }}>{formError}</p>}
              {formSuccess && <p style={{ color: "green" }}>{formSuccess}</p>}
            </form>
          </div>
        </div>
      </div>
      <div className="contact-dec">
        {contactImgLoaded && (
          <React.Suspense fallback={<div>Loading...</div>}>
            <img src={ContactImg} alt="Decoration" />
          </React.Suspense>
        )}
      </div>
      <div className="contact-left-dec">
        <React.Suspense fallback={<div>Loading...</div>}>
          <img src={ContactLeft} alt="Decoration" />
        </React.Suspense>
      </div>
    </div>
  );
});

export default Contact;
