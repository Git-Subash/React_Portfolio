import React from 'react'
import Section  from '../props/Section'
import {Box,Map,Layers} from 'lucide-react'
import revit from '../assets/logos/revit.png'
import autocad from '../assets/logos/autocad.png'
import sketchup from '../assets/logos/sketchup2.png'




export const About = () => {

  return (
    <main id='About'  className='px-10 pt-10 min-h-screen bg-black pb-60  '>   
    
    <Section>

    <h1 className='font-wal text-6xl pl-4 pt-4 z-10 text-emerald-100'>About Me</h1>
      <hr class="mt-6 ml-4 w-full  rounded-lg z-10  backdrop-blur-sm border-1 border-[#a3e1e7] bg-[#8de0e8] border-1 mr-96"></hr>
    <div className=' pl-4 ' >
    <h1 className='mt-14 font-bold z-10 font-wal text-xl text-[#7eca9c]'>Quick Intro </h1>
    <p className='pt-4  leading-8 z-10 lg:w-[800px] text-[#a6c69f]  font-pop tracking-wide '  >Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum corrupti sit cupiditate officiis, asperiores animi quae fugit suscipit nulla ex!</p>
    </div>
    <div className=' lg:flex'>
    <div className='p-4'>
    <h1 className='mt-8 font-bold text-[#7eca9c] text-2xl mb-4 font-wal tracking-wide z-10 '>Education </h1>
    <h2 className='font-bold py-2 text-[#dbf6d3] font-wal tracking-wider z-10'><span className='pr-4 z-10'>Higher Studies</span>2017-2019</h2>
    <p className=' pt-4 leading-7 text-[#a6c69f] lg:w-[600px] font-pop tracking-wide z-10'>Completed my higher education
      in Aditya Vidiyashram poriyur puducherry
    </p>
    <div className='pt-4 '>

    <h2 className='py-2 z-10 font-wal text-[#dbf6d3]  '> <span className='pr-4'>Graduation</span>2021-2024</h2> 
    <p className=' pt-4 z-10 leading-7 font-pop tracking-wide lg:w-[600px] text-[#a6c69f]   '>Completed my Civil Engineering Degree in sri manakula vinayagar engineering college One of the top most insitute in puducherry </p>
    </div> 
    </div>
    <div className='p-4  lg:flex lg:gap-20 ' >
      <div>
    <h1 className='mt-10  capitalize text-[#7eca9c] text-2xl mb-4 font-wal z-10'>Design skills <span className='ml-4'></span></h1>
     <ul className='pl-0  leading-8 font-pop tracking-wide   text-[#a6c69f] '>
     <a href="#About"><li className='flex  py-2 items-center gap-2  text-sm w-48 hover:text-lg z-10'> <span className='text-emerald-100 z-10 '> <Box /> </span>3D Model houses  </li></a>
     <a href="#Blueprints">  <li className='flex py-2  items-center text-sm w-48 gap-2 hover:text-lg z-10'><span className='text-emerald-100   z-10 '> <Map /></span> Blueprints </li> </a>
     <a href="#Projects">  <li className='flex py-2  items-center text-sm w-50 gap-2 hover:text-lg z-10'> <span className='text-emerald-100  z-10'>  <Layers /></span>Elevation Designs</li> </a>
     <a href="#Interior">   <li className='flex py-2  items-center text-sm w-48 gap-2 hover:text-lg z-10'><span className='text-emerald-100   z-10'>  <Layers /></span> Interior Designs</li> </a>
  
     </ul>
     </div>

    <div className='pl-0 '>
    <h1 className='mt-10 font-wal text-[#7eca9c] text-2xl z-10 '>Software skills</h1>
     <ul className='flex gap-4 pl-2 pt-4'>
      <li className='z-10'><img src={autocad} className='w-11 h-11 z-10' alt="autocad" /></li>
      <li  className='z-10'><img src={revit} className='w-11  h-11 z-10' alt="autocad" /></li>
      <li className='pr-2 z-10'><img src={sketchup} className='w-12  h-11 z-10' alt="autocad" /></li>
      
     </ul>
    </div>
    <div className='pl-0 '>
    <h1 className='pt-10 pb-4 font-semibold  font-wal tracking-wide text-[#7eca9c] text-2xl z-10 '>language</h1>
     <ul className='text-[#a6c69f]  font-wal tracking-widest'>
      <li className='py-1 font-pop tracking-wide z-10 '>Tamil</li>
      <li className='py-1 font-pop tracking-wide z-10 '>English</li>
     </ul>
    </div>
   
    </div>
   
    </div>
     </Section>
     </main>
  )
}
