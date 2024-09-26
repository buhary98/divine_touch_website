import React from "react";
import Slider from "react-slick";
import "./Banner.css";

const Banner = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    customPaging: (i) => <div className="custom-dot">{i + 1}</div>,
    dotsClass: "slick-dots custom-dots",
    arrows: false,
  };

  return (
    <div className="main-banner" id="home">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="row">
              <div className="col-lg-6 align-self-center">
                <Slider {...settings} className="owl-banner">
                  <div className="item header-text">
                    <h6>Elevate Your Space with Divine Touch</h6>
                    <h2>
                      <em>Get in Touch</em> to make your <span>Dreams</span>{" "}
                      come true
                    </h2>
                    <p>
                      We’re just a message away! Contact us to start your
                      journey towards a beautifully designed space. Our
                      dedicated team is here to answer your questions and help
                      you bring your ideas to fruition.
                    </p>
                    <div className="down-buttons">
                      <div className="main-blue-button-hover">
                        <a href="#contact">Message Us Now</a>
                      </div>
                      <div className="call-button">
                        <div className="lnk">
                          <i className="fa fa-phone"></i> +852-6060-6457
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="item header-text">
                    <h6>Our Offerings</h6>
                    <h2>
                      Experience the <em>Service</em> paired with our{" "}
                      <span>Creations</span>
                    </h2>
                    <p>
                      We provide tailored design services that reflect your
                      unique style and requirements. Our focus is on creating
                      harmonious environments that inspire and elevate your
                      everyday living.
                    </p>
                    <div className="down-buttons">
                      <div className="main-blue-button-hover">
                        <a href="#services">Our Services</a>
                      </div>
                      <div className="call-button">
                        <div className="lnk">
                          <i className="fa fa-phone"></i> +852-6060-6457
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="item header-text">
                    <h6>Our Masterpieces</h6>
                    <h2>
                      Check out <em>Our Projects</em> for creative{" "}
                      <span>Design</span> solutions
                    </h2>
                    <p>
                      Our diverse projects highlight innovative design solutions
                      that merge style with functionality. Each space we create
                      is thoughtfully crafted to suit the individual needs of
                      our clients.
                    </p>
                    <div className="down-buttons">
                      <div className="main-blue-button-hover">
                        <a href="#project">Our Projects</a>
                      </div>
                      <div className="call-button">
                        <div className="lnk">
                          <i className="fa fa-phone"></i> +852-6060-6457
                        </div>
                      </div>
                    </div>
                  </div>
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
