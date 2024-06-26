import React from "react";
import { Form, Input, Button, Select, Card, Calendar, Badge } from "antd";
import { useState } from "react";
import "./Expense.css";
import categories from "../../Data/Categories";

function Expense() {
  const [transactions, setTransactions] = useState([]);
  const [category, setCategory] = useState("");
  const [amount, setAmount] = useState(0);
  const [totalIncome, setTotalIncome] = useState(0);

  const handleAddTransaction = () => {
    const parsedAmount = parseFloat(amount);
    const currentDate = new Date();
    const newTransaction = { category, amount: parsedAmount };
    setTransactions([...transactions, newTransaction]);
    setTotalIncome((prevTotal) => prevTotal + parsedAmount);
    setCategory("");
    setAmount(0);
  };

  const handleRemoveTransaction = () => {
    const parsedAmount = parseFloat(amount);
    const currentDate = new Date();
    const newTransaction = { category, amount: -parsedAmount };
    setTransactions([...transactions, newTransaction]);
    setTotalIncome((prevTotal) => prevTotal - parsedAmount);
    setCategory("");
    setAmount(0);
  };

  return (
    <div className="expense-container">
      <Card className="expense-header">
        <h1>Financial Tracker</h1>
        <Form className="expense-form">
          <Form.Item label="Category">
            <Select value={category} onChange={setCategory}>
              {categories.map((cat) => (
                <Select.Option key={cat.id} value={cat.name}>
                  {cat.name}
                </Select.Option>
              ))}
            </Select>
          </Form.Item>
          <Form.Item label="Amount">
            <Input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
          </Form.Item>
          <Form.Item>
            <div className="expense-buttons">
              <Button type="primary" onClick={handleAddTransaction}>
                Add Transaction
              </Button>

              <Button type="primary" onClick={handleRemoveTransaction}>
                Remove Transaction
              </Button>
            </div>
          </Form.Item>
        </Form>
        <div className="total-income">Total Income: ${totalIncome}</div>
        <div>
          {transactions.map((t, index) => (
            <Card className="transaction-card" key={index}>
              <p>Category: {t.category}</p>
              <p>Amount: {t.amount}</p>
              <p>Date: {new Date(t.date).toDateString()}</p>
            </Card>
          ))}
        </div>
      </Card>
      <Calendar dateCellRender={dateCellRender} />
    </div>
  );
}
export default Expense;
