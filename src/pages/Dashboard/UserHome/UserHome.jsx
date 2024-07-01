import React from 'react';
import useAuth from '../../Components/hooks/useAuth';
const {user}=useAuth
const UserHome = () => {
    return (
        <div>
            {
                user?.dislayname?user.displayname:"Back"
            }
        </div>
    );
};

export default UserHome;