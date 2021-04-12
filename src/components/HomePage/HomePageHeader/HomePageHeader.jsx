import React from 'react'
import "./HomePageHeader.scss";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaShoppingBag } from "react-icons/fa";
import {BsPersonFill } from "react-icons/bs";


function HomePageHeader() {
    return (
        <div className="header">
            <div className="header-hamburger">
                <GiHamburgerMenu className="hamburger-icon" />
            </div>
            <div className="header-heading">
                WARD<span style={{color:"yellow"}}>ROBE</span>
            </div>
            <div className="header-icons">
                <FaShoppingBag className="cart"/>
                <BsPersonFill className="person"/>

            </div>

        </div>
    )
}

export default HomePageHeader
