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
      

      <nav class=" border-gray-200  ">
  <div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4 bg-transparent">
    
     
      <span class="logoHeading self-center text-2xl font-extrabold whitespace-nowrap text-[#CF9FFF] tracking-wide ">LearnSphere</span>
   
    <div class="flex items-center space-x-6 rtl:space-x-reverse">
      {/* Small profile image */}
      {login && <Link to={"/userprofile"} >
      <img src={user?.avatar} className="w-10 z-10 h-10 rounded-full" alt="Profile"  />
      </Link>}
      
      {login ? (
  <span
    className="text-sm  text-purple-400 hover:underline cursor-pointer"
    onClick={handleLogout} // Add a logout function here
  >
    Logout
  </span>
) : (
  <Link to={"/loginuser"}>
    <span className="text-sm text-purple-400 z-10 hover:underline">Login</span>
  </Link>
)}
      
    </div>
  </div>
</nav>

<nav class=" bg-transparent flex justify-center">
    <div class="max-w-screen-xl px-4 py-3 mx-auto">
        <div class="flex items-center">
            <ul class="flex flex-row font-medium mt-0 space-x-8 rtl:space-x-reverse text-sm">
                <li>
                    <Link to={"/"}>
                    <span  class="text-gray-400 hover:underline " aria-current="page">Home</span>
                    </Link>
                </li>
                <li>
                    <Link to={"/teachers"}>
                    <span  class="text-gray-400 hover:underline">Teachers</span>
                    </Link>
                </li>
                <li>
                  <Link to={"/videos"}>
                    <span  class="text-gray-400 hover:underline">Videos</span>
                    </Link>
                </li>
                <Link to={"/aboutus"}>
                <li>
                    <a href="#" class="text-gray-400 hover:underline">About US</a>
                </li>
                </Link>
                <Link to={"/skills"}>
                 <li>
                    <a href="#" class="text-gray-400 hover:underline">Skill Share</a>
                </li>
                </Link>

                <Link to={"/chats"}>
                 <li>
                    <a href="#" class="text-gray-400 hover:underline">chats</a>
                </li>
                </Link>

                <Link to={"/communtiy"}>
                 <li>
                    <a href="#" class="text-gray-400 hover:underline">Create Community</a>
                </li>
                </Link>
            </ul>
        </div>
    </div>
</nav>

    </>
  )
}
