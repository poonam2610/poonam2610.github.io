import React from "react"
import "./Categories.scss"
import CategoriesCard from '../../helper-components/categories-card/CategoriesCard';
import * as ROUTES from "../../constants/Routes";
import { Link } from 'react-router-dom';


export default function Categories(){
  return(
    <div className="categories__container">
        <h2 className="categories__text">Categories</h2>
        <div className="card__container">
          <div className="left__container">
            <div className="cards" id="accessories">
              <Link to={`${ROUTES.CATEGORY}/accessories`}>
                <CategoriesCard image="/Accessories-category.jpg" title="Accessories" />
              </Link>
            </div>
            <div className="cards" id="kids">
              <Link to={`${ROUTES.CATEGORY}/kids`}>
                <CategoriesCard image="/kids-section.png" title="Kid's Clothing" />
              </Link>
            </div>
          </div>
          <div className="right__container">
            <div className="cards" id="men">
              <Link to={`${ROUTES.CATEGORY}/men`}>
                <CategoriesCard image="/men-category.jpg" title="Men's Clothing" />
              </Link>
            </div>
            <div className="cards" id="women">
              <Link to={`${ROUTES.CATEGORY}/lady`}>
                <CategoriesCard image="/woman-category.jpg" title="Women's Clothing" />
              </Link>
            </div>
          </div>

        </div>
      </div>
  )
}