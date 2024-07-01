import React from 'react';

import Cover from '../../../Shared/Cover/Cover';
import Navbar from '../../../Shared/Navbar';
import menuImg from '../../../assets/assets/menu/banner3.jpg'
import { Helmet } from 'react-helmet';
import PopularMenu from '../../PopularMenu/PopularMenu';
import useMenu from '../../Components/hooks/useMenu';
import MenuCategory from '../MenuCategory';
import pizzaimg  from '../../../assets/assets/menu/pizza-bg.jpg'
import saladimg  from '../../../assets/assets/menu/salad-bg.jpg'
import soupimg  from '../../../assets/assets/menu/soup-bg.jpg'
import dessertimg  from '../../../assets/assets/menu/dessert-bg.jpeg'
const Menu = () => {
    const [menu]=useMenu();
    return (
        <div className='mx-20'>
            
            <Helmet>
                <title>Quick Bite|Menu</title>
            </Helmet>
            <img className='h-24'src="https://i.ibb.co/tLh3hBB/Untitled-design-1.png"/>
            <PopularMenu></PopularMenu>
            
        </div>
    );
};

export default Menu;
