import React from 'react'
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';
import * as THREE from 'three';
import TorusOfStars from '../Components/TorusOfStars';
const HomePage = () => {
  function Scene() {
    return (
      <Canvas camera={{ position: [10, 0, 30], fov: 70 }}>
        {/* Ambient light to illuminate the stars */}
        <ambientLight intensity={1.5} />
        {/* Point light for some dynamic lighting */}
        <pointLight position={[50, 10,10]} intensity={5} />
  
        {/* Render the Torus of Stars */}
        <TorusOfStars />
  
        {/* OrbitControls for interactive rotation */}
        <OrbitControls enableZoom={false} />
      </Canvas>
    );
  }
  return (
    <>
   <div style={{ height: '80vh', background: 'black', position: 'relative' }}>
      {/* Canvas with rotating torus of stars */}
      <div className=' absolute top-[80px] text-white w-[500px]  ml-4 font-light  bg-slate-400 rounded-2xl p-6'>
        <p className='text-gray-900'> 
        "LearneSphere <span>-</span> Where learning meets innovation! Dive into a vibrant community-driven platform designed to empower curious minds. Explore, connect, and grow with courses tailored for every learner, from beginners to experts. Every journey starts with a spark <span>-</span> ignite yours with LearneSphere!"
        </p>
      </div>

      <div className='absolute bottom-[100px] mx-24'>
<div className='flex '>
<button class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800">
<span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
Skills Share
</span>
</button>
<button class="relative mx-2 inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800">
<span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
Create Community
</span>
</button>

</div>

      </div>
      <Scene />

      {/* Text in the top-right corner */}
      <div style={{
        position: 'absolute',
        // top: '10px',
        right: '20px',
        bottom: '70px',
        // color: 'white',
        fontSize: '100px',
        
      }} className='text font-extrabold text-gray-300  opacity-[0.5]  w-[600px] '>
        Elevate Your  Learning
      </div>
    </div>



{/* second section */}
    <div className='containers'>


<div className='upper flex justify-center'>
  <div className='text-7xl text-pink-300 border-2 border-violet-200 mx-6 font-extrabold rounded-2xl p-6 '>
  Mastery <br />Unleashed !!!
 </div>
 <div className='mx-6 '>
  {/* something */}
 </div>
</div>

<div className='middle mt-12 mb-[-70px] '>
  <h1 className='text-5xl text-white text-center font-bold opacity-[0.2] '>Transforming Curiosity into Capability.</h1>
</div>

<div className='ends flex justify-center mx-12 items-center'>
  <div className='number text-[400px] w-2/2 '>01</div>
  <div className='flex flex-col w-3/4'>
    <h1 className='text text-3xl font-bold text-pink-400'>LEARNSPHERE</h1>
<p className='font-light text-gray-200 '>Learn Sphere is an innovative online learning platform dedicated to connecting passionate learners with skilled mentors across diverse fields. Our mission is to create a dynamic and inclusive community where knowledge flows freely, and personal growth is nurtured. From foundational skills to advanced expertise, Learn Sphere offers a supportive environment where students can explore new interests, deepen their understanding, and achieve their career goals. Embrace learning that’s engaging, accessible, and impactful—because every skill learned today shapes a brighter tomorrow.</p>
  </div>
</div>
</div>




{/* community */}
<div className='community flex md:flex-row flex-col-reverse justify-center items-center   mx-12'>
  <div className='image w-1/2'>
    <img className='w-[500px] rounded-full' src="https://img.freepik.com/free-vector/connected-world-concept-illustration_114360-4240.jpg?t=st=1729948137~exp=1729951737~hmac=9a3051cd74036141f57a39d03c93a23469c0df5e72b68ae33a933b0748e4a347&w=996" alt="" />
  </div>

  <div className='text-area ml-12 w-1/2 flex flex-col justify-center align-left items-center  '>
    <h1 className='sectionHeading text-5xl text-[#8a2be2] lg:text-6xl'>
      create community
    </h1>
    <p className='my-4'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae animi voluptates eaque temporibus neque unde totam provident aut exercitationem numquam fugiat, voluptatem commodi enim esse deserunt </p>

    <button class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800">
<span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
create community
</span>
</button>

<div className='flex my-6 '>
  <div className='balls m-1 bg-purple-400 h-3 w-3 rounded-full'></div>
  <div className='balls m-1 bg-purple-400 h-3 w-3 rounded-full'></div>
  <div className='balls m-1 bg-purple-400 h-3 w-3 rounded-full'></div>
  <div className='balls m-1 bg-purple-400 h-3 w-3 rounded-full'></div>
  <div className='balls m-1 bg-purple-400 h-3 w-3 rounded-full'></div>
  <div className='balls m-1 bg-purple-400 h-3 w-3 rounded-full'></div>
  <div className='balls m-1 bg-purple-400 h-3 w-3 rounded-full'></div>
  <div className='balls m-1 bg-purple-400 h-3 w-3 rounded-full'></div>
  <div className='balls m-1 bg-purple-400 h-3 w-3 rounded-full'></div>
  <div className='balls m-1 bg-purple-400 h-3 w-3 rounded-full'></div>
  <div className='balls m-1 bg-purple-400 h-3 w-3 rounded-full'></div>
  <div className='balls m-1 bg-purple-400 h-3 w-3 rounded-full'></div>
  <div className='balls m-1 bg-purple-400 h-3 w-3 rounded-full'></div>
  <div className='balls m-1 bg-purple-400 h-3 w-3 rounded-full'></div>



</div>
     </div>
</div>


{/* skill share */}

<div className='community flex md:flex-row-reverse flex-col-reverse justify-center items-center my-16  mx-12'>
  <div className='image w-1/2'>
    <img className='w-[500px] rounded-full' src="https://img.freepik.com/free-vector/connected-world-concept-illustration_114360-4240.jpg?t=st=1729948137~exp=1729951737~hmac=9a3051cd74036141f57a39d03c93a23469c0df5e72b68ae33a933b0748e4a347&w=996" alt="" />
  </div>

  <div className='text-area ml-12 w-1/2 flex flex-col justify-center align-left items-center  '>
    <h1 className='sectionHeading text-5xl text-[#8a2be2] lg:text-6xl'>
      Share & Learn Skills
    </h1>
    <p className='my-4'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae animi voluptates eaque temporibus neque unde totam provident aut exercitationem numquam fugiat, voluptatem commodi enim esse deserunt </p>

    <button class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800">
<span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
Skills Section
</span>
</button>

<div className='flex my-6 '>
  <div className='balls m-1 bg-purple-400 h-3 w-3 rounded-full'></div>
  <div className='balls m-1 bg-purple-400 h-3 w-3 rounded-full'></div>
  <div className='balls m-1 bg-purple-400 h-3 w-3 rounded-full'></div>
  <div className='balls m-1 bg-purple-400 h-3 w-3 rounded-full'></div>
  <div className='balls m-1 bg-purple-400 h-3 w-3 rounded-full'></div>
  <div className='balls m-1 bg-purple-400 h-3 w-3 rounded-full'></div>
  <div className='balls m-1 bg-purple-400 h-3 w-3 rounded-full'></div>
  <div className='balls m-1 bg-purple-400 h-3 w-3 rounded-full'></div>
  <div className='balls m-1 bg-purple-400 h-3 w-3 rounded-full'></div>
  <div className='balls m-1 bg-purple-400 h-3 w-3 rounded-full'></div>
  <div className='balls m-1 bg-purple-400 h-3 w-3 rounded-full'></div>
  <div className='balls m-1 bg-purple-400 h-3 w-3 rounded-full'></div>
  <div className='balls m-1 bg-purple-400 h-3 w-3 rounded-full'></div>
  <div className='balls m-1 bg-purple-400 h-3 w-3 rounded-full'></div>



</div>
     </div>
</div>


    <div className='features my-12'>
  <h1 className='sectionHeading text-[40px] md:text-[100px] flex justify-center text-[#8a2be2] opacity-[0.8] '>Our Features</h1>




  {/* Feature section */}
  {[
    {
      title: "Personalized Learning",
      text: "Experience a learning journey tailored to your unique needs! Our advanced platform adapts to your goals, progress, and style, offering customized content and resources to ensure you get the most out of every lesson.",
      imgSrc: "https://img.freepik.com/free-vector/professor-teaching-financial-literacy-academy-class-business-school-university-students-learning-about-cryptocurrency-trading-flat-vector-illustration-finances-education-concept_74855-21276.jpg?t=st=1729805276~exp=1729808876~hmac=f8471f5cc6a9fb7165159450ae5d3cbbb20614095fc5a0707c7aeac528a2cbbb&w=2000",
      reverse: false,
    },
    {
      title: "Skills Exchange",
      text: "Join a thriving community where knowledge flows both ways! Our Skills Exchange feature allows you to share your expertise with others while learning new skills from peers across various fields.",
      imgSrc: "https://img.freepik.com/free-vector/professor-teaching-financial-literacy-academy-class-business-school-university-students-learning-about-cryptocurrency-trading-flat-vector-illustration-finances-education-concept_74855-21276.jpg?t=st=1729805276~exp=1729808876~hmac=f8471f5cc6a9fb7165159450ae5d3cbbb20614095fc5a0707c7aeac528a2cbbb&w=2000",
      reverse: true,
    },
    {
      title: "Expert Instructors",
      text: "Learn from industry veterans and thought leaders who bring real-world experience to your screen. Our instructors mentor, inspire, and ensure you are equipped with practical skills for success.",
      imgSrc: "https://img.freepik.com/free-vector/professor-teaching-financial-literacy-academy-class-business-school-university-students-learning-about-cryptocurrency-trading-flat-vector-illustration-finances-education-concept_74855-21276.jpg?t=st=1729805276~exp=1729808876~hmac=f8471f5cc6a9fb7165159450ae5d3cbbb20614095fc5a0707c7aeac528a2cbbb&w=2000",
      reverse: false,
    },
    {
      title: "Interactive Platform",
      text: "Say goodbye to passive learning! Our platform offers hands-on activities, live sessions, and real-time feedback, turning every lesson into an active, immersive experience.",
      imgSrc: "https://img.freepik.com/free-vector/professor-teaching-financial-literacy-academy-class-business-school-university-students-learning-about-cryptocurrency-trading-flat-vector-illustration-finances-education-concept_74855-21276.jpg?t=st=1729805276~exp=1729808876~hmac=f8471f5cc6a9fb7165159450ae5d3cbbb20614095fc5a0707c7aeac528a2cbbb&w=2000",
      reverse: true,
    },
  ].map(({ title, text, imgSrc, reverse }, idx) => (
    <div
      key={idx}
      className={`flex flex-col ${
        reverse ? "md:flex-row-reverse" : "md:flex-row"
      } items-center justify-center gap-6 mx-4 md:mx-24 my-8`}
    >
      <div className='img w-full md:w-1/2 flex justify-center'>
        <img
          className='rounded-2xl w-full max-w-xs md:max-w-md lg:max-w-lg'
          src={imgSrc}
          alt={title}
        />
      </div>
      <div className='text w-full md:w-1/2 text-center md:text-left flex flex-col justify-center gap-4 px-2'>
        <h2 className='text font-bold text-2xl text-[#eaa4f5]'>{title}</h2>
        <p className='text-gray-200 text-base md:text-lg'>{text}</p>
      </div>
    </div>
  ))}
</div>
{/* banner */}
<div className='my-24'>
  <img src="https://img.freepik.com/free-vector/hand-drawn-book-club-template_23-2149682433.jpg?t=st=1729952806~exp=1729956406~hmac=6ec5841de6d3cc251506b417bcf239c1291420226e0fc1b2484f741acd03d28a&w=2000" alt="" />
</div>

{/* community section */}




<footer class="bg-white dark:bg-gray-900 my-12">
    <div class="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div class="md:flex md:justify-between">
          <div class="mb-6 md:mb-0">
              {/* <a href="https://flowbite.com/" class="flex items-center"> */}
                  {/* <img src="https://flowbite.com/docs/images/logo.svg" className=" h-8 me-3" alt="FlowBite Logo" /> */}
                  <span class="logoHeading text-purple-400 self-center text-2xl font-semibold whitespace-nowrap ">LearnSphere</span>
              {/* </a> */}
          </div>
          <div class="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
              <div>
                  <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Resources</h2>
                  <ul class="text-gray-500 dark:text-gray-400 font-medium">
                      <li class="mb-4">
                          <a href="https://flowbite.com/" class="hover:underline">LearnSphere</a>
                      </li>
                      <li>
                          <a href="https://tailwindcss.com/" class="hover:underline">Tailwind CSS</a>
                      </li>
                  </ul>
              </div>
              <div>
                  <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Follow us</h2>
                  <ul class="text-gray-500 dark:text-gray-400 font-medium">
                      <li class="mb-4">
                          <a href="https://github.com/themesberg/flowbite" class="hover:underline ">Github</a>
                      </li>
                      <li>
                          <a href="https://discord.gg/4eeurUVvTy" class="hover:underline">Discord</a>
                      </li>
                  </ul>
              </div>
              <div>
                  <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Legal</h2>
                  <ul class="text-gray-500 dark:text-gray-400 font-medium">
                      <li class="mb-4">
                          <a href="#" class="hover:underline">Privacy Policy</a>
                      </li>
                      <li>
                          <a href="#" class="hover:underline">Terms &amp; Conditions</a>
                      </li>
                  </ul>
              </div>
          </div>
      </div>
      <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
      <div class="sm:flex sm:items-center sm:justify-between">
          <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="https://flowbite.com/" class="hover:underline">LearnSphere™</a>. All Rights Reserved.
          </span>
          <div class="flex mt-4 sm:justify-center sm:mt-0">
              <a href="#" class="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                  <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 8 19">
                        <path fill-rule="evenodd" d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z" clip-rule="evenodd"/>
                    </svg>
                  <span class="sr-only">Facebook page</span>
              </a>
              <a href="#" class="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
                  <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 21 16">
                        <path d="M16.942 1.556a16.3 16.3 0 0 0-4.126-1.3 12.04 12.04 0 0 0-.529 1.1 15.175 15.175 0 0 0-4.573 0 11.585 11.585 0 0 0-.535-1.1 16.274 16.274 0 0 0-4.129 1.3A17.392 17.392 0 0 0 .182 13.218a15.785 15.785 0 0 0 4.963 2.521c.41-.564.773-1.16 1.084-1.785a10.63 10.63 0 0 1-1.706-.83c.143-.106.283-.217.418-.33a11.664 11.664 0 0 0 10.118 0c.137.113.277.224.418.33-.544.328-1.116.606-1.71.832a12.52 12.52 0 0 0 1.084 1.785 16.46 16.46 0 0 0 5.064-2.595 17.286 17.286 0 0 0-2.973-11.59ZM6.678 10.813a1.941 1.941 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.919 1.919 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Zm6.644 0a1.94 1.94 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.918 1.918 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Z"/>
                    </svg>
                  <span class="sr-only">Discord community</span>
              </a>
              <a href="#" class="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
                  <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 17">
                    <path fill-rule="evenodd" d="M20 1.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.344 8.344 0 0 1-2.605.98A4.13 4.13 0 0 0 13.85 0a4.068 4.068 0 0 0-4.1 4.038 4 4 0 0 0 .105.919A11.705 11.705 0 0 1 1.4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 4.1 9.635a4.19 4.19 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 0 14.184 11.732 11.732 0 0 0 6.291 16 11.502 11.502 0 0 0 17.964 4.5c0-.177 0-.35-.012-.523A8.143 8.143 0 0 0 20 1.892Z" clip-rule="evenodd"/>
                </svg>
                  <span class="sr-only">Twitter page</span>
              </a>
              <a href="#" class="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
                  <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z" clip-rule="evenodd"/>
                  </svg>
                  <span class="sr-only">GitHub account</span>
              </a>
              <a href="#" class="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
                  <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 0a10 10 0 1 0 10 10A10.009 10.009 0 0 0 10 0Zm6.613 4.614a8.523 8.523 0 0 1 1.93 5.32 20.094 20.094 0 0 0-5.949-.274c-.059-.149-.122-.292-.184-.441a23.879 23.879 0 0 0-.566-1.239 11.41 11.41 0 0 0 4.769-3.366ZM8 1.707a8.821 8.821 0 0 1 2-.238 8.5 8.5 0 0 1 5.664 2.152 9.608 9.608 0 0 1-4.476 3.087A45.758 45.758 0 0 0 8 1.707ZM1.642 8.262a8.57 8.57 0 0 1 4.73-5.981A53.998 53.998 0 0 1 9.54 7.222a32.078 32.078 0 0 1-7.9 1.04h.002Zm2.01 7.46a8.51 8.51 0 0 1-2.2-5.707v-.262a31.64 31.64 0 0 0 8.777-1.219c.243.477.477.964.692 1.449-.114.032-.227.067-.336.1a13.569 13.569 0 0 0-6.942 5.636l.009.003ZM10 18.556a8.508 8.508 0 0 1-5.243-1.8 11.717 11.717 0 0 1 6.7-5.332.509.509 0 0 1 .055-.02 35.65 35.65 0 0 1 1.819 6.476 8.476 8.476 0 0 1-3.331.676Zm4.772-1.462A37.232 37.232 0 0 0 13.113 11a12.513 12.513 0 0 1 5.321.364 8.56 8.56 0 0 1-3.66 5.73h-.002Z" clip-rule="evenodd"/>
                </svg>
                  <span class="sr-only">Dribbble account</span>
              </a>
          </div>
      </div>
    </div>
</footer>

    </>

  );
};

export default HomePage;

// #D8BFD8