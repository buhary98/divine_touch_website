import React, { lazy, Suspense, useEffect, useRef, useState } from "react";

import BannerLeft from "../../assets/images/baner-dec-left.png";
import BannerRight from "../../assets/images/banner-right-image.webp";

import "./Banner.css";

const Slider = lazy(() => import("react-slick"));

const customPaging = (i) => (
  <div key={`dot-${i + 1}`} className="custom-dot">
    {i + 1}
  </div>
);

const sliderContent = [
  {
    title: "Elevate Your Space with Divine Touch",
    emphasizedText: "Get in Touch",
    mainText: "to make your Dreams come true",
    description:
      "We’re just a message away! Contact us to start your journey towards a beautifully designed space. Our dedicated team is here to answer your questions and help you bring your ideas to fruition.",
  },
  {
    title: "Our Offerings",
    emphasizedText: "Experience the Service",
    mainText: "paired with our Creations",
    description:
      "We provide tailored design services that reflect your unique style and requirements. Our focus is on creating harmonious environments that inspire and elevate your everyday living.",
  },
  {
    title: "Our Masterpieces",
    emphasizedText: "Check out Our Projects",
    mainText: "for creative Design solutions",
    description:
      "Our diverse projects highlight innovative design solutions that merge style with functionality. Each space we create is thoughtfully crafted to suit the individual needs of our clients.",
  },
];

const DownButtons = () => (
  <div className="down-buttons">
    <div className="main-blue-button-hover">
      <a href="#contact" aria-label="Message us now">
        Message Us Now
      </a>
    </div>
    <div className="call-button">
      <div className="lnk">
        <i className="fa fa-phone" aria-hidden="true"></i> +852-6060-6457
      </div>
    </div>
  </div>
);

const Banner = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    customPaging: customPaging,
    dotsClass: "slick-dots custom-dots",
    pauseOnHover: true,
    arrows: false,
  };

  const [isImageVisible, setImageVisible] = useState(false);
  const leftImageRef = useRef(null);
  const rightImageRef = useRef(null);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    };

    const leftImageObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setImageVisible(true);
          leftImageObserver.unobserve(leftImageRef.current);
        }
      });
    }, observerOptions);

    const rightImageObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setImageVisible(true);
          rightImageObserver.unobserve(rightImageRef.current);
        }
      });
    }, observerOptions);

    if (leftImageRef.current) {
      leftImageObserver.observe(leftImageRef.current);
    }

    if (rightImageRef.current) {
      rightImageObserver.observe(rightImageRef.current);
    }

    return () => {
      leftImageObserver.disconnect();
      rightImageObserver.disconnect();
    };
  }, []);

  return (
    <div className="main-banner" id="home">
      <img
        ref={leftImageRef}
        src={isImageVisible ? BannerLeft : ""}
        alt="Left Decoration"
        className={`banner-decor-left ${
          isImageVisible ? "loaded" : "loading"
        }`}
      />
      <img
        ref={rightImageRef}
        src={isImageVisible ? BannerRight : ""}
        alt="Right Decoration"
        className={`banner-decor-right ${
          isImageVisible ? "loaded" : "loading"
        }`}
      />
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="row">
              <div className="col-lg-6 align-self-center">
                <Suspense fallback={<div className="loader">Loading...</div>}>
                  <Slider {...settings} className="owl-banner">
                    {sliderContent.map((content, index) => (
                      <div className="item header-text" key={index}>
                        <h6>{content.title}</h6>
                        <h2>
                          <em>{content.emphasizedText}</em> {content.mainText}
                        </h2>
                        <p>{content.description}</p>
                        <DownButtons />
                      </div>
                    ))}
                  </Slider>
                </Suspense>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
