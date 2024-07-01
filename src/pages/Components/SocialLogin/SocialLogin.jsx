import React from 'react';
import { FaGoogle } from 'react-icons/fa';
import useAuth from '../hooks/useAuth';
import useAxiosPublic from '../hooks/useAxiosPublic';
import { useNavigate } from 'react-router-dom';

const SocialLogin = () => {
    const {googleSignin}=useAuth();
    const axiosPublic=useAxiosPublic();
    const navigate=useNavigate();
    const handlegoogleSignin=()=>{
        googleSignin()
        .then(result=>{
            console.log(result.user)
            const userInfo={
                email:result.user?.email,
                name:result.user?.displayName
            }
            axiosPublic.post('/users',userInfo)
            .then(res=>{
                console.log(res.data);
                navigate('/');
            })
        })

    }
    return (
        <div>
            <button onClick={handlegoogleSignin} className='btn'>
                Google
                <FaGoogle></FaGoogle>
            </button>
            
        </div>
    );
};

export default SocialLogin;