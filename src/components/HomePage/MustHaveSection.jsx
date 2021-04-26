import React from "react";
import MustHaveCard from "../../helper-components/MustHaveCard/MustHaveCard";
import * as data from "../../data/data.json";
import "./MustHaveSection.scss";

export default function MustHaveSection() {
  const dataForCards = data.default.filter(
    (value) => value.mustHave && value.mustHave === true
  );
  return (
    <div className="mustHave__container">
      <h1>Must Haves</h1>
      <div className="mustHaveCards__container">
        {dataForCards.map((item, index) => {
          return <MustHaveCard key={index} value={item} />;
        })}
      </div>
    </div>
  );
}
