const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const IngredientSchema = new Schema({
    name: { type: String, required: true, maxLength: 100 },
    cost: { type: Number, required: true },
    quantity: { type: Number, required: true },
});

IngredientSchema.virtual("url").get(function () {
    return `/inventory/ingredient/${this._id}`;
});
  
module.exports = mongoose.model("Ingredient", IngredientSchema);