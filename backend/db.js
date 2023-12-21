const Pool  = require("pg").Pool;

const pool = new Pool({
    user: "postgres",
    host: "localhost",
    database: "cms_db",
    password: "pwd",
    port: 5432,
});

module.exports = pool;
