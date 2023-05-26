const ProductType = require("../models/product-type");
const Product = require("../models/product");

const asyncHandler = require("express-async-handler");
const { body, validationResult } = require("express-validator");

//  Display List of producttypes
exports.producttype_list = asyncHandler(async (req, res, next) => {
    const allProductTypes = await ProductType.find().exec();
    const allProducts = await Product.find().exec();

  res.render("producttype_list", {
    title: "Product Type List",
    producttype_list: allProductTypes,
    product_list: allProducts,
  });
});

//  Detail Page for producttypes
exports.producttype_detail = asyncHandler(async (req, res, next) => {
    const [productType, productsInProductType] = await Promise.all([
        ProductType.findById(req.params.id).exec(),
        Product.find({ product_type: req.params.id }, "name description").exec(),
    ]);

    if (productType === null) {
        const err = new Error("Product Type not found");
        err.status = 404;
        return next(err);
    }

    res.render("producttype_detail", {
        title: "Product Type Detail",
        product_type: productType,
        products_producttypes: productsInProductType,
    });
});

//  Display producttype Create Form on GET
exports.producttype_create_get = asyncHandler(async (req, res, next) => {
    res.render("producttype_form", { title: "Create Product Type" });
})

//  Handle producttype Create Form on POST
exports.producttype_create_post = [ 
    body("name", "Product type name must be less than 100 characters")
        .trim()
        .isLength({ max: 100 })
        .escape(),
    body("description", "Product type description must be less than 100 characters")
        .trim()
        .isLength({ max: 100 })
        .escape(),

    asyncHandler(async (req, res, next) => {
        const errors = validationResult(req);

        const producttype = new ProductType({ 
            name: req.body.name,
            description: req.body.description,
         });

         if (!errors.isEmpty()) {
            res.render("producttype_form", {
              title: "Create Product Type",
              producttype: producttype,
              errors: errors.array(),
            });
            return;
        } else {
            const productTypeExists = await ProductType.findOne({ name: req.body.name }).exec();
            if (productTypeExists) {
              res.redirect(productTypeExists.url);
            } else {
              await producttype.save();
              res.redirect(producttype.url);
            }
          }
    })
]

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