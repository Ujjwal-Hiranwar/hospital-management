const user = require('../models/landingpage')
const axios = require('axios')
const loginSubmit = async (req,res,)=>{
    try {
        const check =await user.findOne({username : req.body.username})
       
         if(check.password == req.body.password && req.body.adminid=="8367" ){
            await user.updateOne({username :req.body.username},{$set : {isAdmin : true}})
            res.json({
            isAdmin : true,
            Loggedin : true,
            username : check.username,
            password : check.password,
            emailid : check.email
            })
         }
       else if(check.password == req.body.password){
        
           res.json({
            Loggedin : true,
            username : check.username,
            password : check.password,
            emailid : check.email
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
        password : req.body.password,
        isAdmin : false
    }
    try {
        user.insertMany([registerData]);
        res.send("response sent successfully")
    } catch (error) {
        console.log("error in sending response");
    }

}
module.exports = {loginSubmit,registerSubmit}