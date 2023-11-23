const express = require('express')
const router = express.Router()
const authController = require('../controllers/authController')

router.post('/registration',authController.registration)
router.post('/login',authController.login)
router.get('/adresses',authController.getAdresses)

module.exports = router