const userModel = require('../models/userModel')
const addressModel = require('../models/addressModel')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const secretKey = '1111'

const generateToken = (id,email)=>{
    return jwt.sign({id,email},secretKey,{expiresIn:'3d'})
    
}
class authController{
    async registration(req,res){
        try {
            const {first_name,last_name,email,password,address} = req.body
            const candidate = await userModel.findOne({email})
            if(candidate){
                return res.status(400).json({message:'Пользователь с такой почты уже существует'})
            }
            const user_address = await addressModel.findOne({address})
            const hashPassword = bcrypt.hash(password,3)
            const user = await userModel.create({first_name,last_name,email,password:hashPassword,address:user_address})
            const token = generateToken(user._id,user.email)
            return res.status(200).json({token})
        } catch (error) {
            console.log(error)
            return res.status(400).json({message:error})
        }
    }
    async login(req,res){
        try {
            const {email} = req.body
            const candidate = await userModel.findOne({email})
            if(!candidate){
                return res.status(400).json({message:'такого пользователя не существует'})
            }
            const user = await userModel.findOne({email})
            const token = generateToken(user._id,user.email)
            return res.status(200).json({token})
        } catch (error) {
            console.log(error)
            return res.status(400).json({message:error})
        }
    }
    async getAdresses(req,res){
        try {
            const addresses = await addressModel.find({})
            return res.status(200).json({addresses})
        } catch (error) {
            console.log(error)
            return res.status(500).json({error})
        }
    }
    

}

module.exports = new authController