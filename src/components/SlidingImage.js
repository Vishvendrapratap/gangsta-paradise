import React, { useState, useEffect } from "react";
import "./styles/SlidingImage.css";

const SlidingImage = () => {
  return (
    <div className="image-container">
      <img src="/images/IMG_6246.png" alt="Sliding Image" />
      <div className="details"></div>
      <h1>In Meerut now.</h1>
    </div>
  );
};

export default SlidingImage;
