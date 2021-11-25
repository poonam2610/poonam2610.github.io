import React from "react"
import "./Categories.scss"
import CategoriesCard from '../../helper-components/categories-card/CategoriesCard';
import * as ROUTES from "../../constants/Routes";
import { Link } from 'react-router-dom';


export default function Categories() {
  return (
    <div className="categories__container">
      <h1 className="categories__text">Products</h1>
      <div className="card__container">
          <div className="cards" id="Namkeen">
            <Link className="link__style" to={`${ROUTES.CATEGORY}${ROUTES.NAMKEEN}`}>
              <CategoriesCard image="/bariksev.jpg" title="Namkeen" />
            </Link>
          </div>
          <div className="cards" id="=shrikhand">
            <Link className="link__style" to={`${ROUTES.CATEGORY}${ROUTES.SHRIKHAND}`}>
              <CategoriesCard image="/kesarshrikhand.jpeg" title="shrikhand" />
            </Link>
          </div>
          <div className="cards" id="farsan">
            <Link className="link__style" to={`${ROUTES.CATEGORY}${ROUTES.FARSAN_SWEETS}`}>
              <CategoriesCard image="/farsan.jpeg" title="Farsan" />
            </Link>
          </div>
          <div className="cards" id="drySnacks">
            <Link className="link__style" to={`${ROUTES.CATEGORY}${ROUTES.DRY_SNACKS}`}>
              <CategoriesCard image="/drykachori.jpg" title="Dry Snacks" />
            </Link>
          </div>
          <div className="cards" id="chenaSweets">
            <Link className="link__style" to={`${ROUTES.CATEGORY}${ROUTES.CHENA_SWEETS}`}>
              <CategoriesCard image="/mangoras.jpeg" title="Chena Sweets" />
            </Link>
          </div>
           <div className="cards" id="peda">
            <Link className="link__style" to={`${ROUTES.CATEGORY}${ROUTES.PEDA}`}>
              <CategoriesCard image="/peda.jpg" title="Peda" />
            </Link>
          </div>
          <div className="cards" id="milkSweets">
            <Link className="link__style" to={`${ROUTES.CATEGORY}${ROUTES.MILK_SWEETS}`}>
              <CategoriesCard image="/peda.jpg" title="Milk sweets" />
            </Link>
          </div>
          <div className="cards" id="desiGheeSweets">
            <Link className="link__style" to={`${ROUTES.CATEGORY}${ROUTES.DESI_GHEE_SWEETS}`}>
              <CategoriesCard image="/peda.jpg" title="Desi ghee sweets" />
            </Link>
          </div>
          <div className="cards" id="dryFruitSweets">
            <Link className="link__style" to={`${ROUTES.CATEGORY}${ROUTES.CASHEW_DRYFRUIT_SWEETS}`}>
              <CategoriesCard image="/peda.jpg" title="Cashew/Dry fruit sweets" />
            </Link>
          </div>
          <div className="cards" id="seasonalSweets">
            <Link className="link__style" to={`${ROUTES.CATEGORY}${ROUTES.SEASONAL_SWEETS}`}>
              <CategoriesCard image="/peda.jpg" title="Seasonal sweets" />
            </Link>
          </div>
          <div className="cards" id="bengaliSweets">
            <Link className="link__style" to={`${ROUTES.CATEGORY}${ROUTES.BENGALI_SWEETS}`}>
              <CategoriesCard image="/peda.jpg" title="Bengali sweets" />
            </Link>
          </div>
          <div className="cards" id="otherProducts">
            <Link className="link__style" to={`${ROUTES.CATEGORY}${ROUTES.OTHER_PRODUCTS}`}>
              <CategoriesCard image="/peda.jpg" title="other products" />
            </Link>
          </div>
          <div className="cards" id="hotSnacks">
            <Link className="link__style" to={`${ROUTES.CATEGORY}${ROUTES.HOT_SNACKS}`}>
              <CategoriesCard image="/peda.jpg" title="hot snacks" />
            </Link>
          </div>
      </div>
    </div>
  )
}