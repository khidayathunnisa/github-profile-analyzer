const mysql = require("mysql2");

const pool = mysql.createPool({
    host: "gateway01.ap-southeast-1.prod.alicloud.tidbcloud.com",
    user: "root",
    password: "qDUTx6glz0RMrh9g",
    database: "github_analyzer",
    port: 4000,
    ssl: {
        rejectUnauthorized: true
    },
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

module.exports = pool;