import React from "react";
import PriceLeft from "../../assets/images/tables-left-dec.png";
import PriceRight from "../../assets/images/tables-right-dec.png";
import "./Price.css";

const Price = () => {
  return (
    <div id="pricing" className="pricing-tables">
      <div className="tables-left-dec">
        <img src={PriceLeft} alt="Left decorative pricing table" />
      </div>
      <div className="tables-right-dec">
        <img src={PriceRight} alt="Right decorative pricing table" />
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
        <div className="row">
          <div className="col-lg-4">
            <div className="item first-item">
              <h4>Starter Plan</h4>
              <em>$160/mo</em>
              <span>$140</span>
              <ul>
                <li>10 Projects</li>
                <li>100 GB space</li>
                <li>20 SEO checkups</li>
                <li>Basic Support</li>
              </ul>
              <div className="main-blue-button-hover">
                <button type="button">Get Started</button>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="item second-item">
              <h4>Standard Plan</h4>
              <em>$240/mo</em>
              <span>$200</span>
              <ul>
                <li>20 Projects</li>
                <li>200 GB space</li>
                <li>50 SEO checkups</li>
                <li>Pro Support</li>
              </ul>
              <div className="main-blue-button-hover">
                <button type="button">Get it Now</button>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="item third-item">
              <h4>Advanced Plan</h4>
              <em>$360/mo</em>
              <span>$280</span>
              <ul>
                <li>30 Projects</li>
                <li>300 GB space</li>
                <li>100 SEO checkups</li>
                <li>Best Support</li>
              </ul>
              <div className="main-blue-button-hover">
                <button type="button">Buy Now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Price;
