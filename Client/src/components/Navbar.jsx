
import { Disclosure, } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import {motion} from "framer-motion"
 

const navigation = [
  { name: 'Home', href: '#', current: true },
  { name: 'About', href: '#About', current: false },
  { name: 'Projects', href: '#Projects', current: false},
  { name: 'Contact', href: '#Contact', current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Navbar() {


    
  return (
    <Disclosure as="nav" className=" md:pt-20 pt-16 bg-transparent backdrop-blur-lg   drop-shadow-lg font-pop top-0 fixed right-0 w-full  overflow-hidden  ">
      {({ open }) => (
        <>
          <div className="mx-auto  min-w-7xl px-2 sm:px-6 lg:px-8  fixed top-0 w-full font-wal " >
            <div className="relative flex h-16 items-center justify-between  ">
              <div className="absolute inset-y-2 right-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="relative  items-center  justify-center rounded-md p-2 text-[#7eca9c] hover:bg-[#538a69] hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-10 w-10 " aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-10 w-10" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center  justify-center sm:items-stretch sm:justify-between lg:justify-between ">
                <div className="flex flex-shrink-0 items-center ">
                <a href="#"> <h1  className=" h-8 w-auto shrink-0   text-[#7eca9c] text-3xl md:pt-2  items-center sm:pl-14 md:pl-14 lg:pl-14 " >Portfolio</h1></a> 
                </div>
                <div className="hidden sm:ml-30 my-10 lg:ml-96 sm:block  lg:pt-4 md:pt-4  ">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <motion.a
                        whileHover={{ scale: 1.2 }}
                        onHoverStart={e => {}}
                        onHoverEnd={e => {}}
                        key={item.name}
                        href={item.href}
                      
                        className={classNames(
                          item.current ? ' backdrop-blur-sm bg-white/30 text-[#CCFFBD] ' : 'text-gray-100  hover:bg-white/30 hover:text-[#CCFFBD]',
                          'rounded-md px-3 py-2 text-xl font-medium'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                        
                        
                      </motion.a>
                    ))}
                  </div>
                </div>
              </div>
             
            </div>
          </div>
          <Disclosure.Panel className="sm:hidden ">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  as="a"
                  href={item.href}
                  className= {classNames(
                    item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                    'block rounded-md  text-center py-5  font-medium' 
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </a>

              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
      
    </Disclosure>
    
  )
}
