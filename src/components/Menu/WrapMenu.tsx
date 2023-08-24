import React, { ReactNode } from 'react'

interface props {
    children: ReactNode;
}

const WrapMenu: React.FC<props> = ({ children }) => {
    return (
        <div className='flex flex-col'>
            {children}
        </div>
    )
}

export default WrapMenu
