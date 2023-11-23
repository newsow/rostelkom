const userModel = require('../models/userModel')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const secretKey = '1111'

const generateToken = (id,email)=>{
    return jwt.sign({id,email},secretKey,{expiresIn:'3d'})
    
}
class authController{
    async registration(req,res){
        try {
            const {first_name,last_name,email,password} = req.body
            const candidate = await userModel.findOne({email})
            if(candidate){
                return res.status(400).json({message:'Пользователь с такой почты уже существует'})
            }
            const hashPassword = bcrypt.hash(password,3)
            const user = await userModel.create({first_name,last_name,email,password:hashPassword})
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

}

module.exports = new authController