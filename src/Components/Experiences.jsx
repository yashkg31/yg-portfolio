import React from 'react'
import { EXPERIENCES } from '../constants'
import {motion} from 'framer-motion'

function Experiences() {
  return (
    <div className="pb-4">
        <motion.h2 className="mt-20 mb-16 text-center text-4xl lg:text-5xl"
            whileInView={{opacity: 1, x:0}}
            initial={{opacity:0, x: -100}}
            transition={{duration: 1.2}}
        >Experiences</motion.h2>
        <div>
            {EXPERIENCES.map((ex, index) => (
                <div key={index} className='mb-8 flex flex-wrap lg:justify-center'>
                    <motion.div className="w-full lg:w-1/4"
                        whileInView={{opacity: 1, x:0}}
                        initial={{opacity:0, x: 100}}
                        transition={{duration: 0.8}}
                    >
                        <p className="mb-2 lg:mt-0.5 text-sm lg:text-xl text-stone-400">
                            {ex.year}
                        </p>
                    </motion.div>
                    <motion.div className="w-full max-w-xl lg:w-3/4"
                        whileInView={{opacity: 1, x:0}}
                        initial={{opacity:0, x: -100}}
                        transition={{duration: 0.8}}
                    >
                        <h3 className="mb-2 font-semibold text-md lg:text-2xl">
                            {ex.role} - {" "}
                            <span className="text-md lg:text-2xl text-stone-500">
                                {ex.company}
                            </span>
                        </h3>
                        <p className='mb-4 text-stone-400 lg:text-lg'>
                            {ex.description}
                        </p>
                        <div className='flex flex-wrap items-center justify-start'>
                            {ex.technologies.map((tech, index) => (
                                <div className='mr-2 mb-2 rounded-md bg-stone-800 p-2 text-sm font-medium text-stone-300' key={index}>{tech}</div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Experiences