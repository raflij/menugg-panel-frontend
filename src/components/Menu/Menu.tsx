import React from 'react'
import ButtonManageMenu from '../UI/Buttons/ButtonManageMenu'

const Menu: React.FC = () => {
    return (
            <div className='grow rounded-lg shadow-md bg-neutral-100 p-4 flex justify-between items-center'>
                <div className='flex items-center space-x-4'>
                    <h1 className='text-neutral-500 font-semibold text-lg'>Menu 1</h1>
                    <span className='rounded-full font-bold text-xs px-2 py-1 bg-yellow-200/60 border border-yellow-400 text-yellow-600 '>Rp 10,000</span>
                    <span className='text-lime-500 font-semibold text-sm'>Tersedia</span>
                </div>
                <div className='flex items-center space-x-2'>
                    <ButtonManageMenu bg='bg-lime-700' icon='icon-park-outline:plus' />
                    <ButtonManageMenu bg='bg-yellow-600' icon='uil:edit' />
                    <ButtonManageMenu bg='bg-red-600' icon='ion:trash-outline' />
                </div>
            </div>
    )
}

export default Menu
