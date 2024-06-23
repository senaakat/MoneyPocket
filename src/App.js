import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Page/Login";
import HomePage from "./Page/HomePage";
import Profile from "./Components/HomePage/Profile";

function App() {
  return (
    <div className="container">
      <>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </BrowserRouter>
      </>
    </div>
  );
}

export default App;
