import React from "react";
import "./ProductsCard.scss";
import { useStateValue } from "../../context-management/StateProvider";
import * as ROUTES from "../../constants/Routes";
import { Link } from "react-router-dom";
import { ACTIONS } from "../../context-management/constants";
import StarRating from "../Star-rating/StarRating";
import AddToBagButton from "../../components/ProductDetails/AddToBagButton";


function ProductsCard({ value }) {
  const { id, image, title, price } = value;
  const rating = 3;
  const dispatch = useStateValue()[1];

  const handleClick = () => {
    dispatch({
      type: ACTIONS.ADD_TO_BASKET,
      item: {
        id: id,
        image: image,
        title: title,
        price: price,
        rating: rating,
      },
    });
    alert("Successfully added to basket");
  };

  return (
    <div className="product__card">
      <Link
        className="link__style"
        to={`${ROUTES.PRODUCT__DETAILS}/${value.id}`}
      >
        <div className="product__cover"><img  src={image} alt={title}/></div>
        <div className="product__title">{title}</div>
        <div className="product__rating">
          <StarRating rating={rating} />
        </div>
        <div className="product__price">Rs {price}</div>
      </Link>
      <AddToBagButton handleClick={handleClick} />
    </div>
  );
}

export default ProductsCard;
