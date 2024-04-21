const users = require('../models/landingpage')


const sendDataToPatientDashboard = async (req,res)=>{   
    try {
        let userdata =await users.findOne({username : req.body.key})
        res.json(userdata)
    } catch (error) {
        console.log("Error in getting data from mongoDB"+error)
    }
    
}
module.exports = {sendDataToPatientDashboard}