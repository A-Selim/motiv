import React from "react";
import { VictoryChart, VictoryTheme, VictoryArea, VictoryAxis } from "victory";
import "./LineChart.css";

export default function LineChart() {
  const sampleData = [
    { x: 0, y: 3 },
    { x: 1, y: 7 },
    { x: 1.5, y: 7 },
    { x: 2, y: 11 },
    { x: 2.5, y: 10 },
    { x: 3, y: 11 },
    { x: 3.5, y: 7 },
    { x: 4, y: 9 },
    { x: 5, y: 11 },
    { x: 6, y: 5 },
    { x: 7, y: 8 },
    { x: 8, y: 14 },
    { x: 9, y: 15 },
  ];

  return (
    <div className="line-chart">
      <h3 className="line-chart-title">
        <strong>Car</strong> Statistics
      </h3>
      <div className="chart-top-wrapper">
        <p className="line-chart-date">20 February 2022</p>
        <div className="btns-wrapper">
          <button className="btn">Day</button>
          <button className="btn">Week</button>
          <button className="btn">Month</button>
        </div>
      </div>

      <VictoryChart height={250} domainPadding={{ x: 10 }}>
        <VictoryArea
          categories={{
            x: ["7am", "9am", "11am", "1pm", "3pm", "5pm", "7pm", "9pm"],
          }}
          interpolation="natural"
          alignment="middle"
          style={{
            data: { fill: "#FF764C", fillOpacity: 0.3, stroke: "#FF764C", strokeWidth: 1 },
          }}
          data={sampleData}
        />
        <VictoryAxis
          theme={VictoryTheme.material}
          crossAxis={false}
          style={{
            axis: { stroke: "transparent" },
            grid: { stroke: "#F2F2F2", strokeWidth: 0.8 },
            tickLabels: { fontSize: 14, fill: "#808191" },
          }}
        />
      </VictoryChart>
    </div>
  );
}
