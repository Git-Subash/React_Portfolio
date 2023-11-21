import Navbar from './components/Navbar'
import { Home }  from './components/Home'
import { About } from './components/About'
import { Elevation } from './components/Elevation'
import { Interior } from './components/Interior'
import { Blueprint } from './components/Blueprint'
import { Footer } from './components/Footer'
import { motion, useScroll, useSpring } from "framer-motion";







function App() {

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });
  return (
  < >
  <motion.div className='h-2 z-10  rounded-r-full origin-left fixed bg-emerald-100 top-0 bottom-0 left-0 right-0 ' style={{ scaleX }} />
  <div className=' scroll-smooth overflow-hidden'>

     <Navbar  />
     <Home />
     <About />
     <Elevation/> 
     <Interior />
     <Blueprint /> 
     <Footer />

    </div>
     
  </>
  )
}

export default App