const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "Input product name here"],
    trim: true,
  },
  description: {
    type: String,
    required: [true, "Input product description here"],
  },
  rating: {
    type: Number,
    default: 0,
  },
  specialPrice: {
    type: String,
    maxlength: [6, "Insert realistic figure"],
  },
  memberPrice: {
    type: String,
    maxlength: [6, "Insert realistic figure"],
  },
  mrpPrice: {
    type: String,
    required: [true, "Input product price here"],
    maxlength: [6, "Insert realistic figure"],
  },
  images: [
    {
      public_id: {
        type: String,
        required: true,
      },
      url: {
        type: String,
        required: true,
      },
    },
  ],
  category: {
    type: String,
    required: [true, "product category here"],
  },
  stock: {
    type: Number,
    required: [true, "product stock here"],
    maxlength: [4, "stock cannot exceed 4 digits"],
    default: 0,
  },
  numofreviews: {
    type: Number,
    default: 0,
  },
  reviews: [
    {
      name: {
        type: String,
        required: true,
      },
      rating: {
        type: Number,
        required: true,
      },
      comment: { type: String, required: true },
    },
  ],
  createdAt: {
    type: Date,
    default: Date.now,
  },
});
module.exports = mongoose.model("Product", productSchema);
