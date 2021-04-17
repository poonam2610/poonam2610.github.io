import React from 'react';
import { FaStar } from "react-icons/fa";
import "./StarRating.scss";

function StarRating({rating}) {

    const starRating = [...Array(5)].map((_, i) => {
        return <FaStar key={i} color={rating > i ? "rgba(255,164,28,1)" : "#a7a0a094"} className="star__icon" />
    });
    return starRating;
}

export default StarRating;

