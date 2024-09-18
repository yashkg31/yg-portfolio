import React from 'react'
import { BiLogoPostgresql, BiLogoTypescript } from 'react-icons/bi'
import { RiJavascriptFill, RiNextjsLine, RiNodejsFill, RiReactjsLine } from 'react-icons/ri'
import { SiExpress, SiMongodb } from 'react-icons/si'
import {motion} from 'framer-motion'

const iconVariants = (duration) => ({
  initial: {y: -10},
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse"
    }
  }
})

function Technologies() {
  return (
    <div className='pb-10'>
        <motion.h2 className='mt-20 mb-16 text-center text-4xl lg:text-5xl'
          whileInView={{opacity: 1, x:0}}
          initial={{opacity:0, x: -100}}
          transition={{duration: 1.2}}
        >Technologies</motion.h2>
        <motion.div className="flex flex-wrap items-center justify-center gap-12 text-7xl"
          whileInView={{opacity: 1, y:0}}
          initial={{opacity:0, y: -100}}
          transition={{duration: 1}}
        >
            <motion.div
              initial="initial"
              animate="animate"
              variants={iconVariants(2.5)}
            >
              <RiJavascriptFill className='text-yellow-500'/>
            </motion.div>
            <motion.div
              initial="initial"
              animate="animate"
              variants={iconVariants(3)}
            >
              <BiLogoTypescript className='text-blue-500' />
            </motion.div>
            <motion.div
              initial="initial"
              animate="animate"
              variants={iconVariants(5)}
            >
              <RiReactjsLine className=' text-cyan-400' />
            </motion.div>
            <motion.div
              initial="initial"
              animate="animate"
              variants={iconVariants(6)}
            >
              <RiNextjsLine />
            </motion.div>
            <motion.div
              initial="initial"
              animate="animate"
              variants={iconVariants(3)}
            >
              <RiNodejsFill className='text-green-400' />
            </motion.div>
            <motion.div
              initial="initial"
              animate="animate"
              variants={iconVariants(5)}
            >
             <SiExpress />
            </motion.div>
            <motion.div
              initial="initial"
              animate="animate"
              variants={iconVariants(2.5)}
            >
              <SiMongodb className='text-green-500' />
            </motion.div>
            <motion.div
              initial="initial"
              animate="animate"
              variants={iconVariants(6)}
            >
              <BiLogoPostgresql className='text-blue-500' />
            </motion.div>
        </motion.div>
    </div>
  )
}

export default Technologies