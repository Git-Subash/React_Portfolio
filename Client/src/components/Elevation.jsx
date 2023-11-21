import React from 'react'
import bg from '../assets/bg3.svg'
import sketchup from '../assets/sketchup.png'
import p1 from '../assets/P1.png'
import Colors from './Colors'





 export  const Elevation = () => {
  // const { scrollYProgress } = useScroll(); 

  
  return (
    <main>
    {/* page-1 */}
    <div id='Projects' className='min-h-screen bg-fixed px-10 xs:px-0 bg-gray-700  scroll-behavior: smooth' style={{backgroundImage : `url(${bg})`}}>
         <div className='pt-40 items-center text-[#a6c69f] '>
         {/* data-aos="fade-right" data-aos-easing="ease-out"
     data-aos-duration="4000" */}
    <div className='' 
    > 
     <h1 className=' md:text-7xl  text-6xl font-wal tracking-wide pt-40 text-center   font-thin' data-aos="fade-up"
     data-aos-easing="3000"
     data-aos-duration="1500"> <div className=' text-sm text-center mb-2  '>01 personal project</div> ELEVATION  PROJECTS </h1>
     {/* data-aos="fade-up"
     data-aos-easing="3000"
     data-aos-duration="1500" */}
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
                displayImg= {p1}
                downloadImg={p1}
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
                 displayImg= {p1}
                 downloadImg={p1}
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
