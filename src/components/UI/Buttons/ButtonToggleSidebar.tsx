import React from 'react'
import { Icon } from '@iconify/react';

interface Props {
    toggleSidebar: () => void;
}

const ButtonSidebar: React.FC<Props> = ({ toggleSidebar }) => {
    return (
        <button
            onClick={toggleSidebar}
            className='z-20 absolute right-4 rounded-full w-6 h-6 bg-yellow-500 
flex lg:hidden justify-center items-center text-white'>
            <Icon icon="icon-park-outline:double-left" width="18" height="18" />
        </button>
    )
}

export default ButtonSidebar
