import React, { useEffect, useState } from "react";
import "./ProductDetails.scss";
import * as data from "../../data/sweetdata2.json";
import * as ROUTES from "../../constants/Routes";
import { useParams } from "react-router";
import AvailableOptions from "./AvailableOptions";
import AddToBagButton from "./AddToBagButton";
import Quantity from "./Quantity";
import { useStateValue } from "../../context-management/StateProvider";
import { ACTIONS } from "../../context-management/constants";
import Modal from "../Modal/Modal";
import Carousel from "../../helper-components/Carousel/Carousel";
import SimilarProducts from "../SimilarProducts/SimilarProducts";
import AlertBox from "../../helper-components/AlertBox/AlertBox";
import BreadCrumbs from "../../helper-components/BreadCrumbs/BreadCrumbs";
import { _isEmpty } from '../../utils.js'

function ProductDetails() {
  const [product, setProduct] = useState({ image: ["", ""] });
  const [option, setOption] = useState({});
  const [errorMessage, setErrorMessage] = useState("");
  const { category, id } = useParams();
  const [isLoginClicked, setIsLoginClicked] = useState(false);
  const [itemQuantity, setItemQuantity] = useState(1);
  const [{ user }, dispatch] = useStateValue();
  const [isProductAdded, setIsProductAdded] = useState(false);

  useEffect(() => {
    const filteredProduct = data.default.filter(
      (value) => value.id === parseInt(id)
    );
    const prod = Object.assign({}, filteredProduct[0]);
    setProduct(prod);
    setOption(prod.options[0]);
  }, [id]);

  useEffect(() => {
    if (option.price) {
      setErrorMessage("");
      // setCurrentPrice(weight.price)
    }
  }, [option]);

  const handleAddToCart = () => {
    if (!!user) {
      if (product.category === "accessories") {
        setErrorMessage("");
        setIsProductAdded(true);
        setTimeout(() => {
          setIsProductAdded(false);
        }, 2000);
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
              size: "One Size",
            },
          });
        }
      } else if (_isEmpty(option)) {
        setErrorMessage("Please Select Weight or quantity");
      } else {
        setIsProductAdded(true);
        setTimeout(() => {
          setIsProductAdded(false);
        }, 2000);
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
              type: product.type,
              option
            },
          });
        }
      }
    } else {
      setIsLoginClicked(true);
    }
  };
  const breadCrumbLinks = [
    {
      "linkText": "Home",
      "linkHref": "/",
      "isActive": false
    }, {
      "linkText": `${category[0]?.toUpperCase() + category.slice(1)}`,
      "linkHref": `${ROUTES.CATEGORY}/${category}`,
      "isActive": false
    }
    , {
      "linkText": `${product?.title ? product.title[0].toUpperCase() + product.title.slice(1).toLowerCase() : ""}`,
      "linkHref": `${ROUTES.CATEGORY}/${category}/${id}`,
      "isActive": true
    }
  ];

  console.log(product)
  return (<>
    <BreadCrumbs breadCrumbLinks={breadCrumbLinks} />
    <div className="content__product__detail__page">
      <div
        className="alertbox"
        style={
          isProductAdded
            ? { transform: "translateY(55vh)", transition: "all 0.7s ease-out" }
            : { transform: "translateY(-1000px)" }
        }
      >
        <AlertBox product={product} message="Added to bag!" />
      </div>
      <div className="product__display__container" id="carousel__product__detail__page">
        <div className="product__image">
          <Carousel arrayOfImagesUrl={product.image} />
        </div>
        <div className="product__detail">
          <div className="product__description">
            <h3>{product.title}</h3>
            <p>
              {/* Description lorem ipsum is good when you dont know what to write
              and want to fill the area with some text. */}
              {product.description}
            </p>
            <hr />
            {/* 
            <div className="rating__container">
              <StarRating rating={product.rating} />
            </div> */}
            <p className="price">{`Rs. ${option.price}`}</p>
          </div>
          <AvailableOptions options={product?.options} setOption={setOption} selectedOption={option} />
          <Quantity
            itemQuantity={itemQuantity}
            setItemQuantity={setItemQuantity}
          />
          <div className="error__and__button">
            <div className="error__message">{errorMessage}</div>
            <div id="addItemToBag">
              <AddToBagButton content="ADD TO CART" isProductAdded={isProductAdded} handleClick={handleAddToCart} />
            </div>
          </div>
        </div>
      </div>
      {isLoginClicked && <Modal setIsModalOpen={setIsLoginClicked} />}
      <SimilarProducts
        category={product?.category}
        id={product?.id}
      />
    </div>
  </>
  );
}

export default ProductDetails;
