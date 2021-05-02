import React from "react";
import "./Footer.scss";
import {
  FaCcVisa,
  FaCcMastercard,
  FaCcPaypal,
  FaCcAmazonPay,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-main">
        <div className="contact-info">
          <h2>Contact Info</h2>
          <div className="phone-details">
            <p>
              <span>Phone: </span>(+91)1234 567 890
            </p>
          </div>
          <div className="address-details">
            <p>
              <span>Address: </span>10/b 54, 1652 Dancing Dove Lane, New York,
              10036{" "}
            </p>
          </div>
          <div className="card-details">
            <p className="card-heading">
              <span>We accept:</span>
            </p>
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
      </div>
      <div className="footer-bottom">
        Made with <span style={{ color: "red" }}>&#10084;</span> by <a href="https://www.linkedin.com/in/piyush-ranjan-1997d" target="_blank" rel="noreferrer">Piyush</a> and <a href="www.linkedin.com/in/piyush-ranjan-1997d" target="_blank" rel="noreferrer">Anusha</a>
      </div>
    </footer>
  );
}

export default Footer;
