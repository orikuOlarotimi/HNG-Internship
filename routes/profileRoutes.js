// routes/profileRoutes.js
const express = require("express");
const router = express.Router();
const { getProfile } = require("../controllers/profileController");

// GET /me
router.get("/me", getProfile);

module.exports = router;
