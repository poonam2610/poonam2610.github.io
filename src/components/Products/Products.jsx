import React, { useEffect, useState } from "react";
import ProductsCard from "../../helper-components/ProductsCard/ProductsCard";
import "./Products.scss";
import * as data from "../../data/sweetdata2.json";
import { useParams } from "react-router";
import * as ROUTES from "../../constants/Routes";
import BreadCrumbs from "../../helper-components/BreadCrumbs/BreadCrumbs";

function Products() {
  const { category } = useParams();
  const { main_category } = useParams();
  const [filteredData, setFilteredData] = useState([]);
  useEffect(() => {
    const newData = data.default.filter((value) =>
      value.category.toLowerCase() === (category)
    );
    setFilteredData(newData);
  }, [category]);

  const breadCrumbLinks = [
    {
      "linkText": "Home",
      "linkHref": "/",
      "isActive": false
    }, {
      "linkText": `${category[0].toUpperCase() + category.slice(1)}`,
      "linkHref": `${ROUTES.CATEGORY} / ${category}`,
      "isActive": true
    },  
  ];

  return (
    <>
      <BreadCrumbs zs={breadCrumbLinks} />
      <div className="product__container">
        <div className="cards__container">
          {filteredData.map((value, i) => {
            return <ProductsCard key={i} value={value} />;
          })}
        </div>
         </div>
    </>
  );
}

export default Products;
