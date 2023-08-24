import React from 'react'
import SidebarCardName from './Sidebar/SidebarCardName';
import ButtonToggleSidebar from './UI/Buttons/ButtonToggleSidebar';
import SidebarMenu from './Sidebar/SidebarMenu';
import SidebarMenuItem from './Sidebar/SidebarMenuItem';

interface Props {
    toggleSidebar: () => void;
    isSidebarOpen: boolean;
}

const Sidebar: React.FC<Props> = ({ toggleSidebar, isSidebarOpen }) => {
    return (
        <div className={`
        absolute lg:relative z-10 lg:z-0 bg-white transition-all h-full ${isSidebarOpen ? 'w-64' : 'w-0'}`}>
            <div className={`
            relative flex flex-col justify-start items-start shadow-md h-full ${!isSidebarOpen && 'hidden'}`}>
                <div className='relative flex justify-center items-center py-3 w-full'>
                    <h1 className='text-2xl'>MenuGG</h1>
                    <ButtonToggleSidebar toggleSidebar={toggleSidebar} />
                </div>
                <SidebarCardName />
                <SidebarMenu>
                    <SidebarMenuItem icon='radix-icons:dashboard' to='/' label='Dashboard' />
                    <SidebarMenuItem icon='tabler:device-analytics' to='/analytics' label='Analytics' />
                    <SidebarMenuItem icon='bi:shop' to='/manage/restaurant' label='Restaurant' />
                    <SidebarMenuItem icon='ion:fast-food-outline' to='/manage/menu' label='Menu' />
                    <SidebarMenuItem icon='iconamoon:star-light' to='/upgrade' label='Upgrade Plan' />
                    <SidebarMenuItem icon='ic:baseline-wifi' target='new' to='https://menugg.vercel.app/' label='Live Preview' />
                </SidebarMenu>
            </div>
        </div>
    )
}

export default Sidebar