import React from 'react'
import Carousel from "../../helper-components/Carousel/Carousel"
import Categories from "./Categories"
import PromisePage from "./PromisePage"
import "./HomePage.scss"
import MustHaveSection from './MustHaveSection'

function HomePage() {
  return (
    <div className="content__container content">
      <div className="carousel__container">
        <Carousel/>
      </div>
      <div>
      <Categories/>
      </div>
      <div>
        <MustHaveSection/>
      </div>
      <div>
        <PromisePage/>
      </div>
  
    </div>
  )
}
export default HomePage;
