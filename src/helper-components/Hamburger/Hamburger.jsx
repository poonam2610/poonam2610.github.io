import React, { useEffect, useState } from "react";
import "./Hamburger.scss";
import { FaBoxOpen } from "react-icons/fa";
import { Link } from "react-router-dom";
import * as ROUTES from "../../constants/Routes";
import {
  GiTie,
  GiLargeDress,
  GiBabyFace,
  GiConverseShoe,
} from "react-icons/gi";
import { useStateValue } from "../../context-management/StateProvider";
import PropTypes from "prop-types";

function Hamburger({ setIsHamburgerOpen }) {
  const { user } = useStateValue()[0];
  const [ name , setName] = useState("")
  const handleClick = () => {
    setIsHamburgerOpen(false);
  };

  useEffect(()=>{
    if(!!user){
      const firstName = user.displayName?user.displayName?.split(" ")[0] : "guest" 
       const capitalizedFistName = firstName[0].toUpperCase() + firstName.slice(1)
       setName(capitalizedFistName)
     }
   
  },[user])
  
  return (
    <div className="hamburger__container">
      <div className="profile__div__hamburger__menu">{!!user && <h3> Hello {name},</h3>} </div>
      <hr />
      <div className="hamburger__items">
        <Link className="hamburger__link" to={`${ROUTES.CATEGORY}${ROUTES.MEN}`}>
          <div onClick={handleClick}>
            <GiTie className="icons__for__hamburger__menu" />{" "}
            <h4>Men's Clothing</h4>
          </div>
        </Link>
        <hr />
        <Link className="hamburger__link" to={`${ROUTES.CATEGORY}${ROUTES.WOMEN}`}>
          <div onClick={handleClick}>
            <GiLargeDress className="icons__for__hamburger__menu" />{" "}
            <h4>Women's Clothing</h4>
          </div>
        </Link>
        <hr />
        <Link className="hamburger__link" to={`${ROUTES.CATEGORY}${ROUTES.KIDS}`}>
          <div onClick={handleClick}>
            <GiBabyFace className="icons__for__hamburger__menu" />{" "}
            <h4>Kid's Clothing </h4>
          </div>
        </Link>
        <hr />
        <Link className="hamburger__link" to={`${ROUTES.CATEGORY}${ROUTES.ACCESSORIES}`}>
          <div onClick={handleClick}>
            <GiConverseShoe className="icons__for__hamburger__menu" />{" "}
            <h4>Accessories</h4>
          </div>
        </Link>
        <hr />
        {!!user && (
          <Link className="hamburger__link" to={ROUTES.YOUR_ORDERS}>
            <div onClick={handleClick}>
              <FaBoxOpen className="icons__for__hamburger__menu" />{" "}
              <h4>Your Orders</h4>
            </div>
          </Link>
        )}
      </div>
    </div>
  );
}

export default Hamburger;

Hamburger.propTypes = {
  setIsHamburgerOpen: PropTypes.func.isRequired,
}
