const express = require('express');
const authRouter = express.Router();

authRouter.get('/register', (req, res) => {
    res.send('auth route')
})



module.exports = authRouter