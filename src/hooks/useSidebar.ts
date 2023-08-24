import { useState, useEffect } from 'react';

interface SidebarHook {
    isSidebarOpen: boolean;
    toggleSidebar: () => void;
}

const useSidebar = (): SidebarHook => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 1024) {
                setIsSidebarOpen(true);
            } else {
                setIsSidebarOpen(false);
            }
        };

        handleResize();
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return { isSidebarOpen, toggleSidebar };
};

export default useSidebar;