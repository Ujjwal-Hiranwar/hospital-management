const express = require('express')
const app = express()

app.use(express.json())





app.listen(8000,(err)=>{
    if(err) console.log("error in listen : "+err)
    console.log("server is listning")
})