import React from 'react'
import Colors from '../props/Colors'
import AOS from 'aos';
import 'aos/dist/aos.css';
import interiorBg from '../assets/backgrounds/interior.png'
import sketchup from '../assets/logos/sketchup.png'
import Bedroom from '../models/bedroom'



AOS.init();

export const Interior = () => {
  return (
       <main>
       {/* page-1 */}
         <div id='Interior' className='min-h-screen bg-fixed    bg-no-repeat  bg-cover bg-gray-700 ' style={{backgroundImage : `url(${interiorBg})`}}>
         <div className='px-20 xs:px-0 pt-40 items-center text-emerald-200 '>
    <div className='  data-aos="fade-right" data-aos-easing="ease-out"
     data-aos-duration="4000"'  >
     <h1 className=' md:text-7xl  text-6xl font-wal tracking-wide pt-40 text-center   font-thin'data-aos="fade-up"
     data-aos-easing="3000"
     data-aos-duration="1500"> <div className=' text-sm text-center mb-2 '>02 personal project</div> INTERIOR  PROJECTS </h1>
      
     
</div>
    </div>
    </div>
    {/* page-2 */}

 
            <Colors 
                // bgColor='#01241A'
                
                bgColor='#101314'
                pCount='1'
                pTitle1='Interior'
                pTitle2='Design'
                colorTitle='Colors Used'
                dTitle='Description' 
                Description= 'Lorem ipsum dolor sit amet consectetur adipisicing elit. In libero cupiditate, voluptate quisquam quos iste necessitatibus molestiae optio aspernatur nemo.'
                logo={sketchup}
                logoName= 'sketchup'
                 model = {<Bedroom  scale={0.1} rotation-y={3.5}/>}
                 camera = {{ position :[-5.9,7.6,10], fov: 1 }}
                downloadImg={''}
                color1='#0b3450' 
                color2='#815f46'
                color3 ='#64676c'
                color4 ='#758886'
                color5 ='#513f2e'
                color6 ='#513f2e'
                color7 ='#19b8cb'
                color8 ='#19b8cb'
                />
         
    {/* page-3 */}
   
        <Colors 
       
                bgColor='#101314'
                pCount='2'
                pTitle1='Interior'
                pTitle2='Design'
                colorTitle='Colors Used'
                dTitle='Description' 
                Description= 'Lorem ipsum dolor sit amet consectetur adipisicing elit. In libero cupiditate, voluptate quisquam quos iste necessitatibus molestiae optio aspernatur nemo.'
                logo={sketchup}
                logoName= 'sketchup'
                model = {<Bedroom  scale={0.1} rotation-y={3.5}/>}
                camera = {{ position :[-5.9,7.6,10], fov: 1 }}
                downloadImg={''}
                name='Colors Used' 
                color1='#0b3450' 
                color2='#815f46'
                color3 ='#64676c'
                color4 ='#758886'
                color5 ='#513f2e'
                color6 ='#513f2e'
                color7 ='#19b8cb'
                color8 ='#19b8cb'
                />
    


    </main>
   
  )
}

