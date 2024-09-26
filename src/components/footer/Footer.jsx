import React from "react";

import Logo from "../../assets/images/logo.png";

import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-lg-3">
            <div className="about footer-item">
              <div className="logo">
                <p>
                  <img src={Logo} alt="Onix Digital TemplateMo" />
                </p>
              </div>
              <p>info@company.com</p>
              <ul>
                <li>
                  <p>
                    <i className="fa fa-facebook"></i>
                  </p>
                </li>
                <li>
                  <p>
                    <i className="fa fa-twitter"></i>
                  </p>
                </li>
                <li>
                  <p>
                    <i className="fa fa-behance"></i>
                  </p>
                </li>
                <li>
                  <p>
                    <i className="fa fa-instagram"></i>
                  </p>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="services footer-item">
              <h4>Services</h4>
              <ul>
                <li>
                  <p>SEO Development</p>
                </li>
                <li>
                  <p>Business Growth</p>
                </li>
                <li>
                  <p>Social Media Management</p>
                </li>
                <li>
                  <p>Website Optimization</p>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="community footer-item">
              <h4>Community</h4>
              <ul>
                <li>
                  <p>Digital Marketing</p>
                </li>
                <li>
                  <p>Business Ideas</p>
                </li>
                <li>
                  <p>Website Checkup</p>
                </li>
                <li>
                  <p>Page Speed Test</p>
                </li>
              </ul>
            </div>
          </div>
          {/* <div className="col-lg-3">
            <div className="subscribe-newsletters footer-item">
              <h4>Subscribe Newsletters</h4>
              <p>Get our latest news and ideas to your inbox</p>
              <form action="#" method="get">
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Your Email"
                  required
                />
                <button type="submit" id="form-submit" className="main-button">
                  <i className="fa fa-paper-plane-o"></i>
                </button>
              </form>
            </div>
          </div> */}
          <div className="col-lg-12">
            <div className="copyright">
              <p>Copyright © 2024 Divine Touch. All Rights Reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
