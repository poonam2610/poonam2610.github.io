import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "./Carousel.scss";



export default function Carousel({numOfSlides = 2}) {
  const [current, setCurrent] = useState(0);
  const length = numOfSlides;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  return (
    <div className="slider">
      <FaChevronLeft className="left-arrow" onClick={prevSlide}/>
     <div className="carouselImage-container">
       <img src={`/bg-hp${current}.png`} alt=""/>
     </div>

      <FaChevronRight className="right-arrow" onClick={nextSlide} />
    </div>
  );
}


