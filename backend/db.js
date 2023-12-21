const Pool  = require("pg").Pool;

const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.APP_DB,
    password: process.env.DB_PASS,
    port: process.env.DB_PORT,
});

pool.connect((err, client, release) => {
    if (err) {
      console.error('Error connecting to PostgreSQL:', err.message);
    } else {
      console.log('Connected to PostgreSQL!');
      release(); // Release the client back to the pool
    }
  });
  
  pool.on('error', (err, client) => {
    console.error('Unexpected error on idle client:', err);
    process.exit(-1);
  });

module.exports = pool;

// DB_PORT = "5432"
// DB_HOST = localhost
// DB_USER = "postgres"
// DB_PASS = "pwd"
// APP_DB = "cms_db"