import React from 'react'
import Carousel from "../../helper-components/Carousel/Carousel"
import Categories from "./Categories"
import PromisePage from "./PromisePage"
import "./HomePage.scss"
import MustHaveSection from './MustHaveSection'
import { useStateValue } from '../../context-management/StateProvider'


function HomePage() {
  const {isModalOpen} = useStateValue()[0];
  const arrayOfImagesUrl = ["/bg-hp0.png", "/bg-hp1.png", "/bg-hp2.png"]

  return (
    <div className={`content__container ${isModalOpen ? "blurred": ""}`}>
      <div className="carousel__container">
        <Carousel arrayOfImagesUrl={arrayOfImagesUrl}/>
      </div>
      <div>
        <Categories />
      </div>
      <div>
        <MustHaveSection/>
      </div>
      <div>
        <PromisePage />
      </div>
    </div>
  )
}
export default HomePage;
