import jwt from 'jsonwebtoken';
import config from '../config/config.js'; 
import userModel from '../model/user.model.js';

export const authenticationMiddleware = async (req, res, next) => {
  const token = req.cookies.token;

  if (!token) {
    return res.status(401).json({
      message: "Unauthorized access, please login first.",
    });
  }

  try {
    const decoded = jwt.verify(token, config.JWT_SCRETE_KEY);
    console.log(decoded)

    const user = await userModel.findOne({ _id: decoded.id });

    if (!user) {
      return res.status(404).json({
        message: "User not found, please login again.",
      });
    }

    req.user = user;

    next();
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Invalid token, please login again.",
    });
  }
}