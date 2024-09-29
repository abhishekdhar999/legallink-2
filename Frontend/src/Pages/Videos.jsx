import React, { useEffect,useState } from 'react'
import VideoComponent from '../Components/VideoComponent'
import axios from 'axios';
import Navbar from '../Components/Navbar';
export default function Videos() {

const [videos,setVideos] =  useState([]);

useEffect(()=>{
  const fetchVideos = async () => {
    const response = await axios.get('http://localhost:3001/videos/entirevideos',{
      headers:{
        'Authorization': 'Bearer ' + localStorage.getItem('accessTokken'),
      }
    })
    const data = response.data;
    const vid =data.data
     console.log("data",vid)
    console.log(typeof(vid))
     setVideos(vid[0]);
    }
    fetchVideos();
    },[])
  return (
    <>

    <Navbar></Navbar>
   
       {/* {videos.map((video)=>{
         return <div> 
          <VideoComponent key={video._id} // always use a unique key when mapping
            title={video.title}
            description={video.description}
            videoUrl={video.videoFile} // or whatever the field is for the video URL
            coverImage={video.coverImage} />
         </div>  
       })}  */}

    </>
  )
}
