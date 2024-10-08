import React, { useEffect,useState } from 'react'
import { Link } from 'react-router-dom'
import { jwtDecode } from 'jwt-decode';
export default function Navbar() {
const [user,setUser] = useState()
const [role,setRole] = useState();
const [login,setLogin] =  useState(false);
    useEffect(() => {
        const token = localStorage.getItem("accessTokken");
        
        if (token) {
          try {
            setLogin(!login)
            const decodedToken = jwtDecode(token); // Decode the token
            console.log("decode",decodedToken)
            setUser(decodedToken);
             // Assuming user_id is stored in the token
             console.log("decodedToken.user",decodedToken)
            console.log("Logged in user ID:", decodedToken);
          } catch (error) {
            console.error("Error decoding token:", error);
          }
        }
      }, []);

      const handleLogout = ()=>{
        localStorage.removeItem("accessTokken");
        setLogin(false)
        window.location.href = '/';
      }
  return (
    <>
      

      <nav class="bg-white border-gray-200 dark:bg-gray-900">
  <div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
    <a href="https://flowbite.com" class="flex items-center space-x-3 rtl:space-x-reverse">
      <img src="https://flowbite.com/docs/images/logo.svg" class="h-8" alt="Flowbite Logo" />
      <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">FIND MY GURU</span>
    </a>
    <div class="flex items-center space-x-6 rtl:space-x-reverse">
      {/* Small profile image */}
      {login && <Link to={"/userprofile"} >
      <img src={user?.avatar} class="w-10 h-10 rounded-full" alt="Profile" />
      </Link>}
      
      {login ? (
  <span
    className="text-sm text-blue-600 dark:text-blue-500 hover:underline cursor-pointer"
    onClick={handleLogout} // Add a logout function here
  >
    Logout
  </span>
) : (
  <Link to={"/loginuser"}>
    <span className="text-sm text-blue-600 dark:text-blue-500 hover:underline">Login</span>
  </Link>
)}
      
    </div>
  </div>
</nav>

<nav class="bg-gray-50 dark:bg-gray-700">
    <div class="max-w-screen-xl px-4 py-3 mx-auto">
        <div class="flex items-center">
            <ul class="flex flex-row font-medium mt-0 space-x-8 rtl:space-x-reverse text-sm">
                <li>
                    <Link to={"/"}>
                    <span  class="text-gray-900 dark:text-white hover:underline" aria-current="page">Home</span>
                    </Link>
                </li>
                <li>
                    <Link to={"/teachers"}>
                    <span  class="text-gray-900 dark:text-white hover:underline">Teachers</span>
                    </Link>
                </li>
                <li>
                  <Link to={"/videos"}>
                    <span  class="text-gray-900 dark:text-white hover:underline">Videos</span>
                    </Link>
                </li>
                <Link to={"/aboutus"}>
                <li>
                    <a href="#" class="text-gray-900 dark:text-white hover:underline">About US</a>
                </li>
                </Link>
                <Link to={"/skills"}>
                 <li>
                    <a href="#" class="text-gray-900 dark:text-white hover:underline">Skill Share</a>
                </li>
                </Link>

                <Link to={"/chats"}>
                 <li>
                    <a href="#" class="text-gray-900 dark:text-white hover:underline">chats</a>
                </li>
                </Link>
            </ul>
        </div>
    </div>
</nav>

    </>
  )
}
