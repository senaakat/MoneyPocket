import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Page/Login";
import HomePage from "./Page/HomePage";

function App() {
  return (
    <div className="container">
      <>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/Home" element={<HomePage />} />
          </Routes>
        </BrowserRouter>
      </>
    </div>
  );
}

export default App;
