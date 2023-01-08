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
      <div className="cards-container">{cardsElements}</div>
    </>
  );
}
