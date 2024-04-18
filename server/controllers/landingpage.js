const user = require('../models/landingpage')
const loginSubmit = async (req,res)=>{
    console.log(req.body)
    try {
        const check =await user.findOne({username : req.body.username})
        if(check.password == req.body.password){
           res.send('Home')
        }
        else{
            console.log("wrong password or username combination")
        }
    } catch (error) {
       console.log("Error in authentection") 
    }
   
}
const registerSubmit = async (req,res)=>{
    const registerData = {
        username : req.body.username.toLowerCase(),
        email : req.body.email,
        password : req.body.password
    }
    try {
        user.insertMany([registerData]);
        res.send("response sent successfully")
    } catch (error) {
        console.log("error in sending response");
    }

}
module.exports = {loginSubmit,registerSubmit}