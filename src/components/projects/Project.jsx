import React, {
  useState,
  useRef,
  useEffect,
  useCallback,
  useMemo,
} from "react";
import { motion } from "framer-motion";
import Slider from "react-slick";

import ProjectImg1 from "../../assets/images/project-01.jpg";
import ProjectImg2 from "../../assets/images/project-02.jpg";
import ProjectImg3 from "../../assets/images/project-03.jpg";
import ProjectImg4 from "../../assets/images/project-04.jpg";
import ProjectImg5 from "../../assets/images/project-05.jpeg";
import ProjectLeft from "../../assets/images/portfolio-left-dec.png";

import "./Project.css";

const sliderSettings = {
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

const popupVariants = {
  hidden: { opacity: 0, scale: 0.5, y: 50 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 50,
      damping: 20,
      staggerChildren: 0.3,
    },
  },
};

const Project = () => {
  const [activePopup, setActivePopup] = useState(null);
  const popupRef = useRef(null);

  const handleClickOutside = useCallback((event) => {
    if (popupRef.current && !popupRef.current.contains(event.target)) {
      setActivePopup(null);
    }
  }, []);

  useEffect(() => {
    if (activePopup !== null) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [activePopup, handleClickOutside]);

  const projectItems = useMemo(
    () => [
      {
        image: ProjectImg1,
        title: "Commercial Office",
        category: "Commercial interior design",
        description:
          "Our Commercial Office projects are designed to enhance functionality, efficiency, and aesthetics. We create workspaces that foster productivity and collaboration, with innovative layouts and ergonomic solutions tailored to your business needs. Our approach combines modern design with practical features, ensuring that each office environment reflects your company’s brand and values. From open-plan offices to private workstations, we focus on optimizing space to improve workflow and employee comfort. Every element, from furniture selection to lighting design, is carefully chosen to create a professional and inspiring atmosphere that supports your team’s success and business growth.",
      },
      {
        image: ProjectImg2,
        title: "Private House",
        category: "Residential interior design",
        description:
          "Our Private House projects are centered around creating personalized, functional, and elegant living spaces that reflect your unique style and lifestyle. We focus on designing interiors that seamlessly blend comfort, aesthetics, and practicality, ensuring your home is both beautiful and livable. From open-plan living areas to cozy retreats, we prioritize thoughtful layouts and high-quality materials to bring your vision to life. Whether renovating an existing space or designing a new home, we work closely with you to create a home that suits your needs, enhances daily living, and becomes a true sanctuary for you and your family.",
      },
      {
        image: ProjectImg3,
        title: "Restaurants",
        category: "Hospitality design",
        description:
          "Our Restaurant projects focus on designing spaces that deliver an exceptional dining experience while reflecting your brand's identity. We craft interiors that blend style and functionality, ensuring an inviting atmosphere that captivates your guests. From efficient layouts that enhance workflow to stunning aesthetics that set the perfect mood, every detail is tailored to your vision. Whether it’s a cozy café, a family-friendly diner, or a high-end fine dining establishment, we combine innovative designs with practicality to create memorable environments. Our goal is to make your restaurant a destination, offering comfort, elegance, and functionality that leave a lasting impression on your patrons.",
      },
      {
        image: ProjectImg4,
        title: "Barber Shop",
        category: "Service-based commercial design",
        description:
          "Our Barber Shop projects are designed to create modern, stylish, and functional spaces that offer a unique grooming experience. We focus on crafting an environment that combines comfort, efficiency, and aesthetic appeal to suit both the barber and the client. From sleek, contemporary designs to vintage-inspired decor, our goal is to design a space that reflects your brand’s identity while providing a relaxing atmosphere for customers. Every detail, from the layout to the furniture and lighting, is carefully chosen to enhance the customer experience and ensure a welcoming environment that keeps clients coming back.",
      },
      {
        image: ProjectImg5,
        title: "Restaurant Licenses",
        category: "Food and Beverage Licenses",
        description:
          "Our Restaurant Licenses service ensures that your restaurant complies with all regulatory requirements for smooth and legal operations. Depending on your offerings and operations, you may need licenses such as the General Restaurant License, Light Refreshment Restaurant License, and Food Factory License. For more specialized needs, we handle applications for licenses like the Bakery License, Liquor License, and Frozen Confection Factory License. With our expertise, we guide you through the complex application process, ensuring you meet all necessary criteria for your business type. We help you secure the right licenses to operate efficiently and legally.",
      },
    ],
    []
  );

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
            <Slider {...sliderSettings}>
              {projectItems.map((item, index) => (
                <div key={index} className="project-item">
                  <div className="project-item__thumb">
                    <img
                      src={item.image}
                      alt={`${item.title} project`}
                      loading="lazy"
                    />
                    <div
                      className="project-item__hover-effect"
                      onClick={() => setActivePopup(index)}
                    >
                      <div className="inner-content">
                        <h4>{item.title}</h4>
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
      {activePopup !== null && (
        <motion.div
          className="project-popup-backdrop"
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={popupVariants}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <div className="project-popup-content" ref={popupRef}>
            <button
              className="close-button"
              onClick={() => setActivePopup(null)}
            >
              &times;
            </button>
            <div
              className="project-popup-inner container"
              variants={popupVariants}
            >
              <div className="descp">
                <h4>{projectItems[activePopup].title}</h4>
                <p>{projectItems[activePopup].description}</p>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default React.memo(Project);
