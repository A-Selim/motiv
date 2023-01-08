import React from "react";
import { Routes, Route } from "react-router-dom";
import Booking from "./Pages/Booking/Booking";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Header from "./Components/Header/Header";
import SideBar from "./Components/Sidebar/Sidebar";

export default function App() {
  return (
    <div className="container">
      <Header />
      <SideBar />
      <main className="main">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/booking" element={<Booking />} />
        </Routes>
      </main>
    </div>
  );
}
