#! /usr/bin/env node
// Get arguments passed on command line
const userArgs = process.argv.slice(2);

const Product = require("./models/product");
const Ingredient = require("./models/ingredient");
const ProductType = require("./models/product-type");

const products = [];
const ingredients = [];
const producttypes = [];

const mongoose = require("mongoose");
mongoose.set("strictQuery", false);

const mongoDB = userArgs[0];

main().catch((err) => console.log(err));

async function main() {
    console.log("Debug: About to connect");
    await mongoose.connect(mongoDB);
    console.log("Debug: Should be connected?");
    await createProductTypes();
    await createIngredients();
    await createProducts();
    console.log("Debug: Closing mongoose");
    mongoose.connection.close();
}

async function productTypeCreate(name, description) {
    const productType = new ProductType({ 
        name: name,
        description: description,
     });
    await productType.save();
    producttypes.push(productType);
    console.log(`Added product type: ${name}`);
}

async function ingredientCreate(name, cost, quantity) {
    const ingredient = new Ingredient({
        name: name,
        cost: cost,
        quantity: quantity,
    });
    await ingredient.save();
    ingredients.push(ingredient);
    console.log(`Added ingredient: ${name}`);
}

async function productCreate(name, description, productType, price, quantity, ingredients) {
    const product = new Product({
        name: name,
        description: description,
        product_type: productType,
        price: price,
        quantity: quantity,
        ingredients: ingredients,
    });
    await product.save();
    products.push(product);
    console.log(`Added product: ${name}`);
}

async function createProductTypes() {
    console.log("Adding product types");
    await Promise.all([
        productTypeCreate("Food", "Breads & Pastries"),
        productTypeCreate("Drink", "Coffee & Tea"),
    ]);
}

async function createIngredients() {
    console.log("Adding ingredients");
    await Promise.all([
        ingredientCreate("Flour", 0.25, 100),
        ingredientCreate("Sugar", 0.25, 100),
        ingredientCreate("Butter", 0.5, 100),
        ingredientCreate("Salt", 0.25, 100),
        ingredientCreate("Yeast", 0.25, 100),
        ingredientCreate("Coffee", 2, 100),
        ingredientCreate("Tea", 2, 100),
        ingredientCreate("Chocolate", 1, 100),
        ingredientCreate("Blueberry", 1, 100),
        ingredientCreate("Milk", 0.5, 100),
        ingredientCreate("Egg", 0.5, 100),
    ]);
}

async function createProducts() {
    console.log("Adding products");
    await Promise.all([
        productCreate(
            "Whole Wheat Bread",
            "100% Whole Wheat Loaf, made with love... and wheat.",
            producttypes[0],
            6,
            20,
            [ingredients[0], ingredients[3], ingredients[4]],
        ),
        productCreate(
            "Chocolate Croissant",
            "The only croissant you'll ever need.",
            producttypes[0],
            5,
            20,
            [ingredients[0], ingredients[1], ingredients[2], ingredients[3], ingredients[4], ingredients[7]],
        ),
        productCreate(
            "Blueberry Muffin",
            "Like a healthier, bluer cupcake",
            producttypes[0],
            5,
            20,
            [ingredients[0], ingredients[1], ingredients[2], ingredients[3], ingredients[8], ingredients[9], ingredients[10]],
        ),
        productCreate(
            "Coffee",
            "Real coffee, better than tea.",
            producttypes[1],
            3,
            20,
            [ingredients[5]],
        ),
        productCreate(
            "Tea",
            "It's not coffee, but at least it has caffeine.",
            producttypes[1],
            3,
            20,
            [ingredients[6]],
        ),
        productCreate(
            "Test Food",
            "Food Test",
            producttypes[0],
            7,
            20,
            [ingredients[0], ingredients[3], ingredients[4], ingredients[7]],
        ),
        productCreate(
            "Test Drink",
            "Drink Test",
            producttypes[0],
            1,
            20,
            [ingredients[5], ingredients[6]],
        ),
    ]);
}