
const mongoose = require('mongoose');

const contactSchema = mongoose.Schema({
    name:{
        type:String,
        required : [true,"Enter Name"]
    },
    email:{
        type:String,
        required:[true,"Enter Email"]
    },
    subject:{
        type:String,
        required:[true,'Enter Subject']
    },
    message:{
        type:String,
        required:[true,'Enter Message']
    }
    
},
{
    timestamps:true,
    date:{
        type:Date,
        default:Date.now,
        index:true
    }
}
)

const Contact = mongoose.model('Contact', contactSchema);

module.exports = Contact;