import React from "react";
import carsData from "../../data/carsData";
import CarCard from "../../Components/CarCard/CarCard";
import "./Booking.css";

export default function Booking() {
  const cardsElements = carsData.map((car) => {
    return (
      <CarCard
        key={car.id}
        modelName={car.modelName}
        bodyStyle={car.bodyStyle}
        image={car.image}
        passengers={car.passengers}
        transmission={car.transmission}
        rentPerDay={car.rentPerDay}
        isFavorite={car.isFavorite}
      />
    );
  });

  return (
    <>
      <h2 className="main-title">Booking</h2>

      <div className="main-top">
        <div className="selection-container">
          <select name="condition" id="condition" className="select-box">
            <option value="new">New</option>
            <option value="old">Old</option>
          </select>
          <select name="model" id="model" className="select-box">
            <option value="all">All</option>
            <option value="toyota">Toyota</option>
            <option value="bmw">BMW</option>
            <option value="mazda">Mazda</option>
          </select>
        </div>

        <div className="tools-container">
          <button className="tool-btn grid-btn">
            <i className="ri-layout-grid-fill"></i>
          </button>
          <button className="tool-btn settings-btn">
            <i className="ri-equalizer-line"></i>
          </button>
        </div>
      </div>

      <div className="cards-container">{cardsElements}</div>
    </>
  );
}
