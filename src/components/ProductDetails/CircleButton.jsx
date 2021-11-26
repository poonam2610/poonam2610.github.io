import React from "react";
import PropTypes from "prop-types";
import "./CircleButton.scss";

export default function CircleButton({ content, type, onClick = () => {} }) {
  return (
    <div
      className="button-container"
      aria-roledescription={`${type === "button" ? "button" : ""}`}
      onClick={onClick}
    >
      {content}
    </div>
  );
}

CircleButton.propTypes = {
  content : PropTypes.any.isRequired,
  type : PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
}