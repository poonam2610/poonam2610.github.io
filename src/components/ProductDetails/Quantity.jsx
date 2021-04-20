import React from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import "./Quantity.scss";

export default function Quantity({ itemQuantity, setItemQuantity }) {
  return (
    <div className="quantity-container">
      <h5>SELECT QUANTITY :</h5>
      <div className='quantityButton-container'>
        <button className="plus" id="plus" onClick={() => { setItemQuantity(itemQuantity + 1) }}>
          <FaPlus />
        </button>
        <span className="counter">{itemQuantity}</span>
        <button id="minus"
          className="minus"
          onClick={() => { (itemQuantity === 1 ? setItemQuantity(1) : setItemQuantity(itemQuantity - 1)) }}
        >
          <FaMinus />
        </button>
      </div>
    </div>
  );
}
