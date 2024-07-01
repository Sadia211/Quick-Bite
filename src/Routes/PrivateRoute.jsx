import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import { Navigate,  useLocation } from 'react-router-dom';
import useAuth from '../pages/Components/hooks/useAuth';

const PrivateRoute = ({children}) => {
    const{user,loading}=useAuth();
    const location=useLocation();
    if(loading){
        return <progress className="progress w-56"></progress>
    }
    if (user,loading){
        return children;
    }
    return <Navigate to='/login' state={{from:location}}></Navigate>
};

export default PrivateRoute;