import React, { useState } from "react";
import "./SizeOptions.scss";
import PropTypes from "prop-types";

// const sizeOptionsArr = ["XS", "S", "M", "L", "XL"];

export default function WeightOptions({ prices = [], setWeight }) {
  console.log(prices)
  const [selectedWeight, setSelectedWeight] = useState(prices[0] || {});
  const handleClick = (value) => {
    // if (prices?.includes(value)) {
    setWeight(value);
    setSelectedWeight(value);
    // }
  }
  const sizeOptions = prices.map((value, index) => {
    // const sizeAvailable = sizes?.includes(value);
    return <div className="size__container" key={index}>
      <button className={`${selectedWeight.weight === value.weight ? "selected" : ""}`} onClick={() => handleClick(value)}>
        {value.weight}
      </button>
    </div>
  });

  return (
    <div className="sizeOptions-container">
      <h5>SELECT Weight :</h5>
      {sizeOptions}
    </div>
  );
}

WeightOptions.propTypes = {
  sizes: PropTypes.array,
  setSize: PropTypes.func.isRequired
}
