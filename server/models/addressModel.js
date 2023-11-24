const {model,Schema} = require('mongoose')

const AddressSchema = new Schema({
    address:{type:String,required:true,unique:true},
    secretKey:{type:String,required:true,unique:true}
})

module.exports = model('Address',AddressSchema)