import React, { useEffect } from "react";
import { Form, Input, Button, Select, Card, DatePicker } from "antd";
import { useState } from "react";
import "./Expense.css";
import categories from "../../Data/Categories";
import { useTransactionContext } from "../../Data/TransactionContext";
import moment from "moment";
import PieChart from "./PieChart.js";
import CategoriesChart from "./CategoriesChart.js";
import { db } from "../../Config/firebase.js";
import { addDoc, getDocs, collection } from "firebase/firestore";

const expenseDbCollectionRef = collection(db, "expense");

function Expense() {
  useEffect(() => {
    const getExpenses = async () => {
      try {
        const querySnapshot = await getDocs(expenseDbCollectionRef);
        const fetchedTransactions = [];
        let incomeTotal = 0;

        querySnapshot.forEach((doc) => {
          const transaction = {
            id: doc.id,
            ...doc.data(),
            date: doc.data().date.toDate(),
          };
          fetchedTransactions.push(transaction);
          if (transaction.amount > 0) {
            incomeTotal += transaction.amount;
          }
        });

        setTransactions(fetchedTransactions);
        setTotalIncome(incomeTotal);
      } catch (error) {
        console.error("Error getting documents: ", error);
      }
    };

    getExpenses();
  }, []);

  const { addTransaction, selectedDate, setSelectedDate } =
    useTransactionContext();
  const [transactions, setTransactions] = useState([]);
  const [category, setCategory] = useState("");
  const [amount, setAmount] = useState(0);
  const [totalIncome, setTotalIncome] = useState(0);
  const [showDatePicker, setShowDatePicker] = useState(false);

  const handleDateChange = (date) => {
    setSelectedDate(date);
    setShowDatePicker(false);
  };

  const handleAddTransaction = async () => {
    if (!selectedDate) {
      alert("Lütfen bir tarih seçin.");
      return;
    }

    const parsedAmount = parseFloat(amount);

    const newTransaction = {
      category,
      amount: parsedAmount,
      date: selectedDate.toDate(),
    };

    try {
      const docRef = await addDoc(expenseDbCollectionRef, newTransaction);
      newTransaction.id = docRef.id;
      addTransaction(newTransaction);
      setTransactions([...transactions, newTransaction]);
      setTotalIncome((prevTotal) => prevTotal + parsedAmount);
      setCategory("");
      setAmount(0);
      setSelectedDate(null);
    } catch (error) {
      console.error("Error adding transaction: ", error);
    }
  };

  const handleRemoveTransaction = async () => {
    if (!selectedDate) {
      alert("Lütfen bir tarih seçin.");
      return;
    }

    const parsedAmount = parseFloat(amount);
    const newTransaction = {
      category,
      amount: -parsedAmount,
      date: selectedDate.toDate(),
    };
    try {
      const docRef = await addDoc(expenseDbCollectionRef, newTransaction);
      newTransaction.id = docRef.id;
      addTransaction(newTransaction);
      setTransactions([...transactions, newTransaction]);
      setTotalIncome((prevTotal) => prevTotal - parsedAmount);
      setCategory("");
      setAmount(0);
      setSelectedDate(null);
    } catch (error) {
      console.error("Error adding transaction: ", error);
    }
  };

  return (
    <>
      <div className="expense-container">
        <Card className="expense-header">
          <h1>FİNANS TAKİPÇİSİ</h1>
          <Form className="expense-form">
            <Form.Item label="Kategori">
              <Select value={category} onChange={setCategory}>
                {categories.map((cat) => (
                  <Select.Option key={cat.id} value={cat.name}>
                    {cat.name}
                  </Select.Option>
                ))}
              </Select>
            </Form.Item>
            <Form.Item label="Tutar">
              <Input
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
              />
            </Form.Item>
            <Form.Item label="Tarih">
              <DatePicker
                value={selectedDate ? moment(selectedDate.toDate()) : null}
                onChange={handleDateChange}
                style={{ width: "100%" }}
                open={showDatePicker}
                onOpenChange={(status) => setShowDatePicker(status)}
              />
            </Form.Item>
            <Form.Item>
              <div className="expense-buttons">
                <Button type="primary" onClick={handleAddTransaction}>
                  Tutar Ekle
                </Button>

                <Button type="primary" onClick={handleRemoveTransaction}>
                  Tutar Çıkar
                </Button>
              </div>
            </Form.Item>
          </Form>
          <div className="total-income">CÜZDANIM: ${totalIncome}</div>

          <div>
            {transactions.map((t, index) => (
              <Card className="transaction-card" key={index}>
                <p>Category: {t.category}</p>
                <p>Amount: {t.amount}</p>
                <p>Date: {moment(t.date).format("YYYY-MM-DD")}</p>
              </Card>
            ))}
          </div>
        </Card>
      </div>
      <div className="charts-container">
        <Card className="chart-card">
          <PieChart transactions={transactions} />
          <CategoriesChart transactions={transactions} />
        </Card>
      </div>
    </>
  );
}
export default Expense;
