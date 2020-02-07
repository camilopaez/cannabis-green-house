'use strict';


const express = require("express");
const router = express.Router();

const plantController = require('./plants/controller')
const authenticacionController = require('./authentication/controller')
const userController = require('./user/controller')

router.post('/auth', userController.register)

module.exports = router