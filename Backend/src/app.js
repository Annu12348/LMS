import express from "express";
const app = express();
import authRoutes from "../src/routes/auth.routes.js"
import cookieParser from "cookie-parser"
import courseRoutes from "../src/routes/course.routes.js"
import lectureRoutes from "../src/routes/lecture.routes.js"
import cors from "cors";

app.use(cors({
    origin: ["http://localhost:5173","https://lms-ncrk.onrender.com",],
    credentials: true,
}));
app.use(express.json());
app.use(cookieParser())
app.use("/auth", authRoutes);
app.use("/course", courseRoutes)
//app.use("/course/:id/lecture", lectureRoutes)

export default app;