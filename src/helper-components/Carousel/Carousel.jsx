import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "./Carousel.scss";


const arr = [0, 1, 2];

export default function Carousel({ numOfSlides = 3 }) {
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
     
      {arr.map((num, index) => {
        return (
          <div
           
            key={index}
          >
            {index === current && (
              <img
                src={`/bg${num}.jpg`}
                alt=""
                className="image"
                width="50%"
              />
            )}
          </div>
        );
      })}
      <FaChevronRight className="right-arrow" onClick={nextSlide} />
    </div>
  );
}


