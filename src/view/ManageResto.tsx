import React, { useRef, useState, useEffect, ChangeEvent, FormEvent } from 'react'
import { Element, scroller } from 'react-scroll';
import ImageKit from 'imagekit';
import { UserAuth } from '../context/AuthContext'
import Input from '../components/Forms/Input'
import ButtonLivePreview from '../components/UI/Buttons/ButtonLivePreview'

interface Restaurant {
    restaurantName: string;
    phoneNumber: string;
    description: string;
    location: string;
    googleMapLink: string;
    imageUrl: string;
}

const ManageResto: React.FC = () => {
    const { user, saveRestaurant, fetchRestaurant } = UserAuth();

    const publicKey = 'public_EseaKWMYsrBpvEc2lUhQrY1FG8o=';
    const privateKey = 'private_phg8CNt6ENn+Di6/edbymuKp/zk=';
    const urlEndpoint = 'https://ik.imagekit.io/zdmzjar1fr';

    const imagekit = new ImageKit({
        publicKey: publicKey,
        privateKey: privateKey,
        urlEndpoint: urlEndpoint,
    });

    const [selectedImage, setSelectedImage] = useState<File | null>(null);
    const [imagePreviewUrl, setImagePreviewUrl] = useState<string | null>(null);
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        setSelectedImage(file || null);

        if (file) {
            const previewUrl = URL.createObjectURL(file);
            setImagePreviewUrl(previewUrl);
        }
    };

    const handleSelectImage = () => {
        if (fileInputRef.current) {
            fileInputRef.current.click();
        }
    };


    const [restaurantInfo, setRestaurantInfo] = useState<Restaurant[]>([]);

    useEffect(() => {
        async function fetchActivity() {
            try {
                const res = await fetchRestaurant();

                if (typeof res === 'object') {
                    setRestaurantInfo([res]);
                } else {
                    console.error('Invalid fetch data');
                }
            } catch (error) {
                console.error('Error fetching activity:', error);
            }
        };

        fetchActivity();
    }, []);

    useEffect(() => {
        if (restaurantInfo.length > 0) {
            setRestaurantName(restaurantInfo[0].restaurantName)
            setPhoneNumber(restaurantInfo[0].phoneNumber);
            setDescription(restaurantInfo[0].description);
            setLocation(restaurantInfo[0].location);
            setGoogleMapLink(restaurantInfo[0].googleMapLink);
            setImageUrl(restaurantInfo[0].imageUrl);
        }
    }, [restaurantInfo]);


    const [restaurantName, setRestaurantName] = useState<string>('');
    const [phoneNumber, setPhoneNumber] = useState<string>('');
    const [description, setDescription] = useState<string>('');
    const [location, setLocation] = useState<string>('');
    const [googleMapLink, setGoogleMapLink] = useState<string>('');
    const [imageUrl, setImageUrl] = useState<string>('');

    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);
    const [success, setSuccess] = useState<string | null>(null);
    const [showMsg, setShowMsg] = useState<boolean>(false);

    async function handleSubmit(e: FormEvent) {
        e.preventDefault();
        setShowMsg(false);
        setError(null);
        setLoading(true);
        try {
            if (user !== null) {

                if (!user) {
                    throw new Error('Access denied')
                }
                if (!restaurantName) {
                    throw new Error('Nama restoran / cafe harus diisi')
                }
                if (!location) {
                    throw new Error('Alamat harus diisi')
                }
                if (phoneNumber && phoneNumber.length < 9) {
                    throw new Error('Nomor telepon tidak valid')
                }
                if (restaurantName && restaurantName.length > 64) {
                    throw new Error('Nama restoran / cafe tidak boleh lebih dari 64 karakter')
                }
                if (description && description.length > 150) {
                    throw new Error('Deskripsi atau kata kunci tidak boleh lebih dari 150 karakter')
                }
                if (location && location.length > 150) {
                    throw new Error('Alamat tidak boleh lebih dari 150 karakter')
                }
                if (googleMapLink && googleMapLink.length > 250) {
                    throw new Error('Alamat tidak boleh lebih dari 250 karakter')
                }
                let imageKitUrl = imageUrl;
                if (selectedImage) {
                    const fileReader = new FileReader();
                    fileReader.onload = async () => {
                        const response = await imagekit.upload({
                            file: fileReader.result as string,
                            fileName: selectedImage.name,
                        });

                        const uploadResponse = await response;
                        imageKitUrl = uploadResponse.url;
                        console.log('Image uploaded:', uploadResponse.url);
                        await saveRestaurant(restaurantName, phoneNumber, description, location, googleMapLink, imageKitUrl, user);

                        setShowMsg(true);
                        setSuccess('Informasi restoran / cafe berhasil disimpan')
                    };
                    fileReader.readAsDataURL(selectedImage);
                } else {
                    await saveRestaurant(restaurantName, phoneNumber, description, location, googleMapLink, imageKitUrl, user);
                    setShowMsg(true);
                    setSuccess('Informasi restoran / cafe berhasil disimpan')
                }
            }
        } catch (error) {
            setShowMsg(true);
            setError(error as string);
        } finally {
            scroller.scrollTo('messageElement', {
                smooth: true,
                duration: 500, // You can adjust the offset as needed
            });
            setLoading(false); // Adjust offset as needed
        }
    }
    return (
        <div className='grow px-4'>
            <div className='grow bg-white shadow rounded-sm'>
                <div className='p-4 flex-none flex justify-between items-center'>
                    <div className=''>
                        <h1 className='text-neutral-500 text-lg font-medium'>
                            Informasi Restoran / Cafe
                        </h1>
                    </div>
                    <ButtonLivePreview />
                </div>
                <Element name="messageElement">
                    {showMsg &&
                        <div className='px-4 flex'>
                            <div className={`mt-3 ${error && 'bg-red-100' || success && 'bg-green-100'} w-full p-3 rounded-md flex justify-center`}>
                                <h2 className={`${error && 'text-red-600' || success && 'text-green-600'} text-base font-medium`}>{error || success}</h2>
                            </div>
                        </div>
                    }
                </Element>
                <form onSubmit={handleSubmit} method='post' action=''>
                    <div className='p-4 grow'>
                        <div className='flex flex-col space-y-6'>
                            <div className='flex lg:flex-row flex-col items-start lg:items-center lg:space-x-8'>
                                <Input
                                    label='Nama Restoran / Cafe'
                                    type='text'
                                    placeholder='Nama Restoran / Cafe'
                                    onChange={(e: ChangeEvent<HTMLInputElement>) => setRestaurantName(e.target.value)}
                                    value={restaurantName}
                                />
                                <Input
                                    label='Nomor Telepon (Whatsapp)'
                                    type='text'
                                    placeholder='Whatsapp +6281xxxxx'
                                    onChange={(e: ChangeEvent<HTMLInputElement>) => setPhoneNumber(e.target.value)}
                                    value={phoneNumber}
                                />
                            </div>
                            <Input
                                label='Deskripsi atau Kata Kunci Restoran / Cafe'
                                type='text'
                                placeholder='Contoh: Cafe, Restaurant, Aneka Nasi'
                                onChange={(e: ChangeEvent<HTMLInputElement>) => setDescription(e.target.value)}
                                value={description}
                            />
                            <Input
                                label='Alamat'
                                type='text'
                                placeholder='Alamat'
                                onChange={(e: ChangeEvent<HTMLInputElement>) => setLocation(e.target.value)}
                                value={location}
                            />
                            <Input
                                label='Link Google Map'
                                type='text'
                                placeholder='Link Google Map Jika Ada'
                                onChange={(e: ChangeEvent<HTMLInputElement>) => setGoogleMapLink(e.target.value)}
                                value={googleMapLink}
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
                                <div
                                    className={`flex justify-center items-center mt-4 rounded-md border border-neutral-200 w-[300px] h-[173px]
                                            ${selectedImage ? 'bg-cover bg-top' : 'bg-neutral-100 '}`}
                                    style={{
                                        backgroundImage: `url(${imageUrl && !selectedImage ? imageUrl + '?tr=w-300,h-173' : imagePreviewUrl})`,
                                    }}
                                >
                                    {!selectedImage && !imageUrl &&
                                        <h1 className='text-neutral-400 font-semibold text-2xl'>Gambar</h1>
                                    }
                                </div>
                            </label>
                            <label className='block w-full'>
                                <input
                                    type="file"
                                    accept="image/*"
                                    onChange={handleImageChange}
                                    style={{ display: 'none' }}
                                    ref={fileInputRef}
                                />
                                <button
                                    className='mt-6 rounded-md px-5 py-1 border border-yellow-600 text-yellow-600 font-semibold'
                                    onClick={(e) => {
                                        e.preventDefault(); // Prevent the form submission
                                        handleSelectImage();
                                    }}
                                >
                                    {imageUrl ? 'Ganti Gambar' : 'Pilih Gambar'}
                                </button>
                            </label>
                        </div>

                    </div>
                    <div className='flex-none flex justify-center items-center py-8'>
                        <button className='rounded-md text-white bg-green-500 px-5 py-2 font-semibold shadow-xl'>
                            {loading ? 'Please wait... ' : 'Simpan'}
                        </button>
                    </div>
                </form>
            </div>
            <div className="bottom-0 rounded-b-md bg-gradient-to-r from-lime-400 to-yellow-400 h-1"></div>
        </div>
    )
}

export default ManageResto
