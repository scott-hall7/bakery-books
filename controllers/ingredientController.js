const Ingredient = require("../models/ingredient");
const Product = require("../models/product");
const asyncHandler = require("express-async-handler");
const { body, validationResult } = require("express-validator");

//  Display List of ingredients
exports.ingredient_list = asyncHandler(async (req, res, next) => {
    const allIngredients = await Ingredient.find({}, "name quantity")
    .sort({ name: 1 })
    .exec();

    res.render("ingredient_list", { 
      title: "Ingredient List", 
      ingredient_list: allIngredients, 
    });
});

//  Detail Page for ingredient
exports.ingredient_detail = asyncHandler(async (req, res, next) => {
    const ingredient = await Ingredient.findById(req.params.id).exec();
    const productsFromIngredient = await Product.find({ ingredients: req.params.id }).exec();

    if (ingredient === null) {
      const err = new Error("Ingredient not found");
      err.status = 404;
      return next(err);
    };

    res.render("ingredient_detail", {
      title: "Ingredient Detail",
      ingredient: ingredient,
      products: productsFromIngredient,
    });
})

//  Display ingredient Create Form on GET
exports.ingredient_create_get = asyncHandler(async (req, res, next) => {
    res.render("ingredient_form", { title: "Create Ingredient" });
})

//  Handle ingredient Create Form on POST
exports.ingredient_create_post = [
    body("name", "Ingredient name must be less than 100 characters")
        .trim()
        .isLength({ max: 100 })
        .escape(),
    body("cost")
        .trim()
        .escape(),
    body("quantity")
        .trim()
        .escape(),

    asyncHandler(async (req, res, next) => {
        const errors = validationResult(req);

        const ingredient = new Ingredient({ 
            name: req.body.name,
            cost: req.body.cost,
            quantity: req.body.quantity,
        });

        if (!errors.isEmpty()) {
            res.render("producttype_form", {
                title: "Create Ingredient",
                ingredient: ingredient,
                errors: errors.array(),
            });
            return;
        } else {
            const ingredientExists = await Ingredient.findOne({ name: req.body.name }).exec();
            if (ingredientExists) {
                res.redirect(ingredientExists.url);
            } else {
                await ingredient.save();
                res.redirect(ingredient.url);
            }
        }
    })
]

//  Display ingredient Delete on GET
exports.ingredient_delete_get = asyncHandler(async (req, res, next) => {
    res.send("Need to implement: ingredient delete GET")
})

//  Handle ingredient Delete on POST
exports.ingredient_delete_post = asyncHandler(async (req, res, next) => {
    res.send("Need to implement: ingredient delete POST")
})

//  Display ingredient Update on GET
exports.ingredient_update_get = asyncHandler(async (req, res, next) => {
    res.send("Need to implement: ingredient update GET")
})

//  Handle ingredient Update on POST
exports.ingredient_update_post = asyncHandler(async (req, res, next) => {
    res.send("Need to implement: ingredient update POST")
})