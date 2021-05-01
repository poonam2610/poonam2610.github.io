import React from "react";
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

function Hamburger({ setIsHamburgerOpen }) {
  const { user } = useStateValue()[0];
  const handleClick = () => {
    setIsHamburgerOpen(false);
  };
  return (
    <div className="hamburger__container">
      <div className="profile__div__hamburger__menu"></div>
      <hr />
      <div className="hamburger__items">
        <Link className="hamburger__link" to={`${ROUTES.CATEGORY}/men`}>
          <div onClick={handleClick}>
            <GiTie className="icons__for__hamburger__menu" />{" "}
            <h4>Men's Clothing</h4>
          </div>
        </Link>
        <hr />
        <Link className="hamburger__link" to={`${ROUTES.CATEGORY}/women`}>
          <div onClick={handleClick}>
            <GiLargeDress className="icons__for__hamburger__menu" />{" "}
            <h4>Women's Clothing</h4>
          </div>
        </Link>
        <hr />
        <Link className="hamburger__link" to={`${ROUTES.CATEGORY}/kids`}>
          <div onClick={handleClick}>
            <GiBabyFace className="icons__for__hamburger__menu" />{" "}
            <h4>Kid's Clothing </h4>
          </div>
        </Link>
        <hr />
        <Link className="hamburger__link" to={`${ROUTES.CATEGORY}/accessories`}>
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
