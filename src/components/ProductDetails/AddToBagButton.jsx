import React from "react";
import "./AddToBagButton.scss";
import { FaShoppingCart} from "react-icons/fa";
// import { FcRight } from "react-icons/fc";


export default function AddToBagButton({content , isProductAdded, handleClick}) {
 
  return (
    
    <div >
      <button className="outer__button" onClick={()=>{handleClick()}} >
        <div className={`icon__container ${isProductAdded? "animate" : ""}`}>
        {/* <div className = "icon__container" style= { isProductAdded
            ? { transform: "translateX(0)", transition: "all 0.7s ease" }
            : { transform: `translateX(${w}%)`}}> */}
          <FaShoppingCart/>
        </div>
        <div className = "button__content">
        {`${isProductAdded ?"ADDED" :content}`}
        </div>
      </button>
    </div>
  );
}
