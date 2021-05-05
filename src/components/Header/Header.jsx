import React, { useEffect, useState } from "react";
import "./Header.scss";
import { FaShoppingCart,FaSignOutAlt } from "react-icons/fa";
import { BsPersonFill } from "react-icons/bs";
import Hamburger from "../../helper-components/Hamburger/Hamburger";
import { Link } from "react-router-dom";
import * as ROUTES from "../../constants/Routes";
import { useStateValue } from "../../context-management/StateProvider";
import Modal from "../Modal/Modal";
import { ACTIONS } from "../../context-management/constants";
import { auth } from "../../firebase-config/firebase";
import SearchBar from "../../helper-components/SearchBar/SearchBar";
import HamburgerIcon from "../../helper-components/Hamburger/HamburgerIcon";
import DialogueBox from "../../helper-components/DialogueBox/DialogueBox";

function Header() {
  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);
  const [isSearchBarVisible, setIsSearchBarVisible] = useState(false);
  const [isLoginClicked, setIsLoginClicked] = useState(false);
  const [ name , setName] = useState("")
  const [{ basket, user }, dispatch] = useStateValue();
  const [openSignOutDialogueBox, setOpenSignOutDialogueBox] = useState(false);

  useEffect(()=>{
    if(!!user){
      const firstName = user.displayName?user.displayName?.split(" ")[0] : "guest" 
       const capitalizedFistName = firstName[0].toUpperCase() + firstName.slice(1)
       setName(capitalizedFistName)
     }
   
  },[user])

  useEffect(() => {
    const handler = (e) => {
      setIsSearchBarVisible(e.matches);
    };
    const match = window.matchMedia("(max-width: 720px)");
    match.addEventListener("change", handler);
    if (match.matches) {
      setIsSearchBarVisible(true);
    }
  }, []);

  const handleHamburger = () => {
    setIsHamburgerOpen(!isHamburgerOpen);
  };

  const handleLogOut = () => {
    auth.signOut();
    dispatch({
      type: ACTIONS.SET_USER,
      user: null,
    });
    setOpenSignOutDialogueBox(false)
  };

  const handleLogin = () => {
    if (!user) {
      setIsLoginClicked(true);
    } else {
      setOpenSignOutDialogueBox(true);
    }
  };

  return (
    <div className="header__container">
      <div className="header">
        <div className="logo__part">
          <div className="header__hamburger" onClick={handleHamburger}>
            <HamburgerIcon isClicked={isHamburgerOpen} />
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
            <div
              className="header__searchBar"
              style={{ visibility: `${isSearchBarVisible ? "hidden" : ""}` }}
            >
              <SearchBar />
            </div>

            <div className="login" onClick={() => handleLogin()}>
              <div className="login__text">{user ? name : "SignIn"}</div>
              {user? <FaSignOutAlt className="sign__out__icon"/> :<BsPersonFill className="person" />}
            </div>
            {openSignOutDialogueBox && (
              <DialogueBox
                title="Sign Out"
                message="Are you sure you want to sign out?"
                yes={handleLogOut}
                no={() => setOpenSignOutDialogueBox(false)}
                yesButtonMessage="SIGN OUT"
                noButtonMessage ="CANCEL"
              />
            )}

            <Link className="link__style" to={ROUTES.CHECKOUT}>
              <div className="basket">
                <FaShoppingCart className="cart" />
                {basket?.length > 0 && (
                  <div className="cart__notification">
                    <span className="cart__number">{basket.length}</span>
                  </div>
                )}
              </div>
            </Link>
          </div>
          {isLoginClicked && <Modal setIsModalOpen={setIsLoginClicked} />}
        </div>
      </div>
      {isSearchBarVisible && (
        <div className="input__search__box">
          <SearchBar />
        </div>
      )}
    </div>
  );
}

export default Header;
