import React, { useState, useEffect, useCallback } from "react";
import { useSelector } from "react-redux";

import "animate.css";
import { WOW } from "wowjs";

import Logo1 from "../../assets/images/logo-01.png";
import Logo2 from "../../assets/images/logo-02.png";

import "./Header.css";

const toggleLogo = {
  "theme-default": Logo1,
  "theme-one": Logo1,
  "theme-two": Logo2,
  "theme-three": Logo2,
};

const Header = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const theme = useSelector((state) => state.theme.theme);

  useEffect(() => {
    const wow = new WOW({ live: false });
    wow.init();
    wow.sync();
  }, []);

  const updateActiveLinkOnScroll = useCallback(() => {
    const sections = document.querySelectorAll(".scroll-to-section a");
    let scrollPosition = window.scrollY + 1;

    sections.forEach((link) => {
      const section = document.querySelector(link.getAttribute("href"));
      if (section) {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;

        if (
          scrollPosition >= sectionTop &&
          scrollPosition < sectionTop + sectionHeight
        ) {
          setActiveSection(link.getAttribute("href").substring(1));
        }
      }
    });
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const boxHeight =
        document.querySelector(".header-text")?.clientHeight || 0;
      const headerHeight = document.querySelector("header").clientHeight;
      const scrollY = window.scrollY;

      if (scrollY >= boxHeight - headerHeight) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }

      updateActiveLinkOnScroll();
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [updateActiveLinkOnScroll]);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleScrollToSection = (e, section) => {
    e.preventDefault();
    const target = document.querySelector(section);
    if (target) {
      window.scrollTo({
        top: target.offsetTop + 1,
        behavior: "smooth",
      });
    }
    setIsMenuOpen(false);
  };

  const handleResize = () => {
    if (window.innerWidth > 991) {
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header
      className={`header-area header-sticky wow slideInDown ${
        isSticky ? "background-header" : ""
      }`}
      data-wow-duration="0.75s"
      data-wow-delay="2.8s"
    >
      <div className="container">
        <div className="row">
          <div className="col-12">
            <nav className="main-nav">
              <a href="/" className="logo">
                <img src={toggleLogo[theme] || ""} alt="Logo" />
                <p>
                  Divine Touch Interiors
                </p>
              </a>

              <ul className={`nav ${isMenuOpen ? "open" : ""}`}>
                {["home", "about", "services", "project", "contact"].map(
                  (section) => (
                    <li className="scroll-to-section" key={section}>
                      <a
                        href={`#${section}`}
                        className={activeSection === section ? "active" : ""}
                        onClick={(e) => handleScrollToSection(e, `#${section}`)}
                      >
                        {section.charAt(0).toUpperCase() + section.slice(1)}
                      </a>
                    </li>
                  )
                )}
              </ul>
              <div
                className={`menu-trigger ${isMenuOpen ? "active" : ""}`}
                onClick={handleMenuToggle}
              >
                <span></span>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
