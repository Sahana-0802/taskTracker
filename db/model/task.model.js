const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    "taskId":{
        type:"number",
        required:true,
        unique:true
    },
    "taskTitle":{
        type:"String"
    },
    "taskDescription":{
        type:"String"
    },
    "userId":{
        type:"number",
        length:5,
        required:true,
        unique:true
    }
}, { strict:false, timestamps:true });

module.exports = mongoose.model('Task',taskSchema);