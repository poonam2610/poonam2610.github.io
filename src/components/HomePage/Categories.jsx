import React, { useEffect } from "react"
import "./Categories.scss"
import CategoriesCard from '../../helper-components/categories-card/CategoriesCard';
import * as ROUTES from "../../constants/Routes";
import { Link } from 'react-router-dom';


export default function Categories() {
  return (
    <div className="categories__container">
      <h1 className="categories__text">Categories</h1>

      <div className="card__container">
        <div className="cards" id="Namkeen">
            <Link className="link__style" to={`${ROUTES.CATEGORY}${ROUTES.NAMKEEN}`}>
              <CategoriesCard image="/1.png" />
            </Link>
          </div>
         
        <div className="cards" id="sweets">
          <Link className="link__style" to={`${ROUTES.CATEGORY}${ROUTES.SWEETS}`}>
            <CategoriesCard image="/2.png"  />
          </Link>
        </div>
        <div className="cards" id="snacks">
          <Link className="link__style" to={`${ROUTES.CATEGORY}${ROUTES.SNACKS}`}>
            <CategoriesCard image="/NAMKEEN.png" title="Snacks" />
          </Link>
        </div>
        
        
        <div className="cards" id="shrikhand">
          <Link className="link__style" to={`${ROUTES.CATEGORY}${ROUTES.SHRIKHAND}`}>
            <CategoriesCard image="/ss.png" title="Shrikhand" />
          </Link>
        </div>
        
        <div className="cards" id="peda">
            <Link className="link__style" to={`${ROUTES.CATEGORY}${ROUTES.PEDA}`}>
              <CategoriesCard image="/peda1.png" title="Peda" />
            </Link>
          </div>
       
      </div>
    </div>

  )
}

