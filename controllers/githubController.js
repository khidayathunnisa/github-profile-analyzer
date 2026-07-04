const axios = require("axios");
const db = require("../config/db");

const analyzeProfile = async (req, res) => {
    try {
        const username = req.params.username;

        const response = await axios.get(`https://api.github.com/users/${username}`);

        const user = response.data;

        const sql = `
        INSERT INTO github_profiles
        (username, name, followers, following, public_repos, avatar_url, github_url)
        VALUES (?, ?, ?, ?, ?, ?, ?)
        ON DUPLICATE KEY UPDATE
        name=VALUES(name),
        followers=VALUES(followers),
        following=VALUES(following),
        public_repos=VALUES(public_repos),
        avatar_url=VALUES(avatar_url),
        github_url=VALUES(github_url)
        `;

        db.query(
            sql,
            [
                user.login,
                user.name,
                user.followers,
                user.following,
                user.public_repos,
                user.avatar_url,
                user.html_url
            ],
            (err) => {
                if (err) {
                    return res.status(500).json(err);
                }

                res.json({
                    message: "Profile analyzed successfully",
                    data: user
                });
            }
        );

    } catch (error) {
        res.status(404).json({
            message: "GitHub user not found"
        });
    }
};


const getAllProfiles = (req, res) => {
    db.query("SELECT * FROM github_profiles", (err, result) => {
        if (err) {
            return res.status(500).json(err);
        }
        res.json(result);
    });
};

const getProfile = (req, res) => {
    const username = req.params.username;

    db.query(
        "SELECT * FROM github_profiles WHERE username = ?",
        [username],
        (err, result) => {
            if (err) {
                return res.status(500).json(err);
            }

            if (result.length === 0) {
                return res.status(404).json({
                    message: "Profile not found"
                });
            }

            res.json(result[0]);
        }
    );
};

module.exports = {
    analyzeProfile,
    getAllProfiles,
    getProfile
};