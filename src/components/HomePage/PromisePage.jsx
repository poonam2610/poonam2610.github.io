import React from "react";
import "./PromisePage.scss";
import {FaRegThumbsUp} from "react-icons/fa";
import { RiExchangeDollarFill,RiTruckLine } from "react-icons/ri";
import { BiSupport } from "react-icons/bi";


export default function PromisePage() {
  return (
    <div className="our-promise">
      <h2><span>100%&nbsp;</span> Authentic Product</h2>
      <div className="promise-cards-container">
        <div className="promise-card">
        <FaRegThumbsUp className="card-icons" />
          <p className="card-text">100% Genuine Products Guarantee </p>
        </div>
        <div className="promise-card">
          <RiTruckLine className="card-icons" />
          <p className="card-text">Guaranteed On-time Delivery </p>
        </div>
        <div className="promise-card">
          <RiExchangeDollarFill className="card-icons" />
          <p className="card-text">100% Return Guarantee & Exchchange </p>
        </div>
        <div className="promise-card">
          <BiSupport className="card-icons" />
          <p className="card-text">24x7 Customer Support </p>
        </div>
      </div>
    </div>
  );
}
