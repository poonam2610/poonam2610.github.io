import React, { useState } from "react";
import "./Header.scss";
import { FaBars, FaSearch } from "react-icons/fa";
import { BsPersonFill, BsBag } from "react-icons/bs";
import Hamburger from "../../helper-components/Hamburger/Hamburger";
import { Link } from "react-router-dom";
import * as ROUTES from "../../constants/Routes";
import { useStateValue } from "../../context-management/StateProvider";
import Modal from "../Modal/Modal";
import { ACTIONS } from "../../context-management/constants";
import { auth } from "../../firebase-config/firebase";

function Header() {
  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);
  const [isLoginClicked, setIsLoginClicked] = useState(false);
  const [{ basket, user }, dispatch] = useStateValue();

  const handleHamburger = () => {
    setIsHamburgerOpen(true);
  };
  const handleLogin = () => {
    if (!user) {
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
    <div>
      <div className="aboveLogo-part">
        <div className="header-hamburger">
          <FaBars className="hamburger-icon" onClick={handleHamburger} />
        </div>
        {isHamburgerOpen && (
          <Hamburger setIsHamburgerOpen={setIsHamburgerOpen} />
        )}

        <div className="header-icons">
          <div className="searchIcon">
            <FaSearch />
          </div>
          <div className="login" onClick={() => handleLogin()}>
            <BsPersonFill className="person" />

            <div className="login__text">
              {user ? "SignOut" : "SignIn/SignUp"}
            </div>
          </div>

          <Link className="link__style" to={ROUTES.CHECKOUT}>
            <div className="basket">
              <BsBag className="cart" />
              {basket?.length > 0 && (
                <div
                  className={
                    basket?.length < 10
                      ? "single__digit__cart__notification"
                      : "double__digit__cart__notification"
                  }
                >
                  <span
                    className={
                      basket?.length < 10
                        ? "single__digit__cart__number"
                        : "double__digit__cart__number"
                    }
                  >
                    {basket.length}
                  </span>
                </div>
              )}
            </div>
          </Link>
        </div>
        {isLoginClicked && (
          <Modal type="login" setIsModalOpen={setIsLoginClicked} />
        )}
      </div>

      <div className="logo">
        <Link to={ROUTES.HOME} className="link__style">
          <div className="header-heading">
            w<span style={{ color: "#af332b" }}>A</span>rdrobe
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
