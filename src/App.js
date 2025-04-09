import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Page/Login";
import HomePage from "./Page/HomePage";
import Profile from "./Components/HomePage/Profile";
import ChangePassword from "./Components/NavigationBar/ChangePassword";
import { Calendar } from "antd";
import Report from "./Components/HomePage/Report";

function App() {
  return (
    <div className="container">
      <>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/changepassword" element={<ChangePassword />} />
            <Route path="/add-expense" element={<HomePage />} />
            <Route path="/calendar" element={<Calendar />} />
            <Route path="/report" element={<Report />} />
          </Routes>
        </BrowserRouter>
      </>
    </div>
  );
}

export default App;
