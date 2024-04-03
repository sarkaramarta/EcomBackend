import express from "express";
import { adminOnly } from "../middlewares/auth.js";
import { allCoupons, applyDiscount, createPaymentIntent, deleteCoupons, newCoupon } from "../cotrollers/payment.js";

const app = express.Router();

app.post("/create", createPaymentIntent);
// /api/v1/payment
app.post("/coupon/new", adminOnly, newCoupon);

app.get("/discount", applyDiscount);

app.get("/coupon/all", adminOnly, allCoupons);

app.delete("/coupon/:id", adminOnly, deleteCoupons);
export default app;