import React, { memo } from "react";
import PropTypes from "prop-types";
import "./Chat.css";

const Chat = ({ phoneNumber, message = "" }) => {
  const handleButtonClick = () => {
    if (!phoneNumber || !/^\+?[1-9]\d{1,14}$/.test(phoneNumber)) {
      console.error("Invalid phone number");
      return;
    }
    const chatURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(chatURL, "_blank");
  };

  return (
    <button
      className="chat-button"
      onClick={handleButtonClick}
      aria-label="Chat with us on WhatsApp"
      tabIndex="0"
      title="Chat with us on WhatsApp"
    >
      <i className="fab fa-whatsapp chat-icon"></i>
    </button>
  );
};

Chat.propTypes = {
  phoneNumber: PropTypes.string.isRequired,
  message: PropTypes.string,
};

export default memo(Chat);
