import React, { useEffect, useState } from "react";
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
      if (current !== length) {
        nextSlide();
      } else {
        setCurrent(1);
        setTranslateValue(0)
      }
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [current]);

  return (
    <div className="slider">
      <div
        className="carouselImage-container"
        style={{ transform: `translateX(${translateValue}%)` }}
      >
        {imagesArr}
      </div>
      <FaChevronLeft className="left-arrow" onClick={prevSlide} />
      <FaChevronRight className="right-arrow" onClick={nextSlide} />
    </div>
  );
}

Carousel.propTypes = {
  arrayOfImagesUrl: PropTypes.array.isRequired,
}