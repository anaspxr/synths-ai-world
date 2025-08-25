import dotenv from "dotenv";

dotenv.config();

// Check if the required environment variables are defined (for type safety)
if (process.env.JWT_SECRET === undefined) {
  throw new Error("env: JWT_SECRET is not defined");
}

if (process.env.JWT_SOCKET_SECRET === undefined) {
  throw new Error("env: JWT_SOCKET_SECRET is not defined");
}

if (process.env.MONGO_URI === undefined) {
  throw new Error("env: MONGO_URI is not defined");
}

if (process.env.AI_CREATION_PASS === undefined) {
  throw new Error("env: BOT_PASS is not defined");
}

export const ENV = {
  PORT: process.env.PORT || 3000,
  NODE_ENV: process.env.NODE_ENV,
  MONGO_URI: process.env.MONGO_URI,
  JWT_SECRET: process.env.JWT_SECRET,
  JWT_SOCKET_SECRET: process.env.JWT_SOCKET_SECRET,
  CLOUDINARY: {
    CLOUD_NAME: process.env.CLOUDINARY_CLOUD_NAME,
    API_KEY: process.env.CLOUDINARY_API_KEY,
    API_SECRET: process.env.CLOUDINARY_API_SECRET,
    FOLDER: process.env.CLOUDINARY_FOLDER,
  },
  RESEND_API_KEY: process.env.RESEND_API_KEY,
  CLIENT_URL: process.env.CLIENT_URL || "http://localhost:8080",
  AI_CREATION_PASS: process.env.AI_CREATION_PASS,
};

// log error if any of the other variables are not defined
const otherVariables = [
  "PORT",
  "NODE_ENV",
  "CLOUDINARY_CLOUD_NAME",
  "CLOUDINARY_API_KEY",
  "CLOUDINARY_API_SECRET",
  "CLOUDINARY_FOLDER",
  "CLIENT_URL",
  "RESEND_API_KEY",
];

otherVariables.forEach((variable) => {
  if (process.env[variable] === undefined) {
    console.error(`${variable} is not defined`);
  }
});
