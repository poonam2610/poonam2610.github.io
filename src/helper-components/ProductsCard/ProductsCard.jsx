import React, { useState } from "react";
import "./ProductsCard.scss";
import * as ROUTES from "../../constants/Routes";
import { Link } from "react-router-dom";
import StarRating from "../Star-rating/StarRating";
import Modal from "../../components/Modal/Modal";
import AddToBagButton from "../../components/ProductDetails/AddToBagButton";

function ProductsCard({ value }) {
  const { id, image, title, price, category, rating } = value;
  const [isLoginClicked, setIsLoginClicked] = useState(false);

  return (<>
    <div className="product__card">
      <Link className="link__style" to={`${ROUTES.CATEGORY}/${category}/${id}`}>
        <img className="product__cover" src={image} alt={title} />
        <div className="product__title">{title}</div>
        <div className="product__rating"><StarRating rating={rating} /></div>
        <div className="product__price">Rs {price}</div>
        <AddToBagButton content= "BUY NOW" handleClick={()=>{}} />
      </Link>
    </div >
    {isLoginClicked && <Modal setIsModalOpen={setIsLoginClicked} />}
  </>
  )
}

export default ProductsCard;
