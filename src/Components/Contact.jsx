import React from 'react'
import { CONTACT } from '../constants'
import { FaHome } from 'react-icons/fa'
import { FaMobileRetro } from 'react-icons/fa6'
import { MdOutgoingMail } from 'react-icons/md'
import {motion} from 'framer-motion'

function Contact() {
  return (
    <div className='border-t border-stone-700 pb-16 '>
        <motion.h2 className="my-12 text-center text-4xl lg:text-5xl"
            whileInView={{opacity: 1, y:0}}
            initial={{opacity:0, y: -100}}
            transition={{duration: 1.2}}
        >
            Get In Touch
        </motion.h2>
        <div className="tracking-tight text-stone-300 lg:text-lg">
            <motion.div className="my-2 flex items-center justify-center gap-2"
                whileInView={{opacity: 1, x:0}}
                initial={{opacity:0, x: -100}}
                transition={{duration: 0.7}}
            >
                <FaHome />
                {CONTACT.address}
            </motion.div>
            <motion.div className="my-2 flex items-center justify-center gap-2"
                whileInView={{opacity: 1, x:0}}
                initial={{opacity:0, x: 100}}
                transition={{duration: 1.1}}
            >
                <FaMobileRetro />
                {CONTACT.phoneNo}
            </motion.div>
            <motion.div className="my-2 flex items-center justify-center gap-2"
                whileInView={{opacity: 1, x:0}}
                initial={{opacity:0, x: -100}}
                transition={{duration: 0.9}}
            >
                <MdOutgoingMail />
                <a href={`mailto:${CONTACT.email}`} className='underline'>{CONTACT.email}</a>
            </motion.div>
            
        </div>
    </div>
  )
}

export default Contact