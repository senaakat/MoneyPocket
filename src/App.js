import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Page/Login";
import HomePage from "./Page/HomePage";
import Profile from "./Components/HomePage/Profile";
import ChangePassword from "./Components/NavigationBar/ChangePassword";
import AddIncome from "./Components/HomePage/AddIncome";
import Expense from "./Components/HomePage/Expense";
import CalendarComponent from "./Components/HomePage/CalendarComponent";

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
            <Route path="/add-income" component={AddIncome} />
            <Route path="/add-expense" component={Expense} />
            <Route path="/calendar" component={CalendarComponent} />
          </Routes>
        </BrowserRouter>
      </>
    </div>
  );
}

export default App;
