import React from "react";
import "./AddToBagButton.scss";
import { FaShoppingCart } from "react-icons/fa";


export default function AddToBagButton({content , isProductAdded, handleClick}) {

  return (
    <div >
      <button className="outer__button" onClick={()=>{handleClick()}} >
        <div className={`icon__container ${isProductAdded? "animate" : ""}`}>
          <FaShoppingCart />
        </div>
        <div className = "button__content">
        {`${isProductAdded ?"ADDED" :content}`}
        </div>
      </button>
    </div>
  );
}
