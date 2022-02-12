import React from "react";
import MustHaveCard from "../../helper-components/MustHaveCard/MustHaveCard";
import * as data from "../../data/sweetdata2.json";
import "./SimilarProducts.scss";
import PropTypes from "prop-types";

export default function SimilarProducts({ categories, id }) {
  const dataForCards = data.default.filter(
    (value) => value.categories === categories && value.id !== id
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
  categories: PropTypes.string,
  id: PropTypes.number
}