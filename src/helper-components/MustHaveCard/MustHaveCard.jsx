import React from "react";
import "./MustHaveCard.scss";
import * as ROUTES from "../../constants/Routes";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export default function MustHaveCard({ value }) {
  const { id, price, title, category, image } = value;
  return (
    <div className="singleCard__container">
      <Link
        className="link__style"
        to={`${ROUTES.CATEGORY}/${category}/${id}`}
      >
        <div className="image__container">
          <img src={image[0]} alt="product" />
        </div>
        <div className="buyNowButton__container">
          <div className="buyNowButton">
            Buy
            <br />
            Now
          </div>
        </div>
        <div className="mustBuy__title">{title}</div>
        <div className="mustBuy__price">{`Price  ${price}`}</div>
      </Link>
    </div>
  );
}

MustHaveCard.propTypes = {
  value: PropTypes.object.isRequired
}
