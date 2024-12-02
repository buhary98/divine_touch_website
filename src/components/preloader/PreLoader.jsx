import React, { useEffect, useState } from "react";
import "./PreLoader.css";

const PreLoader = ({ currentTheme }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`js-preloader ${!isLoading ? "loaded" : ""} ${currentTheme}`}
      aria-busy={isLoading}
      aria-live="polite"
      role="alert"
    >
      <div className="preloader-inner">
        <span className="dot"></span>
        <div className="dots">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </div>
  );
};

export default PreLoader;
