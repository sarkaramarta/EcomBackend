import express, { NextFunction, Request, Response } from "express";
import userRoute from "./routes/user.js";
import { connectDB } from "./utils/features.js";
import NodeCache from "node-cache";
import Stripe from "stripe";
import cors from "cors";
import { errorMiddleware } from "./middlewares/error.js";
import productRoute from "./routes/products.js";
import orderRoute from "./routes/orders.js";
import { config } from "dotenv";
import morgan from "morgan";
import paymentRoute from "./routes/payment.js";
import dashboardRoute from "./routes/stats.js";

config({
    path: "./.env"
});

const port = 4000;
const mongoURI = "mongodb+srv://amartarocks3:2tq91NNVocAxVPYW@cluster0.aderzjp.mongodb.net/";
const stripeKey = "sk_test_51OsLgkSJnsKd5YXyxlBK46Bh7vEbYvzgB7G2zRh6YPIKgrY5BAEaYMZVqQwJmTGVpIWQrpDvW0Co8tJAfqKu6SFL000ffyKzGr";

connectDB(mongoURI);

export const stripe = new Stripe(stripeKey);

export const myCache = new NodeCache();

const app = express();

app.use(express.json());
app.use(morgan("dev"));
app.use(cors());

app.get("/", (req, res)=>{
    res.send("API working with api/v1 ")
})

app.use("/api/v1/user", userRoute);
app.use("/api/v1/product", productRoute);
app.use("/api/v1/order", orderRoute);
app.use("/api/v1/payment", paymentRoute);
app.use("/api/v1/dashboard", dashboardRoute);



app.use("/uploads", express.static("uploads"));

app.use(errorMiddleware);

app.listen(port, ()=>{
    console.log(`Server is working on http://localhost:${port}`);
});