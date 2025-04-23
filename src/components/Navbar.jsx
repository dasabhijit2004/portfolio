import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
      <nav className='sticky top-0 z-[20] mx-auto w-full px-4 py-3 flex justify-between items-center'>
        <div className="text-4xl font-semibold">ABHI</div>
        <ul className='flex gap-12 items-center text-lg'>
          {[
            { name: 'Home', to: '/' },
            { name: 'About', to: '/about' },
            { name: 'Skills', to: '/skills' },
            { name: 'Projects', to: '/projects' },
            { name: 'Contact', to: '/contact' },
          ].map((item) => (
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
      </nav>
    </>
  )
}

export default Navbar