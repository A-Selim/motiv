import React from "react";
import "./CarCard.css";

export default function CarCard(props) {
  const { modelName, bodyStyle, image, passengers, transmission, rentPerDay, isFavorite } = props;

  return (
    <div className="car-card">
      <div className="card-top">
        <h3 className="model-name">{modelName}</h3>
        <i className={`heart-icon ri-heart-${isFavorite ? "fill" : "line"}`}></i>
      </div>

      <p className="body-style">{bodyStyle}</p>

      <div className="car-image">
        <img src={image} alt={modelName} />
      </div>

      <div className="card-footer">
        <p className="passengers">
          <i className="icon ri-user-line"></i>
          <span>{passengers}</span>
        </p>

        <p className="transmission">
          <i className="icon ri-recycle-line"></i>
          <span>{transmission}</span>
        </p>

        <p className="price">
          ${rentPerDay}
          <span>/d</span>
        </p>
      </div>
    </div>
  );
}
