import React from 'react'

export default function Sidebar(props) {
  return (
    <>
    <div className="h-screen inline-flex bg-gray-100">
      {/* Sidebar */}
      
        <div className="flex flex-col w-74">
          {/* Sidebar component */}
          <div className="bg-gray-800 p-4">
            
            <div className="flex items-center space-x-4">
              <img className="h-12 w-12 rounded-full" src="https://via.placeholder.com/150" alt="User" />
              <div className="text-white">
                <p className="text-lg font-medium">{props.username}</p>
                <p className="text-sm">{props.emailid}</p>
              </div>
            </div>
          </div>
          {/* Sidebar navigation */}
          <div className="bg-gray-700 py-4 flex-grow">
            <nav className="space-y-1">
              {/* Sidebar options */}
              
              <a href="#" className="text-gray-300 hover:bg-gray-00 hover:text-white px-4 py-2 rounded-md block">Your appointments</a>
              <a href="#" className="text-gray-300 hover:bg-gray-600 hover:text-white px-4 py-2 rounded-md block">Make appointment</a>
              <a href="#" className="text-gray-300 hover:bg-gray-600 hover:text-white px-4 py-2 rounded-md block"></a>
            </nav>
          </div>
        </div>
     
    </div>
    <span className='inline-flex'>
       <div className='text-xl px-6'>
        Welcome patient !!!
        </div> 
        <div className='text-xl px-0.5'><b>{props.username}</b></div> 
        </span>
    </>
  )
}
