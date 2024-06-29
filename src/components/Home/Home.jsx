import React from "react";
import "./Home.css";
import dark_arrow from '../../assets/dark-arrow.png'

const Home = () => {
  return (
    <div className="home container ">
      <div className="home-text">
        <h1>We Ensure Better Education For a Better World</h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum libero
          optio accusamus, eaque itaque facilis? Magnam saepe nesciunt nam.
        </p>
        <button className="btn">Explore More <img src={dark_arrow} alt=""/></button>
      </div>
    </div>
  );
};

export default Home;
