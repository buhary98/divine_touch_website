import React, { lazy, Suspense, useMemo, useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import "./Banner.css";

import { bannerImages, sliderContent } from "./bannerData";

const Slider = lazy(() => import("react-slick"));

const customPaging = (i) => (
  <div key={`dot-${i + 1}`} className="custom-dot">
    {i + 1}
  </div>
);

const Banner = () => {
  const theme = useSelector((state) => state.theme.theme);

  const settings = useMemo(
    () => ({
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      customPaging,
      dotsClass: "slick-dots custom-dots banner-dots",
      pauseOnHover: true,
      arrows: false,
    }),
    []
  );

  const leftImageRef = useRef(null);
  const centerImageRef = useRef(null);
  const rightImageRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("loaded");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    [leftImageRef, centerImageRef, rightImageRef].forEach((ref) => {
      if (ref.current) observer.observe(ref.current);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="main-banner" id="home">
      <img
        loading="lazy"
        ref={leftImageRef}
        src={bannerImages[theme].left}
        alt="Left Decoration"
        className="banner-decor-left"
      />
      <img
        loading="lazy"
        ref={centerImageRef}
        src={bannerImages[theme].center}
        alt="Center Decoration"
        className="banner-decor-center"
      />
      <img
        loading="lazy"
        ref={rightImageRef}
        src={bannerImages[theme].right}
        alt="Right Decoration"
        className="banner-decor-right"
      />
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="row">
              <div className="col-lg-6 col-md-8 align-self-center">
                <Suspense fallback={<div className="loader">Loading...</div>}>
                  <Slider {...settings}>
                    {sliderContent.map((content, index) => (
                      <div className="item header-text" key={index}>
                        <h6>{content.title}</h6>
                        <h2>
                          <em>{content.emphasizedText}</em> {content.mainText}
                        </h2>
                        <p>{content.description}</p>
                        <div className="down-buttons">
                          <div className="main-blue-button-hover">
                            <a href={`#${content.link}`}>{content.buttonText}</a>
                          </div>
                          <div className="call-button">
                            <div className="lnk">
                              <i className="fa fa-phone"></i> +852-6060-6457
                            </div>
                          </div>
                        </div>
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
