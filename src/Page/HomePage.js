import React from "react";
import { Layout } from "antd";
import Navigation from "../Components/HomePage/Navigation";
import "./HomePage.css";

function HomePage() {
  return (
    <div className="homeLayout">
      <Layout style={{ minHeight: "100vh" }}>
        <Navigation />
      </Layout>
    </div>
  );
}

export default HomePage;
