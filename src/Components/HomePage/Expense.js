import React from "react";
import { Form, Input, Button } from "antd";
import "./Component.css";

function Expense() {
  const onFinish = (values) => {
    console.log("Gider Eklendi:", values);
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
          Gider Ekle
        </Button>
      </Form.Item>
    </Form>
  );
}

export default Expense;
