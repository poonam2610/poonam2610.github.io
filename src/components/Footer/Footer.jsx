import React from 'react'
import "./Footer.scss";
import { FaCcVisa, FaCcMastercard, FaCcPaypal, FaCcAmazonPay, FaThumbsUp, FaTruckMoving } from "react-icons/fa";
import { RiExchangeDollarFill } from "react-icons/ri";
import { BiSupport } from "react-icons/bi";

function Footer() {
    return (
        <footer className="footer-container">
            <div className="footer-main">
                <div className="contact-info">
                    <h2>Contact Info</h2>
                    <div className="phone-details">
                        <p><span>Phone: </span>(+91)1234 567 890</p>
                    </div>
                    <div className="address-details">
                        <p><span>Address: </span>10/b 54, 1652  Dancing Dove Lane, New York, 10036 </p>
                    </div>
                    <div className="card-details">
                        <p className="card-heading"><span>We accepts:</span></p>
                        <div className="cards-image">
                            <FaCcVisa />
                            <FaCcMastercard />
                            <FaCcPaypal />
                            <FaCcAmazonPay />

                        </div>
                    </div>

                </div>
                <div className="categories">
                    <h2>Categories</h2>
                    <div className="all-categories">
                        <p>Accessories</p>
                        <p>Women</p>
                        <p>Men</p>
                        <p>Child</p>
                    </div>

                </div>
                <div className="our-promise">
                    <h2>Our Promise</h2>
                    <div className="promise-cards-container">
                        <div className="promise-card">
                            {/* <img src="" alt=""/> */}
                            <FaThumbsUp className="card-icons" />
                            <div className="card-text">100% Genuine Products Guarantee </div>
                        </div>
                        <div className="promise-card">
                            <FaTruckMoving className="card-icons" />
                            <div className="card-text">Guaranteed On-time Delivery </div>
                        </div>
                        <div className="promise-card">
                            <RiExchangeDollarFill className="card-icons" />
                            <div className="card-text">100% Return Guarantee & Exchchange </div>
                        </div>
                        <div className="promise-card">
                            <BiSupport className="card-icons"/>
                            <div className="card-text">24x7 Customer Support </div>
                        </div>

                    </div>

                </div>
            </div>
            <div className="footer-bottom">

            </div>
        </footer>
    )
}

export default Footer;
