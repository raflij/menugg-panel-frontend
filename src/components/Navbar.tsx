import React from 'react'
import ButtonSidebar2 from './UI/Buttons/ButtonToggleSidebar2';
import ButtonSidebar3 from './UI/Buttons/ButtonToggleSidebar3';
import NavbarCardName from './Navbar/NavbarCardName';

interface Props {
    className?: string;
    toggleSidebar: () => void;
    isSidebarOpen: boolean;
}

const Navbar: React.FC<Props> = ({ className, toggleSidebar, isSidebarOpen }) => {
    return (
        <div className={`relative z-10 flex justify-between items-center shadow-md h-[56px] ${className}`}>
            {isSidebarOpen ? (
                <ButtonSidebar2 toggleSidebar={toggleSidebar} />
            ) : (
                <div className='relative flex-none pl-4 flex items-center space-x-2'>
                    <ButtonSidebar3 toggleSidebar={toggleSidebar} />
                    <h1 className='text-2xl inline-block'>MenuGG</h1>
                </div>
            )}
            <NavbarCardName/>
        </div>
    )
}

export default Navbar
