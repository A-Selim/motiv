import React from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";

export default function SideBar() {
  const sidebarPages = [
    {
      link: "dashboard",
      iconName: "dashboard",
      text: "Dashboard",
    },
    {
      link: "assets",
      iconName: "pie-chart",
      text: "Assets",
    },
    {
      link: "booking",
      iconName: "car",
      text: "Booking",
    },
    {
      link: "sell-cars",
      iconName: "shopping-bag",
      text: "Sell Cars",
    },
    {
      link: "buy-cars",
      iconName: "shopping-cart",
      text: "Buy Cars",
    },
    {
      link: "services",
      iconName: "sword",
      text: "Services",
    },
    {
      link: "calendar",
      iconName: "calendar",
      text: "Calendar",
    },
    {
      link: "messages",
      iconName: "message-2",
      text: "Messages",
    },
  ];

  const sidebarUserTools = [
    {
      link: "settings",
      iconName: "settings-2",
      text: "Settings",
    },
    {
      link: "",
      iconName: "logout-box",
      text: "Log out",
    },
  ];

  function createSidebar(array) {
    return array.map((element, index) => {
      return (
        <Link key={index} to={`/${element.link}`} className="page-link">
          <i className={`ri-${element.iconName}-line page-link-icon`}></i>
          <span className="page-link-text">{element.text}</span>
        </Link>
      );
    });
  }

  return (
    <div className="sidebar">
      <div className="company-logo">
        <img src="assets/company-logo.png" alt="" />
      </div>

      <div className="pages-links-container">{createSidebar(sidebarPages)}</div>

      <div className="settings-container">{createSidebar(sidebarUserTools)}</div>
    </div>
  );
}
