import React from 'react'
import { Icon } from '@iconify/react'

interface Props {
    label: string;
    icon?: string;
    onClick?: () => void;
}

const NavbarCardMenu: React.FC<Props> = ({ label, icon, onClick }) => {
    return (
        <button className='flex items-center space-x-2' onClick={onClick}>
            {icon &&
                <i><Icon icon={icon} width="14" height="14" /></i>
            }
            <p className='capitalize'>{label}</p>
        </button>
    )
}

export default NavbarCardMenu
