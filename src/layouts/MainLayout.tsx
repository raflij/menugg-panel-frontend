import React, { ReactNode } from 'react';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import useSidebar from '../hooks/useSidebar';

interface Props {
  children: ReactNode;
}

const MainLayot: React.FC<Props> = ({children}) => {
  const { isSidebarOpen, toggleSidebar } = useSidebar();
  return (
    <div className='min-h-screen relative flex'>
        <div className='relative flex-none'>
          <Sidebar toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen}/>
        </div>
        <div className='relative grow flex flex-col'>
            <Navbar toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} className='flex-none' />
            {children}
            <Footer className='flex-none'/>
        </div>
    </div>
  );
};

export default MainLayot;