import React from "react";
import "./SizeOptions.scss";

const sizeOptionsArr = ["XS", "S", "M", "L", "XL"];
export default function SizeOptions() {
  const sizeOptions = sizeOptionsArr.map((value, index) => (
    <button key={index} className="dot">
      {value}
    </button>
  ));

  return (
    <div>
      <h5>SELECT SIZE</h5>
      {sizeOptions}
    </div>
  );
}
