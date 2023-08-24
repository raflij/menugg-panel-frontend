import React from 'react'
import { Icon } from '@iconify/react';
import { Link, useLocation } from 'react-router-dom';

interface Props {
    icon: string;
    label: string;
    to: string;
    target?: string;
}

const SidebarMenu: React.FC<Props> = ({ icon, label, to, target }) => {
    const location = useLocation();
    return (
        <li className={`py-3 px-6
        ${location.pathname === to ? 'font-semibold text-yellow-600 border-l-[3px] border-l-yellow-500 bg-yellow-100/50' : ''}
        `}>
            <Link to={to} target={target}>
                <div className='flex items-center'>
                    <i className='mr-2'>
                        <Icon icon={icon} width="20" height="20" />
                    </i>
                    {label}
                </div>
            </Link>
        </li>
    )
}

export default SidebarMenu
