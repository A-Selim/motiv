import React from "react";
import { VictoryChart, VictoryBar, VictoryTooltip, VictoryAxis } from "victory";
import "./BarChart.css";

export default function BarChart() {
  const sampleData = [
    { x: "1PM", y: 133 },
    { x: "2PM", y: 120 },
    { x: "3PM", y: 157 },
    { x: "4PM", y: 130 },
    { x: "5PM", y: 88 },
    { x: "6PM", y: 100 },
    { x: "7PM", y: 120 },
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
          style={{ data: { fill: "#F4F5F9" } }}
          alignment="middle"
          categories={{
            x: ["1PM", "2PM", "3PM", "4PM", "5PM", "6PM", "7PM"],
          }}
          data={sampleData}
          events={[
            {
              eventHandlers: {
                onMouseOver: () => {
                  return [
                    {
                      target: "data",
                      mutation: (props) => {
                        return props.style.fill === "#2884FF" ? null : { style: { fill: "#2884FF" } };
                      },
                    },
                    {
                      target: "labels",
                      mutation: () => ({
                        active: true,
                      }),
                    },
                  ];
                },

                onMouseOut: () => {
                  return [
                    {
                      target: "data",
                      mutation: (props) => {
                        return props.style.fill === "#F4F5F9";
                      },
                    },
                    {
                      target: "labels",
                      mutation: () => ({
                        active: false,
                      }),
                    },
                  ];
                },
              },
            },
          ]}
          labels={({ datum }) => datum.x + "\n" + datum.y + "K"}
          labelComponent={
            <VictoryTooltip
              dy={0}
              pointerLength={0}
              centerOffset={{ x: 50, y: 60 }}
              flyoutStyle={{ stroke: "transparent", fill: "#282B32" }}
              flyoutPadding={{ top: 5, bottom: 5, left: 16, right: 16 }}
              style={{ fill: "#FFFFFF", fontSize: 13, fontWeight: 700 }}
            />
          }
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
