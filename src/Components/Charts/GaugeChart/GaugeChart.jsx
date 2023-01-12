import React, { useState, useEffect } from "react";
import { VictoryPie, VictoryLabel, VictoryAnimation } from "victory";
import "./GaugeChart.css";

export default function GaugeChart(props) {
  const [data, setData] = useState({
    value: 0,
    data: getData(0),
  });

  useEffect(() => {
    setData({
      value: props.value,
      data: getData(props.value),
    });
  }, []);

  function getData(value) {
    return [
      { x: 1, y: value },
      { x: 2, y: props.maxValue - value },
    ];
  }

  return (
    <div className="gauge-chart">
      <i
        className={`${props.icon} chart-icon`}
        style={{ color: props.color, backgroundColor: props.iconBackground }}
      ></i>
      <h3 className="gauge-chart-title">{props.name}</h3>

      <svg viewBox="0 20 200 150">
        <VictoryPie
          startAngle={-120}
          endAngle={120}
          standalone={false}
          animate={{ duration: 200 }}
          width={200}
          height={200}
          data={data.data}
          innerRadius={65}
          cornerRadius={0}
          labels={() => null}
          style={{
            data: {
              fill: ({ datum }) => {
                return datum.x === 1 ? props.color : "#F4F5F9";
              },
            },
          }}
        />
        <VictoryAnimation duration={2000} data={data}>
          {(data) => {
            return (
              <VictoryLabel
                textAnchor="middle"
                verticalAnchor="middle"
                x={100}
                y={100}
                text={
                  props.valueType === "percent" ? `${Math.round(data.value)}%` : `${Math.round(data.value / 1000)}K`
                }
                style={{ fontSize: 25 }}
              />
            );
          }}
        </VictoryAnimation>
      </svg>
    </div>
  );
}
