const {model,Schema} = require('mongoose')

const GroupSchema = new Schema({
    members:{type:Array},
    address:{type:Schema.Types.ObjectId,ref:"Address"}
})

module.exports = model('Group',GroupSchema)