import Expense from "../models/Expense.js";

const addExpense = async (req, res) => {
  try {
    const { amount, category, date, note } = req.body;
    if (!amount || !category) {
      res.status(401).json({ message: "All fields are required" });
    }

    const expense = await Expense.create({
      user: req.user.id,
      amount,
      category,
      date,
      note,
    });

    res.status(200).json(expense);
  } catch (error) {
    console.log(
      `Something went worng while creating expense: ${error?.message}`
    );
    res.status(500).json({ message: "Expense creation failed" });
  }
};

const getExpense = async (req, res) => {
  try {
    const expense = await Expense.find({ user: req.user.id }).sort({
      date: -1,
    });

    res.status(200).json(expense);
  } catch (error) {
    console.log(
      `Something went worng while reading expense: ${error?.message}`
    );
    res.status(500).json({ message: "Server Error" });
  }
};

export { addExpense, getExpense };
