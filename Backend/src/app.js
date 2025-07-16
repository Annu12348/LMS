import express from "express";
const app = express();
import authRoutes from "../src/routes/auth.routes.js"
import cookieParser from "cookie-parser"

app.use(express.json());
app.use(cookieParser())
app.use("/auth", authRoutes)

export default app;