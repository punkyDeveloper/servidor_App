const login = require('../controller/user-case/login')
// eslint-disable-next-line no-unused-vars
const express = require('express');
// eslint-disable-next-line new-cap
const router = express.Router();

router.post('/login',login.login)

module.exports = router;