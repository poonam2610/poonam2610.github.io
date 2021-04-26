import React from "react";
import "./PromisePage.scss";
import {FaRegThumbsUp} from "react-icons/fa";
import { RiExchangeDollarFill,RiTruckLine } from "react-icons/ri";
import { BiSupport } from "react-icons/bi";


export default function PromisePage() {
  return (
    <div className="our__promise">
      <h2><span>100%&nbsp;</span> Authentic Product</h2>
      <div className="promise__cards__container">
        <div className="promise__card">
        <FaRegThumbsUp className="card__icons" />
          <p className="card__text">100% Genuine Products Guarantee </p>
        </div>
        <div className="promise__card">
          <RiTruckLine className="card__icons" />
          <p className="card__text">Guaranteed On-time Delivery </p>
        </div>
        <div className="promise__card">
          <RiExchangeDollarFill className="card__icons" />
          <p className="card__text">100% Return Guarantee & Exchchange </p>
        </div>
        <div className="promise__card">
          <BiSupport className="card__icons" />
          <p className="card__text">24x7 Customer Support </p>
        </div>
      </div>
    </div>
  );
}
