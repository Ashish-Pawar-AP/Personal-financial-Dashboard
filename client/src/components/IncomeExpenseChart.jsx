import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

const IncomeExpenseChart = ({ monthlyData }) => {
  const labels = Object.keys(monthlyData);

  const incomeData = labels.map((month) => monthlyData[month].income);

  const expenseData = labels.map((month) => monthlyData[month].expense);

  const data = {
    labels,
    datasets: [
      {
        label: "Income",
        data: incomeData,
        backgroundColor: "#36a2eb",
      },
      {
        label: "Expense",
        data: expenseData,
        backgroundColor: "#ff6384",
      },
    ],
  };

  return (
    <div style={{ width: "600px", marginTop: "40px" }}>
      <h3>Income vs Expense (Monthly)</h3>
      <Bar data={data} />
    </div>
  );
};

export default IncomeExpenseChart;
