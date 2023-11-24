const jwt = require('jsonwebtoken')
const groupModel = require('../models/groupModel')
const messageModel = require('../models/messageModel')
const secretKeyToken = '1111'
class messageController{
    async getMainGroup(req,res){
        try {
            const token = req.headers.authorization.split(' ')[1]
            const user = jwt.verify(token,secretKeyToken)
            const mainGroup = await groupModel.findOne({address:user.address})
            return res.status(200).json(mainGroup)
        } catch (error) {
            console.log(error)
            return res.status(500)
        }
    }
    async getAllGroups(req,res){
        try {
            const token = req.headers.authorization.split(' ')[1]
            const user = jwt.verify(token,secretKeyToken)
            const groups = await groupModel.find({members:{$in:[user.id]},$nor:[{address:user.address}]})
            return res.status(200).json(groups)
        } catch (error) {
            console.log(error)
            return res.status(500)
        }
    }

    async getMessages(req,res){
        try {
            const {groupdId} = req.params
            const messages = await messageModel.find({groupId})
            return res.status(200).json(messages)
        } catch (error) {
            console.log(error)
            return res.status(500)
        }
    }
    async createMessage(req,res){
        try {
            const {groupId} = req.params
            const {text} = req.body
            const token = req.headers.authorization.split(' ')[1]
            const author = jwt.verify(token,secretKeyToken)
            const message = await messageModel.create({text,author,groupId})
            return res.status(200).json(message)
        } catch (error) {
            console.log(error)
            return res.status(500)
        }
    }
}

module.exports = new messageController