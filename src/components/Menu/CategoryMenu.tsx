import React, { ReactNode } from 'react'
import ButtonManageCategoryMenu from '../UI/Buttons/ButtonManageCategoryMenu'

interface Props {
    children: ReactNode;
}

const CategoryMenu: React.FC<Props> = ({ children }) => {
    return (
        <>
            <div className='rounded-lg z-10 shadow-md bg-gray-700 p-6 flex justify-between items-center'>
                <div className='flex items-center'>
                    <ButtonManageCategoryMenu icon='icon-park-outline:down' />
                    <h1 className='text-white font-semibold text-xl'>Kategori Menu 1</h1>
                </div>
                <div className='flex items-center space-x-2'>
                    <ButtonManageCategoryMenu bg='bg-lime-700' icon='icon-park-outline:plus' />
                    <ButtonManageCategoryMenu bg='bg-yellow-600' icon='uil:edit' />
                    <ButtonManageCategoryMenu bg='bg-red-600' icon='ion:trash-outline' />
                </div>
            </div>
            <div className='z-0 ml-6 rounded-t-none -mt-2 rounded-lg shadow-md bg-white p-6 border border-t-0 border-neutral-200 space-y-4'>
                {children}
            </div>
        </>
    )
}

export default CategoryMenu
