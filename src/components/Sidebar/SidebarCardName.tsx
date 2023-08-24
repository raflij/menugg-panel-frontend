import React from 'react'

const SidebarCardName: React.FC = ({ }) => {
    return (
        <div className='relative bg-gradient-to-bl from-yellow-500/90 via-yellow-400 to-yellow-500/90 w-full'>
            <div className='relative flex items-center px-6 py-4 space-x-2'>
                <div className='relative flex items-center justify-center rounded-full h-[36px] w-[36px] bg-lime-600'>
                    <h1 className='text-white text-xl'>R</h1>
                </div>
                <div className='relative grow'>
                    <p className='text-white text-sm font-bold'>Rafli J</p>
                    <p className='text-white text-sm font-medium'>Fullstack Developer</p>
                </div>
            </div>
        </div>
    )
}

export default SidebarCardName
