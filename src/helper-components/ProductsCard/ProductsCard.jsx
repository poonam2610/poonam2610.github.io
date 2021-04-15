import React from 'react';
import "./ProductsCard.scss";
import { FaStar } from "react-icons/fa";
import { useStateValue } from '../../context-management/StateProvider';
import * as ROUTES from "../../constants/Routes";
import { Link } from 'react-router-dom';
import { ACTIONS } from '../../context-management/constants';

function ProductsCard({ value }) {
    const { id, image, title, price } = value;
    const rating = 3;
    const dispatch = useStateValue()[1];

    const starRating = [...Array(5)].map((_, i) => {
        return <FaStar key={i} color={rating > i ? "rgba(255,164,28,1)" : "#a7a0a094"} className="star__icon" />
    });
    const handleClick = () => {
        // console.log(bucket);
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
            <Link className="link__style" to={`${ROUTES.PRODUCT__DETAILS}/${value.id}`}>
                <img className="product__cover" src={image} alt={title} />
                <div className="product__title">{title}</div>
                <div className="product__rating">{starRating}</div>
                <div className="product__price">Rs {price}</div>
            </Link>
            <button className="add__to__cart" onClick={handleClick}>Add to Cart</button>
        </div >

    )
}

export default ProductsCard
