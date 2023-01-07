import React from "react";
import "./Header.css";
import profileImg from "../../assets/profile-img.png";

export default function Header() {
  return (
    <div className="header">
      <div className="search-bar">
        <label htmlFor="search">
          <i className="ri-search-line search-icon"></i>
        </label>
        <input type="text" id="search" placeholder="Search or type" />
      </div>

      <i className="ri-notification-4-line notification-icon">
        <span className="red-dot"></span>
      </i>

      <div className="avatar">
        <img src={profileImg} alt="Profile image" />
      </div>
    </div>
  );
}
