import React from 'react'
import WrapMenu from '../components/Menu/WrapMenu'
import CategoryMenu from '../components/Menu/CategoryMenu'
import Menu from '../components/Menu/Menu'

const ManageMenu: React.FC = () => {
    return (
        <div className='grow px-4'>
            <div className='grow bg-white shadow rounded-sm'>
                <div className='p-4 flex-none flex lg:fle justify-between items-center'>
                    <div className=''>
                        <h1 className='text-neutral-500 text-lg font-medium'>
                            Manajemen Menu dan Kategori Menu
                        </h1>
                    </div>
                    <button className='rounded-md text-white bg-stone-900 px-5 py-2 font-semibold'>
                        Add Category
                    </button>
                </div>
                <div className='p-4 grow flex flex-col space-y-6'>
                    <WrapMenu>
                        <CategoryMenu>
                            <Menu/>
                            <Menu/>
                            <Menu/>
                        </CategoryMenu>
                    </WrapMenu>
                    <WrapMenu>
                        <CategoryMenu>
                            <Menu/>
                        </CategoryMenu>
                    </WrapMenu>
                </div>
            </div>
        </div>
    )
}

export default ManageMenu
