import React from "react";
import "./About.css";
import about_img from "../../assets/about.png";
import play_icon from "../../assets/play-icon.png";

const About = () => {
  return (
    <div className="about">
      <div className="about-left">
        <img src={about_img} alt="" className="about-img" />
        <img src={play_icon} alt="" className="play-icon" />
      </div>
      <div className="about-right">
        <h3>About University</h3>
        <h2>Nurturing Tomorrows Leader Today</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa ea ab
          eaque. Reiciendis sint aliquid quibusdam veniam iure eius dolorum
          dignissimos maxime.
        </p>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe
          molestias Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Atque itaque ratione vel rerum eligendi? nihil placeat nesciunt
          voluptate error sunt quidem id sequi.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
          magni voluptatem labore perspiciatis assumenda suscipit explicabo
          ipsum maiores similique accusantium sint commodi illo delectus dolores
          cumque, facilis natus eaque quia?
        </p>
      </div>
    </div>
  );
};

export default About;
