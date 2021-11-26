import React, {useState} from "react";
import { render } from "react-dom";

import "./Header.scss";
import { Link } from "react-router-dom";
import * as ROUTES from "../../constants/Routes";
import Sweets from "./Sweets";
import Snacks from "./Snacks"

export default function Navbar() {
  const [isHovering, setIsHovering] = useState(false);
  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };

    const [isVisible, setIsVisible] = useState(false);
    const handleClick = () => {
      setIsVisible(!isVisible);
    };
  
    return (
      <div>
        <div className='header-container'>
          <div className='nav-bar'>
            <nav className='nav-list'>
              <div className='hamburger' onClick={handleClick}>
                <div className='bar'></div>
              </div>
              <ul
                className={`header-links ${isVisible === true ? 'active' : ''}`}
              >
                <li>
                  <Link
                    to={ROUTES.HOME} className="link__style"
                    className='link'
                    onClick={handleClick}
                   >
                    Home
                  </Link>
                </li>
  
                <li className="dropdown">
                  <button className="category-btn">Sweets</button>
                  <Sweets/>
                </li>
                <li className="dropdown">
                <button className="category-btn">Snacks</button>
                <Snacks/>
                </li>
                <li>
                  <Link
                    to={ROUTES.ABOUT} 
                    className='link'
                    onClick={handleClick}
                    data-after='about'
                  >
                    About us
                  </Link>
                </li>
                <li>
                  <Link
                    to={ROUTES.CONTACT} 
                    smooth={true}
                    className='link'
                    onClick={handleClick}
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    );
  }
  
  const HoverableText = ({ handleMouseOver, handleMouseOut }) => {
  return (
    <div onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} class="navs">
      Sweets
    </div>
  );
};

const HoverTextSweets = () => {
  return (
    <div>
      {" "}
      <Sweets/>
    </div>
  );
};

// const HoverSweets = () => {
//   const [isHovering, setIsHovering] = useState(false);
//   const handleMouseOver = () => {
//     setIsHovering(true);
//   };

//   const handleMouseOut = () => {
//     setIsHovering(false);
//   };

//   return (
//     <div>
//       {/* Hover over this div to hide/show <HoverText /> */}
//       <HoverableText
//         handleMouseOver={handleMouseOver}
//         handleMouseOut={handleMouseOut}
//       />
//       {isHovering && <HoverTextSweets />}
//     </div>
//   );
// };

//   // // snacks

//   const HoverableTextForSnacks = ({ handleMouseOver, handleMouseOut }) => {
//   return (
//     <div onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} onClick={handleMouseOver} class="navs">
//       Snacks
//     </div>
//   );
// };

// const HoverTextSnacks = () => {
//   return (
//     <div>
//       {" "}
//       <Snacks/>
//     </div>
//   );
// };

// const HoverSnacks = () => {
//   const [isHovering, setIsHovering] = useState(false);
//   const handleMouseOver = () => {
//     setIsHovering(true);
//   };

//   const handleMouseOut = () => {
//     setIsHovering(false);
//   };

//   return (
//     <div>
//       {/* Hover over this div to hide/show <HoverText /> */}
//       <HoverableTextForSnacks
//         handleMouseOver={handleMouseOver}
//         handleMouseOut={handleMouseOut}
//       />
//       {isHovering && <HoverTextSnacks />}
//     </div>
//   );
// };

  