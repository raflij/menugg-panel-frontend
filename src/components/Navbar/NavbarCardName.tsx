import React, { useState } from 'react'
import { UserAuth } from '../../context/AuthContext'
import NavbarCardMenu from './NavbarCardMenu'

const NavbarCardName: React.FC = () => {
    const { handleLogout } = UserAuth();
    const [isProfileNavbarOpen, setIsProfileNavbarOpen] = useState(false);
    function toggleProfileNavbar() {
        setIsProfileNavbarOpen(!isProfileNavbarOpen);
    }
    return (
        <div className='relative grow flex justify-end items-center'>
            <div className='relative'>
                <div className='relative flex justify-center items-center pr-4'>
                    <button onClick={toggleProfileNavbar} className='relative flex items-center px-6 py-2 space-x-2 bg-neutral-50 border-r border-l border-neutral-200/50'>
                        <div className='relative flex items-center justify-center rounded-full h-[28px] w-[28px] bg-lime-600'>
                            <h1 className='text-white text'>R</h1>
                        </div>
                        <div className='relative grow flex flex-col justify-start items-start'>
                            <p className='text-sm font-semibold text-neutral-600'>Rafli J</p>
                            <p className='text-xs text-neutral-500'>Fullstack Developer</p>
                        </div>
                    </button>
                </div>
                {isProfileNavbarOpen &&
                    <div className='flex justify-end pr-4'>
                        <div className='absolute mt-1 pb-3 w-[180px] bg-white text-sm text-neutral-500 rounded-sm shadow-md flex flex-col justify-start'>
                            <div className='mt-2 px-2'>
                                <p className='text-neutral-600 text-xs'>Welcome</p>
                            </div>
                            <div className='mt-3 px-3 space-y-3'>
                                <NavbarCardMenu label='profile' icon="gg:profile" />
                                <NavbarCardMenu label='settings' icon='oi:cog' />
                                <NavbarCardMenu label='upgrade plan' icon='iconamoon:star-light' />
                                <NavbarCardMenu onClick={handleLogout} label='logout' icon='ion:power' />
                            </div>
                        </div>
                    </div>
                }
            </div>
        </div>
    )
}

export default NavbarCardName
