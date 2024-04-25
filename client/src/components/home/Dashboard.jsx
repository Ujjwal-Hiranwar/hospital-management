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
  let [userdata,setUserData] = useState({
    username : "",
    email : "",
    appointments : []
  })
  const { username } = useParams();
  
  
  try {
    useEffect(()=>{
      axios.post(`http://localhost:8000/home/dashboard/logindata`,{
        key: username
      })
      .then(response=>{
          
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
         showappointmentform={setshowappointmentform} />

      {showappointments === true ?
      <div className='flex flex-col' style={{ overflowY: 'scroll', height: '100vh', border: '1px' }}>
      <p className='text-3xl text-center mt-6'>Your Appointments</p>
       {showappointments === true ? 
       userdata.appointments.slice().reverse().map((appointment,index)=>(
      
       <Appointmentcard docname={appointment.Doctorname} 
       post={appointment.Doctorpost}
        date={appointment.Date} 
        time={appointment.Time} 
        appointmentid="1"
        status="Not Fixed" 
        key={index}/> 

))  : null}
        </div>
: null}
       {showappointmentform === true ? <Appointmentform /> : null}
   
        </div>
  
    </div>
  )
  
}
