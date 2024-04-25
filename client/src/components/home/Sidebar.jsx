import React from 'react'
import Appointmentcard from './Appointmentcard'
import { Link } from 'react-router-dom'

export default function Sidebar(props) {
  return (
    <>
    <div className="h-screen flex bg-gray-100 ">
      
        <div className="flex flex-col">
          {/* Sidebar component */}
          <div className="bg-gray-800 p-4 w-72">
            
            <div className="flex items-center space-x-4">
              <img className="h-12 w-12 rounded-full" src="https://via.placeholder.com/150" alt="User" />
              <div className="text-white">
                <p className="text-lg font-medium">{props.username}</p>
                <p className="text-sm">{props.emailid}</p>
              </div>
            </div>
          </div>
          {/* Sidebar navigation */}
          <div className="bg-gray-700 py-4 flex-grow w-72">
            <nav className="space-y-1">
              
              <button onClick={()=>{
                props.showappointment(true)
                props.showappointmentform(false)
              }} className="text-gray-300 hover:bg-gray-00 hover:text-white px-4 py-2 rounded-md block">Your appointments</button>
              <button onClick={()=>{
                props.showappointmentform(true)
                props.showappointment(false)
              }} className="text-gray-300 hover:bg-gray-600 hover:text-white px-4 py-2 rounded-md block">Make appointment</button>
              <a href="#" className="text-gray-300 hover:bg-gray-600 hover:text-white px-4 py-2 rounded-md block"></a>
            </nav>
          </div>
        </div>
     
    </div>
   
    </>
  )
}
