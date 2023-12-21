require("dotenv").config();
const express = require("express");
const studentRoutes = require('./src/student/routes')
const nurseRoutes = require('./src/nurse/routes')
const cors = require("cors")
const morgan = require("morgan")

const app = express();
app.use(cors());
app.use(morgan('dev'));

// const port = 3000;
const PORT= process.env.APP_PORT;

app.use(express.json());

app.use('/api/v1/students', studentRoutes)
app.use('/api/v1/nurse', nurseRoutes)

app.listen(PORT, ()=>console.log(`App listening on port ${PORT}`))
module.exports = app