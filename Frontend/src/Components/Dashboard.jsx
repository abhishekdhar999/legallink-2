import React from 'react'
import { Link } from 'react-router-dom'
export default function Dashboard() {
  return (
    <>

    <div className='flex justify-center items-center my-36'>
        <div>
            <Link to={"/loginUser"}>
        <button type="button" class="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">login for user</button>
        </Link>
        </div>

        <div>
            <Link to={"/loginAdvocate"}>
        <button type="button" class="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">login for advocate</button>
        </Link>
        </div>
    </div>
      
    </>
  )
}
