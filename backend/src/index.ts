import express from "express";
import cookieParser from "cookie-parser";

import authRoutes from "./routes/auth.route.js";
import messageRoutes from "./routes/message.route.js";

import dotenv from "dotenv";

dotenv.config();

const PORT = process.env.PORT || 3000;

const app = express();

app.use(cookieParser()); // to parse the cookies
app.use(express.json()); // for parsing application/json data

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);

app.get("/", (req, res) => {
  res.send("Hello world 2");
});

app.listen(PORT, () => {
  console.log("server running on port 3000");
});
