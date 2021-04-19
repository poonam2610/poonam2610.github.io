import React, { useEffect, useState } from "react";
import "./ProductDetails.scss";
import * as data from "../../data/data.json";
import { useParams } from "react-router";
import SizeOptions from "./SizeOptions";
import AddToBagButton from "./AddToBagButton";
import Quantity from "./Quantity"
import { useStateValue } from "../../context-management/StateProvider";
import { ACTIONS } from "../../context-management/constants";
import StarRating from "../../helper-components/Star-rating/StarRating";

function ProductDetails() {
  const [product, setProduct] = useState({});
  const { id } = useParams();
  const dispatch = useStateValue()[1];

  useEffect(() => {
    const product = data.default.filter((value) => value.id === parseInt(id));
    const prod = Object.assign({}, product[0]);
    setProduct(prod);
  }, [id]);

  const handleClick = () => {
    // console.log(bucket);
    dispatch({
      type: ACTIONS.ADD_TO_BASKET,
      item: {
        id: id,
        image: product.image,
        title: product.title,
        price: product.price,
        rating: product.rating,
      },
    });
    alert("Successfully added to basket");
  };
  
  return (
    <div className="productDisplayContainer">
  
      <div className="productImage">
        <img src={product.image} alt="shirt-img" />
      </div>
      <div className="productDetail">
        <div>
          <h3>{product.title}</h3>
          <p>
            Description lorem ipsum is good when you dont know what to write and fill the area with some text.
          </p>
          <hr />
          <p className="price">{`Rs ${product.price}`}</p>     
        </div>
        <div className="productDetails-rating-container">
          <StarRating rating={4}/>
        </div>
        
        <SizeOptions />
        <Quantity />
        <div id = "addItemToBag">
        <AddToBagButton handleClick = {handleClick}/>
        </div>
        
      </div>
    </div>
  );
}

export default ProductDetails;
