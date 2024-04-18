const mongoose = require('mongoose');

const database = mongoose.connect("mongodb://127.0.0.1:27017/hospitalmanagement?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+2.0.1")
.then(()=>{
    console.log("MongoDB connected Successfully");
})
.catch((err)=>{
    console.log("Error while connecting MongoDB");
})

