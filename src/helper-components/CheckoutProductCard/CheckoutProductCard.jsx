import React from 'react';
import { ACTIONS } from '../../context-management/constants';
import { useStateValue } from '../../context-management/StateProvider';
import StarRating from '../Star-rating/StarRating';
import * as ROUTES from "../../constants/Routes";
import "./CheckoutProductCard.scss";
import { useHistory } from 'react-router-dom';

function CheckoutProductCard({ value }) {
    const dispatch = useStateValue()[1];
    const history = useHistory();
    console.log("value checkout", value)
    const { id, image, title, description, rating, price, quantity, size, category } = value;
    const handleIncreaseQuantity = () => {
        dispatch({
            type: ACTIONS.ADD_TO_BASKET,
            item: {
                id: id,
                image: image,
                title: title,
                price: price,
                rating: rating,
                size: size
            }
        });
    }
    const handleDecreaseQuantity = () => {
        dispatch({
            type: ACTIONS.REMOVE_FROM_BASKET,
            id: id
        });
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
                <div className="product__rating">size: {size}</div>
                <div className="product__quantity">
                    <button className="increase__quantity" onClick={handleIncreaseQuantity}>+</button>
                    <span className="product__quantity">{quantity}</span>
                    <button className="decrease__quantity" onClick={handleDecreaseQuantity}>-</button>
                </div>
                <div className="product__price">Rs {price}</div>
            </div>
        </div>
    )
}

export default CheckoutProductCard
