import React from "react";
import { Button, Card, Divider, Form, Input, Typography } from "antd";
import FormItem from "antd/es/form/FormItem";
import "./Login.css";
import Navbar from "../Components/Navbar";
import LogContent from "../Components/LogContent";
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import {
  auth,
  googleProvider,
  facebookProvider,
  twitterProvider,
} from "../Config/firebase";
import { useState } from "react";
import { useNavigate } from "react-router";
import { Alert } from "antd";

import {
  FacebookOutlined,
  TwitterOutlined,
  GoogleOutlined,
  LinkedinOutlined,
} from "@ant-design/icons";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const signUp = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/home");
    } catch (error) {
      setError("Yanlış email veya şifre!");
      console.log(error.message);
    }
  };

  const signInWithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      navigate("/home");
    } catch (error) {
      setError("Yanlış email veya şifre!");
      console.log(error.message);
    }
  };

  const signInWithTwitter = async () => {
    try {
      await signInWithPopup(auth, twitterProvider);
      navigate("/home");
    } catch (error) {
      setError("Yanlış email veya şifre!");
      console.log(error.message);
    }
  };

  const signInWithFacebook = async () => {
    try {
      await signInWithPopup(auth, facebookProvider);
      navigate("/home");
    } catch (error) {
      setError("Yanlış email veya şifre!");
      console.log(error.message);
    }
  };
  const login = (url) => {
    console.log(`Icon clicked! Redirecting to ${url}`);
    window.open(url, "_blank");
  };

  const socialMediaIcons = [
    {
      component: TwitterOutlined,
      url: signInWithTwitter,
      style: { color: "cyan" },
    },
    {
      component: FacebookOutlined,
      url: signInWithFacebook,
      style: { color: "blue" },
    },
    {
      component: GoogleOutlined,
      url: signInWithGoogle,
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
          {error && (
            <Alert
              message="Giriş Başarısız"
              description={error}
              type="error"
              showIcon
              style={{ marginBottom: "16px" }}
            />
          )}
          <Form className="loginFrom" onFinish={signUp}>
            <Typography.Title className="titleLogin" >
              Think it. Make it.
            </Typography.Title>
            <Typography.Title className="titleLogin" style={{ marginBottom: 15, marginTop: 0 }}>
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
              labelAlign="left"
            >
              <Input
                className="inputLogin"
                placeholder="Enter your Email"
                style={{ width: "20vw", height: "4vh" }}
                onChange={(e) => setEmail(e.target.value)}
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
              labelAlign="left"
            >
              <Input.Password
                placeholder="Enter your Password"
                style={{
                  display: "flex",
                  alignItems: "center",
                  width: "20vw",
                  height: "4vh",
                }}
                onChange={(e) => setPassword(e.target.value)}
              />
            </FormItem>
          </Form>
          <Button
            className="loginButton"
            type="primary"
            htmlType="submit"
            block
            onClick={signUp}
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
                  onClick={() =>
                    typeof icon.url === "function"
                      ? icon.url()
                      : login(icon.url)
                  }
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
