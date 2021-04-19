import React, { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import "./Quantity.scss";

export default function Quantity(props) {
  const [count, setCount] = useState(1);
  return (
    <div>
      <h5>SELECT QUANTITY</h5>
      <div className={`quantityButton-container ${props.className? props.className : ""}`}>
        <button className="plus" onClick={() => setCount(count + 1)}>
          <FaPlus />
        </button>
        <span className="counter">{count}</span>
        <button
          className="minus"
          onClick={() => (count === 0 ? setCount(0) : setCount(count - 1))}
        >
          <FaMinus />
        </button>
      </div>
    </div>
  );
}
