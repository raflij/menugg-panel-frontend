import React from 'react'

interface Props {
    className?: string;
}

const Footer: React.FC<Props> = ({ className }) => {
  return (
    <div className={`flex justify-between items-center px-4 py-2 ${className}`}>
    <div className=''>
        <p className='text-neutral-500 text-sm'>2023 &copy; MenuGG</p>
    </div>
    <div className='flex justify-center items-center space-x-4'>
        <p className='text-neutral-500 text-sm'>About</p>
        <p className='text-neutral-500 text-sm'>Contact Us</p>
    </div>
    </div>
  )
}

export default Footer;
