import React, { useEffect, useState } from "react";
import "./ProductDetails.scss";
import * as data from "../../data/data.json";
import { useParams } from "react-router";
import SizeOptions from "./SizeOptions";
import AddToBagButton from "./AddToBagButton";
import Quantity from "./Quantity";
import { useStateValue } from "../../context-management/StateProvider";
import { ACTIONS } from "../../context-management/constants";
import StarRating from "../../helper-components/Star-rating/StarRating";
import Modal from "../Modal/Modal";

function ProductDetails() {
  const [product, setProduct] = useState({});
  const [size, setSize] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const { id } = useParams();
  const [isLoginClicked, setIsLoginClicked] = useState(false);
  const [itemQuantity, setItemQuantity] = useState(1);
  const [{ user}, dispatch] = useStateValue();
  
  useEffect(() => {
    const filteredProduct = data.default.filter(
      (value) => value.id === parseInt(id)
    );
    const prod = Object.assign({}, filteredProduct[0]);
    setProduct(prod);
  }, [id]);

  useEffect(() => {
    if (size) {
      setErrorMessage("");
    }
  }, [size]);

  const handleClick = () => {
    if (!!user) {
      if (product.category === "accessories") {
        setErrorMessage("");
        for (let i = 0; i < itemQuantity; i++) {
          dispatch({
            type: ACTIONS.ADD_TO_BASKET,
            item: {
              id: id,
              image: product.image,
              title: product.title,
              price: product.price,
              rating: product.rating,
              category: product.category,
            },
          });
        }
        alert("Successfully added to basket");
      } else if (!size) {
        setErrorMessage("Please Select Size");
      } else {
        for (let i = 0; i < itemQuantity; i++) {
          dispatch({
            type: ACTIONS.ADD_TO_BASKET,
            item: {
              id: id,
              image: product.image,
              title: product.title,
              price: product.price,
              rating: product.rating,
              category: product.category,
              size: size,
            },
          });
        }
        alert("Successfully added to basket");
      }
    } else {
      setIsLoginClicked(true);
    }
  };

  return (
    <>
    <div className="productDisplayContainer">
      <div className="productImage">
        <img src={product.image} alt="shirt-img" />
      </div>
      <div className="productDetail">
        <div>
          <h3>{product.title}</h3>
          <p>
            Description lorem ipsum is good when you dont know what to write and
            fill the area with some text.
          </p>
          <hr />
          <p className="price">{`Rs ${product.price}`}</p>
        </div>
        <div className="productDetails-rating-container">
          <StarRating rating={product.rating} />
        </div>

        {product.category !== "accessories" && (
          <SizeOptions sizes={product?.availableSize} setSize={setSize} />
        )}
        <Quantity
          itemQuantity={itemQuantity}
          setItemQuantity={setItemQuantity}
        />
        <div id="addItemToBag">
          <AddToBagButton content ="ADD TO BAG" handleClick={handleClick}  />
        </div>
        {!!errorMessage && <div className="error__message">{errorMessage}</div>}
      </div>
    </div>
      {isLoginClicked && (
        <Modal type="productDetails" setIsModalOpen={setIsLoginClicked} />
      )}
    </>
  );
}

export default ProductDetails;
