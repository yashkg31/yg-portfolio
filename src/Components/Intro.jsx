import profile from "../assets/profile.jpeg";
import React from 'react'
import { FaCloudDownloadAlt } from "react-icons/fa";
import {motion} from 'framer-motion'

const containerVariants = {
    hidden: {
        opacity: 0,
        x: -100
    },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.5,
            staggerChildren: 0.5
        }
    }
}
const childVariants = {
    hidden: {
        opacity: 0,
        x: -100
    },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.5,
        }
    }
}

function Intro() {
  return (
    <div className="pb-2">
        <div className="flex flex-wrap lg:flex-row-reverse">
            <div className="w-full lg:w-1/2">
                <div className="flex justify-center lg:p-8 aspect-square xl:h-[90%]">
                    <motion.img src={profile} 
                        alt="Yash Gupta"
                        className="rounded-3xl border border-stone-700 lg:ml-48"
                        initial={{
                            x:100,
                            opacity: 0
                        }}
                        animate={{
                            x: 0,
                            opacity: 1
                        }}
                        transition={{
                            duration: 1,
                            delay: 0.5
                        }}
                    />
                </div>
            </div>
            <div className="w-full lg:w-1/2">
                <motion.div className="flex flex-col items-center lg:items-start mt-10"
                    initial="hidden"
                    animate="visible"
                    variants={containerVariants}
                >
                    <motion.h2 className="pb-2 text-4xl font-bold lg:text-7xl bg-gradient-to-r from-stone-100 to-stone-500 bg-clip-text text-transparent" variants={childVariants}>
                        Yash Gupta
                    </motion.h2>
                    <motion.span className="bg-gradient-to-r from-[#7298ff] to-[#f750f8] bg-clip-text text-transparent text-3xl lg:text-4xl tracking-tight" variants={childVariants}>
                        Full Stack Web Developer
                    </motion.span>
                    <motion.p className="my-2 max-w-2xl py-6 text-xl leading-relaxed tracking-tighter text-center lg:text-left lg:text-2xl text-stone-200" variants={childVariants}>
                        I am a dedicated full-stack developer with a passion for building scalable and efficient web applications. Over the years, I have developed a strong command of front-end technologies like React.js, Next.js, JavaScript and TypeScript, alongside back-end technologies such as Node.js, Express.js, MongoDB, PostgreSQL, and Prisma. My focus is on delivering high-performance applications that solve real-world problems while ensuring seamless user experiences and driving impactful business outcomes.
                    </motion.p>

                    <motion.a variants={childVariants} href="/resume.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        download
                        className="bg-gradient-to-r from-[#5273cd] to-[#c639c6] text-white mb-10 rounded-3xl p-3 px-6 text-lg flex justify-center items-center gap-2 hover:from-white hover:to-white hover:text-black"
                    >
                        <FaCloudDownloadAlt className="text-2xl mb-0.5" /> Resume
                    </motion.a>
                </motion.div>
            </div>
        </div>
    </div>
  )
}

export default Intro