import React, { useEffect, useState } from 'react'
import Dashnavbar from './Dashnavbar'
import Sidebar from './Sidebar'
import axios from 'axios'
import { useParams } from 'react-router-dom'

export default function Admindashboard() {
    let [viewappointment, setViewAppointment] = useState(false)
    let [adddoctor,setAddDoctor] = useState(false)
    let {username} = useParams()
try {
    useEffect(()=>{
     axios.get(`http://localhost:8000/home/dashboard/admin/sendappointmentstoadmin`)
      .then((response)=>{
        
           console.log(response.data)
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
      {viewappointment == false && adddoctor == false ?<p className='text-3xl text-center mt-6 ml-20'>Welcome to Admin DashBoard</p>: null }
      {viewappointment === true ?<p className='text-3xl text-center mt-6 ml-20'>Appointment Requests</p>: null}
      {adddoctor === true ? <p className='text-3xl text-center mt-6 ml-20'>Add Doctors</p>: null}
      </div>
    </div>
  )
}
