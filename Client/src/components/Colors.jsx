import React from 'react'
import {Download } from 'lucide-react'
import {Button} from "@material-tailwind/react";
import Section  from './Section'
import {motion} from "framer-motion"


function Colors(props) {
  return (
    // <Section>
    <div className='pt-20  ' style={{backgroundColor: `${props.bgColor}`}}>
      
        <div className='lg:flex justify-around text-white   px-20'>
            <Section >
                <div className='flex '>
            <h1 className='text-2xl '>
                P
            </h1>
            <div className='pr-2 pl-1 text-xl'>{props.pCount}</div>
            
            <h2 className=' text-2xl'>{props.pTitle1}</h2>
            <div className='text-sm pl-2'>{props.pTitle2}</div>
            </div>
            <div className='mt-10 leading-8 '>
                <h1>{props.dTitle}</h1>
                <p  className='text-sm pr-8 lg:pr-60 mt-4 md:pr-60'>{props.Description}</p>
            </div>
            <div className='mt-10 leading-8 flex  '>
                <div className=''>
                <h1>Software Used </h1>
                <p><img className='pt-2' width={100} height={100} src={props.logo} alt="" /><span className='pl-4'>{props.logoName} </span></p>
                </div>
            </div>
    <div>
         <h1 className='mt-10 mb-4 '>{props.colorTitle}</h1> 
        
        <div 
         className='md:flex flex-wrap  gap-2  mb-10'
         >
        <Button className='w-14 h-14 mb-2 ml-2  overflow-hidden  ' style={{backgroundColor: `${props.color1}`}}></Button>
        <Button className='w-14 h-14 mb-2 ml-2 overflow-hidden  ' style={{backgroundColor: `${props.color2}`}}></Button>
        <Button className='w-14 h-14 mb-2 ml-2 overflow-hidden  ' style={{backgroundColor: `${props.color3}`}}></Button>
        <Button className='w-14 h-14 mb-2 ml-2 overflow-hidden  ' style={{backgroundColor: `${props.color4}`}}></Button>
        <Button className='w-14 h-14 mb-2  ml-2 overflow-hidden  ' style={{backgroundColor: `${props.color5}`}}></Button>
        <Button className='w-14 h-14 mb-2  ml-2 overflow-hidden  ' style={{backgroundColor: `${props.color6}`}}></Button>
        <Button className='w-14 h-14 mb-2  ml-2 overflow-hidden  ' style={{backgroundColor: `${props.color7}`}}></Button>
        <Button className='w-14 h-14 mb-2  ml-2 overflow-hidden  ' style={{backgroundColor: `${props.color8}`}}></Button>

        </div>
   
     </div>
     </Section>
     <motion.div 
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.3,
              ease: [0, 0.71, 0.2, 1.01],
              scale: {
                type: "spring",
                damping: 5,
                stiffness: 100,
                restDelta: 0.001
              }
            }}
      className='' >
            <img src={props.displayImg} width={700}  className='border-4 md:mx-auto border-[#caede2]' />
            <div className=' mx-auto'>
            <a className='' href={props.displayImg} download>
                <Button className='text-black h-10 w-44 lg:mx-auto md:mx-auto flex gap-4 rounded-md my-8 ml-2 justify- items-center  bg-zinc-500 mx-auto'> <Download /> download</Button>
            </a>
            </div>
           
            </motion.div>
        </div>
        <div className=' w-full bg-bottom bg-fixed  ' 
        style={{ height:'10px' } }>
      
        </div>
       
    </div>

  )
}

export default Colors