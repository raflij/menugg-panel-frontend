import React, { createContext, useContext, useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { format, isToday, isYesterday } from 'date-fns';
import axios from 'axios';
import validator from 'email-validator';

interface UserContextType {
    login: (email: string, password: string) => void;
    signup: (email: string, password: string) => void; // Update this line to indicate the return type
    recentActivityDashboard: (email: string) => void;
    user: string | null;
    handleLogout: () => void;
    formatDate: (dateStr: string) => string;
    formatTime: (dateStr: string) => string;
}

interface AuthContextProviderProps {
    children: React.ReactNode;
}

const UserContext = createContext<UserContextType | undefined>(undefined);


export const AuthContextProvider: React.FC<AuthContextProviderProps> = ({ children }) => {

    const [user, setUser] = useState<string | null>(null);

    const navigate = useNavigate();
    const location = useLocation();

    const API_URL = import.meta.env.VITE_APP_API_KEY;

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (!token && location.pathname !== '/signup' && location.pathname !== '/login') {
            localStorage.removeItem('token');
            navigate('/login');
        } else if (token && location.pathname !== '/signup' && location.pathname !== '/login') {
            axios.get(import.meta.env.VITE_APP_API_KEY + '/api/profile', { headers: { Authorization: `Bearer ${token}` } })
                .then(hasil => {
                    if (hasil.data.response) {
                        setUser(hasil.data.user);
                    } else {

                        localStorage.removeItem('token');
                        navigate('/login');
                    }
                })
                .catch(e => {
                    localStorage.removeItem('token');
                    console.error(e.message);
                    navigate('/login');
                });
        }
    }, []);

    function signup(email: string, password: string) {
        return new Promise(async (resolve, reject) => {
            try {
                if (!email) {
                    reject('Email harus diisi');
                }
                if (!password) {
                    reject('Password harus diisi');
                }
                if (email.indexOf(" ") !== -1) {
                    reject('Email tidak valid');
                }
                if (!validator.validate(email)) {
                    if (!/[a-zA-Z]/.test(email)) {
                        reject('Email tidak valid');
                    }
                }
                if (email.length < 4) {
                    reject('Email tidak valid');
                }
                if (password.length > 32) {
                    reject('Password maksimal 32 karakter');
                }
                if (password.length < 6) {
                    reject('Password minimal 6 karakter');
                }
                const makeSignup = await axios.post(API_URL + '/api/signup', { email: email, password: password })
                if (makeSignup.data.response === false) {
                    reject(makeSignup.data.message);
                }
                if (makeSignup.data.response === true) {
                    resolve(true)
                }
            } catch (e) {
                reject(e);
            }
        })

    }

    function login(email: string, password: string) {
        return new Promise(async (resolve, reject) => {
            try {
                if (!email) {
                    reject('Email harus diisi');
                }
                if (!password) {
                    reject('Password harus diisi');
                }
                if (email.indexOf(" ") !== -1) {
                    reject('Akun kamu tidak ditemukan');
                }
                if (!validator.validate(email)) {
                    if (!/[a-zA-Z]/.test(email)) {
                        reject('Akun kamu tidak ditemukan');
                    }
                }
                if (email.length < 4) {
                    reject('Akun kamu tidak ditemukan');
                }
                if (password.length > 32) {
                    reject('Akun kamu tidak ditemukan');
                }
                if (password.length < 6) {
                    reject('Akun kamu tidak ditemukan');
                }
                const makeLogin = await axios.post(API_URL + '/api/login', { email: email, password: password })
                if (makeLogin.data.response === true) {
                    localStorage.setItem('token', makeLogin.data.token);
                    resolve(true)
                } else {
                    reject('Akun kamu tidak ditemukan');
                }
            } catch (e) {
                reject(e);
            }
        })

    }

    function handleLogout() {
        localStorage.removeItem('token');
        navigate('/login');
    }

    function recentActivityDashboard() {
        const token = localStorage.getItem('token');
        return new Promise(async (resolve, reject) => {
            try {
                const res = await axios.get(
                    API_URL + '/api/dashboard',
                    { headers: { Authorization: `Bearer ${token}` } }
                );
                resolve(res.data.activity)
            } catch (e) {
                reject(e);
            }
        })
    }

    function formatTime(dateStr: string): string {
        const date = new Date(dateStr);
        return format(date, 'HH:mm');
    }

    function formatDate(dateStr: string): string {
        const date = new Date(dateStr);
        if (isToday(date)) {
            return 'Today ';
        } else if (isYesterday(date)) {
            return 'Yesterday ';
        } else {
            return format(date, 'MM/dd/yyyy');
        }
    }

    return (
        <UserContext.Provider value={{
            login, signup, user, handleLogout, recentActivityDashboard, formatDate, formatTime
        }}>
            {children}
        </UserContext.Provider>
    );
}

export const UserAuth = (): UserContextType => {
    const context = useContext(UserContext);
    if (context === undefined) {
        throw new Error("useUserAuth must be used within an AuthContextProvider");
    }
    return context;
}