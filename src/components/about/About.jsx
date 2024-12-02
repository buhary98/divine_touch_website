import React, { useState, useEffect, useRef } from "react";
import AboutLeft from "../../assets/images/about-left-image.jpg";
import "./About.css";

const About = () => {
  const [imageInView, setImageInView] = useState(false);
  const imageRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setImageInView(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (imageRef.current) observer.observe(imageRef.current);

    return () => observer.disconnect();
  }, []);

  const heading = (
    <>
      Transform <em>your ideas</em> into a stunning reality with{" "}
      <span>Our designs</span>
    </>
  );

  const content = `
    At Divine Touch Interiors, we pride ourselves on being a leading
    design boutique situated in Hong Kong, specializing in luxurious
    residential and commercial spaces, as well as bespoke furniture,
    lighting, and carpets. With nearly two decades of expertise, our
    focus is on creating beautifully curated interiors that
    harmoniously combine comfort, sophistication, and practicality.
    We strive to design environments that are both striking and
    enduring.

    In Hong Kong, people expect efficiency, particularly in business
    where every second counts. We have seen many clients suffer due
    to their choice of inexperienced catering decoration companies,
    leading to confusion and mistakes that often result in
    significant losses. To address this, our company offers more
    than just a decoration team; we also have dedicated catering
    license consultants and a marketing department. This ensures a
    true one-stop service for our clients.
  `;

  return (
    <div id="about" className="about-us section">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 align-self-center">
            <div className="left-image">
              <img
                ref={imageRef}
                src={imageInView ? AboutLeft : ""}
                alt="Collaborative design work in progress"
                className={imageInView ? "loaded" : "loading"}
                loading="lazy"
              />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="section-heading">
              <h2>{heading}</h2>
              <p>{content}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
