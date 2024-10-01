import React,{useState,useEffect} from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';
import SkillsCard from '../Components/SkillsCard';

export default function Skills() {
const[skills,setSkills] = useState([]);
const [user,setUser] = useState()
useEffect(() => {
    const fetchLoggedInUser = async () => {
      try {
        const loggedUser = await axios.get("http://localhost:3001/users/currentuser", {
          headers: {
            'Authorization': 'Bearer ' + localStorage.getItem('accessTokken')
          }
        });
        console.log("logged user", loggedUser.data.data);
        if (!loggedUser) {
          console.log("No logged-in user");
        }
        setUser(loggedUser.data.data);
      } catch (error) {
        console.error("Error fetching the user", error);
      }
    };
    fetchLoggedInUser();
  }, []);


useEffect(()=>{


    const allSkills = async ()=>{
        const response  = await axios.get("http://localhost:3001/skills/allskills",{
            headers:{
                Authorization: `Bearer ${localStorage.getItem('accessTokken')}`,
            }
        })

        if(response.status !== 200){
            console.log("Error fetching data")
        }
        console.log("response all skills",response)
        setSkills(response.data.data)
    }

    allSkills()
},[])

  return (
    <>
<Link to={"/skillsform"}>
      <button type="button" class="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">post your skill</button>
      </Link>


      {skills.length > 0 ? <div className="flex flex-wrap justify-center">
      {skills.map((skill, index) => (
        <SkillsCard
        skill={skill}
        user={user}
        name={skill.owner.name || ""} 
        postedByUserId={skill.owner}
          key={index}
          skillToLearn={skill.skillToLearn}
          skillToShare={skill.skillToShare}
          skillLevel={skill.skillLevel}
          skillType={skill.skillType}
          skillDescription={skill.skillDescription}
          skillImage={skill.skillImage}
          skillVideo={skill.skillVideo}
          certifications={skill.certifications}
        />
      ))}
    </div> :   <div>loading</div>
      }
    </>
  )
}
