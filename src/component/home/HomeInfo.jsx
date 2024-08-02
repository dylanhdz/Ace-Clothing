import React from "react";
import "./HomeInfo.css";
import { Link } from "react-router-dom";

function HomeInfo() {
  return (
    <article className="home-info">
      <div className="info-txt">
        <h1>
          Conoce
        </h1>
        <h2>
          las rosas más importantes de Ecuador.
        </h2>
        <p>
          Con más de 20 años de experiencia en la producción de rosas de calidad, Rosesland™ es la granja de rosas más importante de Ecuador. Nuestro compromiso con la calidad y la sostenibilidad nos ha permitido convertirnos en líderes en la industria de las flores.
        </p>
      </div>
      <button className="explore-clothing_btn">
        <Link to="explore/all"><h1 style={{ display: 'inline' }}>¡Descubre ya </h1><h2 style={{ display: 'inline' }}>nuestros productos!</h2></Link>
      </button>
    </article>
  );
}

export default HomeInfo;
