import React, { useEffect, useState } from 'react'
import Dashnavbar from './Dashnavbar'
import Sidebar from './Sidebar'
import axios from 'axios'
import Appointmentcard from './Appointmentcard'


export default function Admindashboard() {
    let [viewappointment, setViewAppointment] = useState(false)
    let [adddoctor,setAddDoctor] = useState(false)
    let [pendingrequests,setPendingRequests] = useState([])
try {
    useEffect(()=>{
      axios.get(`http://localhost:8000/home/dashboard/admin/sendappointmentstoadmin`)
      .then((response)=>{
        setPendingRequests(response.data)
      })
      .catch((err)=>{
             console.log(err)
      })
    },[])
  
} catch (error) {
    
}

  return (
    <div>
      <Dashnavbar admin={true}/>
      <div className='flex flex-row'>
      <Sidebar admin = {true} 
      showaddoc = {setAddDoctor}
      showviewappo = {setViewAppointment}
      />
      {viewappointment == false && adddoctor == false ?<p className='text-3xl text-center mt-6 ml-20'>Welcome to Admin DashBoard </p>: null }
      {viewappointment === true ?<>
      <div>
      <p className='text-3xl text-center mt-6 ml-20'>Appointment Requests</p><br />
      <div className='flex flex-col'>
      {viewappointment === true ?
      
        pendingrequests.slice().map((appointment,index)=>(
          <>
          <Appointmentcard 
             admin ={true}
             username = {appointment.user}
             docname={appointment.Doctorname} 
       post={appointment.Doctorpost}
        date={appointment.Date} 
        time={appointment.Time} 
        appointmentid={appointment.Appointmentid}
        
        key={index}
          />
          <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 w-44 ml-auto mr-24 rounded"
          onClick={()=>{
            try {
              axios.post(`http://localhost:8000/home/dashboard/admin/acceptappointment`,{
                appointmentid : appointment.Appointmentid,
                username : appointment.user
              }).then((responsee)=>{
               
                alert('Request accepted')
              })
            } catch (error) {
              
            }
          }}>
          Accept
      </button>
      </>
        ))
      
       :  <p className='text-3xl text-center mt-6 ml-20'>No Pending appointments</p>}
       </div>
       </div>
      </>: null}

      {adddoctor === true ? <p className='text-3xl text-center mt-6 ml-20'>Add Doctors</p>: null}
      </div>
      
    </div>
  )
}
