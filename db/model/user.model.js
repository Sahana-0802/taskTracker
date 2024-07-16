const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    "userId":{
        type:"number",
        length:5,
        required: true,
        unique: true
    },
    "userFirstName":{
        type:"String"
    },
    "userLastName":{
        type:"String"
    },
    "userRole":{
        type:"String",
        required: true,
        enum:['user','admin'],
        default:"user"
    }
}, { strict:false, timestamps:true });

module.exports = mongoose.model('User',userSchema);