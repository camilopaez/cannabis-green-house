'use strict';


const express = require("express");
const router = express.Router();

const plantController = require('./plants/controller')
const authenticacionController = require('./authentication/controller')
const userController = require('./user/controller')

router.post('/signup', userController.signup)
router.post('/login', authenticacionController.login)
router.post('/save', plantController.saveData)
router.get('/get', plantController.getData)

module.exports = router