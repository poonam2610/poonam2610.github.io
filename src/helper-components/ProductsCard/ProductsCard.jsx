import React from "react";
import "./ProductsCard.scss";
import { useStateValue } from "../../context-management/StateProvider";
import * as ROUTES from "../../constants/Routes";
import { Link } from "react-router-dom";
import { ACTIONS } from "../../context-management/constants";
import StarRating from "../Star-rating/StarRating";
import AddToBagButton from "../../components/ProductDetails/AddToBagButton";

function ProductsCard({ value }) {
  const { id, image, title, price, category } = value;
  const rating = 3;
  const [{ user }, dispatch] = useStateValue();


  const handleClick = () => {
    if (user)
      dispatch({
        type: ACTIONS.ADD_TO_BASKET,
        item: {
          id: id,
          image: image,
          title: title,
          price: price,
          rating: rating
        }
      });
    alert("Successfully added to basket");
  }
  return (
    <div className="product__card">
      <Link className="link__style" to={`${ROUTES.CATEGORY}/${category}/${id}`}>
        <img className="product__cover" src={image} alt={title} />
        <div className="product__title">{title}</div>
        <div className="product__rating"><StarRating rating={rating} /></div>
        <div className="product__price">Rs {price}</div>
      </Link>
      <AddToBagButton handleClick={handleClick} />
    </div >
  )
}

export default ProductsCard;
