import React from "react";
import {
  PieChart as Chart,
  Pie,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Cell,
} from "recharts";

const PieChart = ({ transactions }) => {
  // Toplam gelir ve gider miktarlarını hesaplıyoruz
  const totalIncome = transactions.reduce((total, transaction) => {
    if (transaction.amount > 0) {
      return total + transaction.amount;
    }
    return total;
  }, 0);

  const totalExpense = transactions.reduce((total, transaction) => {
    if (transaction.amount < 0) {
      return total - transaction.amount;
    }
    return total;
  }, 0);

  // Gelir ve gider yüzdelerini hesaplıyoruz
  const totalAmount = totalIncome + totalExpense;
  const incomePercentage = ((totalIncome / totalAmount) * 100).toFixed(2);
  const expensePercentage = ((totalExpense / totalAmount) * 100).toFixed(2);

  // Özel renkler ve kenarlık ayarları
  const data = [
    {
      name: "GELİR",
      value: totalIncome,
      percentage: incomePercentage,
      fill: "#0088FE",
      stroke: "#0088FE",
    },
    {
      name: "GİDER",
      value: totalExpense,
      percentage: expensePercentage,
      fill: "#FF8042",
      stroke: "#FF8042",
    },
  ];

  return (
    <>
      <ResponsiveContainer width="100%" height={400}>
        <Chart>
          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={80}
            label
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={entry.fill}
                stroke={entry.stroke}
              />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </Chart>
      </ResponsiveContainer>
    </>
  );
};

export default PieChart;
