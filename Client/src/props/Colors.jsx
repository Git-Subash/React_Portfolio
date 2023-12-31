import Section  from './Section'
import Modelsection from './Modelsection';
import {Download, View } from 'lucide-react'
import {Button} from "@material-tailwind/react";
// import {Html } from "@react-three/drei";
import {motion} from "framer-motion"
import React ,{ Suspense } from 'react'
import { Canvas } from "@react-three/fiber"

import { Stage,PresentationControls ,PerspectiveCamera, ContactShadows, OrbitControls } from '@react-three/drei';


function Colors(props) {
  return (
  
   
    <div className='pt-10 px-10 py-20 ' style={{backgroundColor: `${props.bgColor}`}}>
    
        <div  className=' lg:flex text-white    ' >
            <Section >
                <div className='flex  '>
            <h1 className='text-2xl '>
                P
            </h1>
            <div className='pr-2 pl-1 text-xl z-10'>{props.pCount}</div>
            
            <h2 className=' text-2xl z-10'>{props.pTitle1}</h2>
            <div className='text-sm pl-2 z-10'>{props.pTitle2}</div>
            </div>
            <div className='mt-10 leading-8 z-10 '>
                <h1>{props.dTitle}</h1>
                <p  className='text-sm pr-8 lg:pr-60 mt-4 md:pr-60 z-10'>{props.Description}</p>
            </div>
            <div className='mt-10 leading-8 flex z-10  '>
                <div className=''>
                <h1>Software Used </h1>
                <p><img className='pt-2 z-10' width={100} height={100} src={props.logo} alt="" /><span className='pl-4'>{props.logoName} </span></p>
                </div>
            </div>
    <div>
         <h1 className='mt-10 mb-4 z-10'>{props.colorTitle}</h1> 
        
        <div 
         className='md:flex flex-wrap  gap-2  mb-10'
         >
        <Button className='w-14 h-14 mb-2 ml-2  overflow-hidden z-10  ' style={{backgroundColor: `${props.color1}`}}></Button>
        <Button className='w-14 h-14 mb-2 ml-2 overflow-hidden z-10 ' style={{backgroundColor: `${props.color2}`}}></Button>
        <Button className='w-14 h-14 mb-2 ml-2 overflow-hidden z-10 ' style={{backgroundColor: `${props.color3}`}}></Button>
        <Button className='w-14 h-14 mb-2 ml-2 overflow-hidden  z-10' style={{backgroundColor: `${props.color4}`}}></Button>
        <Button className='w-14 h-14 mb-2  ml-2 overflow-hidden z-10 ' style={{backgroundColor: `${props.color5}`}}></Button>
        <Button className='w-14 h-14 mb-2  ml-2 overflow-hidden z-10 ' style={{backgroundColor: `${props.color6}`}}></Button>
        <Button className='w-14 h-14 mb-2  ml-2 overflow-hidden z-10 ' style={{backgroundColor: `${props.color7}`}}></Button>
        <Button className='w-14 h-14 mb-2  ml-2 overflow-hidden z-10  ' style={{backgroundColor: `${props.color8}`}}></Button>

        </div>
   
     </div>
     </Section>
     <div className='w-[100%]  h-[500px] overflow-hidden '>
      <Modelsection  >
   

             <Canvas  camera={props.camera}   >
            <Suspense fallback={null}  >
            <PresentationControls speed={0}  zoom={0}
             polar={[-0.1,1.4, 5]}
             >
              <Stage environment={'sunset'}  >
           
                {props.model} 
   
            </Stage>
            </PresentationControls>
          </Suspense>
          <ContactShadows position={[0, -4.5, 0]} scale={20} blur={2} far={4.5} />
          <OrbitControls  enablePan={false} enableZoom={false} zoomSpeed={0.75}  minPolarAngle={Math.PI / 15.5} maxPolarAngle={Math.PI / 2.2} />
       
          </Canvas>
            <div className=' mx-auto'>
            <a className=' bg-white'href={props.downloadImg} download>
                <Button h className='text-black h-10 w-44 lg:mx-auto md:mx-auto flex gap-4 rounded-md my-8 ml-2 justify- items-center  bg-zinc-500 mx-auto' > <Download /> download</Button>
            </a>
            </div>
           
            
            </Modelsection>
            </div>
        </div>

   
       
    </div>


  )
}

export default Colors