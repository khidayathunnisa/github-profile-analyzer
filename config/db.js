const mysql = require("mysql2");

const pool = mysql.createPool({
    host: "mysql://4UX8xoYAQuhVWDE.root:qDUTx6glz0RMrh9g@gateway01.ap-southeast-1.prod.alicloud.tidbcloud.com:4000/github_analyzer?ssl={"rejectUnauthorized":true}"
    ,
    user: "root",
    password: "Hiddu",
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