import React from 'react'
import Section  from '../props/Section'
import homeBg from '../assets/backgrounds/home.png'
import {ChevronDown} from 'lucide-react'
import {motion} from "framer-motion"


 export const Home = () => {

  return (
  
    <main className='bg-center bg-fixed bg-cover  bg-no-repeat  ' style={{backgroundImage:`url(${homeBg})`}} >

     <div>
      <Section>

        <div className=' md:text-7xl sm:text-7xl lg:text-7xl text-[52px]  xs:text-[70px] text-left pt-[150px] xs:pt-52 '  >
        <div className=' text-emerald-50  flex  font-wal md:px-30 pl-4 py-8 md:w-[650px] w-[7000px] sm:w-[600px] lg:w-[700px] leading-[80px] xs:leading-[80px]  xs:w-[550px] lg:leading-[100px]   first-letter:text-[5rem]  md:pl-14 sm:pl-14   sm:px-8  pr-[100px]  '>
        <h1 className='z-10'>I'm Gokul  
        <span className=' flex' > Designer </span>
        <span className=' backdrop-blur-sm  text-[#7eca9c] py-2   md:pl-2 '>
        <b className=' text-emerald-50 '> & </b>Civil Engineer</span> 
        </h1> 
        </div> 
 
     <hr class="h-0 lg:w-[700px] w-[450px]  ml-4  md:ml-14  rounded-xs  backdrop-blur-sm bg-white/100 bg-gray-50 border-1 md:mr-52  mr-96"></hr> 
          <motion.div whileHover={{ scale: 1.2 }}
            onHoverStart={e => {}}
            onHoverEnd={e => {}} className='xs:hidden text-center mx-auto  font w-52 h-28 rounded-full text-[#7eca9c]  mt-32 sm:mt-16 lg:mt-16 xs:mt-[120px]  md:mt-16'>
            <a  href='#About' className='font-wal text-lg  '>Scroll Down</a>
            <div className=' flex justify-center animate-bounce pt-4'><button className='z-10'><ChevronDown/> </button></div>
          </motion.div>
          </div>
          </Section>
         
          </div>
        

    </main>

    
  )
}

