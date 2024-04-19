const user = require('../models/landingpage')
const loginSubmit = async (req,res)=>{
    
    try {
        const check =await user.findOne({username : req.body.username})
        if(check.password == req.body.password){
           res.json({
            Loggedin : true
           })
        }
        else{
            res.json({
                message : "wrong password or username combination",
                Loggedin : false
            })
        }
    } catch (error) {
        res.json({
            message : "The user does not exist in database",
            Loggedin : false
        }) 
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