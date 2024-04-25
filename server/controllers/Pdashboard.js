const users = require('../models/landingpage')


const sendDataToPatientDashboard = async (req,res)=>{   
    try {
        let userdata =await users.findOne({username : req.body.key})
        
        res.json(userdata)
    } 
    catch (error) {
        console.log("Error in getting data from mongoDB"+error)
    }
    
}
const sendAppointmentToDatabase = async (req,res)=>{
    try {
        
        console.log(req.body)
        console.log("Before update function")
        await users.updateOne({username : req.body.user} , {$push : {appointments : req.body}})
        
    } 
    catch (error) {
        console.log("Error in sending appointmet data to MongoDB")
    }
}
module.exports = {sendDataToPatientDashboard,sendAppointmentToDatabase}