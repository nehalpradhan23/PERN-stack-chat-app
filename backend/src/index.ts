import express from "express";
import cookieParser from "cookie-parser";
import path from "path";

import authRoutes from "./routes/auth.route.js";
import messageRoutes from "./routes/message.route.js";

import dotenv from "dotenv";
import { app, server } from "./socket/socket.js";

dotenv.config();

const PORT = process.env.PORT || 3000;
const __dirname = path.resolve();

// const app = express();

app.use(cookieParser()); // to parse the cookies
app.use(express.json()); // for parsing application/json data

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);

if (process.env.NODE_ENV !== "development") {
  app.use(express.static(path.join(__dirname, "/frontend/dist")));
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "frontend", "dist", "index.html"));
  });
}

app.get("/", (req, res) => {
  res.send("Hello world 2");
});

server.listen(PORT, () => {
  console.log("server running on port 3000");
});
