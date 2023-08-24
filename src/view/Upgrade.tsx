import React from 'react'
import ButtonUpgrade from '../components/UI/Buttons/ButtonUpgradeDashboard'

const Upgrade: React.FC = () => {
    return (
        <div className='grow px-4'>
            <div className='grow bg-white shadow rounded-sm'>
                <div className='p-4 flex-none flex justify-start items-start'>
                    <div className='p-4'>
                        <h1 className='text-neutral-500 text-lg font-medium'>
                            Layanan Anda Saat Ini
                        </h1>
                    </div>
                </div>
                <div className='p-4 bg-neutral-50'>
                    <div className='p-4'>
                        <table className='table-auto w-full'>
                            <thead className='bg-neutral-600'>
                                <tr className='text-neutral-100'>
                                    <td className='p-4 rounded-l'>Plan</td>
                                    <td className='p-4'>Start Date</td>
                                    <td className='p-4 rounded-r'>Expiry Date</td>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className='text-neutral-500'>
                                    <td className='p-4'>Free Plan</td>
                                    <td className='p-4'>20/08/2023</td>
                                    <td className='p-4'></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className='p-8'>
                    <ButtonUpgrade/>
                </div>
            </div>
        </div>
    )
}

export default Upgrade
