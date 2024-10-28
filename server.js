require('dotenv').config()
const { config } = require("dotenv");
const express = require("express");
const app = express();
const port = process.env.PORT || 9999;





app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
})