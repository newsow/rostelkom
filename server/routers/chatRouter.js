const express = require('express')
const router = express.Router()
const messageController = require('../controllers/messageController')

router.get('/main',messageController.getMainGroup)
router.get('/all',messageController.getAllGroups)
router.get('/messages/:groupId',messageController.getAllGroups)
router.post('/create/:groupId',messageController.createMessage)

module.exports = router