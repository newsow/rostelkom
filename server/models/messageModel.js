const {model,Schema} = require('mongoose')

const MessageSchema = new Schema({
    text:{type:String},
    author:{type:Schema.Types.ObjectId,ref:'User'},
    groupId:{type:Schema.Types.ObjectId,ref:'Group'}
})

module.exports = model('Message',MessageSchema)