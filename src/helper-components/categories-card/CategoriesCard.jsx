import React from "react";
import "./CategoriesCard.scss";
import PropTypes from "prop-types"

function CategoriesCard({ image, title }) {
  return (
    <div className="card__image" >   
      <img src={image} alt="category-card"/>
      <div className="card__title">
        <span className="title">{title}</span>
      </div>
    </div>
  );
}

export default CategoriesCard;


CategoriesCard.propTypes = {
image : PropTypes.string.isRequired,
title : PropTypes.string.isRequired
}