import { Home, About,Elevation,Interior,Blueprint} from './pages/pages'
import { Navbar, Footer } from './components/component';
import { motion, useScroll, useSpring } from "framer-motion";

function App() {

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });
  return (
 <>

  <div className=' overflow-hidden scroll-smooth'>
    <motion.div className='h-2 z-50  rounded-r-full origin-left fixed bg-emerald-100 top-0 bottom-0 left-0 right-0 ' style={{ scaleX }} />
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