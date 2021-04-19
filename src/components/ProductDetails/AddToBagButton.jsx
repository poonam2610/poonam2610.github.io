import React from "react";
import "./AddToBagButton.scss";
import { FaShoppingBag } from "react-icons/fa";

export default function AddToBagButton({handleClick}) {
  return (
    <div >
      <button className="outer-button" onClick={()=>{handleClick()}} >
        Add to bag
        <div className="icon-container">
          <FaShoppingBag />
        </div>
      </button>
    </div>
  );
}
