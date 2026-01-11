import Income from "../models/Income.js";
import Expense from "../models/Expense.js";

const getDashboardSummary = async (req, res) => {
  try {
    const userId = req.user.id;

    const income = await Income.find({ user: userId });
    const expense = await Expense.find({ user: userId });

    const totalIncome = income.reduce((sum, item) => sum + item.amount, 0);

    const totalExpense = expense.reduce((sum, item) => sum + item.amount, 0);

    const balance = totalIncome - totalExpense;
    const monthlyData = {};

    income.forEach((item) => {
      const month = new Date(item.date).toLocaleString("default", {
        month: "short",
      });

      if (!monthlyData[month]) {
        monthlyData[month] = { income: 0, expense: 0 };
      }

      monthlyData[month].income += item.amount;
    });

    expense.forEach((item) => {
      const month = new Date(item.date).toLocaleString("default", {
        month: "short",
      });

      if (!monthlyData[month]) {
        monthlyData[month] = { income: 0, expense: 0 };
      }

      monthlyData[month].expense += item.amount;
    });

    const expenseByCategory = {};

    expense.forEach((exp) => {
      expenseByCategory[exp.category] =
        (expenseByCategory[exp.category] || 0) + exp.amount;
    });

    res.status(200).json({
      totalIncome,
      totalExpense,
      balance,
      expenseByCategory,
      monthlyData,
    });
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};

export { getDashboardSummary };
