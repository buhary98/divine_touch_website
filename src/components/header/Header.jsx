import React, { useState, useEffect, useCallback } from "react";
import "./Header.css";
import "animate.css";
import { WOW } from "wowjs";
import logo from "../../assets/images/logo.png";

const Header = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  // Initialize WOW.js for animations
  useEffect(() => {
    const wow = new WOW({
      live: false, // Disable automatic detection of new elements
    });
    wow.init();
    wow.sync();
  }, []);

  // Function to update the active section link on scroll
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

  // Function to handle scroll event for sticky header and updating active links
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

  // Function to toggle the menu open/close
  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Function to smoothly scroll to sections
  const handleScrollToSection = (e, section) => {
    e.preventDefault();
    const target = document.querySelector(section);
    if (target) {
      window.scrollTo({
        top: target.offsetTop + 1, // Add offset to fix scroll position
        behavior: "smooth",
      });
    }
    setIsMenuOpen(false); // Close menu after clicking on a section
  };

  // Function to close the menu when resizing the window
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
                <img src={logo} alt="Logo" />
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
                <li className="scroll-to-section">
                  <div className="main-red-button-hover">
                    <a
                      href="#contact"
                      onClick={(e) => handleScrollToSection(e, "#contact")}
                    >
                      Contact Us Now
                    </a>
                  </div>
                </li>
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
