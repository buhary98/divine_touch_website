import React, { useState, useEffect, useRef } from "react";

import AboutLeft from "../../assets/images/about-left-image.jpg";
import Icon1 from "../../assets/images/about-icon-01.png";
import Icon2 from "../../assets/images/about-icon-02.png";
import Icon3 from "../../assets/images/about-icon-03.png";

import "./About.css";
import FactItem from "./FactItem";

const About = () => {
  const [imageInView, setImageInView] = useState(false);
  const [icon1InView, setIcon1InView] = useState(false);
  const [icon2InView, setIcon2InView] = useState(false);
  const [icon3InView, setIcon3InView] = useState(false);

  const imageRef = useRef(null);
  const icon1Ref = useRef(null);
  const icon2Ref = useRef(null);
  const icon3Ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target === imageRef.current) {
              setImageInView(true);
              observer.unobserve(entry.target);
            }
            if (entry.target === icon1Ref.current) {
              setIcon1InView(true);
              observer.unobserve(entry.target);
            }
            if (entry.target === icon2Ref.current) {
              setIcon2InView(true);
              observer.unobserve(entry.target);
            }
            if (entry.target === icon3Ref.current) {
              setIcon3InView(true);
              observer.unobserve(entry.target);
            }
          }
        });
      },
      { threshold: 0.1 }
    );

    if (imageRef.current) observer.observe(imageRef.current);
    if (icon1Ref.current) observer.observe(icon1Ref.current);
    if (icon2Ref.current) observer.observe(icon2Ref.current);
    if (icon3Ref.current) observer.observe(icon3Ref.current);

    return () => {
      if (imageRef.current) observer.unobserve(imageRef.current);
      if (icon1Ref.current) observer.unobserve(icon1Ref.current);
      if (icon2Ref.current) observer.unobserve(icon2Ref.current);
      if (icon3Ref.current) observer.unobserve(icon3Ref.current);
    };
  }, []);

  return (
    <div id="about" className="about-us section">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 align-self-center">
            <div className="left-image">
              <img
                ref={imageRef}
                src={imageInView ? AboutLeft : ""}
                alt="Two Girls working together"
                className={imageInView ? "loaded" : "loading"}
              />
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
                  <FactItem
                    icon={icon1InView ? Icon1 : ""}
                    iconClass={icon1InView ? "loaded" : "loading"}
                    ref={icon1Ref}
                    digit="15"
                    title="Projects"
                    text="Our commitment to excellence, creativity, and innovation is evident in every project we undertake."
                    altText="Icon representing completed projects"
                  />
                </div>
                <div className="col-lg-4">
                  <FactItem
                    icon={icon2InView ? Icon2 : ""}
                    iconClass={icon2InView ? "loaded" : "loading"}
                    ref={icon2Ref}
                    digit="8"
                    title="Services"
                    text="We offer a comprehensive range of interior design services tailored to meet your unique needs."
                    altText="Icon representing services offered"
                  />
                </div>
                <div className="col-lg-4">
                  <FactItem
                    icon={icon3InView ? Icon3 : ""}
                    iconClass={icon3InView ? "loaded" : "loading"}
                    ref={icon3Ref}
                    digit="10"
                    title="Clients"
                    text="We aim to deliver distinctive spaces that our clients will cherish for years to come."
                    altText="Icon representing satisfied clients"
                  />
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
