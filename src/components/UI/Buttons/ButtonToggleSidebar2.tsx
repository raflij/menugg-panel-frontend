import React from 'react'
import { Icon } from '@iconify/react';

interface Props {
    toggleSidebar: () => void;
}

const ButtonSidebar: React.FC<Props> = ({ toggleSidebar }) => {
    return (
        <button
            onClick={toggleSidebar}
            className='hidden z-20 absolute -ml-3 rounded-full w-6 h-6 bg-yellow-500 
        lg:flex justify-center items-center text-white'>
            <Icon icon="icon-park-outline:double-left" width="18" height="18" />
        </button>
    )
}

export default ButtonSidebar
