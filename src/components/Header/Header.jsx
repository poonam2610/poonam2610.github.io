import React, { useState } from "react";
import "./Header.scss";
import { FaBars, FaShoppingBag } from "react-icons/fa";
import { BsPersonFill } from "react-icons/bs";
import Hamburger from "../../helper-components/Hamburger/Hamburger";
import { Link } from "react-router-dom";
import * as ROUTES from "../../constants/Routes";
import { useStateValue } from "../../context-management/StateProvider";
import Modal from "../Modal/Modal";
import { ACTIONS } from "../../context-management/constants";
import { auth } from "../../firebase-config/firebase";
import SearchBar from "../../helper-components/SearchBar/SearchBar";

function Header() {
  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);
  const [isLoginClicked, setIsLoginClicked] = useState(false);
  const [{ basket, user }, dispatch] = useStateValue();

  const handleHamburger = () => {
    setIsHamburgerOpen(true);
  };

  const handleLogin = () => {
    if (!user) {
      // dispatch({
      //   type: ACTIONS.CHANGE_MODAL_STATE,
      // });
      setIsLoginClicked(true);
    } else {
      alert("Sure Want to Log Out ? ");
      auth.signOut();
      dispatch({
        type: ACTIONS.SET_USER,
        user: null,
      });
    }
  };
  return (
    <div className="header">
      <div className="logo__part">
        <div className="header__hamburger">
          <FaBars className="hamburger__icon" onClick={handleHamburger} />
        </div>
        {isHamburgerOpen && (
          <Hamburger setIsHamburgerOpen={setIsHamburgerOpen} />
        )}
        <Link to={ROUTES.HOME} className="link__style">
          <div className="header__heading">
            w<span style={{ color: "#af332b" }}>A</span>rdrobe
          </div>
        </Link>
      </div>
      <div className="icons__and__modal">
        <div className="header__icons">
          <div className="header__searchBar">
            <SearchBar />
          </div>
          <div className="login" onClick={() => handleLogin()}>
            <BsPersonFill className="person" />

            <div className="login__text">
              {user ? "SignOut" : "SignIn"}
            </div>
          </div>

          <Link className="link__style" to={ROUTES.CHECKOUT}>
            <div className="basket">
              <FaShoppingBag className="cart" />
              {basket?.length > 0 && (
                <div className="cart__notification">
                  <span className="cart__number">
                    {basket.length}
                  </span>
                </div>
              )}
            </div>
          </Link>
        </div>
        {isLoginClicked && (
          <Modal setIsModalOpen={setIsLoginClicked}  />

        )}
      </div>
    </div>
  );
}

export default Header;
