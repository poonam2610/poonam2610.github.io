import React from 'react'
import Carousel from "../../helper-components/Carousel/Carousel"
import Categories from "./Categories"
import "./HomePage.scss"
import MustHaveSection from './MustHaveSection'



function HomePage() {
  const arrayOfImagesUrl = ["/generation.png", "/Special Namkeen.png", "/arrival.png"]


  return (

    <div className={`content__container`}>
      <div className="carousel__container">
        <Carousel arrayOfImagesUrl={arrayOfImagesUrl} />
      </div>
      <div>
        <Categories />
      </div>
       <div>
        <MustHaveSection />
      </div> 
    </div>
  )
}
export default HomePage;
