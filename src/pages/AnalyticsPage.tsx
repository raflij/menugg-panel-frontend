import React from 'react'
import MainLayot from '../layouts/MainLayout';

const Analytics: React.FC = () => {
  return (
    <MainLayot>
      <div className='bg-neutral-100 grow  flex flex-col'>
        <div className='flex-none flex justify-between items-center p-4'>
          <h1 className='text-lg font-semibold text-neutral-500'>Analytics</h1>
        </div>
        <div className='grow flex justify-center items-center text-4xl'>
          ...
        </div>
      </div>
    </MainLayot>
  )
}

export default Analytics