import React from 'react';
import { FaAd, FaBook, FaCalendar, FaHome, FaList, FaSearch, FaShoppingCart, FaUser, FaUtensils, FaVoicemail,FaEnvelope } from 'react-icons/fa';
import { NavLink, Outlet } from 'react-router-dom';
import useCart from '../pages/Components/hooks/useCart';
import useAdmin from '../pages/Components/hooks/useAdmin';

const Dashboard = () => {
    const [cart]=useCart();
    const [isAdmin]=useAdmin();
    return (
        <div className='flex'>
            {/**dashboard sidebar */}
            <div className ='w-64 min-h-screen bg-orange-400'>
                <ul className='menu'>
                    {
                        isAdmin?
                        <>
                        <li><NavLink  to='/dashboard/adminHome'>
                        <FaHome></FaHome>
                        Admin Home</NavLink></li>

                       

                        <li><NavLink  to='/dashboard/manageitems'>
                        <FaList></FaList>
                        Manage Items</NavLink></li>

                     

                       <li><NavLink  to='/dashboard/allusers'>
                        <FaUser>
                        </FaUser>
                        All users</NavLink></li>
                       <div className="divider"></div>


                        </>:  <>
                                <li>
                                    <NavLink to="/dashboard/userHome">
                                        <FaHome></FaHome>
                                        User Home</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard/history">
                                        <FaCalendar></FaCalendar>
                                        Not History</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard/cart">
                                        <FaShoppingCart></FaShoppingCart>
                                        My Cart ({cart.length})</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard/review">
                                        <FaAd></FaAd>
                                        Add a Review</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard/paymenthistory">
                                        <FaList></FaList>
                                        Real Payment History</NavLink>
                                </li>
                            </>
                        
                    }
                     {/* shared nav links */}
                     <div className="divider"></div>
                    <li>
                        <NavLink to="/">
                            <FaHome></FaHome>
                            Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/order">
                            <FaSearch></FaSearch>
                            Menu</NavLink>
                    </li>
                    <li>
                        <NavLink to="/order/contact">
                            <FaEnvelope></FaEnvelope>
                            Contact</NavLink>
                    </li>
                </ul>
            </div>
                 
          
            {/**dashboard content */}
            <div className='flex-1'>
<Outlet></Outlet>
            </div>
            
        </div>
    );
};

export default Dashboard;