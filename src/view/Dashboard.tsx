import React, { useState, useEffect } from 'react'
import { UserAuth } from '../context/AuthContext'
import DashboardCard from '../components/Dashboard/DashboardCard';
import DashboardActivityCard from '../components/Dashboard/DashboardActivityCard';
import AlertDashboard from '../components/UI/Alert/AlertDashboard';

interface Activity {
    activityType: string;
    activityMessage: string;
    ipAddress: string;
    createdAt: string;
}

const Dashboard: React.FC = () => {
    const {
        formatDate,
        formatTime,
        recentActivityDashboard,
        user
    } = UserAuth();
    const [recentActivity, setRecentActivity] = useState<Activity[]>([]);

    useEffect(() => {
        async function fetchActivity() {
            try {
                const res = await recentActivityDashboard(user as string);

                if (Array.isArray(res)) {
                    setRecentActivity(res);
                } else {
                    console.error('Invalid fetch data');
                }
            } catch (error) {
                console.error('Error fetching activity:', error);
            }
        };

        fetchActivity();
    }, [recentActivityDashboard, user]);
    return (
        <div className='grow mb-4'>
            <div className='flex flex-wrap gap-2 items-center px-4'>
                <DashboardCard
                    label='Pengunjung'
                    total='10,021'
                    newData='1,660'
                    dataInfo='Pengunjung bulan ini'
                    icon='subway:world'
                    iconColor='bg-lime-500'
                />
                <DashboardCard
                    label='Category Menu'
                    total='5'
                    newData='1'
                    dataInfo='Kategori menu baru'
                    icon='material-symbols:menu-book-outline'
                    iconColor='bg-sky-500'
                />
                <DashboardCard
                    label='Menu'
                    total='24'
                    newData='3'
                    dataInfo='Menu baru ditambahkan'
                    icon='icon-park-solid:fork-spoon'
                    iconColor='bg-yellow-400'
                />
            </div>
            <div className='mt-2 flex flex-wrap gap-2 items-start px-4'>
                <div className='grow bg-white shadow rounded-sm pt-4'>
                    <div className='px-4 pb-4 flex-none'>
                        <h1 className='font-semibold text-stone-700 text-xl'>Selamat datang 👋, user</h1>
                        <div className='mt-2'>
                            <h2 className='text-stone-700'>
                                Baru bergabung MenuGG? Lihat <span className='hover:cursor-pointer font-medium'>panduan untuk memulai</span>
                            </h2>
                        </div>
                    </div>
                    <div className='px-4 grow bg-neutral-50 mt-2 py-8 space-y-4'>
                        <div className=''>
                            <h2 className='text-stone-500'>
                                Saat ini anda menggunakan layanan Free Plan
                            </h2>
                        </div>
                        <AlertDashboard
                            message='Menu digital anda dapat menerima 2000 pengunjung bulan ini. '
                            usage='Total pengunjung bulan ini: 1,660'
                        />
                        <AlertDashboard
                            message='Kamu bisa menambahkan hingga 5 kategori menu dan 25 menu.'
                        />
                    </div>
                    <div className='px-4 py-6'>
                        <button className='rounded-md px-5 py-3 bg-green-500 text-white font-semibold text-sm'>Upgrade Plan</button>
                    </div>
                    <div className="bottom-0 rounded-b-md bg-gradient-to-r from-lime-400 to-yellow-400 h-1"></div>
                </div>
                <div className='flex-none bg-white shadow rounded-sm pb-6'>
                    <div className='px-4 py-5'>
                        <h1 className='text-lg text-neutral-500 font-medium'>Aktivitas Terbaru</h1>
                    </div>
                    {recentActivity.length > 0 &&
                        recentActivity.map((hasil, i) => (
                            <DashboardActivityCard
                                key={i}
                                time={formatTime(hasil.createdAt)}
                                ringColor={
                                    hasil.activityType === 'login' ? 'border-red-400' : ''
                                }
                                message={formatDate(hasil.createdAt) + hasil.activityMessage}
                                ipAddress={hasil.ipAddress}
                                isLast={
                                    i === recentActivity.length - 1 && true
                                }
                            />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Dashboard
