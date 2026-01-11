import { useEffect, useState } from "react";
import API from "../api/axios";
import SummaryCards from "../components/SummaryCards";
import ExpenseChart from "../components/ExpenseChart";
import IncomeExpenseChart from "../components/IncomeExpenseChart";
import AddIncome from "../components/AddIncome";
import AddExpense from "../components/AddExpense";

const Dashboard = () => {
  const [summary, setSummary] = useState(null);

  const fetchDashboard = async () => {
    const res = await API.get("/api/v1/dashboard/summary");
    setSummary(res.data);
  };

  useEffect(() => {
    fetchDashboard();
  }, []);

  if (!summary) return <p className="text-center mt-10">Loading...</p>;

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-2xl font-bold mb-6 text-center">
        Personal Finance Dashboard
      </h1>

      <div className="flex flex-col md:flex-row gap-6">
        <AddIncome onSuccess={fetchDashboard} />
        <AddExpense onSuccess={fetchDashboard} />
      </div>

      <SummaryCards
        totalIncome={summary.totalIncome}
        totalExpense={summary.totalExpense}
        balance={summary.balance}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
        <ExpenseChart expenseByCategory={summary.expenseByCategory} />
        <IncomeExpenseChart monthlyData={summary.monthlyData} />
      </div>
    </div>
  );
};

export default Dashboard;
