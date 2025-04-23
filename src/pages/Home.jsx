import React from 'react'
import { Typewriter } from 'react-simple-typewriter'
import { motion } from 'framer-motion'

const Home = () => {
  return (
    <>
      <div className='flex items-center justify-between'>
        <motion.div
          initial={{ opacity: 0, x: -200 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <img src="image.png" alt="" className=' rounded-full' />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 200 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className='w-full h-screen p-10 flex justify-center flex-col gap-5 text-right'>
            <div className='text-5xl font-bold tracking-wider'>Hey there! Welcome to my Portfolio</div>
            <div className='text-4xl font-bold tracking-wider'>I'm Abhijit Das</div>
            <div className='text-3xl tracking-wider'>I am a <span className='text-red-600'>
              <Typewriter
                words={['Full Stack Developer', 'UI/UX Designer', 'AI/ML Enthusiast']}
                loop={0}
                cursor
                cursorStyle='_'
                typeSpeed={120}
                deleteSpeed={100}
                delaySpeed={2500}
              />
            </span></div>
          </div>
        </motion.div>
      </div>
    </>
  )
}

export default Home