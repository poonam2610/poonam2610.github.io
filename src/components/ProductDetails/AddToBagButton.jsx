import React from "react";
import "./AddToBagButton.scss";
import { FaShoppingBag } from "react-icons/fa";

export default function AddToBagButton() {
  return (
    <div>
      <button className="outer-button">
        Add to bag
        <button className="icon">
          <FaShoppingBag />
        </button>
      </button>
    </div>
  );
}
