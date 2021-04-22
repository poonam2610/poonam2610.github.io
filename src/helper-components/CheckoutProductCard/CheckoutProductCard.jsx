import React from 'react';
import { ACTIONS } from '../../context-management/constants';
import { useStateValue } from '../../context-management/StateProvider';
import StarRating from '../Star-rating/StarRating';
import * as ROUTES from "../../constants/Routes";
import "./CheckoutProductCard.scss";
import { useHistory } from 'react-router-dom';
import { db } from '../../firebase-config/firebase';

function CheckoutProductCard({ value }) {
    const [{ basket, user }, dispatch] = useStateValue();
    const history = useHistory();
    const { id, image, title, description, rating, price, quantity, size, category } = value;

    const clearFirebaseBasket = () => {
        db.collection("user").doc(user?.uid).set({
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
            <div className="product__image__container" onClick={() => history.push(`${ROUTES.CATEGORY}/${category}/${id}`)}>
                <img className="product__image" src={image} alt="productImage" />
            </div>
            <div className="product__details__container">
                <div className="product__title" onClick={() => history.push(`${ROUTES.CATEGORY}/${category}/${id}`)}>{title}</div>
                <div className="product__description">{description}</div>
                <div className="product__rating"><StarRating rating={rating} /></div>
                {category !== "accessories" && <div className="product__rating">size: {size}</div>}
                <div className="product__quantity">
                    <button className="decrease__quantity" onClick={handleDecreaseQuantity}>-</button>
                    <span className="product__quantity">{quantity}</span>
                    <button className="increase__quantity" onClick={handleIncreaseQuantity}>+</button>
                </div>
                <div className="product__price">Rs {price}</div>
            </div>
        </div>
    )
}

export default CheckoutProductCard
