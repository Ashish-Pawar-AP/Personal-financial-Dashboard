import React from "react";
import { Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const ExpenseChart = ({ expenseByCategory }) => {
  const labels = Object.keys(expenseByCategory);
  const dataValues = Object.values(expenseByCategory);

  const data = {
    labels,
    datasets: [
      {
        label: "Expenses",
        data: dataValues,
        backgroundColor: [
          "#ff6384",
          "#36a2eb",
          "#ffce56",
          "#4bc0c0",
          "#9966ff",
        ],
      },
    ],
  };

  return (
    <div style={{ width: "400px", marginTop: "40px" }}>
      <h3>Expenses by Category</h3>
      <Pie data={data} />
    </div>
  );
};

export default ExpenseChart;
