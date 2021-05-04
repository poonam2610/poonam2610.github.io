import React from "react"
import "./Categories.scss"
import CategoriesCard from '../../helper-components/categories-card/CategoriesCard';
import * as ROUTES from "../../constants/Routes";
import { Link } from 'react-router-dom';


export default function Categories() {
  return (
    <div className="categories__container">
      <h1 className="categories__text">Categories</h1>
      <div className="card__container">
        <div className="left__container">
          <div className="cards" id="accessories">
            <Link className="link__style" to={`${ROUTES.CATEGORY}${ROUTES.ACCESSORIES}`}>
              <CategoriesCard image="/bag-p.jpg" title="Accessories" />
            </Link>
          </div>
          <div className="cards" id="kids">
            <Link className="link__style" to={`${ROUTES.CATEGORY}${ROUTES.KIDS}`}>
              <CategoriesCard image="/kid-cat2.jpg" title="Kid's Clothing" />
            </Link>
          </div>
        </div>
        <div className="right__container">
          <div className="cards" id="men">
            <Link className="link__style" to={`${ROUTES.CATEGORY}${ROUTES.MEN}`}>
              <CategoriesCard image="/men.jpg" title="Men's Clothing" />
            </Link>
          </div>
          <div className="cards" id="women">
            <Link className="link__style" to={`${ROUTES.CATEGORY}${ROUTES.WOMEN}`}>
              <CategoriesCard image="/woman-category.jpg" title="Women's Clothing" />
            </Link>
          </div>
        </div>

      </div>
    </div>
  )
}