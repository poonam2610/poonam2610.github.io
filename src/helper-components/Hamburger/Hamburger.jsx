import React from 'react'
import "./Hamburger.scss";
import { FaTimes, FaBoxOpen } from "react-icons/fa"
import { Link } from 'react-router-dom';
import * as ROUTES from "../../constants/Routes";
import { GiTie , GiLargeDress , GiBabyFace ,GiConverseShoe} from "react-icons/gi"

function Hamburger({ setIsHamburgerOpen }) {
  const handleClick = () => {
    setIsHamburgerOpen(false);
  }
  return (
    <div className="hamburger__container">
      <FaTimes className="close__icon" onClick={handleClick} />
      <div className ="profile__div__hamburger__menu">

      </div>
      <hr/>
      <div className="hamburger__items">
        <Link className="hamburger__link" to={`${ROUTES.CATEGORY}/men`}>
          <div onClick={handleClick}><GiTie className = "icons__for__hamburger__menu"/> <h4>Men's Clothing</h4></div>
        </Link>
        <hr/>
        <Link className="hamburger__link" to={`${ROUTES.CATEGORY}/lady`}>
          <div onClick={handleClick}><GiLargeDress className = "icons__for__hamburger__menu"/> <h4>Women's Clothing</h4></div>
        </Link>
        <hr/>
        <Link className="hamburger__link" to={`${ROUTES.CATEGORY}/kid`}>
          <div onClick={handleClick}><GiBabyFace className = "icons__for__hamburger__menu"/> <h4>Kid's Clothing </h4></div>
        </Link>
        <hr/>
        <Link className="hamburger__link" to={`${ROUTES.CATEGORY}/accessories`}>
          <div onClick={handleClick}><GiConverseShoe className = "icons__for__hamburger__menu"/> <h4>Accessories</h4></div>
        </Link>
        <hr/>
        <Link className="hamburger__link" to={ROUTES.YOUR_ORDERS}>
          <div onClick={handleClick}><FaBoxOpen className = "icons__for__hamburger__menu"/> <h4>Your Orders</h4></div>
        </Link>
      </div>
      
    </div>
  )
}

export default Hamburger
