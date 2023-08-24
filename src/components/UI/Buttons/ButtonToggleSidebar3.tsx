import React from 'react'
import { Icon } from '@iconify/react';

interface Props {
    toggleSidebar: () => void;
}

const ButtonSidebar: React.FC<Props> = ({ toggleSidebar }) => {
    return (
        <button onClick={toggleSidebar}>
            <Icon icon="icon-park-outline:double-right" width="18" height="18" />
        </button>
    )
}

export default ButtonSidebar
