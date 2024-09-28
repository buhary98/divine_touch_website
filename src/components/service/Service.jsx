import React from "react";
import Slider from "react-slick";

import ServiceRight from "../../assets/images/services-right-dec.png";
import ServiceLeft from "../../assets/images/services-left-dec.png";
import Icon1 from "../../assets/images/service-icon-01.png";
import Icon2 from "../../assets/images/service-icon-02.png";
import Icon3 from "../../assets/images/service-icon-03.png";
import Icon4 from "../../assets/images/service-icon-04.png";

import "./Service.css";

const Service = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: Math.min(3, servicesData.length),
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div id="services" className="our-services section">
      <div className="container">
        <div className="services-right-dec">
          <img
            src={ServiceRight}
            alt="Service section right decorative element"
            loading="lazy"
          />
        </div>
        <div className="services-left-dec">
          <img
            src={ServiceLeft}
            alt="Service section left decorative element"
            loading="lazy"
          />
        </div>
        <div className="row">
          <div className="col-lg-6 offset-lg-3">
            <div className="section-heading">
              <h2>
                We Provide The Best <em>Service</em> With Our{" "}
                <span>Masterpiece</span>
              </h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <Slider {...settings}>
              {servicesData.map((service, index) => (
                <div className="item" key={index}>
                  <h4>{service.title}</h4>
                  <div className="icon">
                    <img
                      src={service.icon}
                      alt={`${service.title} icon`}
                      loading="lazy"
                    />
                  </div>
                  <p>{service.description}</p>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

const servicesData = [
  {
    title: "Designing and 3D",
    icon: Icon1,
    description:
      "Designing and 3D services bring your vision to life with detailed plans and realistic visualizations for your space.",
  },
  {
    title: "Equipment Procurement",
    icon: Icon2,
    description:
      "Involves sourcing and supplying essential tools and appliances tailored to a restaurant's operational needs.",
  },
  {
    title: "Demolition Works",
    icon: Icon3,
    description:
      "Demolition works involve efficiently removing structures to prepare sites for new renovation.",
  },
  {
    title: "Restaurant Setup",
    icon: Icon4,
    description:
      "Restaurant project encompasses the complete process from initiation to obtaining necessary licenses.",
  },
  {
    title: "Optimizing your websites for Speed",
    icon: Icon1,
    description: "Get to know more about the topic in details.",
  },
];

export default Service;
