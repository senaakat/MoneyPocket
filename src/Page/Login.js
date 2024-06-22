import React from "react";
import { Button, Card, Divider, Form, Input, Typography } from "antd";
import FormItem from "antd/es/form/FormItem";
import "./Login.css";
import Navbar from "../Components/Navbar";
import LogContent from "../Components/LogContent";

import {
  FacebookOutlined,
  TwitterOutlined,
  GoogleOutlined,
  LinkedinOutlined,
} from "@ant-design/icons";

function Login() {
  const login = (url) => {
    console.log(`Icon clicked! Redirecting to ${url}`);
    window.open(url, "_blank");
  };

  const socialMediaIcons = [
    {
      component: TwitterOutlined,
      url: "https://twitter.com/",
      style: { color: "cyan" },
    },
    {
      component: FacebookOutlined,
      url: "https://facebook.com/",
      style: { color: "blue" },
    },
    {
      component: GoogleOutlined,
      url: "https://google.com/",
      style: { color: "red" },
    },
    {
      component: LinkedinOutlined,
      url: "https://linkedin.com/",
      style: { color: "blue" },
    },
  ];
  return (
    <>
      <div className="login">
        <Navbar />
        <div className="sidebar">
          <LogContent className="video" />
        </div>
        <Card title={"Welcome to Money Pocket"} className="loginCard">
          <Form className="loginFrom" onFinish={login}>
            <Typography.Title className="titleLogin">
              Think it. Make it.
            </Typography.Title>
            <Typography.Title className="titleLogin">
              Log in to your account
            </Typography.Title>
            <FormItem
              rules={[
                {
                  required: true,
                  type: "email",
                  message: "Please enter valid email!",
                },
              ]}
              label="Email"
              name={"myEmail"}
            >
              <Input
                className="inputLogin"
                placeholder="Enter your Email"
                style={{ marginLeft: 25, width: "20vw", height: "4vh" }}
              />
            </FormItem>

            <FormItem
              rules={[
                {
                  required: true,
                  type: "password",
                  message: "Please enter valid Password!",
                },
              ]}
              label="Password"
              name={"myPassword"}
            >
              <Input.Password
                placeholder="Enter your Password"
                style={{
                  display: "flex",
                  alignItems: "center",
                  width: "20vw",
                  height: "4vh",
                }}
              />
            </FormItem>
          </Form>
          <Button
            className="loginButton"
            type="primary"
            htmlType="submit"
            block
          >
            Log in
          </Button>
          <Divider style={{ borderColor: "black" }}>Or Login with</Divider>
          <div className="socialLogin">
            {socialMediaIcons.map((icon, index) => {
              const IconComponent = icon.component;
              return (
                <IconComponent
                  key={index}
                  className="socialIcon"
                  onClick={() => login(icon.url)}
                  style={icon.style}
                />
              );
            })}
          </div>
        </Card>
      </div>
    </>
  );
}

export default Login;
