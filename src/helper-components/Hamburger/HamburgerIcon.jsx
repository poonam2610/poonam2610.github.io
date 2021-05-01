import React from "react"
import "./HamburgerIcon.scss"


export default function HamburgerIcon({isClicked , handleClick}){
  return (
    <div className={`nav-icon ${isClicked ? "hov":""}`}>
      <div></div>
    </div>
  )
}