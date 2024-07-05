import React from "react";
import { PieChart as Chart, Pie, Tooltip, Legend, Cell } from "recharts";

const CategoriesChart = ({ transactions }) => {
  if (!transactions || transactions.length === 0) {
    return <div>No transactions available</div>;
  }

  const categoryData = transactions.reduce((acc, transaction) => {
    const { category, amount } = transaction;
    if (!acc[category]) {
      acc[category] = { name: category, income: 0, expense: 0 };
    }
    if (amount > 0) {
      acc[category].income += amount;
    } else {
      acc[category].expense -= amount;
    }
    return acc;
  }, {});

  const pieChartData = Object.values(categoryData).map((item) => ({
    name: item.name,
    income: item.income,
    expense: item.expense,
  }));

  const COLORS = [
    "#0088FE",
    "#00C49F",
    "#FFBB28",
    "#FF8042",
    "#8884D8",
    "#FF8C00",
    "#DC143C",
    "#00CED1",
    "#FFD700",
    "#4B0082",
  ];

  return (
    <div style={{ display: "flex", justifyContent: "space-around" }}>
      <div style={{ textAlign: "center", width: "45%", marginRight: "20px" }}>
        <h3>KATEGORİ GELİRLERİ</h3>
        <Chart width={400} height={400}>
          <Pie
            data={pieChartData}
            dataKey="income"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={80}
            label
          >
            {pieChartData.map((entry, index) => (
              <Cell
                key={`cell-income-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
          <Tooltip />
          <Legend
            layout="horizontal"
            align="center"
            verticalAlign="bottom"
            wrapperStyle={{ paddingBottom: 20 }}
          />
        </Chart>
      </div>

      <div style={{ textAlign: "center", width: "45%", marginLeft: "20px" }}>
        <h3>KATEGORİ GİDERLERİ</h3>
        <Chart width={400} height={400}>
          <Pie
            data={pieChartData}
            dataKey="expense"
            nameKey="name"
            cx="50%"
            cy="50%"
            innerRadius={85}
            outerRadius={110}
            label
          >
            {pieChartData.map((entry, index) => (
              <Cell
                key={`cell-expense-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
          <Tooltip />
          <Legend
            layout="horizontal"
            align="center"
            verticalAlign="bottom"
            wrapperStyle={{ paddingBottom: 20 }}
          />
        </Chart>
      </div>
    </div>
  );
};

export default CategoriesChart;
