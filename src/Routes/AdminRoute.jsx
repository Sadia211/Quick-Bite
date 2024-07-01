import React from 'react';
import useAdmin from '../pages/Components/hooks/useAdmin';
import useAuth from '../pages/Components/hooks/useAuth';
import { useLocation } from 'react-router-dom';
const AdminRoute = ({children}) => {
    const {user,loading}=useAuth();
    const[isAdmin,isAdminLoading]=useAdmin();
    const location=useLocation();
    if(loading||isAdminLoading){
        return <progress className="progress w-56"></progress>
    }
    if (user&&isAdmin){
        return children;
    }
    return <Navigate to='/' state={{from:location}}></Navigate>
};

export default AdminRoute;