import React, { useState } from 'react'
import Dashnavbar from './Dashnavbar'
import Sidebar from './Sidebar'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import Appointmentcard from './Appointmentcard'
import Apointmentform from './Apointmentform'
import Appointmentform from './Apointmentform'





export default function Dashboard() {
  let [showappointments,setshowappointments] = useState(false)
  let [showappointmentform,setshowappointmentform] = useState(false)
  let [userdata,setUserData] = useState({
    username : "",
    email : "",
  })
  const { username } = useParams();
  const location = window.location.href;
  console.log(location)
  
  try {
   axios.post(`http://localhost:8000/home/logindata`,{
     key: username
   })
   .then(response=>{
       setUserData({
         username : response.data.username,
         email : response.data.email
       })
   })
   .catch((error)=>{
      console.log(error)
   })
    
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
      
       {showappointments == true ? <Appointmentcard docname="subhraman Swaminarayan"
        date="April 21, 2024"
        time="10:00 AM"
        appointmentid="123-456-7890"
        status="Pending" /> : null}
        
       {showappointmentform == true ? <Appointmentform /> : null}
       
       
          
        </div>
  
    </div>
  )
  
}
