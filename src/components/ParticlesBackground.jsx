import React from 'react'
import Particles from 'react-tsparticles'
import particlesConfig from './config/particles.config'

const ParticlesBackground = () => {
  return (
    <div className='absolute top-0 left-0 w-full h-screen z-[-1]'>
        <Particles options={particlesConfig}>

        </Particles>
    </div>
  )
}

export default ParticlesBackground