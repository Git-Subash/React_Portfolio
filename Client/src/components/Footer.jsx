import React from 'react'
import {Instagram , Linkedin ,Twitter,AtSign  } from 'lucide-react'
// import animationData from '../assets/mail.json'
// import Lottie from 'lottie-react'
import Section  from './Section'
import { useState } from 'react'
import {Button, input} from "@material-tailwind/react";


export const Footer = () => {
  
   const [Alert , setAlert] = useState(null);
    
   function handleClick() {
      setAlert (alert('See you Soon!!..') );
   }
   
  return (  
    <div  className=' px-10 bg-[#7eca9c] font-pop  ' id='Contact'>
         <div>
            <h1 className=' text-7xl text-center  py-10 font-wal tracking-wide  '>Thank you </h1>
            <hr class="  w-full  rounded-lg   backdrop-blur-sm border-1 border-[#000000] bg-[#000000] border-1 "></hr>
         </div>
         <Section>
         <div className='pb-8  lg:w-auto md:w-auto'>
            <h1 className='text-lg font-extrabold  tracking-wide py-8'>Let's connect </h1>
            <p className=''>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, suscipit.</p>
         </div>
         <div className='flex-wrap   md:flex '>
         
            <form className=' w-auto' >
            {/* <div className=' '> */}
            <label className='font-pop font-lg font-bold tracking-wide text-black '>Full Name </label>
            <input
            type="text" 
            className='rounded-lg  w-full mb-4 mt-2 bg-[#7ECA9C] focus:bg-teal-700/10  drop-shadow-md border-1 hover:border-teal-800  focus:border-teal-300  focus:ring--300 text-sm capitalize font-thin text-teal-50  font-pop   '
            name='name'
            placeholder='Full Name'
            required
            />
              <label className='font-pop font-lg font-bold tracking-wide text-black '>Enter Email </label>
            <input
            type="text" 
            className=' w-full mt-2 mb-4  rounded-lg bg-[#7ECA9C]  focus:bg-teal-700/10  drop-shadow-md border-1 hover:border-teal-800  focus:border-teal-300  focus:ring--300 text-sm capitalize font-thin text-teal-50  font-pop  '
            name='Email'
            placeholder='Email'
            required
            />
            <label className='font-pop font-lg font-bold tracking-wide text-black '>Message</label>
            <textarea
            type="text" 
            name='message'
            placeholder='message'
            className='w-full h-24   mt-2 rounded-lg bg-[#7ECA9C]  focus:bg-teal-700/10 drop-shadow-md border-1 hover:border-teal-800  focus:border-teal-300  focus:ring--300  text-sm capitalize font-thin text-teal-50  font-pop  '
            required
            />
            <div className=' mt-8 flex justify-center'>
            <Button onClick={handleClick} className=' w-44 drop-shadow-2xl '  >Submit</Button>
            </div>
            {/* </div> */}
            </form>
            {/* <Lottie  animationData={animationData}
            loop={true} className='w-[300px] mr-28   ' /> */}
            </div>
            </Section>
            <div className='p-10'>
           <div className=' justify-center   md:justify-end  mb-2 flex gap-4'>
               <a href="#"> <Instagram /> </a>
               <a href="#"> <Linkedin /> </a>
               <a href="#"> <Twitter /> </a>

               </div>

            </div>
         
    </div>
  )
}
