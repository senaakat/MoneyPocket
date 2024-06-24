import React from "react";
import { Form, Input, Button } from "antd";
import "./Component.css";

function AddIncome() {
  const onFinish = (values) => {
    console.log("Gelir Eklendi:", values);
  };

  return (
    <Form onFinish={onFinish}>
      <Form.Item name="amount" label="Tutar" rules={[{ required: true }]}>
        <Input />
      </Form.Item>
      <Form.Item name="description" label="Açıklama">
        <Input />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Gelir Ekle
        </Button>
      </Form.Item>
    </Form>
  );
}

export default AddIncome;
