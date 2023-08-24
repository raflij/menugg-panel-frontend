import React from 'react'
import { Icon } from '@iconify/react'

interface Props {
    icon: string;
    bg?: string;
}

const ButtonManageCategoryMenu: React.FC<Props> = ({ icon, bg }) => {
    return (
        <button className={`${bg && bg} rounded h-9 w-9 flex justify-center items-center text-white`}>
            <Icon icon={icon} width="18" height="18" />
        </button>
    )
}

export default ButtonManageCategoryMenu
