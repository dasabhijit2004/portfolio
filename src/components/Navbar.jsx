import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const toggleMenu = () => setIsOpen(!isOpen)

  const navbarItems = [
    { name: 'Home', to: '/' },
    { name: 'About', to: '/about' },
    { name: 'Skills', to: '/skills' },
    { name: 'Projects', to: '/projects' },
    { name: 'Contact', to: '/contact' },
  ]

  return (
    <nav className='sticky top-0 z-[20] w-full backdrop-blur-md bg-black shadow-md'>
      <div className='max-w-7xl mx-auto px-4 py-3 flex justify-between items-center'>
        <div className='text-3xl font-bold'>ABHI</div>

        <ul className='hidden md:flex gap-10 items-center text-lg'>
          {navbarItems.map((item) => (
            <li key={item.to}>
              <Link
                to={item.to}
                className="relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-red-500 after:transition-all after:duration-300 hover:after:w-full"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        <div className='md:hidden'>
          <button onClick={toggleMenu}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
      {isOpen && (
        <motion.ul
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.3 }}
        className='md:hidden absolute right-4 top-[65px] w-[100%] shadow-lg rounded-xl p-5 flex flex-col gap-4 text-lg z-50'
      >
        <ul className='md:hidden flex flex-col bg-black items-end pr-6 pb-4 gap-3 text-lg shadow-lg'>
          {navbarItems.map((item) => (
            <li key={item.to}>
              <Link
                to={item.to}
                onClick={() => setIsOpen(false)}
                className="block py-1 relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-red-500 after:transition-all after:duration-300 hover:after:w-full"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
        </motion.ul>
      )}
      </AnimatePresence>
    </nav>
  )
}

export default Navbar
