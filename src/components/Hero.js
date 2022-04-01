import React from "react";
// import photogrid from "../images/photo-grid.png";

export default function Hero() {
  return (
    <div className="hero-div">
      <img
        src="/images/photo-grid.png"
        alt="airbnb-front-page-grid"
        className="photo-grid"
      />
      <h1>Online Experiences</h1>
      <p>
        Join unique interactive activities led by one-of-a-kind hosts—all
        without leaving home.
      </p>
    </div>
  );
}
