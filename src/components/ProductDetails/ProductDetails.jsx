import React, { useEffect, useState } from "react";
import "./ProductDetails.scss";
import * as data from "../../data/data.json";
import { useParams } from "react-router";
import SizeOptions from "./SizeOptions";
import AddToBagButton from "./AddToBagButton";
import Quantity from "./Quantity"

function ProductDetails() {
  const [product, setProduct] = useState({});
  const { id } = useParams();
  useEffect(() => {
    const product = data.default.filter((value) => value.id === parseInt(id));
    const prod = Object.assign({}, product[0]);
    setProduct(prod);
  }, [id]);
  const title = product.title;
  return (
    <div className="productDisplayContainer">
  
      <div className="productImage">
        <img src={product.image} alt="shirt-img" />
      </div>
      <div className="productDetail">
        <div>
          <h3>{title}</h3>
          <p>
            Description lorem ipsum is good when you dont know what to write.
          </p>
          <hr />
          {"star rating will come here"}
          <p className="price">{`Rs ${product.price}`}</p>
         
        </div>
        <SizeOptions />
        {/* <form className="quantity-form">
          <label htmlFor="">SELECT QUANTITY</label>
          <br />
          <select name="Quantity">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </form> */}
        <Quantity />
        <AddToBagButton />
      </div>
    </div>
  );
}

export default ProductDetails;
