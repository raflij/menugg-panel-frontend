import React from 'react';
import MainLayot from '../layouts/MainLayout';
import ManageResto from '../view/ManageResto';

const ManageRestoPage: React.FC = () => {
  return (
    <MainLayot>
      <div className='bg-neutral-100 grow flex flex-col pb-24'>
        <div className='flex-none flex justify-between items-center p-4'>
          <h1 className='text-lg font-semibold text-neutral-500'>Restaurant</h1>
        </div>
        <ManageResto />
      </div>
    </MainLayot>
  );
};

export default ManageRestoPage;