const express = require("express");
const router = express.Router();

// Require controller modules.
const product_controller = require("../controllers/productController");
const producttype_controller = require("../controllers/producttypeController");
const ingredient_controller = require("../controllers/ingredientController");

//  Product Routes
router.get("/", product_controller.index);

router.get("/product/create", product_controller.product_create_get);

router.post("/product/create", product_controller.product_create_post);

router.get("/product/:id/delete", product_controller.product_delete_get);

router.post("/product/:id/delete", product_controller.product_delete_post);

router.get("/product/:id/update", product_controller.product_update_get);

router.post("/product/:id/update", product_controller.product_update_post);

router.get("/product/:id", product_controller.product_detail);

router.get("/products", product_controller.product_list);

//  Product Type Routes
router.get("/producttype/create", producttype_controller.producttype_create_get);

router.post("/producttype/create", producttype_controller.producttype_create_post);

router.get("/producttype/:id/delete", producttype_controller.producttype_delete_get);

router.post("/producttype/:id/delete", producttype_controller.producttype_delete_post);

router.get("/producttype/:id/update", producttype_controller.producttype_update_get);

router.post("/producttype/:id/update", producttype_controller.producttype_update_post);

router.get("/producttype/:id", producttype_controller.producttype_detail);

router.get("/producttypes", producttype_controller.producttype_list);

//  Ingredient Routes
router.get("/ingredient/create", ingredient_controller.ingredient_create_get);

router.post("/ingredient/create", ingredient_controller.ingredient_create_post);

router.get("/ingredient/:id/delete", ingredient_controller.ingredient_delete_get);

router.post("/ingredient/:id/delete", ingredient_controller.ingredient_delete_post);

router.get("/ingredient/:id/update", ingredient_controller.ingredient_update_get);

router.post("/ingredient/:id/update", ingredient_controller.ingredient_update_post);

router.get("/ingredient/:id", ingredient_controller.ingredient_detail);

router.get("/ingredients", ingredient_controller.ingredient_list);

module.exports = router;