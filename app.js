const db = require("./config/db");

db.query("SELECT 1", (err, results) => {
    if (err) {
        console.error("Database test failed:", err);
    } else {
        console.log("✅ Database test successful");
    }
});

const express = require("express");

const githubRoutes = require("./routes/githubRoutes");

const app = express();

app.use(express.json());

app.use("/api", githubRoutes);

app.get("/", (req, res) => {
    res.send("GitHub Profile Analyzer API is Running!");
});

const PORT = 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});