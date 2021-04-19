import React from "react";
import "./MustHaveCard.scss";
import * as ROUTES from "../../constants/Routes";
import { Link } from "react-router-dom";

export default function MustHaveCard({ value }) {
  return (
    <div className="singleCard-container">
      <Link
        className="mustHave__link__style"
        to={`${ROUTES.PRODUCT__DETAILS}/${value.id}`}
      >
        <div className="image-container">
          <img src={value.image} alt="product" />
        </div>
        <div className="buyNowButton-container">
          <div className="buyNowButton">
            Buy
            <br />
            Now
          </div>
        </div>
        <div className="mustBuy-title">{value.title}</div>
        <div className="mustBuy-price">{`Price  ${value.price}`}</div>
      </Link>
    </div>
  );
}
