const users = require('../models/landingpage')


const sendDataToPatientDashboard = async (req,res)=>{   
    try {
       
        await users.updateOne({username : req.body.key},{$set : {isAdmin : true}})
        let userdata =await users.findOne({username : req.body.key})
        console.log(userdata)
        res.json(userdata)
    } 
    catch (error) {
        console.log("Error in getting data from mongoDB"+error)
    }
    
}
const sendAppointmentToDatabase = async (req,res)=>{
    try {
        
        
        console.log("Before update function")
        await users.updateOne({username : req.body.user} , {$push : {appointments : req.body}})
        
    } 
    catch (error) {
        console.log("Error in sending appointmet data to MongoDB")
    }
}
const deleteAppointment = async (req,res)=>{
     console.log(req.body)
     try {
        await users.updateOne({username : req.body.username},{$pull : {appointments : {Appointmentid : req.body.appointmentid}}}) //start here
         console.log("appointment canelled")
        res.json({delete : true})
     } catch (error) {
        console.log("error in deleting the appointment ")
     }
}
module.exports = {sendDataToPatientDashboard,sendAppointmentToDatabase,deleteAppointment}