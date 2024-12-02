import React, { useMemo } from "react";
import { useSelector } from "react-redux";
import Slider from "react-slick";

import ServiceRight from "../../assets/images/services-right-dec.png";
import ServiceRightHighRes from "../../assets/images/services-right-dec.png";
import ServiceLeft from "../../assets/images/services-left-dec.png";
import ServiceLeftHighRes from "../../assets/images/services-left-dec.png";

import DefaultIcon1 from "../../assets/images/service-icon-01.png";
import DefaultIcon2 from "../../assets/images/service-icon-02.png";
import DefaultIcon3 from "../../assets/images/service-icon-03.png";
import DefaultIcon4 from "../../assets/images/service-icon-04.png";
import DefaultIcon5 from "../../assets/images/service-icon-05.png";

import FirstToggleIcon1 from "../../assets/images/service-icon-06.png";
import FirstToggleIcon2 from "../../assets/images/service-icon-07.png";
import FirstToggleIcon3 from "../../assets/images/service-icon-08.png";
import FirstToggleIcon4 from "../../assets/images/service-icon-09.png";
import FirstToggleIcon5 from "../../assets/images/service-icon-10.png";

import SecondToggleIcon1 from "../../assets/images/service-icon-11.png";
import SecondToggleIcon2 from "../../assets/images/service-icon-12.png";
import SecondToggleIcon3 from "../../assets/images/service-icon-13.png";
import SecondToggleIcon4 from "../../assets/images/service-icon-14.png";
import SecondToggleIcon5 from "../../assets/images/service-icon-15.png";

import "./Service.css";

const themeIcons = {
  "theme-default": [
    DefaultIcon1,
    DefaultIcon2,
    DefaultIcon3,
    DefaultIcon4,
    DefaultIcon5,
  ],
  "theme-one": [
    FirstToggleIcon1,
    FirstToggleIcon2,
    FirstToggleIcon3,
    FirstToggleIcon4,
    FirstToggleIcon5,
  ],
  "theme-two": [
    SecondToggleIcon1,
    SecondToggleIcon2,
    SecondToggleIcon3,
    SecondToggleIcon4,
    SecondToggleIcon5,
  ],
  "theme-three": [
    FirstToggleIcon1,
    FirstToggleIcon2,
    FirstToggleIcon3,
    FirstToggleIcon4,
    FirstToggleIcon5,
  ],
};

const servicesData = [
  {
    title: "Designing and 3D",
    description:
      "Designing and 3D services bring your vision to life with detailed plans and realistic visualizations for your space.",
  },
  {
    title: "Equipment Procurement",
    description:
      "Involves sourcing and supplying essential tools and appliances tailored to a restaurant's operational needs.",
  },
  {
    title: "Demolition Works",
    description:
      "Demolition works involve efficiently removing structures to prepare sites for new renovation.",
  },
  {
    title: "Restaurant Setup",
    description:
      "Restaurant project encompasses the complete process from initiation to obtaining necessary licenses.",
  },
  {
    title: "Hospitality Licenses",
    description:
      "These permits allow hotels and restaurants to operate legally by meeting essential food, health, and safety regulations.",
  },
];

const ServiceItem = React.memo(({ title, icon, description }) => (
  <div className="item">
    <h4>{title}</h4>
    <div className="icon">
      <img src={icon} alt={`${title} service icon`} loading="lazy" />
    </div>
    <p>{description}</p>
  </div>
));

const Service = () => {
  const theme = useSelector((state) => state.theme.theme);
  const icons = themeIcons[theme] || themeIcons["theme-default"];

  const dataWithIcons = useMemo(
    () =>
      servicesData.map((service, index) => ({
        ...service,
        icon: icons[index],
      })),
    [icons]
  );

  const sliderSettings = useMemo(
    () => ({
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: Math.min(3, servicesData.length),
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      arrows: false,
      responsive: [
        { breakpoint: 1024, settings: { slidesToShow: 2 } },
        { breakpoint: 767, settings: { slidesToShow: 1 } },
      ],
    }),
    []
  );

  return (
    <div id="services" className="our-services section">
      <div className="container">
        <div className="services-right-dec">
          <img
            src={ServiceRight}
            alt="Service section right decorative element"
            loading="lazy"
            srcSet={`${ServiceRight} 305w, ${ServiceRightHighRes} 1024w`}
            sizes="(max-width: 1024px) 305px, 1024px"
          />
        </div>
        <div className="services-left-dec">
          <img
            src={ServiceLeft}
            alt="Service section left decorative element"
            loading="lazy"
            srcSet={`${ServiceLeft} 387w, ${ServiceLeftHighRes} 1024w`}
            sizes="(max-width: 1024px) 387px, 1024px"
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
            <Slider {...sliderSettings}>
              {dataWithIcons.map((service, index) => (
                <ServiceItem
                  key={index}
                  title={service.title}
                  icon={service.icon}
                  description={service.description}
                />
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
