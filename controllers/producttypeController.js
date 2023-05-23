const ProductType = require("../models/product");
const asyncHandler = require("express-async-handler");

//  Display List of producttypes
exports.producttype_list = asyncHandler(async (req, res, next) => {
    res.send("Need to implement: Product List")
});

//  Detail Page for producttypes
exports.producttype_detail = asyncHandler(async (req, res, next) => {
    res.rend(`Need to implement: ${req.params.id}`)
} )

//  Display producttype Create Form on GET
exports.producttype_create_get = asyncHandler(async (req, res, next) => {
    res.send("Need to implement: producttype create GET")
})

//  Handle producttype Create Form on POST
exports.producttype_create_post = asyncHandler(async (req, res, next) => {
    res.send("Need to implement: producttype create POST")
})

//  Display producttype Delete on GET
exports.producttype_delete_get = asyncHandler(async (req, res, next) => {
    res.send("Need to implement: producttype delete GET")
})

//  Handle producttype Delete on POST
exports.producttype_delete_post = asyncHandler(async (req, res, next) => {
    res.send("Need to implement: producttype delete POST")
})

//  Display producttype Update on GET
exports.producttype_update_get = asyncHandler(async (req, res, next) => {
    res.send("Need to implement: producttype update GET")
})

//  Handle producttype Update on POST
exports.producttype_update_post = asyncHandler(async (req, res, next) => {
    res.send("Need to implement: producttype update POST")
})