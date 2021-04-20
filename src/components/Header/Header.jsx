import React, {  useState } from 'react'
import "./Header.scss";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaShoppingBag } from "react-icons/fa";
import { BsPersonFill } from "react-icons/bs";
import SearchBar from '../../helper-components/SearchBar/SearchBar';
import Hamburger from '../../helper-components/Hamburger/Hamburger';
import { Link } from 'react-router-dom';
import * as ROUTES from "../../constants/Routes";
import { useStateValue } from '../../context-management/StateProvider';
import Modal from '../Modal/Modal';
import { ACTIONS } from '../../context-management/constants';
import { auth } from '../../firebase-config/firebase';


function Header() {
    const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);
    const [isLoginClicked, setIsLoginClicked] = useState(false);
    const [{ basket, user }, dispatch] = useStateValue();
    const handleHamburger = () => {
        setIsHamburgerOpen(true)
    }
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
    }
    
    return (<>
        <div className="header content">
            <div className="header-hamburger" >
                <GiHamburgerMenu className="hamburger-icon" onClick={handleHamburger} />
            </div>
            {isHamburgerOpen && <Hamburger setIsHamburgerOpen={setIsHamburgerOpen} />}
            <div className="search__bar">
                <SearchBar />
            </div>
            <Link to={ROUTES.HOME}>
                <div className="header-heading">
                    w<span style={{ color: "#af332b" }}>A</span>rdrobe

                </div>
            </Link>
            <div className="header-icons">
                <div className="login" onClick={() => handleLogin()}>
                    <BsPersonFill className="person" />

                    <div className="login__text">{user ? "SignOut" : "SignIn/SignUp"}</div>

                </div>
                <Link className="link__style" to={ROUTES.CHECKOUT}>
                    <div className="basket">
                        <FaShoppingBag className="cart" />
                        {basket?.length > 0 && <div className={basket?.length < 10 ? "single__digit__cart__notification" : "double__digit__cart__notification"}><span className={basket?.length < 10 ? "single__digit__cart__number" : "double__digit__cart__number"}>{basket.length}</span></div>}
                    </div>
                </Link>
            </div>
        </div>
        {isLoginClicked && <Modal type="login" setIsModalOpen={setIsLoginClicked} />}
    </>
    )
}

export default Header;
