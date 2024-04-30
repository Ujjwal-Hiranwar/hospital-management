import React, { useEffect, useState } from 'react'
import Dashnavbar from './Dashnavbar'
import Sidebar from './Sidebar'

import axios from 'axios'
import { useParams } from 'react-router-dom'
import Appointmentcard from './Appointmentcard'
import Appointmentform from './Apointmentform'



export default function Dashboard() {
  let [showappointments,setshowappointments] = useState(false)
  let [showappointmentform,setshowappointmentform] = useState(false)
  let [cancelappointment,setcancelappointment]= useState(false)
  let [userdata,setUserData] = useState({
    username : "",
    email : "",
    appointments : []
  })
  const { username } = useParams();
   const  cancelAppointment = async (id)=>{
    
      try{
        axios.post(`http://localhost:8000/home/dashboard/cancelappointment`,{
          appointmentid : id
        })
      }
      catch(err){
        console.log("error in sending cancel appointment data")
      }
        
     
  }
  
  try {
    useEffect(()=>{
      axios.post(`http://localhost:8000/home/dashboard/logindata`,{
        key: username
      })
      .then(response=>{
          console.log(response.data)
          setUserData({
            username : response.data.username,
            email : response.data.email,
            appointments : response.data.appointments
          })
      })
      .catch((error)=>{
         console.log("Errror in sending data to backend "+error)
      })
    },[])
   
    
  } catch (error) {
   console.log("cannot get response api home/logindata "+error)
  }
     
  return (
    <div>    
        <Dashnavbar />
        <div className='flex flex-row'>
          
        <Sidebar username={userdata.username}
         emailid={userdata.email} 
         showappointment = {setshowappointments}
         showappointmentform={setshowappointmentform}
         showcancelappointment={setcancelappointment} />

      {showappointments === true ?
      <div className='scrollable-container flex flex-col' >
      <p className='text-3xl text-center mt-6'>Your Appointments</p>
       {showappointments === true ? 
       userdata.appointments.slice().reverse().map((appointment,index)=>(
      
       <Appointmentcard docname={appointment.Doctorname} 
       post={appointment.Doctorpost}
        date={appointment.Date} 
        time={appointment.Time} 
        appointmentid={appointment.Appointmentid}
        status={appointment.Status}
        key={index}/> 

))  : null}
        </div>
: null}
       {showappointmentform === true ? <Appointmentform /> : null}
       {cancelappointment === true ?
      <div className='scrollable-container flex flex-col' >
      <p className='text-3xl text-center mt-6'>Cancel Appointment</p>
       {cancelappointment === true ? 
       userdata.appointments.slice().reverse().map((appointment,index)=>(
      <div>
        {appointment.Status == "Not Fixed" ?<Appointmentcard 
        docname={appointment.Doctorname} 
       post={appointment.Doctorpost}
        date={appointment.Date} 
        time={appointment.Time} 
        appointmentid={appointment.Appointmentid}
        status={appointment.Status}
        key={index}/>  : null}
            <div className="flex justify-end">
      <button
        onClick={()=>{
          try{
            axios.post(`http://localhost:8000/home/dashboard/cancelappointment`,{
              appointmentid : appointment.Appointmentid,
              username  : userdata.username
            }).then((response)=>{
              console.log(response.data)
            })
            .catch((err)=>{
              console.log("error in sending appointment data")
            })
          }
          catch(err){
            console.log("error in sending cancel appointment data")
          }
            
         }}
        className="bg-red-500 hover:bg-red-600 text-white mr-24 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      >
        Cancel Appointment
      </button>
    </div>
       
</div>
))  : null}
        </div>
: null}
   
        </div>
  
    </div>
  )
  
}
