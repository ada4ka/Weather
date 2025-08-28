import React from "react";
import './Weather.css';
import { FiSun } from "react-icons/fi";
import { FaRegTrashCan } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa6";
import { IoMdRefresh } from "react-icons/io";

const Weather = () => {
  return (
    <main className="main" >
      <div className="main-card">
      <div className="main-card-title">
        <h2 className="main-card-title-country">Ukraine</h2>
        <h2 className="main-card-title-city">Kyiv</h2>
      </div>
      <h2 className="main-card-time">18:00</h2>
      <div className="main-card-forecast">
        <h3 className="main-card-weather">Hourly forecast</h3>
        <h3 className="main-card-weather">Weekly forecast</h3>
      </div>
      <p className="main-card-date"> 22.08.2025 | Friday</p>
      <FiSun className="main-card-icon" />
      <h2 className="main-card-temperature">22℃ </h2>
      <div className="main-card-function">
        <IoMdRefresh className="main-card-function-reload" />
        <FaRegHeart className="main-card-function-like" />
        <button className="main-card-function-more">See more</button>
        <FaRegTrashCan className="main-card-function-delete" />
      </div>
       </div>
    </main>
  );
};

export default Weather;