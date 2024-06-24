import React from "react";
import { Layout } from "antd";
import Navigation from "../Components/HomePage/Navigation";
import "./HomePage.css";
import AddIncome from "../Components/HomePage/AddIncome";
import AddExpense from "../Components/HomePage/Expense";
import Timeline from "../Components/HomePage/TimeLine";
import CalendarComponent from "../Components/HomePage/CalendarComponent";
import { Row, Col } from "antd";

const { Sider, Content } = Layout;

function HomePage() {
  return (
    <div className="homeLayout">
      <Layout style={{ minHeight: "100vh" }}>
        <Sider>
          <Navigation />
        </Sider>
        <Layout>
          <Content style={{ margin: "16px" }}>
            <Row gutter={16}>
              <Col span={12}>
                <AddIncome />
              </Col>
              <Col span={12}>
                <AddExpense />
              </Col>
            </Row>
            <Row gutter={16} style={{ marginTop: "20px" }}>
              <Col span={24}>
                <Timeline />
              </Col>
            </Row>
            <Row gutter={16} style={{ marginTop: "20px" }}>
              <Col span={24}>
                <CalendarComponent />
              </Col>
            </Row>
          </Content>
        </Layout>
      </Layout>
    </div>
  );
}

export default HomePage;
