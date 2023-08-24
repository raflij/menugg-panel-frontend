import React from 'react'
import MainLayot from '../layouts/MainLayout';
import Upgrade from '../view/Upgrade';

const UpgradePage: React.FC = () => {
  return (
    <MainLayot>
      <div className='bg-neutral-100 grow flex flex-col pb-24'>
        <div className='flex-none flex justify-between items-center p-4'>
          <h1 className='text-lg font-semibold text-neutral-500'>Upgrade Plan</h1>
        </div>
        <Upgrade/>
      </div>
    </MainLayot>
  )
}

export default UpgradePage
