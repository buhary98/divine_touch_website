import React, { useEffect, useState } from 'react';
import './PreLoader.css';

const PreLoader = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading completion after a delay
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000); // Adjust delay as needed

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`js-preloader ${!isLoading ? 'loaded' : ''}`}>
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
