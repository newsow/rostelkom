const {model,Schema} = require('mongoose')

const UserSchema = new Schema({
    first_name: {type:String,required:true},
    last_name: {type:String,required:true},
    password: {type:String,required:true},
    email: {type:String,required:true,unique:true},
    address: {type: Schema.Types.ObjectId,ref:"Address"}
})

module.exports = model('User',UserSchema)