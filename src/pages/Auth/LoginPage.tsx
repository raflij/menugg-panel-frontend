import React, { useState, ChangeEvent, FormEvent } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserAuth } from '../../context/AuthContext'
import AuthLayout from '../../layouts/AuthLayout';
import InputForm from '../../components/Auth/InputForm';

const Login: React.FC = () => {

  const { login } = UserAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState<string>('demo@menu.gg');
  const [password, setPassword] = useState<string>('demo@menu.gg');


  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [showError, setShowError] = useState<boolean>(false);

  async function handleLogin(e: FormEvent) {
    e.preventDefault();
    setShowError(false);
    setError(null);
    setLoading(true);
    try {
      await login(email, password);
      navigate('/');
    } catch (error) {
      setError(error as string);
      setShowError(true);
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
          <h1 className='text-3xl stone-900 font-medium'>Sign In</h1>
        </div>
        <div className='mt-3 flex justify-center'>
          <h2 className='text-stone-500 text-sm'>Login to stay connected.</h2>
        </div>
        {showError &&
          <div className='mt-3 flex justify-center bg-red-100 w-full p-3 rounded-md'>
            <h2 className='text-red-600 text-sm'>{error}</h2>
          </div>
        }
        <form onSubmit={handleLogin} method='post' action=''>
          <div className='mt-3 grid grid-cols-1 gap-6'>
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
              type='submit'
              className='w-full bg-gradient-to-r from-yellow-500/90 via-yellow-400 to-yellow-500/90
                       rounded-md text-white font-semibold py-2'
            >
              {loading ? 'Loading' : 'Login'}
            </button>
          </div>
        </form>
        <div className='mt-8 flex justify-center'>
          <h1 className='text-sm text-neutral-500'>
            Belum punya akun?
            <Link to='/signup'>
              <span className='font-semibold'> Daftar di sini</span>
            </Link>
          </h1>
        </div>
      </div>
    </AuthLayout>
  );
};

export default Login;
