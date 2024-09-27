import React from "react";
import Slider from "react-slick";

import ProjectImg1 from "../../assets/images/project-01.jpg";
import ProjectImg2 from "../../assets/images/project-02.jpg";
import ProjectImg3 from "../../assets/images/project-03.jpg";
import ProjectImg4 from "../../assets/images/project-04.jpg";
import ProjectImg5 from "../../assets/images/project-05.jpg";
import ProjectLeft from "../../assets/images/portfolio-left-dec.png";

import "./Project.css";

const Project = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const projectItems = [
    {
      image: ProjectImg1,
      title: "Commercial Office",
      category: "Commercial interior design",
      link: "#",
    },
    {
      image: ProjectImg2,
      title: "Private House",
      category: "Residential interior design",
      link: "#",
    },
    {
      image: ProjectImg3,
      title: "Restaurants",
      category: "Hospitality design",
      link: "#",
    },
    {
      image: ProjectImg4,
      title: "Barber Shop",
      category: "Service-based commercial design",
      link: "#",
    },
    {
      image: ProjectImg5,
      title: "Public Housing",
      category: "Affordable housing design",
      link: "#",
    },
  ];

  return (
    <div id="project" className="project-section section">
      <div className="project-section__left-decoration">
        <img src={ProjectLeft} alt="Decoration on the left side" />
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-6 offset-lg-3">
            <div className="section-heading">
              <h2>
                Our <em>Projects</em> for Our <span>Clients</span>
              </h2>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-12">
            <Slider {...settings}>
              {projectItems.map((item, index) => (
                <div key={index} className="project-item">
                  <div className="project-item__thumb">
                    <img
                      src={item.image}
                      alt={`${item.title} project`}
                      loading="lazy"
                    />
                    <div className="project-item__hover-effect">
                      <div className="inner-content">
                        <a
                          href={item.link}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <h4>{item.title}</h4>
                        </a>
                        <span>{item.category}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
