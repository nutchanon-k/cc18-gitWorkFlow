require('dotenv').config()
const { config } = require("dotenv");
const express = require("express");
const authRouter = require('./routes/auth-route');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json())

app.get('/auth', authRouter)



app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
})