import React, { ReactNode } from 'react'
import { Navigate } from 'react-router-dom'
import { UserAuth } from '../context/AuthContext'

interface Props {
    children: ReactNode;
}

const ProtectedRoute: React.FC<Props> = ({ children }) => {
    const user = UserAuth();

    if (!user) {
        localStorage.removeItem('token');
        return <Navigate to="/login" />
    }

    return children;
}

export default ProtectedRoute