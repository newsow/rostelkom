const express = require('express')
const router = express.Router()
const authController = require('../controllers/authController')

router.post('/registration',authController.registration)
router.post('/login',authController.login)
router.post('/create/address',authController.createAddress)

module.exports = router