import React from 'react'
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { ComputersCanvas } from './canvas';


const Hero = () => {
  return (
    <section className='relative w-full h-screen mx-auto'>
      <div className={`${styles.paddingX} absolute inset-0 top-[100px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        <div className="flex flex-col justify-center items-center mt-5">
          <div className='w-5 h-5 rounded-full bg-[#915eff]'/>
          <div className='w-1 sm:h-80 h-40 bg-gradient-to-b from-[#915eff] to-transparent' />
        </div>
        <div>
          <h1 className={`text-6xl font-bold text-white`}>Hi, I'm <span className='text-[#915eff]'>Aditi</span></h1>
          <p className={`mt-2 text-1xl text-white-100`}>Web developer experienced in building<br className='sm:block hidden' /> responsive sites with React.js, JavaScript,<br className='sm:block hidden' /> HTML5, and Tailwind CSS.</p>
        </div>
       
      </div>
      <ComputersCanvas />
      <div className="absolute xs:bottom-1 bottom-32 flex items-center justify-center w-full">
        <a href="#about">
          <div className="w-[35px] h-[50px] rounded-3xl border-secondary border-4 flex justify-center items-start p-2">
          <motion.div
              initial={{ y: 0 }} // Starting position
              animate={{ y: [0, 22, 0] }} // Animation values
              transition={{
                duration: 1.5, // Duration of the animation
                repeat: Infinity, // Repeat forever
                repeatType: 'loop', // Type of repeat
                ease: 'easeInOut' // Easing function
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  )
}

export default Hero