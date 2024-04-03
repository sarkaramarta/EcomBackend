import express from "express";
import { adminOnly } from "../middlewares/auth.js";
import { deleteProduct, getAdminProducts, getAllCategories, getAllProducts, getLatestProducts, getSingleProduct, newProduct, updateProduct } from "../cotrollers/product.js";
import { singleUpload } from "../middlewares/multer.js";
import { timeStamp } from "console";

const app = express.Router();
// Create New Product - /api/v1/product/new 
app.post("/new",adminOnly, singleUpload, newProduct);
// Create New Product - /api/v1/product/Latest 

// get all products with filter 
app.get("/all", getAllProducts);

app.get("/latest", getLatestProducts);
// Create New Product - /api/v1/product/categories 

app.get("/categories", getAllCategories);
// Create New Product - /api/v1/product/new 

app.get("/admin-products", getAdminProducts);

app.route("/:id").get(getSingleProduct).put(adminOnly, updateProduct).delete(adminOnly, deleteProduct);

export default app;

// timestamp - 2:21