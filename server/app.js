const express = require('express')
const app = express()
const cors =require('cors')
const landingPageRoutes = require('./routes/allroutes')
const corsOptions = {
    origin : "http://localhost:3000",
    methods : "GET, PUT, POST, DELETE"
}
app.use(cors(corsOptions))
app.use(express.urlencoded({extended : true}))
app.use(express.json())


app.use("/home/dashboard/admin",landingPageRoutes)
app.use("/home/dashboard",landingPageRoutes)
app.use("/",landingPageRoutes)







app.listen(8000,(err)=>{
    if(err) console.log("error in listen : "+err)
    console.log("server is listning")
})