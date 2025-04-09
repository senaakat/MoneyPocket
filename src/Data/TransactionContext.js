import React, { createContext, useContext, useState } from "react";

const TransactionContext = createContext();

export const useTransactionContext = () => useContext(TransactionContext);

export const TransactionProvider = ({ children }) => {
  const [transactions, setTransactions] = useState([]);
  const [selectedDate, setSelectedDate] = useState(null); // Yeni eklenen state

  const addTransaction = (transaction) => {
    setTransactions([...transactions, transaction]);
  };

  return (
    <TransactionContext.Provider
      value={{ transactions, addTransaction, selectedDate, setSelectedDate }}
    >
      {" "}
      {/* selectedDate'i context'e ekleyelim */}
      {children}
    </TransactionContext.Provider>
  );
};
