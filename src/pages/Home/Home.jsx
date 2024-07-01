import React from 'react';
import Navbar from '../../Shared/Navbar';
import Banner from '../Banner/Banner';
import Category from '../Category/Category';
import PopularMenu from '../PopularMenu/PopularMenu';
import Featured from './Featured/Featured';
import Footer from '../Footer/Footer';
import Testimonial from '../Testimonial/Testimonial';
import { Helmet } from 'react-helmet';
const Home = () => {
    return (
        <div className='mx-20'>
            <Helmet>
                <title>Quick Bite|Home</title>
            </Helmet>
            
           
            <Banner></Banner>
            <Category></Category>
            <PopularMenu></PopularMenu>
            <Featured></Featured>
            <div className='my-10'></div>
            <Testimonial></Testimonial>
           
        </div>
    );
};

export default Home;