import { useState } from "react";
import API from "../api/axios";

const AddIncome = ({ onSuccess }) => {
  const [amount, setAmount] = useState("");
  const [source, setSource] = useState("");
  const [date, setDate] = useState("");

  const submitHandler = async (e) => {
    e.preventDefault();
    await API.post("/api/v1/income", { amount, source, date });
    setAmount("");
    setSource("");
    setDate("");
    onSuccess();
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow w-full md:w-1/2">
      <h3 className="text-lg font-semibold mb-4">Add Income</h3>

      <form onSubmit={submitHandler} className="space-y-4">
        <input
          type="number"
          placeholder="Amount"
          className="w-full border p-2 rounded"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          required
        />

        <input
          type="text"
          placeholder="Source (Salary, Freelance)"
          className="w-full border p-2 rounded"
          value={source}
          onChange={(e) => setSource(e.target.value)}
          required
        />

        <input
          type="date"
          className="w-full border p-2 rounded"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />

        <button className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700">
          Add Income
        </button>
      </form>
    </div>
  );
};

export default AddIncome;
