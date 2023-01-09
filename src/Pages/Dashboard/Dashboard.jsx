import React from "react";
import CarWidget from "../../Components/CarWidget/CarWidget";
import carsDataWidget from "../../data/carsDataWidget";
import "./Dashboard.css";

export default function Dashboard() {
  const widgetElements = carsDataWidget.map((car) => {
    return (
      <CarWidget
        key={car.id}
        modelName={car.modelName}
        image={car.image}
        recommendPercentage={car.recommendPercentage}
        range={car.range}
        rentPerHour={car.rentPerHour}
      />
    );
  });

  return (
    <>
      <div className="widgets-container">{widgetElements}</div>
    </>
  );
}
