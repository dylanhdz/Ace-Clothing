import React from "react";
import photo1 from "../../assets/images/home-photo-1.webp";
import photo2 from "../..//assets/images/home-photo-2.webp";
import photo3 from "../../assets/images/home-photo-3.webp";
import roses1 from "../../assets/images/roses-photo-1.jpg";
import roses2 from "../../assets/images/roses-photo-2.jpg";
import roses3 from "../../assets/images/roses-photo-3.jpg";

import "./HomePhotoShoot.css";

function HomePhotoShoot() {
  return (
    <div className="photoshoot-container">
      <span className="model-photo_wrapper boy">
        <img src={roses1} className="model-photo" alt="model photograph" />
      </span>
      <span className="model-photo_wrapper boy">
        <img src={roses3} className="model-photo" alt="model photograph" />
      </span>
      <span className="model-photo_wrapper female">
        <img src={roses2} className="model-photo" alt="model photograph" />
      </span>
    </div>
  );
}

export default HomePhotoShoot;
