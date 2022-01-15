import React, { useState,useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "./Carousel.scss";
import PropTypes from "prop-types";

export default function Carousel({ arrayOfImagesUrl }) {
  const [current, setCurrent] = useState(1);
  const [translateValue, setTranslateValue] = useState(0);
  const length = arrayOfImagesUrl.length;

  const imagesArr = arrayOfImagesUrl.map((itemURL, index) => {
    return <img key={index} src={itemURL} className="image" alt="" />;
  });

  const nextSlide = () => {
 
    if (current !== length) {
      setCurrent(current + 1);
      setTranslateValue(-current * 100);
    }
  };

  const prevSlide = () => {
    if (current !== 1) {
      setCurrent(current - 1);
      setTranslateValue((length - current - 1) * 100);
    }
  };

  useEffect(() => {
    let interval = setInterval(() => {
      nextSlide();
    }, 2000);
    return ()=>(clearInterval(interval));
  }, []);

  return (
    <div className="slider">
      <div
        className="carouselImage-container"
        style={{ transform: `translateX(${translateValue}%)` }}
      >
        {imagesArr}
      </div>
      {/* <FaChevronLeft className="left-arrow" onClick={prevSlide} />
      <FaChevronRight className="right-arrow" onClick={nextSlide} /> */}
    </div>
  );
}

Carousel.propTypes = {
  arrayOfImagesUrl: PropTypes.array.isRequired,
}
