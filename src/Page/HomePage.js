import React from "react";
import { Layout } from "antd";
import Navigation from "../Components/HomePage/Navigation";
import "./HomePage.css";
import { Row, Col } from "antd";
import AddExpense from "../Components/HomePage/Expense";
import Calendar from "../Components/HomePage/Calendar";
import { TransactionProvider } from "../Data/TransactionContext";

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
            <TransactionProvider>
              <Row gutter={16}>
                <Col span={12}>
                  <AddExpense />
                </Col>
                <Col span={12}>
                  <Calendar />
                </Col>
              </Row>
            </TransactionProvider>
          </Content>
          <Content style={{ margin: "16px" }}></Content>
        </Layout>
      </Layout>
    </div>
  );
}

export default HomePage;
