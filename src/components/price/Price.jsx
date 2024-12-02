import React, {
  useState,
  useRef,
  useEffect,
  useMemo,
  useCallback,
} from "react";
import { motion } from "framer-motion";
import "./Price.css";

import PriceLeft from "../../assets/images/tables-left-dec.png";
import PriceRight from "../../assets/images/tables-right-dec.png";

const popupVariants = {
  hidden: { opacity: 0, scale: 0.7 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { type: "spring", stiffness: 300, damping: 10 },
  },
};

const Price = React.memo(() => {
  const [activePlan, setActivePlan] = useState(null);
  const popupRef = useRef(null);

  const handlePlanClick = useCallback((index) => {
    setActivePlan(index);
  }, []);

  const pricingPlans = useMemo(
    () => [
      {
        title: "Standard Plan",
        desp: "Our Standard Plan offers tailored solutions for General Restaurant and Office Renovations. This plan focuses on essential upgrades, functional enhancements, and aesthetic improvements to meet your specific needs. Whether you’re revamping a cozy restaurant or updating a productive office space, we ensure quality results within your budget.",
        className: "second-item",
        buttonText: "Read more...",
        details: [
          {
            title: "General Restaurant",
            oldPrice: "HKD",
            newPrice: "$300k - 600k",
            desp: "Our Standard Plan for General Restaurant services is designed to meet the core requirements of setting up or upgrading your restaurant. From planning layouts to ensuring compliance with essential standards, we focus on functionality and customer comfort within range.",
          },
          {
            title: "Office Renovations",
            oldPrice: "HKD",
            newPrice: "$100K - 200K",
            desp: "Our Standard Plan for Office Renovations ensures a productive and modern workspace. We focus on functional improvements, ergonomic layouts, and subtle aesthetic upgrades, creating an environment that inspires collaboration and efficiency without exceeding your budget.",
          },
        ],
      },
      {
        title: "Advanced Plan",
        desp: "Our Advanced Plan goes beyond basics, delivering comprehensive design and services. From intricate detailing and premium materials to advanced customization, this plan caters to high-end restaurant and office transformation projects. Experience cutting-edge designs and exceptional functionality crafted to perfection.",
        className: "third-item",
        buttonText: "Read more...",
        details: [
          {
            title: "General Restaurant",
            oldPrice: "HKD",
            newPrice: "$650k+",
            desp: "Our Advanced Plan for General Restaurant services provides a complete and premium solution for designing or upgrading your restaurant. From custom layouts and high-quality materials to innovative features and branding integration, this plan ensures a dining space that stands out and leaves a lasting impression.",
          },
          {
            title: "Office Renovations",
            oldPrice: "HKD",
            newPrice: "$250k+",
            desp: "Our Advanced Plan for Office Renovations delivers a top-tier transformation with a focus on innovation and detail. This plan includes customized designs, premium finishes, and advanced functional enhancements to create a modern, inspiring, and efficient workspace tailored to your business needs.",
          },
        ],
      },
    ],
    []
  );

  const renderedPlans = useMemo(
    () =>
      pricingPlans.map((plan, index) => (
        <div className="col-lg-4" key={index}>
          <div className={`item ${plan.className}`}>
            <h4>{plan.title}</h4>
            <p>{plan.desp}</p>
            <div className="main-blue-button-hover">
              <button type="button" onClick={() => handlePlanClick(index)}>
                {plan.buttonText}
              </button>
            </div>
          </div>
        </div>
      )),
    [pricingPlans, handlePlanClick]
  );

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        setActivePlan(null);
      }
    };

    if (activePlan !== null) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [activePlan]);

  return (
    <div id="pricing" className="pricing-tables">
      <div className="tables-left-dec">
        <img
          src={PriceLeft}
          alt="Left decorative pricing table"
          loading="lazy"
        />
      </div>
      <div className="tables-right-dec">
        <img
          src={PriceRight}
          alt="Right decorative pricing table"
          loading="lazy"
        />
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-6 offset-lg-3">
            <div className="section-heading">
              <h2>
                Select a <em>plan</em> for your <span>projects</span>
              </h2>
            </div>
          </div>
        </div>
        <div className="row price-container">{renderedPlans}</div>
      </div>
      {activePlan !== null && (
        <motion.div
          className="popup-backdrop"
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={popupVariants}
        >
          <div className="popup-content" ref={popupRef}>
            <button
              className="close-button"
              onClick={() => setActivePlan(null)}
            >
              &times;
            </button>
            <div className="popup-inner container">
              <div className="row">
                {pricingPlans[activePlan].details.map((detail, index) => (
                  <div className="col-lg-6" key={index}>
                    <div className="list">
                      <h4>{detail.title}</h4>
                      <em>{detail.oldPrice}</em>
                      <span>{detail.newPrice}</span>
                      <p>{detail.desp}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
});

export default Price;
