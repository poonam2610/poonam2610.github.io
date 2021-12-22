import React, { useEffect } from "react"
import "./Categories.scss"
import CategoriesCard from '../../helper-components/categories-card/CategoriesCard';
import * as ROUTES from "../../constants/Routes";
import { Link } from 'react-router-dom';

let timer;
export default function Categories() {
  return (
    <div className="categories__container">
      <h1 className="categories__text">Categories</h1>

      <div className="card__container">
        {/* <div className="cards" id="Namkeen">
            <Link className="link__style" to={`${ROUTES.CATEGORY}${ROUTES.NAMKEEN}`}>
              <CategoriesCard image="/murmura.JPG" title="Namkeen" />
            </Link>
          </div>
          <div className="cards" id="=shrikhand">
            <Link className="link__style" to={`${ROUTES.CATEGORY}${ROUTES.SHRIKHAND}`}>
              <CategoriesCard image="/kesarshrikhand.jpeg" title="shrikhand" />
            </Link>
          </div> */}
        <div className="cards" id="sweets">
          <Link className="link__style" to={`${ROUTES.CATEGORY}${ROUTES.SWEETS}`}>
            <CategoriesCard image="/farsan.jpeg" title="Sweets" />
          </Link>
        </div>
        <div className="cards" id="drySnacks">
          <Link className="link__style" to={`${ROUTES.CATEGORY}${ROUTES.DRY_SNACKS}`}>
            <CategoriesCard image="/drykachori.jpg" title="Dry Snacks" />
          </Link>
        </div>
        <div className="cards" id="chenaSweets">
          <Link className="link__style" to={`${ROUTES.CATEGORY}${ROUTES.CHENA_SWEETS}`}>
            <CategoriesCard image="/chenasweets/Rasgulla.jpg" title="Chena Sweets" />
          </Link>
        </div>
        <div className="cards" id="peda">
          <Link className="link__style" to={`${ROUTES.CATEGORY}${ROUTES.PEDA}`}>
            <CategoriesCard image="/peda/Kesar Peda.JPG" title="Peda" />
          </Link>
        </div>
        <div className="cards" id="milkSweets">
          <Link className="link__style" to={`${ROUTES.CATEGORY}${ROUTES.MILK_SWEETS}`}>
            <CategoriesCard image="/milksweets/Sangam Triveni.jpg" title="Milk sweets" />
          </Link>
        </div>
        <div className="cards" id="desiGheeSweets">
          <Link className="link__style" to={`${ROUTES.CATEGORY}${ROUTES.DESI_GHEE_SWEETS}`}>
            <CategoriesCard image="/desigheesweets/Mawa Gujiya.JPG" title="Desi ghee sweets" />
          </Link>
        </div>
        <div className="cards" id="dryFruitSweets">
          <Link className="link__style" to={`${ROUTES.CATEGORY}${ROUTES.CASHEW_DRYFRUIT_SWEETS}`}>
            <CategoriesCard image="/dryfruitsweets/kaju-roll.png" title="Cashew/Dry fruit sweets" />
          </Link>
        </div>
        <div className="cards" id="seasonalSweets">
          <Link className="link__style" to={`${ROUTES.CATEGORY}${ROUTES.SEASONAL_SWEETS}`}>
            <CategoriesCard image="/seasonalsweets/Rabdi.jpg" title="Seasonal sweets" />
          </Link>
        </div>
        <div className="cards" id="bengaliSweets">
          <Link className="link__style" to={`${ROUTES.CATEGORY}${ROUTES.BENGALI_SWEETS}`}>
            <CategoriesCard image="/bengalisweets/CREAM-SANDWICH.png" title="Bengali sweets" />
          </Link>
        </div>
        {/* <div className="cards" id="otherProducts">
            <Link className="link__style" to={`${ROUTES.CATEGORY}${ROUTES.OTHER_PRODUCTS}`}>
              <CategoriesCard image="/otherproducts/Motichoor Laddu.jpg" title="other products" />
            </Link>
          </div> */}
        <div className="cards" id="hotSnacks">
          <Link className="link__style" to={`${ROUTES.CATEGORY}${ROUTES.HOT_SNACKS}`}>
            <CategoriesCard image="/hotsnacks/samosa-2.jpg" title="hot snacks" />
          </Link>
        </div>

      </div>
    </div>

  )
}

