const express = require("express");
const router = express.Router();

const { addData, getData, loginUser } = require("../Controller/userDataController");
const authMiddleware = require("../middleware/auth");

// 🔹 Register
router.post("/register", addData);

// 🔹 Login (POST not GET)
router.post("/login", loginUser);

// 🔹 Get all users
router.get("/users", getData);

// 🔹 Protected Route
router.get("/dashboard", authMiddleware, (req, res) => {
   console.log( res.json({ message: "Welcome", user: req.user }))
});

module.exports = router;
