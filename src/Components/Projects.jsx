import React from 'react'
import { PROJECTS } from '../constants/index'
import {motion} from 'framer-motion'

function Projects() {
  return (
    <div className='pb-2'>
      <motion.h2 className="mt-20 mb-16 text-center text-4xl lg:text-5xl"
         whileInView={{opacity: 1, x:0}}
         initial={{opacity:0, x: 100}}
         transition={{duration: 1.2}}
      >Projects</motion.h2>
      <div className='space-y-14'>
        {PROJECTS.map((project, index) => (
          <div key={index} className="mb-6 flex flex-wrap lg:justify-center">
            <motion.div className="w-full lg:w-1/2"
              whileInView={{opacity: 1, x:0}}
              initial={{opacity:0, x: -100}}
              transition={{duration: 0.8}}
            >
              <img
                src={project.image}
                alt={project.title}
                className='mb-6 rounded border border-stone-500'
              />
            </motion.div>
            <motion.div className="w-full max-w-xl lg:w-3/4 lg:pl-10 lg:pt-2 m-auto lg:m-0"
              whileInView={{opacity: 1, x:0}}
              initial={{opacity:0, x: 100}}
              transition={{duration: 0.8}}
            >
              <div className="flex justify-between items-center">
                <h3 className="mb-2 font-semibold text-2xl lg:text-3xl">
                  {project.title}
                </h3>
                <div className='lg:text-lg text-stone-400 underline'>
                  <a className='mx-2'
                    href={project.deployed}
                    target="_blank"
                    rel="noopener noreferrer"
                  >Demo</a>
                  |
                  <a className='mx-2' 
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >Github</a>
                </div>
              </div>

              <p className="mb-4 text-stone-400 lg:text-lg">
                {project.description}
              </p>
              <div className='flex flex-wrap items-center justify-start'>
                {project.technologies.map((tech, index) => (
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

export default Projects