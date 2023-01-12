import React from "react";
import GaugeChart from "../../Components/Charts/GaugeChart/GaugeChart";
import gaugeChartsData from "../../data/gaugeChartsData";
import BarChart from "../../Components/Charts/BarChart/BarChart";
import LineChart from "../../Components/Charts/LineChart/LineChart";
import CarWidget from "../../Components/CarWidget/CarWidget";
import carsDataWidget from "../../data/carsDataWidget";
import "./Dashboard.css";
import { Bar } from "victory";

export default function Dashboard() {
  const gaugeChartElements = gaugeChartsData.map((part, index) => {
    return (
      <GaugeChart
        key={index}
        name={part.name}
        icon={part.icon}
        value={part.value}
        maxValue={part.maxValue}
        valueType={part.valueType}
        color={part.color}
        iconBackground={part.iconBackground}
      />
    );
  });

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
      <div className="gauge-charts-container">{gaugeChartElements}</div>
      <div className="statistics-charts-container">
        <BarChart />
        <LineChart />
      </div>
      <div className="widgets-container">{widgetElements}</div>
    </>
  );
}
