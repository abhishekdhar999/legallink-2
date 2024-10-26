import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
export default function Community() {
  const [title, setTitle] = useState('');
  const [selectedUsers, setSelectedUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [users,setUsers] = useState([]);
  const [userCommunity,setCommunity] = useState([])
  
  const navigate = useNavigate();

  useEffect(()=>{
    const getAllUsers = async()=>{
        const allUsers = await axios.get("http://localhost:3001/users/allusers",{
            headers: {
              'Authorization': 'Bearer ' + localStorage.getItem('accessTokken')
            }
          })
          if(allUsers.status !== 200){
            return
          }
          setUsers(allUsers.data.data) 

    }
getAllUsers()
  },[])
  const handleSelectUser = (user) => {
    console.log("user in halde select user",user._id)

    if(selectedUsers.length === 0){

        setSelectedUsers([...selectedUsers, user]);
        return
    }
selectedUsers.forEach(selUser => {
    if(selUser._id === user._id ){
        return alert("user is already added")
    }else{
        setSelectedUsers([...selectedUsers, user]);
    }
});
    
    setFilteredUsers([])
  };

  const handleSearch = (name) => {
    const filtered = users.filter((user) =>
      user.name.toLowerCase().includes(name.toLowerCase())
    );
    setFilteredUsers(filtered);
    setSearchTerm("")

  };

  const handleRemove = (user)=>{
    setSelectedUsers(selectedUsers.filter((selUser)=>selUser._id !== user._id))

  }
  const handleSubmit =async (e) => {
    e.preventDefault();
    // Submit logic here
    const communityData  = {
        title,
        selectedUsers,
    }
    console.log("community data",communityData)

    const response  = await axios.post("http://localhost:3001/community/createcommunity",{
        communityData
    },
    {
        headers: {
          'Authorization': 'Bearer ' + localStorage.getItem('accessTokken')
        }
      }
    )
    if(response.status !== 200){
alert("cant create community")
    }
    console.log("community response",response.data)
    setFilteredUsers([]);
    setSearchTerm('')
    setSelectedUsers([])
  };

  
useEffect(()=>{
    const getAllCommunitiesOfLoggedInUser = async()=>{
const response  =  await axios.get("http://localhost:3001/community/getcommunities",{
    headers: {
      'Authorization': 'Bearer ' + localStorage.getItem('accessTokken')
    }
  })
  setCommunity(response.data.data)
    }
getAllCommunitiesOfLoggedInUser();
},[])

const handleClick = (community)=>{

    navigate('/workplace', { state: { community } });
}


  return (
    <>
    <div className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-6 text-gray-900">Create Community</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Community Title:</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="Enter community title"
            required
          />
        </div>



        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Search Users:</label>
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="Search for users"
          />
        </div>
<div>

<button onClick={()=>{
        handleSearch(searchTerm)
    }} type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">search</button>
    
</div>
        <div className="mb-4">
          {filteredUsers.length > 0 ? (
            filteredUsers.map((user) => (
              <div
                key={user._id}
                className="p-2 bg-indigo-100 hover:bg-indigo-200 cursor-pointer rounded-lg mb-2"
                onClick={() => handleSelectUser(user)}
              >
                {user.name}
              </div>
            ))
          ) : (
            <p className="text-gray-500">No users found</p>
          )}
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Selected Users:</label>
          {selectedUsers.length === 0 ? (
            <p className="text-gray-500">No users selected</p>
          ) : (
            selectedUsers.map((user) => (
              <div key={user._id} className="p-2 bg-green-100 rounded-lg mb-2 flex justify-between ">
               <span>{user.name}</span> 
               <button onClick={()=>{
                handleRemove(user)
               }}>remove</button>
              </div>
            ))
          )}
        </div>

        <button
          type="submit"
          className="bg-indigo-500 text-white px-4 py-2 rounded-lg hover:bg-indigo-600"
        >
          Create Community
        </button>
      </form>
    </div>

    <div>
        <h1 className='mb-6'>Communities created by you</h1>

{userCommunity.length === 0 ? ("you havent created any community yet"):(
    userCommunity.map((community)=>{
        
        return  <button onClick={()=>handleClick(community)} className='font-xl text-black font-extrabold p-4 border-gray-900 border-2 my-6 '>
      {/* <Link to={"/workplace"}>       */}
<span>{community.title}</span>
{/* </Link> */}
        </button>
    })
)}
    </div>


    </>
  );
}
