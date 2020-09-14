const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const shortid = require("shortid");

const OrderSchema = new Schema(
  {
    _id: {
      type: String,
      default: shortid.generate,
    },
    email: String,
    name: String,
    address: String,
    total: Number,
    cartItems: [
      {
        _id: String,
        title: String,
        price: Number,
        count: Number,
      },
    ],
  },
  { timestamps: true }
);

module.exports = Order = mongoose.model("order", OrderSchema);
