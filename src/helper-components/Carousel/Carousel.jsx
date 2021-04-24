import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "./Carousel.scss";



export default function Carousel({arrayOfImagesUrl}) {
  const [current, setCurrent] = useState(0);
  const length = arrayOfImagesUrl.length;

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
       <img src={arrayOfImagesUrl[current]} className="image" alt=""/>
     </div>

      <FaChevronRight className="right-arrow" onClick={nextSlide} />
    </div>
  );
}


