import express from "express";
const app = express();
import authRoutes from "../src/routes/auth.routes.js"
import cookieParser from "cookie-parser"
import courseRoutes from "../src/routes/course.routes.js"
import cors from "cors";

app.use(cors({
    origin: "http://localhost:5173",
    credentials: true,
}));
app.use(express.json());
app.use(cookieParser())
app.use("/auth", authRoutes);
app.use("/course", courseRoutes)

export default app;