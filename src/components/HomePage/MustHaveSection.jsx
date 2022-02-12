import React from "react";
import MustHaveCard from "../../helper-components/MustHaveCard/MustHaveCard";
import * as data from "../../data/sweetdata2.json";
import "./MustHaveSection.scss";
import PropTypes from "prop-types";

export default function MustHaveSection({ category, id }) {
  const dataForCards = data.default.filter(
    (value) => value.category === category && value.id !== id
  );
  return (
    <div className="mustHave__container">
      <h1>Must Have</h1>
      <div className="mustHaveCards-container">
        {dataForCards.slice(0, 4).map((item, index) => {
          return <MustHaveCard key={index} value={item} />;
        })}
      </div>
    </div>
  );
}

  MustHaveCard.propTypes = {
  category: PropTypes.string,
  id: PropTypes.number
}