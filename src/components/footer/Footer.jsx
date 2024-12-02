import React from "react";
import "./Footer.css";

const socialMediaIcons = [
  {
    className: "fa-brands fa-facebook",
    label: "Facebook",
    link: "https://www.facebook.com/DivineTouchInteriorsHK",
  },
  {
    className: "fa-brands fa-instagram",
    label: "Instagram",
    link: "https://www.instagram.com/divinetouchdecors/",
  },
];

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="footer">
              <div className="footer-item">
                <ul>
                  {socialMediaIcons.map((icon, index) => (
                    <li key={index}>
                      <a
                        href={icon.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={icon.label}
                        title={icon.label}
                      >
                        <i className={icon.className}></i>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="copyright">
                <p>
                  Copyright © 2024 Divine Touch Interiors. All&nbsp;Rights&nbsp;Reserved.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
