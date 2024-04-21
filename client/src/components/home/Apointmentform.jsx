import React from 'react'
import Navigation from '../landing page/Navigation'
import { useParams } from 'react-router-dom'
import Sidebar from './Sidebar'
import Dashnavbar from './Dashnavbar'

export default function Appointmentform() {
    
  return (
    
    <div>
         
      <div className="max-w-md mx-96 my-24 w-96 p-6 bg-white rounded-md shadow-md">
      <h2 className="text-lg font-semibold mb-4">Book Appointment</h2>
      <form>
        <div className="mb-4">
          <label htmlFor="doctorName" className="block text-sm font-medium text-gray-700">Doctor Name</label>
          <input type="text" id="doctorName" name="doctorName" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm py-2 px-4  bg-gray-100 border-gray-300 rounded-md" />
        </div>
        <div className="mb-4">
          <label htmlFor="date" className="block text-sm font-medium text-gray-700">Date</label>
          <input type="date" id="date" name="date" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm py-2 px-4  bg-gray-100 border-gray-300 rounded-md" />
        </div>
        <div className="mb-4">
          <label htmlFor="time" className="block text-sm font-medium text-gray-700">Time</label>
          <input type="time" id="time" name="time" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm py-2 px-4  bg-gray-100 border-gray-300 rounded-md" />
        </div>
        <div className="mb-4">
          <label htmlFor="doctorPost" className="block text-sm font-medium text-gray-700">Doctor Post</label>
          <select id="doctorPost" name="doctorPost" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm py-2 px-4  bg-gray-100 border-gray-300 rounded-md">
            <option value="orthopedic">Orthopedic</option>
            <option value="opthamologist">Opthamologist</option>
          </select>
        </div>
        <button type="submit" className="w-full bg-indigo-500 text-white py-2 px-4 rounded-md hover:bg-indigo-600 focus:outline-none my-6 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100">
          Book Appointment
        </button>
      </form>
    </div>
    </div>
  )
}
