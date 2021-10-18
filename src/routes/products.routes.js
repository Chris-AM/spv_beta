const { Router } = require('express');
const { check } = require('express-validator');
const { createProduct,
  getProductById,
  getProducts,
  updateProducts,
  deleteProduct } = require("../controllers/products.controller");

const router = Router();

router.get("/",
  getProducts
);

router.post("/", [
  check('codebar', 'Product Codebar is needed').not().isEmpty(),
  check('name', 'Product name is required').not().isEmpty()
], createProduct)

module.exports = router;