import React from 'react'
import MainLayot from '../layouts/MainLayout';
import ManageMenu from '../view/ManageMenu';

const ManageMenuPage: React.FC = () => {
  return (
    <MainLayot>
      <div className='bg-neutral-100 grow flex flex-col'>
        <div className='flex-none flex justify-between items-center p-4'>
          <h1 className='text-lg font-semibold text-neutral-500'>Menu & Kategori Menu</h1>
        </div>
        <ManageMenu/>
      </div>
    </MainLayot>
  )
}

export default ManageMenuPage
