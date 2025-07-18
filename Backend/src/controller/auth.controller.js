import { createUser, findOneUser } from "../dao/auth.dao.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import config from "../config/config.js";

export const registerUser = async (req, res) => {
  try {
    const { fullname, email, password, role } = req.body;

    const userExists = await findOneUser({ $or: [{ fullname }, { email }] });

    if (userExists) {
      return res.status(401).json({
        message: "user not found",
      });
    }

    const hasshedPassword = await bcrypt.hash(password, 10);

    const user = await createUser({
      fullname,
      email,
      password: hasshedPassword,
      role,
    });

    const token = jwt.sign({ id: user._id }, config.JWT_SCRETE_KEY);
    res.cookie("token", token);

    res.status(201).json({
      message: "User registered successfully",
      token,
      user: {
        id: user._id,
        fullname: user.fullname,
        email: user.email,
        role: user.role,
        imageUrl: user.imageUrl,
        enrolledCourses: user.enrolledCourses,
      },
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Internal server error. Please try again later.",
    });
  }
};

export const LoginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await findOneUser({
      email,
    });

    if (!user) {
      return res.status(400).json({
        message: "Invalid email or password",
      });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return res.status(400).json({
        message: "Invalid email or password",
      });
    }

    const token = jwt.sign({ id: user._id }, config.JWT_SCRETE_KEY);

    res.cookie("token", token);

    res.status(200).json({
      message: "User login successful",
      token,
      user: {
        id: user._id,
        fullname: user.fullname,
        email: user.email,
        role: user.role,
        imageUrl: user.imageUrl,
        enrolledCourses: user.enrolledCourses,
      },
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Internal server error. Please try again later.",
    });
  }
};

export const logoutUser = async (req, res) => {
  try {
    res.clearCookie("token");

    res.status(200).json({
      message: "logout user",
    });
  } catch (error) {
    console.error("Logout error:", error);
    res.status(500).json({ message: "Logout failed. Try again." });
  }
};
