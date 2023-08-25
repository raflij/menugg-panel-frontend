import React from 'react'

interface Props {
    time: string;
    ringColor: string;
    message: string;
    isLast?: boolean;
    ipAddress: string;
}

const DashboardActivityCard: React.FC<Props> = ({ time, ringColor, message, isLast, ipAddress }) => {
    return (
        <div className='relative flex items-center h-10 space-x-2 px-4'>
            <div className='relative flex-none'>
                <p className='text-sm text-neutral-700'>{time}</p></div>
            <div className='relative flex flex-col items-center justify-center flex-none'>
                <div className={`relative rounded-full w-[16px] h-[16px] border-2 ${ringColor}`}></div>
                <div className={`relative`}>
                    <div className={`absolute ${!isLast ? 'h-6 w-[2px] bg-neutral-300' : ''}`}>
                        <span className='pl-4 text-neutral-400 text-sm'>{ipAddress}</span>
                    </div>
                </div>
            </div>
            <div className='relative flex-none'>
                <p className='text-sm text-neutral-700'>{message}</p>
            </div>
        </div>
    )
}

export default DashboardActivityCard
