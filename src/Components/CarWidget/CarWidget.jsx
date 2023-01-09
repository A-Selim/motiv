import React from "react";
import "./CarWidget.css";

export default function CarWidget(props) {
  const { modelName, image, recommendPercentage, range, rentPerHour } = props;

  return (
    <div className="car-widget">
      <div className="widget-top">
        <i className="icon ri-recycle-line"></i>
        <p className="recommend-percent">{recommendPercentage}% Recommend</p>
      </div>

      <div className="widget-image">
        <img src={image} alt={modelName} />
      </div>

      <h3 className="widget-model-name">{modelName}</h3>

      <div className="widget-footer">
        <div className="widget-footer-leftside">
          <i className="icon ri-recycle-line"></i>
          <span className="range">{Math.round(range / 1000)}k</span>
          <i className="icon ri-settings-5-line"></i>
          <i className="icon ri-flashlight-line"></i>
        </div>

        <p className="widget-price">
          ${rentPerHour}
          <span>/h</span>
        </p>
      </div>
    </div>
  );
}
