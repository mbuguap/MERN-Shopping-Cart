const express = require("express");
const router = express.Router();

const Product = require("../models/products");

router.post("/", async (req, res) => {
  try {
    const newProduct = new Product(req.body);

    const product = await newProduct.save();

    res.json(product);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
//   const newProduct = new Product(req.body);
//   const savedProduct = await newProduct.save();
//   res.send(savedProduct);
});

router.get("/", async (req, res) => {
  const products = await Product.find({});
  res.send(products);
});

router.delete("/:id", async (req, res) => {
  const deletedProduct = await Product.findByIdAndDelete(req.params.id);
  res.send(deletedProduct);
});

module.exports = router;
