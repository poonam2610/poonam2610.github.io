import React from "react";
import "./AvailableOptions.scss";
import PropTypes from "prop-types";


export default function AvailableOptions({ options = [], setOption, selectedOption }) {
  const handleClick = (value) => {
    setOption(value);
  }

  const optionsContent = options.map((value, index) => {
    return <div className="item-container" key={index}>
      <button className={`${selectedOption.weight === value.weight ? "selected" : ""} option-item`} onClick={() => handleClick(value)}>
        {value.weight}
      </button>
    </div>
  });

  return (
    <div className="options-container">
      <h5>SELECT Weight :</h5>
      {optionsContent}
    </div>
  );
}

AvailableOptions.propTypes = {
  options: PropTypes.array,
  setOption: PropTypes.func.isRequired,
  selectedOption: PropTypes.object
}
