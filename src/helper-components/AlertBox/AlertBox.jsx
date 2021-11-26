import React from "react"
import "./AlertBox.scss"
import PropTypes from "prop-types"


export default function AlertBox({product , message}){
  return (
    <div className = "alertbox__container">
        <div className = "alertbox__image">
          <img  src={product.image[0]} alt="product-pictures"/>
        </div>
        <div className = "alertbox__message">
        <h5>{message} </h5>

        </div>
    </div>
  )
}

AlertBox.propTypes = {
  product : PropTypes.object.isRequired,
  message : PropTypes.string.isRequired
}