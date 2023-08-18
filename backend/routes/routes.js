// import express
import express from "express";

// import function from controller
import {showProducts, showProductById, createProduct, updateProduct, deleteProduct} from "../controllers/product.js";

// init express router
const router = express.Router();

// get all products
router.get('/products', showProducts);

// get single product
router.get('/products/:id', showProductById);

// create new product
router.post('/products', createProduct);

// update product
router.put('/products/:id', updateProduct);

// delete product
router.delete('/products/:id', deleteProduct);

// export default router
export default router;