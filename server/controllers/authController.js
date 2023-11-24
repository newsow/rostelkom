const userModel = require('../models/userModel')
const addressModel = require('../models/addressModel')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const secretKeyToken = '1111'
const uuid = require('uuid')

const generateToken = (id,email,address)=>{
    return jwt.sign({id,email,address},secretKeyToken,{expiresIn:'3d'})
    
}
class authController{
    async registration(req,res){
        try {
            const {first_name,last_name,email,password,secretKey} = req.body
            const candidate = await userModel.findOne({email})
            if(candidate){
                return res.status(400).json({message:'Пользователь с такой почты уже существует'})
            }
            const user_address = await addressModel.findOne({secretKey})
            const hashPassword = bcrypt.hashSync(password,3)
            const user = await userModel.create({first_name,last_name,email,password:hashPassword,address:user_address})
            const token = generateToken(user._id,user.email,user.address)
            return res.status(200).json({token,id:user._id})
        } catch (error) {
            console.log(error)
            return res.status(400).json({message:error})
        }
    }
    async login(req,res){
        try {
            const {email,password} = req.body
            const candidate = await userModel.findOne({email})
            if(!candidate){
                return res.status(400).json({error:'Неправильный логин или пароль'})
            }
            const user = await userModel.findOne({email})
            const passwordValidate = bcrypt.compareSync(password,user.password)
            if(!passwordValidate){
                return res.status(400).json({error:'Неправильный логин или пароль'})
            }
            const token = generateToken(user._id,user.email,user.address)
            return res.status(200).json({token,id:user._id})
        } catch (error) {
            console.log(error)
            return res.status(400).json({message:error})
        }
    }
    async createAddress(req,res){
        try {
            const {address} = req.body
            const secretKey = uuid.v4() 
            const Address = await addressModel.create({address,secretKey})
            return res.status(200).json({Address})
        } catch (error) {
            console.log(error)
            return res.status(500)
        }
    }
    

}

module.exports = new authController