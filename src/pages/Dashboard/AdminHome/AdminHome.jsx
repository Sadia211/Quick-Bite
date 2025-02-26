import React from 'react';
import useAuth from '../../Components/hooks/useAuth';
import { useQuery } from '@tanstack/react-query';
import useAxioSecure from '../../Components/hooks/useAxioSecure';
import { FaDollarSign } from 'react-icons/fa';


const AdminHome = () => {
    const {user}=useAuth();
    const axiossecure=useAxioSecure();
 const {data:stats={}}=useQuery({
    queryKey:['admin-stats'],
    queryFn:async()=>{
        const res=await axiossecure.get('/admin-stats');
        return res.data;
    }
 })


    return (
        <div className='mx-20 my-20'>
          <h2 className='text-3xl font-bold'>Welcome Back</h2>
            <h2 className='mb-5'>
            {
              user?.displayName? user.displayName:" admin back"
            }</h2>
            <div className="stats shadow">
  
  <div className="stat">
    <div className="stat-figure text-secondary">
      <FaDollarSign></FaDollarSign>
    </div>
    <div className="stat-title">Revenue</div>
    <div className="stat-value">${stats.revenue}</div>
    <div className="stat-desc">Jan 1st - Feb 1st</div>
  </div>
  
  <div className="stat">
    <div className="stat-figure text-secondary">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path></svg>
    </div>
    <div className="stat-title">New Users</div>
    <div className="stat-value">{stats.users}</div>
    <div className="stat-desc">↗︎ 400 (22%)</div>
  </div>
  
  <div className="stat">
    <div className="stat-figure text-secondary">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"></path></svg>
    </div>
    <div className="stat-title">Menu Items</div>
    <div className="stat-value">{stats.menuitems}</div>
    <div className="stat-desc">↘︎ 90 (14%)</div>
  </div>
  
</div>
        </div>
    );
};

export default AdminHome;