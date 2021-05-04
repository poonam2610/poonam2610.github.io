import React from "react";
import "./ProductsCard.scss";
import * as ROUTES from "../../constants/Routes";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function ProductsCard({ value }) {
  const { id, image, title, price, category } = value;

  return (<>
    <div className="product__card">
      <Link className="link__style" to={`${ROUTES.CATEGORY}/${category}/${id}`}>
        <img className="product__cover" src={image[0]} alt={title} />
        <div className="product__title">{title}</div>
        {/* <div className="product__rating"><StarRating rating={rating} /></div> */}
        <div className="product__price">Rs {price}</div>
        {/* <AddToBagButton content="SEE NOW" handleClick={() => { }} /> */}
        <div><button className="btn"> SEE NOW</button></div>
      </Link>
    </div>
  </>
  )
}

export default ProductsCard;

ProductsCard.propTypes = {
  value: PropTypes.object.isRequired
}
