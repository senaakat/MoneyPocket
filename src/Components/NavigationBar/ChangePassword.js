import React from "react";
import { Form, Input, Button } from "antd";
import "./ChangePassword.css";
import Navigation from "../HomePage/Navigation";

function ChangePassword({ onPasswordChange }) {
  const handlePasswordChange = (values) => {
    onPasswordChange(values.password);
  };
  return (
    <div className="change-password-container">
      <Navigation />
      <Form onFinish={handlePasswordChange}>
        <h4 style={{ marginBottom: 10 }}>Şifre Değiştir: </h4>
        <Form.Item
          label="Mevcut Parola"
          name="currentPassword"
          rules={[{ required: true, message: "Mevcut parolanızı girin" }]}
          style={{ display: "flex", alignItems: "center" }}
          labelAlign="left"
        >
          <Input.Password style={{ marginLeft: 10 }} />
        </Form.Item>
        <Form.Item
          label="Yeni Parola"
          name="newPassword"
          rules={[{ required: true, message: "Yeni parolanızı girin" }]}
          style={{ display: "flex", alignItems: "center" }}
          labelAlign="left"
        >
          <Input.Password style={{ marginLeft: 10 }} />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Parolayı Değiştir
          </Button>
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Kaydet
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default ChangePassword;
