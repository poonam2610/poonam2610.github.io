import React from "react";
import { ACTIONS } from "../../context-management/constants";
import { useStateValue } from "../../context-management/StateProvider";
import StarRating from "../Star-rating/StarRating";
import * as ROUTES from "../../constants/Routes";
import "./CheckoutProductCard.scss";
import { useHistory } from 'react-router-dom';
import { db } from '../../firebase-config/firebase';
import { FaMinus, FaPlus } from "react-icons/fa";

function CheckoutProductCard({ value, ordered }) {
  const [{ basket, user }, dispatch] = useStateValue();
  const history = useHistory();
  const { id, image, title, description, rating, price, quantity, size, category, date } = value;

  const newDate = ordered ? JSON.stringify(new Date(JSON.parse(date))).slice(1, 11) : "";

  const clearFirebaseBasket = () => {
    db.collection("user").doc(user?.uid).update({
      basket: [],
    });
  }

  const handleIncreaseQuantity = () => {
    if (category === "accessories") {
      dispatch({
        type: ACTIONS.ADD_TO_BASKET,
        item: {
          id: id,
          image: image,
          title: title,
          price: price,
          rating: rating,
          category: category,
          size: "M"
        }
      });
    } else {
      dispatch({
        type: ACTIONS.ADD_TO_BASKET,
        item: {
          id: id,
          image: image,
          title: title,
          price: price,
          rating: rating,
          category: category,
          size: size
        }
      });
    }
  }
  const handleDecreaseQuantity = () => {
    if (basket.length === 1) {
      dispatch({
        type: ACTIONS.REMOVE_FROM_BASKET,
        item: {
          id: id,
          size: size
        }
      });
      clearFirebaseBasket();
    } else {
      dispatch({
        type: ACTIONS.REMOVE_FROM_BASKET,
        item: {
          id: id,
          size: size
        }
      });
    }
  }

  return (

    <div className="basket__card">
      <div
        className="product__image__container"
        onClick={() => history.push(`${ROUTES.CATEGORY}/${category}/${id}`)}
      >
        <img className="product__image" src={image} alt="productImage" />
      </div>
      <div className="product__details__container">
        <div
          className="product__title"
          onClick={() => history.push(`${ROUTES.CATEGORY}/${category}/${id}`)}
        >
          <h4> {title} </h4>
        </div>
        <div className="product__description">{description}</div>
        <div className="product__rating">
          <StarRating rating={rating} />
        </div>
        <div className="product__size">
          <h4>Size: {size}</h4>
        </div>
        <div className="product__quantity">
          Quantity:
          {!ordered && <button
            className="decrease__quantity "
            onClick={handleDecreaseQuantity}
          >
            {" "}
            <FaMinus />{" "}
          </button>}
          <span className="select__quantity">{quantity}</span>
          {!ordered && <button
            className="increase__quantity "
            onClick={handleIncreaseQuantity}
          >
            <FaPlus />{" "}
          </button>}
        </div>
        <hr />
        {!!ordered && <div className="remove__or__return">
          Ordered On : {newDate}
        </div>}
      </div>
      <div>
        <div className="product__price">
          <h4>Rs. &nbsp;{(price * quantity).toFixed(2)}</h4>{" "}
        </div>
      </div>
    </div>
  );
}

export default CheckoutProductCard;
