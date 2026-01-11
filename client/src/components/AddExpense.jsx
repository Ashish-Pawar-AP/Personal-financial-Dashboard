import { useState } from "react";
import API from "../api/axios";

const AddExpense = ({ onSuccess }) => {
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");
  const [date, setDate] = useState("");

  const submitHandler = async (e) => {
    e.preventDefault();
    await API.post("/api/v1/expense", { amount, category, date });
    setAmount("");
    setCategory("");
    setDate("");
    onSuccess();
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow w-full md:w-1/2">
      <h3 className="text-lg font-semibold mb-4">Add Expense</h3>

      <form onSubmit={submitHandler} className="space-y-4">
        <input
          type="number"
          placeholder="Amount"
          className="w-full border p-2 rounded"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          required
        />

        <select
          className="w-full border p-2 rounded"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          required
        >
          <option value="">Select Category</option>
          <option>Food</option>
          <option>Rent</option>
          <option>Transport</option>
          <option>Shopping</option>
          <option>Entertainment</option>
          <option>Medical</option>
          <option>Lumpsum</option>
          <option>SIP</option>
          <option>Other</option>
        </select>

        <input
          type="date"
          className="w-full border p-2 rounded"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />

        <button className="w-full bg-red-600 text-white py-2 rounded hover:bg-red-700">
          Add Expense
        </button>
      </form>
    </div>
  );
};

export default AddExpense;
