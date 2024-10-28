require('dotenv').config()
const { config } = require("dotenv");
const express = require("express");
const authRoute = require('./routes/authRoute');
const app = express();
const port = process.env.PORT || 3000;


app.use("/auth",authRoute)


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
})