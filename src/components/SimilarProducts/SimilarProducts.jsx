import React from "react";
import MustHaveCard from "../../helper-components/MustHaveCard/MustHaveCard";
import * as data from "../../data/data.json";
import "./SimilarProducts.scss";
import PropTypes from "prop-types";

export default function SimilarProducts({ category, id }) {
  const dataForCards = data.default.filter(
    (value) => value.category === category && value.id !== id
  );
  return (
    <div className="similarProducts-container">
      <h1>Similar Products</h1>
      <div className="mustHaveCards-container">
        {dataForCards.slice(0, 4).map((item, index) => {
          return <MustHaveCard key={index} value={item} />;
        })}
      </div>
    </div>
  );
}

SimilarProducts.propTypes = {
  category: PropTypes.string,
  id: PropTypes.number
}