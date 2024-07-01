import { useContext, useEffect, useState,useRef } from 'react';
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import Swal from 'sweetalert2'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { AuthContext } from '../../providers/AuthProvider';
import SocialLogin from '../Components/SocialLogin/SocialLogin';
import Navbar from '../../Shared/Navbar';

const Login = () => {
    
  
    const [disabled, setDisabled] = useState(true);
    const [showPassword, setShowPassword] = useState(false);
    const {signin}=useContext(AuthContext)
  const navigate=useNavigate();
  const location=useLocation();
  const from=location.state?.form?.pathname||"/";

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
       signin(email,password)
       .then(result=>{
        const user=result.user;
        console.log(user);
        Swal.fire({
            title: "User Login Successful",
            showClass: {
              popup: `
                animate__animated
                animate__fadeInUp
                animate__faster
              `
            },
            hideClass: {
              popup: `
                animate__animated
                animate__fadeOutDown
                animate__faster
              `
            }
          });
          navigate(from, {replace:true});
       })
    }
    
  

    return (
        <>
            <Helmet>
                <title>Quick Bite|Login</title>
            </Helmet>
            <Navbar/>
            <div className='font-sedan flex flex-col items-center justify-center min-h-screen'>
             
                <div className='flex justify-center items-center w-full mt-20'>
                    <form onSubmit={handleLogin} className='w-full max-w-md mx-auto p-10 bg-white rounded-lg shadow-lg'>
                        <p className='text-3xl text-center py-2 font-sedan'>Login</p>
                        <div className='mb-5'>
                            <label htmlFor='role' className='block mb-2 text-lg font-medium text-gray-900'>
                                Login as
                            </label>
                            <select
                                id='role'
                                name='role'
                                className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5'
                                required
                            >
                                <option value=''>Select role</option>
                                <option value='hr'>HR</option>
                                <option value='admin'>Admin</option>
                            </select>
                        </div>

                        <div className='mb-5'>
                            <label htmlFor='email' className='block mb-2 text-lg font-medium text-gray-900'>
                                Your email
                            </label>
                            <input
                                type='email'
                                id='email'
                                name='email'
                                className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5'
                                required
                            />
                        </div>
                        <div className='mb-5'>
                            <label htmlFor='password' className='block mb-2 text-lg font-medium text-gray-900'>
                                Your password
                            </label>
                            <div className='relative'>
                                <input
                                    type={showPassword ? 'text' : 'password'}
                                    id='password'
                                    name='password'
                                    className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5'
                                    required
                                />
                                <button
                                    type='button'
                                    className='absolute inset-y-0 right-0 px-3 py-1 text-sm text-gray-600'
                                    onClick={() => setShowPassword(!showPassword)}
                                >
                                    {showPassword ? 'Hide' : 'Show'}
                                </button>
                            </div>
                        </div>

                        <input
                            type='submit'
                            className='text-white focus:ring-4 focus:outline-none font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center bg-gradient-to-r from-violet-500 to-fuchsia-500'
                        />
                    </form>
                </div>
                <div className='text-lg text-center py-5'>
                    <p>New here? <Link to='/signup' className='text-amber-900'>Create an account</Link></p>
                    <p>or</p>
                    <p>Login with <SocialLogin /></p>
                </div>
            </div>

        </>
    );
};

export default Login;