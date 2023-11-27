import React from 'react'
import Colors from '../props/Colors'
import elevationBg from '../assets/backgrounds/elevation.svg'
import sketchup from '../assets/logos/sketchup.png'
// import Bedroom from '../models/bedroom'
import Elev from '../models/elev'


 export  const Elevation = () => {
  
  const model = '../assets/3d/bedroom.gbl'
  
  return (
    <main>
    {/* page-1 */}
    <div id='Projects' className='min-h-screen bg-fixed px-10 xs:px-0 bg-gray-700  scroll-behavior: smooth' style={{backgroundImage : `url(${elevationBg})`}}>
         <div className='pt-40 items-center text-[#a6c69f] '>
    <div className='' 
    > 
     <h1 className=' md:text-7xl  text-6xl font-wal tracking-wide pt-40 text-center   font-thin' data-aos="fade-up"
     data-aos-easing="3000"
     data-aos-duration="1500"> <div className=' text-sm text-center mb-2  '>01 personal project</div> ELEVATION  PROJECTS </h1>

</div>
    </div>
    </div>
  {/* page-2 */}
                <Colors 
                bgColor='#101314'
                pCount='1'
                pTitle1='Elevation'
                pTitle2='Design'
                dTitle='Description' 
                Description= 'Lorem ipsum dolor sit amet consectetur adipisicing elit. In libero cupiditate, voluptate quisquam quos iste necessitatibus molestiae optio aspernatur nemo.'
                logo={sketchup}
                logoName= 'sketchup'
                // model = {<Bedroom  scale={0.1} rotation-y={3.5}/>}
                model ={<Elev scale={0.01} rotation-y={2.6} />}
                camera = {{ position :[-5.9,3.6,10], fov: 3 }}
                downloadImg={model}
                colorTitle='Colors Used'
                color1='#c3c3c3' 
                color2='#ba9a65'
                color3 ='#758886'
                color4 ='#513f2e'
                color5 ='#513f2e'
                color6 ='#19b8cb'
                color7 ='#232323'
                color8 ='#232323'

                />
             
   
    {/* page-3 */}
  
                <Colors
                 bgColor='#101314'
                 pCount='2'
                 pTitle1='Elevation'
                 pTitle2='Design'
                 colorTitle='Colors Used'
                 dTitle='Description' 
                 Description= 'Lorem ipsum dolor sit amet consectetur adipisicing elit. In libero cupiditate, voluptate quisquam quos iste necessitatibus molestiae optio aspernatur nemo.'
                 logo={sketchup}
                 logoName= 'sketchup'
                 model ={<Elev scale={0.01} rotation-y={2.6} />}
                 camera = {{ position :[-5.9,3.6,10], fov: 3 }}
                 downloadImg={model}
                color1='#c3c3c3' 
                color2='#ba9a65'
                color3 ='#758886'
                color4 ='#513f2e'
                color5 ='#513f2e'
                color6 ='#19b8cb'
                color7 ='#232323'
                color8 ='#232323'
                />
                
       


    </main>
    
  
  )
}
