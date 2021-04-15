import React, { useEffect, useState } from 'react';
import "./ProductDetails.scss";
import * as data from "../../data/data.json";
import { useParams } from 'react-router';

function ProductDetails() {
    const [product, setProduct] = useState({});
    const { id } = useParams();
    useEffect(() => {
        const product = data.default.filter(value => value.id === parseInt(id));
        const prod = Object.assign({}, product[0])
        setProduct(prod);
    }, [id])
    return (
        <div>
            {JSON.stringify(product)}
            {/* Product Details here */}

        </div>
    )
}

export default ProductDetails
