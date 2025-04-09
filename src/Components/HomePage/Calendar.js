import React from "react";
import { useTransactionContext } from "../../Data/TransactionContext";
import { Calendar as AntCalendar } from "antd";
import moment from "moment";
import { List, Modal } from "antd";
import { Button } from "antd";
import "./Calendar.css";
import { useEffect } from "react";
import { db } from "../../Config/firebase";

function Calendar() {
  const { transactions } = useTransactionContext();

  const incomes = transactions.filter((transaction) => transaction.amount >= 0);
  const expenses = transactions.filter((transaction) => transaction.amount < 0);

  const events = transactions.map((transaction, index) => ({
    id: index,
    title: `${transaction.category} - ${transaction.amount}`,
    date: moment(transaction.date).format("YYYY-MM-DD"),
    type: transaction.amount >= 0 ? "income" : "expense",
  }));

  useEffect(() => {
    const handleAddToFirestore = async () => {
      try {
        const batch = db.batch();
        events.forEach((event) => {
          const docRef = db.collection("expense").doc();
          batch.set(docRef, event);
        });
        await batch.commit();
        console.log("Events added to Firestore successfully!");
      } catch (error) {
        console.error("Error adding events to Firestore: ", error);
      }
    };

    handleAddToFirestore();
  }, [events]);

  return (
    <div className="calendar-container">
      <h2>Ekstre Takvimim</h2>
      <div style={{ marginBottom: "10px" }} className="buttons-container">
        <Button
          className="custom-button"
          style={{ marginRight: "10px" }}
          onClick={() => {
            Modal.info({
              title: "Gelirler",
              content: (
                <List
                  dataSource={incomes}
                  renderItem={(item) => (
                    <List.Item>
                      {item.category} - {item.amount}
                    </List.Item>
                  )}
                />
              ),
            });
          }}
        >
          Gelirler
        </Button>
        <Button
          className="custom-button"
          onClick={() => {
            Modal.info({
              title: "Giderler",
              content: (
                <List
                  dataSource={expenses}
                  renderItem={(item) => (
                    <List.Item>
                      {item.category} - {item.amount}
                    </List.Item>
                  )}
                />
              ),
            });
          }}
        >
          Giderler
        </Button>
      </div>
      <AntCalendar
        className="custom-calendar"
        style={{ width: "100%" }}
        dateCellRender={(date) => {
          const formattedDate = date.format("YYYY-MM-DD");
          const dailyEvents = events.filter(
            (event) => event.date === formattedDate
          );

          return (
            <div>
              {dailyEvents.length > 0 && (
                <List
                  dataSource={dailyEvents}
                  renderItem={(item) => (
                    <List.Item
                      className="event-item"
                      onClick={() => {
                        Modal.info({
                          title: "Detaylar",
                          content: (
                            <div>
                              <p>Tarih: {formattedDate}</p>
                              <p>{item.title}</p>
                              <p>
                                Tür:{" "}
                                {item.type === "income" ? "Gelir" : "Gider"}
                              </p>
                            </div>
                          ),
                        });
                      }}
                    >
                      {item.title}
                    </List.Item>
                  )}
                />
              )}
            </div>
          );
        }}
      />
    </div>
  );
}

export default Calendar;
