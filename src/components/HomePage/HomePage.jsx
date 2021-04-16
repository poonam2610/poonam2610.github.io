import React from 'react'
import { Link } from 'react-router-dom';
import Carousel from "../../helper-components/Carousel/Carousel"
import CategoriesCard from '../../helper-components/categories-card/CategoriesCard';
import * as ROUTES from "../../constants/Routes";
import "./HomePage.scss"

function HomePage() {
  return (
    <div className="content__container">
      <div className="carousel__container">
        <Carousel/>
      </div>
      <div className="mostInDemand__container">
        <h2 className="text-color inDemand__text">Most In Demands</h2>
        <div className="card__container">
          <div className="left__container">
            <div className="cards" id="electronics">
              <Link to={`${ROUTES.PRODUCTS}/electronics`}>
                <CategoriesCard image="https://fakestoreapi.com/img/81QpkIctqPL._AC_SX679_.jpg" title="Electronics" />
              </Link>
            </div>
            <div className="cards" id="kids">
              <Link to={`${ROUTES.PRODUCTS}/kids`}>
                <CategoriesCard image="http://www.bu.edu/files/2019/09/are-kids-hardwired-for-revenge-1500x1000.jpg" title="Kid's Clothing" />
              </Link>
            </div>
          </div>
          <div className="right__container">
            <div className="cards" id="men">
              <Link to={`${ROUTES.PRODUCTS}/men`}>
                <CategoriesCard image="https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg" title="Men's Clothing" />
              </Link>
            </div>
            <div className="cards" id="women">
              <Link to={`${ROUTES.PRODUCTS}/lady`}>
                <CategoriesCard image="https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg" title="Women's Clothing" />
              </Link>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}
export default HomePage;
