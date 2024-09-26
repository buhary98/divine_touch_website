import React, { forwardRef } from "react";

const FactItem = forwardRef(
  ({ icon, iconClass, digit, title, text, altText }, ref) => {
    return (
      <div className="fact-item" ref={ref}>
        <div className="count-area-content">
          <div className="icon">
            <img src={icon} alt={altText || title} className={iconClass} />
          </div>
          <div className="count-digit">{digit}</div>
          <div className="count-title">{title}</div>
          <p>{text}</p>
        </div>
      </div>
    );
  }
);

export default FactItem;
