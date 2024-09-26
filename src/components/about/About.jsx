import React from "react";

import AboutLeft from "../../assets/images/about-left-image.jpg";
import Icon1 from "../../assets/images/about-icon-01.png";
import Icon2 from "../../assets/images/about-icon-02.png";
import Icon3 from "../../assets/images/about-icon-03.png";

import "./About.css";

const About = () => {
  return (
    <div id="about" className="about-us section">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 align-self-center">
            <div className="left-image">
              <img src={AboutLeft} alt="Two Girls working together" />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="section-heading">
              <h2>
                Transform <em>your ideas</em> into a stunning reality with{" "}
                <span>Our designs</span>
              </h2>
              <p>
                At Divine Touch Interiors, we pride ourselves on being a leading
                design boutique situated in Hong Kong, specializing in luxurious
                residential and commercial spaces, as well as bespoke furniture,
                lighting, and carpets. With nearly two decades of expertise, our
                focus is on creating beautifully curated interiors that
                harmoniously combine comfort, sophistication, and practicality.
                We strive to design environments that are both striking and
                enduring.
              </p>
              <div className="row">
                <div className="col-lg-4">
                  <div className="fact-item">
                    <div className="count-area-content">
                      <div className="icon">
                        <img src={Icon1} alt="SEO Projects" />
                      </div>
                      <div className="count-digit">15</div>
                      <div className="count-title">Projects</div>
                      <p>
                        Our commitment to excellence, creativity, and innovation
                        is evident in every project we undertake.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="fact-item">
                    <div className="count-area-content">
                      <div className="icon">
                        <img src={Icon2} alt="Websites" />
                      </div>
                      <div className="count-digit">8</div>
                      <div className="count-title">Services</div>
                      <p>
                        We offer a comprehensive range of interior design
                        services tailored to meet your unique needs.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="fact-item">
                    <div className="count-area-content">
                      <div className="icon">
                        <img src={Icon3} alt="Satisfied Clients" />
                      </div>
                      <div className="count-digit">10</div>
                      <div className="count-title">Clients</div>
                      <p>
                        We aim to deliver distinctive spaces that our clients
                        will cherish for years to come.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
