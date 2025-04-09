import React from "react";
import "./Navbar.css";
import { Tabs } from "antd";
import logo from "../image/logo.png";
import searchLight from "../image/search-w.png";

function Navbar() {
  return (
    <div className="Navbar">
      <img src={logo} alt="" className="logo" />
      <Tabs className="tabs" defaultActiveKey="1" centered>
        <Tabs.TabPane className="tabPane" tab="Home" key="1"></Tabs.TabPane>
        <Tabs.TabPane className="tabPane" tab="About" key="2"></Tabs.TabPane>
        <Tabs.TabPane className="tabPane" tab="Contact" key="3"></Tabs.TabPane>
      </Tabs>
      <div className="searchBox">
        <input type="text" placeholder="Search..." />
        <img src={searchLight} alt="" />
      </div>
    </div>
  );
}

export default Navbar;
