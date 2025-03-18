import React from 'react'
import cn from '../utils/cn'

const Button = ({ title, leftIcon, containerClass, id, rightIcon }) => {
  return (
    <button id={id} className={cn("group relative z-10 w-fit cursor-pointer overflow-hidden rounded-full bg-violet-50 px-7 py-3 text-black", containerClass)}>
      {leftIcon}
      <span className='relative inline-flex overflow-hidden font-general text-xs uppercase'>
        <span>
          {title}
        </span>
      </span>
      {rightIcon}
    </button>
  )
}

export default Button
