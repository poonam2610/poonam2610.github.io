import React from 'react'
import "./Hamburger.scss";
import { FaTimes } from "react-icons/fa"
import { Link } from 'react-router-dom';
import * as ROUTES from "../../constants/Routes";

function Hamburger({ setIsHamburgerOpen }) {
  const handleClick = () => {
    setIsHamburgerOpen(false);
  }
  return (
    <div className="hamburger__container">
      <FaTimes className="close__icon" onClick={handleClick} />
      <div className="hamburger__items">
        <Link className="hamburger__link" to={`${ROUTES.CATEGORY}/men`}>
          <div onClick={handleClick}>Men's Clothing</div>
        </Link>
        <hr/>
        <Link className="hamburger__link" to={`${ROUTES.CATEGORY}/lady`}>
          <div onClick={handleClick}>Women's Clothing</div>
        </Link>
        <hr/>
        <Link className="hamburger__link" to={`${ROUTES.CATEGORY}/kid`}>
          <div onClick={handleClick}>Kid's Clothing</div>
        </Link>
        <hr/>
        <Link className="hamburger__link" to={`${ROUTES.CATEGORY}/accessories`}>
          <div onClick={handleClick}>Accessories</div>
        </Link>
      </div>
      
    </div>
  )
}

export default Hamburger
