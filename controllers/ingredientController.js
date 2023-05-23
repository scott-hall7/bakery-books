const Ingredient = require("../models/ingredient");
const asyncHandler = require("express-async-handler");

//  Display List of ingredients
exports.ingredient_list = asyncHandler(async (req, res, next) => {
    res.send("Need to implement: ingredient List")
});

//  Detail Page for ingredient
exports.ingredient_detail = asyncHandler(async (req, res, next) => {
    res.rend(`Need to implement: ${res.params.id}`)
} )

//  Display ingredient Create Form on GET
exports.ingredient_create_get = asyncHandler(async (req, res, next) => {
    res.send("Need to implement: ingredient create GET")
})

//  Handle ingredient Create Form on POST
exports.ingredient_create_post = asyncHandler(async (req, res, next) => {
    res.send("Need to implement: ingredient create POST")
})

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