import React, { useState, useEffect } from "react";
import { Card, Button, notification, Layout } from "antd";
import moment from "moment";
import { db } from "../../Config/firebase";
import { getDocs, collection } from "firebase/firestore";
import { Content } from "antd/es/layout/layout";
import { Row, Col } from "antd/es/grid";
import Navigation from "./Navigation";

const expenseDbCollectionRef = collection(db, "expense");
const { Sider } = Layout;

function Report() {
  const [transactions, setTransactions] = useState([]);
  const [isEmailSent, setIsEmailSent] = useState(false);
  const [totalIncome, setTotalIncome] = useState(0);

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

  const handleSendEmail = () => {
    setIsEmailSent(true);
    notification.success({
      message: "E-posta Gönderildi",
      description: "İşlem raporu e-posta ile gönderildi.",
    });
  };

  return (
    <Layout>
      <Sider className="homeSite">
        <Navigation />
      </Sider>
      <Content>
        <Row gutter={[16, 16]}>
          <Col span={12}>
            <div className="transaction-display-container">
              {transactions.length > 0 ? (
                transactions.map((transaction, index) => (
                  <Card className="transaction-card" key={index}>
                    <p>Kategori: {transaction.category}</p>
                    <p>Tutar: {transaction.amount}</p>
                    <p>
                      Tarih: {moment(transaction.date).format("YYYY-MM-DD")}
                    </p>
                  </Card>
                ))
              ) : (
                <p>Gösterilecek işlem yok.</p>
              )}
              <Button type="primary" onClick={handleSendEmail}>
                Mail Gönder
              </Button>
              {isEmailSent && <p>Gönderildi</p>}
            </div>
          </Col>
        </Row>
      </Content>
    </Layout>
  );
}

export default Report;
