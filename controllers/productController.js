const Product = require("../models/product");
const ProductType = require("../models/product-type");
const Ingredients = require("../models/ingredient");
const asyncHandler = require("express-async-handler");
const { body, validationResult } = require("express-validator");

exports.index = asyncHandler(async (req, res, next) => {
  const [
    numProducts,
    numProductTypes,
    numIngredients,
  ] = await Promise.all([
    Product.countDocuments({}).exec(),
    ProductType.countDocuments({}).exec(),
    Ingredients.countDocuments({}).exec(),
  ]);

  res.render("index", {
    title: "Bakery Books",
    product_count: numProducts,
    producttype_count: numProductTypes,
    ingredient_count: numIngredients,
  });
});

//  Display List of Products
exports.product_list = asyncHandler(async (req, res, next) => {
    const allProducts = await Product.find({}, "name quantity")
    .sort({ name: 1 })
    .exec();

    res.render("product_list", { title: "Product List", product_list: allProducts});
});

//  Detail Page for Product
exports.product_detail = asyncHandler(async (req, res, next) => {
    const product = await Product.findById(req.params.id).populate("product_type ingredients").exec();

    if (product === null) {
      const err = new Error("Product not found");
      err.status = 404;
      return next(err);
    };

    res.render("product_detail", {
      title: "Product Detail",
      product: product,
    });
});

//  Display Product Create Form on GET
exports.product_create_get = asyncHandler(async (req, res, next) => {
  const [allProductTypes, allIngredients] = await Promise.all([
    ProductType.find().exec(),
    Ingredient.find().exec(),
  ]);

  res.render("product_form", { 
    title: "Create Product",
    product_types: allProductTypes,
    ingredients: allIngredients,
   });
})

//  Handle Product Create Form on POST
exports.product_create_post = [
  // Convert the genre to an array.
  (req, res, next) => {
    if (!(req.body.ingredient instanceof Array)) {
      if (typeof req.body.ingredient === "undefined") req.body.ingredient = [];
      else req.body.ingredient = new Array(req.body.ingredient);
    }
    next();
  },

  // Validate and sanitize fields.
  body("name", "Name must not be empty.")
    .trim()
    .isLength({ min: 1 })
    .escape(),
  body("description", "Description must not be empty.")
    .trim()
    .isLength({ min: 1 })
    .escape(),
  body("product_type", "Product typw must not be empty.")
    .trim()
    .isLength({ min: 1 })
    .escape(),
  body("price", "Price must not be empty").trim().isLength({ min: 1 }).escape(),
  body("quantity", "Quantity must not be empty").trim().isLength({ min: 1 }).escape(),
  body("ingredient.*").escape(),
  // Process request after validation and sanitization.

  asyncHandler(async (req, res, next) => {
    // Extract the validation errors from a request.
    const errors = validationResult(req);

    // Create a Book object with escaped and trimmed data.
    const book = new Book({
      name: req.body.title,
      description: req.body.author,
      product_type: req.body.summary,
      price: req.body.isbn,
      quantity: req.body.quantity,
      ingredients: req.body.ingredients,
    });

    if (!errors.isEmpty()) {
      // There are errors. Render form again with sanitized values/error messages.

      // Get all authors and genres for form.
      const [allAuthors, allGenres] = await Promise.all([
        Author.find().exec(),
        Genre.find().exec(),
      ]);

      // Mark our selected genres as checked.
      for (const genre of allGenres) {
        if (book.genre.indexOf(genre._id) > -1) {
          genre.checked = "true";
        }
      }
      res.render("book_form", {
        title: "Create Book",
        authors: allAuthors,
        genres: allGenres,
        book: book,
        errors: errors.array(),
      });
    } else {
      // Data from form is valid. Save book.
      await book.save();
      res.redirect(book.url);
    }
  }),
];

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