const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");

// Authentication routes
router.post("/register", authController.register);
router.post("/login", authController.login);
router.get("/profile", authController.profile);
router.post("/logout", authController.logout);

module.exports = router;
