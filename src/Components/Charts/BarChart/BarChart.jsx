import React from "react";
import { VictoryChart, VictoryTheme, VictoryBar, VictoryAxis } from "victory";
import "./BarChart.css";

export default function BarChart() {
  const sampleData = [
    { x: 1, y: 133 },
    { x: 2, y: 120 },
    { x: 3, y: 157 },
    { x: 4, y: 110 },
    { x: 5, y: 130 },
    { x: 6, y: 88 },
    { x: 7, y: 100 },
    { x: 8, y: 120 },
  ];

  return (
    <div className="bar-chart">
      <h3 className="bar-chart-title">
        <strong>Miles</strong> Statistics
      </h3>
      <div className="chart-top-wrapper">
        <div className="btns-wrapper">
          <button className="btn">Day</button>
          <button className="btn">Week</button>
          <button className="btn">Month</button>
        </div>
        <p className="bar-chart-unit">256 Miles</p>
      </div>
      <VictoryChart height={250}>
        <VictoryBar
          barRatio={0.8}
          style={{ data: { fill: "#2884FF" } }}
          alignment="middle"
          categories={{
            x: ["1PM", "2PM", "3PM", "4PM", "5PM", "5PM", "6PM", "7PM"],
          }}
          data={sampleData}
        />
        <VictoryAxis
          crossAxis={false}
          style={{
            axis: { stroke: "transparent" },
            tickLabels: { fontSize: 14, fill: "#808191" },
          }}
        />
      </VictoryChart>
    </div>
  );
}
