import React from "react";
import { PieChart as Chart, Pie, Tooltip, Legend, Cell } from "recharts";
import { Card, Typography } from "antd";
import "antd/dist/antd.css";

const { Title } = Typography;

const CategoriesChart = ({ transactions }) => {
  // transactions dizisinin var olup olmadığını ve boş olup olmadığını kontrol ediyoruz
  if (!transactions || transactions.length === 0) {
    return <div>No transactions available</div>;
  }

  // Kategorilere göre gelir ve gider miktarlarını hesaplıyoruz
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

  // Veriyi PieChart bileşenine uygun formata dönüştürüyoruz
  const pieChartData = Object.values(categoryData).map((item) => ({
    name: item.name,
    income: item.income,
    expense: item.expense,
  }));

  // Renkler için bir palet oluşturuyoruz
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
    <Card
      style={{
        width: "100%",
        padding: 20,
        borderRadius: 10,
        boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
      }}
    >
      <Title level={4} style={{ textAlign: "center", marginBottom: 20 }}>
        Income and Expense Categories
      </Title>
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <div style={{ textAlign: "center" }}>
          <Title level={5}>Income Chart</Title>
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

        <div style={{ textAlign: "center" }}>
          <Title level={5}>Expense Chart</Title>
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
    </Card>
  );
};

export default CategoriesChart;
