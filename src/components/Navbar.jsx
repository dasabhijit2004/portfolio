import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
      <nav className='sticky top-0 z-[20] mx-auto w-full px-4 py-3 flex justify-between items-center'>
        <div className="text-4xl font-semibold">ABHI</div>
        <ul className='flex gap-12 items-center text-lg'>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/skills">Skills</Link>
          </li>
          <li>
            <Link to="/projects">Projects</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </>
  )
}

export default Navbar