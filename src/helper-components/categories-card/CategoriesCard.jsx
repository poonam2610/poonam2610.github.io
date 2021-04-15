import React from 'react'
import "./CategoriesCard.scss"
// import * as image from "../../data/mens_wear.png";

function CategoriesCard({image,title}) {
    // const image="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg";
    // const title="Accessories";
    return (
        <div className="card__image" style={{backgroundImage:`url(${image})`}}>
        <div className="card__title"> <span className="title">{title}</span></div>
    </div>
    )
}

export default CategoriesCard
