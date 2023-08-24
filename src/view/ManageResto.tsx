import React from 'react'
import Input from '../components/Forms/Input'
import ButtonLivePreview from '../components/UI/Buttons/ButtonLivePreview'

const ManageResto: React.FC = () => {
    return (
        <div className='grow px-4'>
            <div className='grow bg-white shadow rounded-sm'>
                <div className='p-4 flex-none flex justify-between items-center'>
                    <div className=''>
                        <h1 className='text-neutral-500 text-lg font-medium'>
                            Informasi Restoran / Cafe
                        </h1>
                    </div>
                    <ButtonLivePreview/>
                </div>
                <div className='p-4 grow'>
                    <div className='flex flex-col space-y-6'>
                        <div className='flex lg:flex-row flex-col items-start lg:items-center lg:space-x-8'>
                            <Input
                                label='Nama Restoran / Cafe'
                                type='text'
                                placeholder='Nama Restoran / Cafe'
                            />
                            <Input
                                label='Nomor Telepon (Whatsapp)'
                                type='text'
                                placeholder='Whatsapp +6281xxxxx'
                            />
                        </div>
                        <Input
                            label='Deskripsi atau Kata Kunci Restoran / Cafe'
                            type='text'
                            placeholder='Contoh: Cafe, Restaurant, Aneka Nasi'
                        />
                        <Input
                            label='Alamat'
                            type='text'
                            placeholder='Alamat'
                        />
                        <Input
                            label='Link Google Map'
                            type='text'
                            placeholder='Link Google Map Jika Ada'
                        />
                        <label className='block w-full'>
                            <span>Atur Jam Buka</span>
                            <input
                                autoComplete='off'
                                className="mt-4 text-sm bg-neutral-50/30 text-stone-500 placeholder-stone-400 block
                w-full rounded-md border-stone-200 shadow-sm
                focus:border-yellow-400  focus:outline-none focus:ring-1 focus:ring-yellow-400
                "
                            />
                        </label>
                        <label className='block w-full'>
                            <span>Gambar Restoran / Cafe / Makanan / Minuman</span>
                            <div className='flex justify-center items-center mt-4 rounded-md bg-neutral-100 border border-neutral-200 w-[300px] h-[150px]'>
                                <h1 className='text-neutral-400 font-semibold text-2xl'>Gambar</h1>
                            </div>
                            <button className='mt-6 rounded-md px-5 py-1 border border-yellow-600 text-yellow-600 font-semibold'>Pilih Gambar</button>
                        </label>
                    </div>

                </div>
                <div className='flex justify-center items-center py-8'>
                    <button className='rounded-md text-white bg-green-500 px-5 py-2 font-semibold shadow-xl'>
                        Simpan
                    </button>
                </div>
            </div>
            <div className="bottom-0 rounded-b-md bg-gradient-to-r from-lime-400 to-yellow-400 h-1"></div>
        </div>
    )
}

export default ManageResto
