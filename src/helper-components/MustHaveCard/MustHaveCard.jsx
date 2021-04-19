import React from "react";
import "./MustHaveCard.scss";
import * as ROUTES from "../../constants/Routes";
import { Link } from "react-router-dom";

export default function MustHaveCard({ value }) {
  const { id, price, title, category, image } = value;
  return (
    <div className="singleCard-container">
      <Link
        className="mustHave__link__style"
        to={`${ROUTES.CATEGORY}/${category}/${id}`}
      >
        <div className="image-container">
          <img src={image} alt="product" />
        </div>
        <div className="buyNowButton-container">
          <div className="buyNowButton">
            Buy
            <br />
            Now
          </div>
        </div>
        <div className="mustBuy-title">{title}</div>
        <div className="mustBuy-price">{`Price  ${price}`}</div>
      </Link>
    </div>
  );
}
