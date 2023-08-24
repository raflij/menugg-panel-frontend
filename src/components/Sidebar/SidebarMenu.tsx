import React, { ReactNode } from 'react'

interface Props {
    children: ReactNode;
}

const SidebarMenu: React.FC<Props> = ({ children }) => {
    return (
        <div className='relative py-4 w-full'>
            <ul className='text-sm text-neutral-600'>
                {children}
            </ul>
        </div>
    )
}

export default SidebarMenu
