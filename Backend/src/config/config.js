import dotenv from "dotenv";
dotenv.config();


const config = {
  MONGODB_URL: process.env.MONGODB_URL,
  JWT_SCRETE_KEY: process.env.JWT_SCRETE_KEY,

  IMAGEKIT_PUBLIC_KEY: process.env.IMAGEKIT_PUBLIC_KEY,
  IMAGEKIT_PRIVATE_KEY: process.env.IMAGEKIT_PRIVATE_KEY,
  IMAGEKIT_URL_ENDPOINT: process.env.IMAGEKIT_URL_ENDPOINT,
};

export default config;
