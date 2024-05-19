const { response } = require('express')
const users = require('../models/landingpage')

const sendAppointmentsToAdmin =async (req,res)=>{
      try{
            const pendingappointments = await users.aggregate(
            [{
                  $project : {
                        username : 1,
                        appointments : {$filter : {input : "$appointments" , as : "appointment", cond : {$eq :["$$appointment.Status", "Not Fixed"]}}}
                  }

            }]
      )
      let responsee =[]
      for(let i=0;i < pendingappointments.length; i++){
            if(pendingappointments[i].appointments.length != 0){
                  responsee = responsee.concat(pendingappointments[i].appointments)
            }
      }
      res.json(responsee)
}
      catch(err){
            console.log(err)
      }
   
}
const acceptAppointment =async (req,res)=>{
try {
    
//      users.updateMany({"appointments.Appointmentid" : req.body.appointmentid},{$set : {"appointments.$.Status" : "Fixed"}})
 await users.updateMany({appointments : {$elemMatch : {Appointmentid : req.body.appointmentid}}},
      {$set : {"appointments.$.Status"  : "Fixed"}}
)     
 res.json({accept : true})
   
} catch (error) {
      console.log(error)
}
   
}

module.exports = {sendAppointmentsToAdmin,acceptAppointment}