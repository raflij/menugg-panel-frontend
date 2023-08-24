import React from 'react'
import { Icon } from '@iconify/react'

interface Props {
    label: string;
    total: string;
    newData?: string;
    dataInfo?: string;
    icon: string;
    iconColor: string;
}

const DashboardCard: React.FC<Props> = ({ label, total, newData, dataInfo, icon, iconColor }) => {
    return (
        <div className='flex justify-between items-start p-4 rounded bg-white shadow grow'>
            <div className=''>
                <p className='text-neutral-400 font-semibold uppercase text-sm'>{label}</p>
                <div className='mt-4'>
                    <h1 className='text-neutral-500 font-semibold text-2xl'>{total}</h1>
                </div>
                {newData &&
                    <div className='flex items-center space-x-2 mt-5'>
                        <div className='bg-lime-500 flex items-center rounded-sm px-[6px] py-[2px]'>
                            <i>
                                <Icon icon="fluent:arrow-up-12-filled" width="12" height="12" className='text-neutral-50' />
                            </i>
                            <span className='ml-1 text-xs text-white font-semibold'>{newData}</span>
                        </div>
                        <p className='text-sm text-neutral-400'>{dataInfo}</p>
                    </div>
                }
            </div>
            <div className={`relative flex justify-center items-center rounded-lg p-2 ${iconColor}`}>
                <i className='absolute text-white'>
                    <Icon icon={icon} width="24" height="24" />
                </i>
                <div className='relative w-6 h-6'></div>
            </div>
        </div>
    )
}

export default DashboardCard
