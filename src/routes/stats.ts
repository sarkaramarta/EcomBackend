import express from "express";
import { adminOnly } from "../middlewares/auth.js";
import { getBarChats, getDashboardStats, getLineChats, getPieChats } from "../cotrollers/stats.js";

const app = express.Router();

// route - /api/v1/dashboard/stats
app.get("/stats", adminOnly, getDashboardStats);

// route - /api/v1/dashboard/pie
app.get("/pie", adminOnly, getPieChats);

// route - /api/v1/dashboard/bar
app.get("/bar", adminOnly, getBarChats);

// route - /api/v1/dashboard/line
app.get("/line", adminOnly, getLineChats);

export default app;