import React, { useState } from 'react'
import "./Header.scss";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaShoppingBag } from "react-icons/fa";
import { BsPersonFill } from "react-icons/bs";
import SearchBar from '../../helper-components/SearchBar/SearchBar';
import Hamberger from '../../helper-components/Hamberger/Hamberger';
import { Link } from 'react-router-dom';
import * as ROUTES from "../../constants/Routes";
import { useStateValue } from '../../context-management/StateProvider';

function Header() {
    const [isHambergerOpen, setIsHambergerOpen] = useState(false);
    const [{ basket }] = useStateValue();
    const handleHamberger = () => {
        setIsHambergerOpen(true)
    }
    // const cartItems = 50;
    return (
        <div className="header">
            <div className="header-hamburger" >
                <GiHamburgerMenu className="hamburger-icon" onClick={handleHamberger} />
            </div>
            {isHambergerOpen && <Hamberger setIsHambergerOpen={setIsHambergerOpen} />}
            <div className="search__bar">
                <SearchBar />
            </div>
            <Link to={ROUTES.HOME}>
                <div className="header-heading">
                    WARD<span style={{ color: "yellow" }}>ROBE</span>
                </div>
            </Link>
            <div className="header-icons">
                <div className="login">
                    <BsPersonFill className="person" />
                    <div className="login__text">Login\SignUp</div>
                </div>
                <Link className="link__style" to={ROUTES.CHECKOUT}>
                    <div className="basket">
                        <FaShoppingBag className="cart" />
                        {basket?.length > 0 && <div className={basket?.length < 10 ? "single__digit__cart__notification" : "double__digit__cart__notification"}><span className={basket?.length < 10 ? "single__digit__cart__number" : "double__digit__cart__number"}>{basket.length}</span></div>}
                    </div>
                </Link>
            </div>

        </div>
    )
}

export default Header;
