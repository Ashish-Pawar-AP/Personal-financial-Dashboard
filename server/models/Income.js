import mongoose, { Schema } from "mongoose";

const incomeSchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    amount: {
      type: Number,
      default:0
    },
    source: {
      type: String,
    },
    date: {
      type: Date,
    },
    note: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const Income = mongoose.model("Income", incomeSchema);

export default Income;
