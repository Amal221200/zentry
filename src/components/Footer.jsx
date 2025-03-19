import React from 'react'
import { FaDiscord, FaGithub, FaTwitch, FaTwitter } from 'react-icons/fa'

const links = [
  { link: '#', icon: <FaDiscord /> },
  { link: '#', icon: <FaTwitter /> },
  { link: '#', icon: <FaGithub /> },
  { link: '#', icon: <FaTwitch /> },
]

const Footer = () => {
  return (
    <footer className='w-screen bg-violet-300 py-4 text-black'>
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 md:flex-row">
        <p className='text-center text-sm md:text-left'>&copy; Nova 2024. All rights reserved</p>

        <div className='flex justify-center gap-4 md:justify-start'>
          {
            links.map((item, index) => (
              <a href={item.link} key={index} className='transition-colors text-black duration-500 ease-in-out hover:text-white'>{item.icon}</a>
          ))}
        </div>

        <div>
          <a href="#" className='text-sm hover:underline text-center md:text-right'>Privacy Policy</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer