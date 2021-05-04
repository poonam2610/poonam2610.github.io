import React from "react"
import "./DialogueBox.scss"
import PropTypes from "prop-types"
import {FaTimes} from "react-icons/fa"

export default function DialogueBox({mode, title, message ,yes, no, buttonMessage}){
  return (
    <div className="dialogue__box__container">
    <div className="dialogue__box__modal">
    <button className="close" onClick={no}>
          <FaTimes />
        </button>
    <div className = "dialogue__box__content">
      <div className = "dialogue__box__message">
        <h3>{title} </h3>
        <h4>{message} </h4>
      </div>
      <div className="dialogue__box__button__container">
        <button className="dialogue__box__button  btn" onClick={no}> CANCEL</button>
        <button className= "dialogue__box__button btn" onClick={yes}>{buttonMessage} </button>
      </div>
    </div>
    </div>

    </div>
  )
}


DialogueBox.propTypes = {
  mode :  PropTypes.string,
  title : PropTypes.string,
  message : PropTypes.string.isRequired,
  yes: PropTypes.func.isRequired,
  no : PropTypes.func.isRequired
}