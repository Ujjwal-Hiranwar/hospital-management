const mongoose = require('mongoose');
const database = mongoose.connect("mongodb://127.0.0.1:27017/hospitalmanagement?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+2.0.1")
.then(()=>{
    console.log("MongoDB connected Successfully");
})
.catch((err)=>{
    console.log("Error while connecting MongoDB");
})
const registerSchema = mongoose.Schema({
    username : {
        type : String,
        required : false
    },
    password : {
        type : String,
        required : false
    },
    email : {
        type : String,
        required : false
    },
    isAdmin : {
        type : Boolean,
        required : false
    },
    appointments : [{
        type : Object,
        required : false
    }]
})
const user = new mongoose.model("patient",registerSchema);
module.exports = user;