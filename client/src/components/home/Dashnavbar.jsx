import React from 'react'

export default function Dashnavbar() {
  return (
    <div>
        <nav className="bg-gray-800 p-4">
      <div className="max-w-7xl px-8 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-10">
          <div className="flex items-center ">
            <div className="flex-shrink-0">
              
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <a href="/home/dashboard" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Home</a>
                <a href="/home/account" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Your Account</a>
                <a href="/home/account" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Log Out</a>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </nav>
    </div>
  )
}
