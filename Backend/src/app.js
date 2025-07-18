import express from "express";
const app = express();
import authRoutes from "../src/routes/auth.routes.js"
import cookieParser from "cookie-parser"
import cors from "cors";

app.use(cors({
    origin: "http://localhost:5173",
    credentials: true,
}));
app.use(express.json());
app.use(cookieParser())
app.use("/auth", authRoutes)

export default app;