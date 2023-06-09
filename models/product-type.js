const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ProductTypeSchema = new Schema({
    name: { type: String, required: true, maxLength: 100 },
    description: { type: String, required: true, maxLength: 100 }
});

ProductTypeSchema.virtual("url").get(function () {
    return `/inventory/producttype/${this._id}`;
});
  
module.exports = mongoose.model("Product Type", ProductTypeSchema);