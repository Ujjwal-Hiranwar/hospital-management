import React, { useEffect, useState } from 'react'
import Dashnavbar from './Dashnavbar'
import Sidebar from './Sidebar'
import axios from 'axios'
import { useParams } from 'react-router-dom'

export default function Admindashboard() {
    let [adminData,setAdminData] = useState('')
    let {username} = useParams()
try {
    useEffect(()=>{
        axios.post(`http://localhost:8000/home/dashboard/logindata`,{
        isAdmin : true,
        key: username
      })
      .then((response)=>{
           
      })
      .catch((err)=>{

      })
    },[])
} catch (error) {
    
}
  return (
    <div>
      <Dashnavbar admin={true}/>
      <Sidebar />
    </div>
  )
}
