import React from "react";
import "./Offers.css";
import exclusive_image from "../assets/exclusive_image.png";
const Offers = () => {
  return (
    <div className="offers">
      <div className="offers-left">
        <h1>EXCLUSIVE</h1>
        <h1>Offers for you </h1>
        <p>ONLY ON BEST SELLING PRODUCTS</p>
        <button>CHECK NOW</button>
      </div>
      <div className="offers-right">
        <img src={exclusive_image} alt="" srcset="" />
      </div>
    </div>
  );
};

export default Offers;
