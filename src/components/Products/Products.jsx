import React, { useEffect, useState } from 'react';
import ProductsCard from '../../helper-components/ProductsCard/ProductsCard';
import "./Products.scss"
import * as data from "../../data/data.json";
import { useParams } from 'react-router';

function Products() {
    const { category } = useParams();
    const [filteredData, setFilteredData] = useState([]);

    // console.log({ category });
    useEffect(() => {
        const newData = data.default.filter(value => value.category.includes(category));
        setFilteredData(newData);
    }, [category])
    return (
        <div className="product__container">
            <div className="filter__container">
                filter
            </div>
            <hr />
            <div className="cards__container">
                {filteredData.map((value, i) => {
                    return <ProductsCard key={i} value={value} />
                })}
            </div>
        </div>
    )
}

export default Products
