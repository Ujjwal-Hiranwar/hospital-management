import React, { useState } from 'react'
import Dashnavbar from './Dashnavbar'
import Sidebar from './Sidebar'
import axios from 'axios'



export default function Dashboard() {
       let [userdata,setUserdata] = useState({
         username : "ujwal",
         email : "ujwal@gmail.com"
       })
       

  return (
    <div>   
        <Dashnavbar />
        <Sidebar username="Ujwal" emailid="ujjwalhiranwar@gmail.com"/>
        <span className='inline-flex'>
       <div className='text-xl px-6'>
        Welcome patient !!!
        </div> 
        <div className='text-xl px-0.5'><b>Ujwal</b></div> 
        </span>
    </div>
  )
}
