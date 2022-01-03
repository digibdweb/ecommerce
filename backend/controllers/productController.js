const Product = require("../models/productModel");
exports.getAllProducts = (req, res) => {
  res.status(200).json({ message: "getAllProducts route is working fine" });
};
