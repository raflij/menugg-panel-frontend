import React from 'react'
import { Icon } from '@iconify/react'

interface Props {
    icon: string;
    bg?: string;
}

const ButtonManageMenu: React.FC<Props> = ({ icon, bg }) => {
    return (
        <button className={`${bg && bg} rounded h-7 w-7 flex justify-center items-center text-white`}>
            <Icon icon={icon} width="14" height="14" />
        </button>
    )
}

export default ButtonManageMenu