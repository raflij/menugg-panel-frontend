import React, { useState, ChangeEvent, FormEvent } from 'react';
import { Link } from 'react-router-dom';
import { UserAuth } from '../../context/AuthContext'
import AuthLayout from '../../layouts/AuthLayout'
import InputForm from '../../components/Auth/InputForm'

const Signup: React.FC = () => {
  const { signup } = UserAuth();

  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');


  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const [showMsg, setShowMsg] = useState<boolean>(false);
  const [showError, setShowError] = useState<boolean>(showMsg);

  async function handleSignup(e: FormEvent) {
    e.preventDefault();
    setShowMsg(false);
    setError(null);
    setLoading(true);
    setShowError(false);
    try {
      await signup(email, password);
      setShowMsg(true);
      setSuccess('Akun kamu berhasil dibuat. Silahkan Login')
    } catch (error) {
      setShowMsg(true);
      setShowError(true);
      setError(error as string);
    } finally {
      setLoading(false);
    }
  }
  return (
    <AuthLayout>
      {loading &&
        <div className='absolute left-0 right-0 top-0 bottom-0 bg-white opacity-20 z-10'>
          <div className='relative top-0 w-full'>
          </div>
        </div>
      }
      <div className='relative'>
        <div className='flex justify-center'>
          <h1 className={`text-3xl stone-800 font-bold ${loading ? 'animate-bounce' : ''}`}>
            <span className='text-yellow-400/80'>Menu</span>GG
          </h1>
        </div>
        <div className='mt-10 flex justify-center'>
          <h1 className='text-3xl stone-900 font-medium'>
            Sign Up
          </h1>
        </div>
        <div className='mt-3 flex justify-center'>
          <h2 className='text-stone-500 text-sm'>
            Create your MenuGG account.
          </h2>
        </div>
        {showMsg &&
          <div className={`mt-3 ${error && 'bg-red-100' || success && 'bg-green-100'} w-full p-3 rounded-md flex justify-center`}>
            <h2 className={`${error && 'text-red-600' || success && 'text-green-600'} text-sm`}>{error || success}</h2>
          </div>
        }
        <form onSubmit={handleSignup} method='post' action=''>
          <div className='mt-3 grid grid-cols-1 gap-6 w-full'>
            <InputForm
              label='email'
              type='text'
              placeholder={`xyz@example.com`}
              value={email}
              onChange={(e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
              error={showError}
            />
            <InputForm
              label='password'
              type='password'
              placeholder='xxxxx'
              value={password}
              onChange={(e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
              error={showError}
            />
            <button
              className='w-full bg-gradient-to-r from-yellow-500/90 via-yellow-400 to-yellow-500/90
                        rounded-md text-white font-semibold py-2'>
              {loading ? 'Loading' : 'Signup'}
            </button>
          </div>
        </form>
        <div className='mt-8 flex justify-center'>
          <h1 className='text-sm text-neutral-500'>Sudah punya akun?
            <Link to='/login'>
              <span className='font-semibold'> Masuk di sini</span>
            </Link>
          </h1>
        </div>
      </div>
    </AuthLayout>
  )
}

export default Signup
