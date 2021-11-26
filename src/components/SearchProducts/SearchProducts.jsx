import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import ProductsCard from '../../helper-components/ProductsCard/ProductsCard';
import "./SearchProducts.scss";
import * as data from "../../data/data.json";

function SearchProducts() {
    const { search } = useParams();
    const [filteredData, setFilteredData] = useState([]);
    const searchByCategory = false;

    useEffect(() => {
        const newData = data.default.filter((value) => value?.keywords.toLowerCase().includes(search) || value?.title.toLowerCase().includes(search) || value?.description.toLowerCase().includes(search)
        );
        console.log(newData);
        setFilteredData(newData);

    }, [search, searchByCategory]);

    return (
        <div className="product__container">
            {filteredData.length > 0 && <div className="cards__container">
                {filteredData.map((value, i) => {
                    return <ProductsCard key={i} value={value} />;
                })}
            </div>}
            {filteredData.length === 0 && <div className="empty__data"><div>No Data Found</div></div>}
        </div>
    );
}

export default SearchProducts
