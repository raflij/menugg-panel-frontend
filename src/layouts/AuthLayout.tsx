import React, { ReactNode } from 'react'

interface Props {
    children: ReactNode;
}

const AuthLayout: React.FC<Props> = ({ children }) => {
    return (
        <div className='relative min-h-screen flex flex-col justify-center bg-neutral-100 overflow-hidden'>
            <div className='relative w-full m-auto lg:max-w-md bg-neutral-50/60 rounded-sm shadow-sm px-16 py-8'>
                    {children}
            </div>
        </div>
    )
}

export default AuthLayout
