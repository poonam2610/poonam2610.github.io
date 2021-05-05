import React from "react";
import { ACTIONS } from "../../context-management/constants";
import { useStateValue } from "../../context-management/StateProvider";
// import StarRating from "../Star-rating/StarRating";
import * as ROUTES from "../../constants/Routes";
import "./CheckoutProductCard.scss";
import { useHistory } from 'react-router-dom';
import { userRef } from '../../firebase-config/firebase';
import { FaMinus, FaPlus } from "react-icons/fa";
import PropTypes from 'prop-types';

function CheckoutProductCard({ value, ordered }) {
  const [{ basket, user }, dispatch] = useStateValue();
  const history = useHistory();
  const { id, image, title, rating, price, quantity, size, category, date, paymentId } = value;

  const newDate = ordered ? JSON.stringify(new Date(JSON.parse(date))).slice(1, 11) : "";

  const clearFirebaseBasket = () => {
    userRef(user?.uid).update({
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
  const handleRemove = () => {
    dispatch({
      type: ACTIONS.REMOVE_ALL_ITEMS_WITH_SAME_ID_FROM_BASKET,
      id: id
    })
  }

  return (

    <div className="basket__card">
      <div
        className="product__image__container"
        onClick={() => history.push(`${ROUTES.CATEGORY}/${category}/${id}`)}
      >
        <img className="checkout__product__image" src={image[0]} alt="productImage" />
      </div>
      <div className="product__details__container">
        <div
          className="product__title"
          onClick={() => history.push(`${ROUTES.CATEGORY}/${category}/${id}`)}
        >
          <h4> {title} </h4>
        </div>
        {/* <div className="product__description">{description}</div> */}
        {/* <div className="product__rating">
          <StarRating rating={rating} />
        </div> */}
        {!!ordered && <div className="ordered__on">Ordered On : {newDate}</div>}
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
        <div className="bottom__container">
          {!ordered && <div onClick={handleRemove} className="remove__button">Remove
          </div>}
          {!!ordered && <div>Payment ID : {paymentId}</div>}
        </div>
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

CheckoutProductCard.propTypes = {
  value: PropTypes.object.isRequired,
  ordered: PropTypes.bool.isRequired,
}
