const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const shortid = require("shortid");

const ProductSchema = new Schema({
  _id: { type: String, default: shortid.generate },
  title: {
    type: String,
  },
  description: {
    type: String,
  },
  image: {
    type: String,
  },
  price: {
    type: Number,
  },
  availableSizes: [String],
});

module.exports = Product = mongoose.model("product", ProductSchema);
