const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ProductSchema = new Schema({
    name: { type: String, required: true, maxLength: 100 },
    description: { type: String, required: true, maxLength: 100 },
    product_type: { type: Schema.Types.ObjectId, ref: "Product Type", required: true },
    price: { type: Number, required: true },
    quantity: { type: Number,required: true },
    ingredients: [{ type: Schema.Types.ObjectId, ref: "Ingredient" }],
});

ProductSchema.virtual("url").get(function () {
    return `/product/${this._id}`;
});
  
module.exports = mongoose.model("Product", ProductSchema);