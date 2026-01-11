import React from "react";

const SummaryCards = ({ totalIncome, totalExpense, balance }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
      <div className="bg-green-100 p-6 rounded-xl shadow">
        <p className="text-gray-600">Total Income</p>
        <h2 className="text-2xl font-bold text-green-700">₹ {totalIncome}</h2>
      </div>

      <div className="bg-red-100 p-6 rounded-xl shadow">
        <p className="text-gray-600">Total Expense</p>
        <h2 className="text-2xl font-bold text-red-700">₹ {totalExpense}</h2>
      </div>

      <div className="bg-blue-100 p-6 rounded-xl shadow">
        <p className="text-gray-600">Balance</p>
        <h2 className="text-2xl font-bold text-blue-700">₹ {balance}</h2>
      </div>
    </div>
  );
};

export default SummaryCards;
