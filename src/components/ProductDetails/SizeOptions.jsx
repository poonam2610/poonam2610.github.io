import React, { useState } from "react";
import "./SizeOptions.scss";
import PropTypes from "prop-types";

const sizeOptionsArr = ["XS", "S", "M", "L", "XL"];
export default function SizeOptions({ sizes, setSize }) {
  const [selectedSize, setSelectedSize] = useState('');
  const handleClick = (e) => {
    const { value } = e.target;
    if (sizes?.includes(value)) {
      setSize(value);
      setSelectedSize(value);
    }
  }
  const sizeOptions = sizeOptionsArr.map((value, index) => {
    const sizeAvailable = sizes?.includes(value);
    return <div className="size__container" key={index}>
      <button className={`${sizeAvailable ? "dot" : "hidden"} ${selectedSize === value ? "selected" : ""}`} value={value} onClick={handleClick}>
        {!sizeAvailable && <span className="size__buttons__strike__show"></span>}
        {value}
      </button>
    </div>
  });

  return (
    <div className="sizeOptions-container">
      <h5>SELECT SIZE :</h5>
      {sizeOptions}
    </div>
  );
}

SizeOptions.propTypes = {
  sizes: PropTypes.array,
  setSize: PropTypes.func.isRequired
}
