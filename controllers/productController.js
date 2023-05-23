const Product = require("../models/product");
const asyncHandler = require("express-async-handler");

exports.index = asyncHandler(async (req, res, next) => {
    res.send("NOT IMPLEMENTED: Site Home Page");
  });

//  Display List of Products
exports.product_list = asyncHandler(async (req, res, next) => {
    res.send("Need to implement: Product List")
});

//  Detail Page for Product
exports.product_detail = asyncHandler(async (req, res, next) => {
    res.rend(`Need to implement: ${req.params.id}`)
} )

//  Display Product Create Form on GET
exports.product_create_get = asyncHandler(async (req, res, next) => {
    res.send("Need to implement: Product create GET")
})

//  Handle Product Create Form on POST
exports.product_create_post = asyncHandler(async (req, res, next) => {
    res.send("Need to implement: Product create POST")
})

//  Display Product Delete on GET
exports.product_delete_get = asyncHandler(async (req, res, next) => {
    res.send("Need to implement: Product delete GET")
})

//  Handle Product Delete on POST
exports.product_delete_post = asyncHandler(async (req, res, next) => {
    res.send("Need to implement: Product delete POST")
})

//  Display Product Update on GET
exports.product_update_get = asyncHandler(async (req, res, next) => {
    res.send("Need to implement: Product update GET")
})

//  Handle Product Update on POST
exports.product_update_post = asyncHandler(async (req, res, next) => {
    res.send("Need to implement: Product update POST")
})