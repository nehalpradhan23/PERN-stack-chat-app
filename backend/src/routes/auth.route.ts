import express from "express";

const router = express.Router();

router.get("/login", (req, res) => {
  res.send("login success");
});
router.get("/logout", (req, res) => {
  res.send("logout success");
});
router.get("/signup", (req, res) => {
  res.send("signup success");
});

export default router;
