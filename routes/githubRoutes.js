const express = require("express");
const router = express.Router();

const {
    analyzeProfile,
    getAllProfiles,
    getProfile
} = require("../controllers/githubController");

router.post("/profile/:username", analyzeProfile);

router.get("/profiles", getAllProfiles);

router.get("/profile/:username", getProfile);

module.exports = router;