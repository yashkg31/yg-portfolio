import React from 'react'
import logo from "../assets/logo.png";
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa6'

function Navbar() {
  return (
    <nav className='flex justify-between items-center py-6'>
        <div className='flex flex-shrink-0 items-center'>
            <a href='/' aria-label='Home'>
            <img src={logo} className='h-14 xl:h-16'/>
            </a>
        </div>

        <div className="m-6 flex items-center justify-center gap-4 text-2xl xl:text-3xl">
            <a href='https://www.linkedin.com/in/yash-gupta-12511a220/'
                target='_black'
                rel='noopener noreferrer'
                aria-label='LinkedIn'
                >
                <FaLinkedin />
            </a>
            <a href='https://www.github.com/yashkg31/'
                target='_black'
                rel='noopener noreferrer'
                aria-label='GitHub'
                >
                <FaGithub />
            </a>
            <a href='https://www.instagram.com/fifth_.fret/'
                target='_black'
                rel='noopener noreferrer'
                aria-label='Instagram'
                >
                <FaInstagram />
            </a>
        </div>
    </nav>
  )
}

export default Navbar