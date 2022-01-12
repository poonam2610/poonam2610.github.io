// import React, { useState } from "react";
// import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
// import "./Carousel.scss";
// import PropTypes from "prop-types";

// export default function Carousel(cards) {
//   const [current, setCurrent] = useState(1);
//   const [translateValue, setTranslateValue] = useState(0);
//   const length = cards.length;

//   const cardsArr = cards.map() => {
//     return 
//   });

//   const nextSlide = () => {
//     console.log("Next slide called");
//     console.log("Before if", current)
//     if (current !== length) {
//       console.log("i entered if")
//       setCurrent(current + 1);
//       setTranslateValue(-current * 100);
//     }
//   };

//   const prevSlide = () => {
//     if (current !== 1) {
//       setCurrent(current - 1);
//       setTranslateValue((length - current - 1) * 100);
//     }
//   };

//   // useEffect(() => {
//   //   console.log("why why why")
//   //   let interval = setInterval(() => {
//   //     nextSlide();
//   //   }, 2000);
//   //   return ()=>(clearInterval(interval));
//   // }, []);

//   return (
//     <div className="slider">
//       <div
//         className="carouselImage-container"
//         style={{ transform: `translateX(${translateValue}%)` }}
//       >
//         {imagesArr}
//       </div>
//       <FaChevronLeft className="left-arrow" onClick={prevSlide} />
//       <FaChevronRight className="right-arrow" onClick={nextSlide} />
//     </div>
//   );
// }

// Carousel.propTypes = {
//   arrayOfImagesUrl: PropTypes.array.isRequired,
// }
