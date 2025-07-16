import dotenv from "dotenv";
dotenv.config();

const config = {
    MONGODB_URL : process.env.MONGODB_URL,
    JWT_SCRETE_KEY : process.env.JWT_SCRETE_KEY
}

export default config;