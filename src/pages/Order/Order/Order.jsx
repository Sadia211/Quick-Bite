import React, { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Cover from '../../../Shared/Cover/Cover';
import OrderTab from '../OrderTab/OrderTab';
import 'react-tabs/style/react-tabs.css';
import useMenu from '../../Components/hooks/useMenu';
import img from '../../../assets/assets/shop/banner2.jpg';
import Sectiontitle from '../../Components/Sectiontitle';

const Order = () => {
    const categories = ['salad', 'pizza', 'soup', 'dessert', 'drinks'];
    const { category } = useParams();
    const [menu] = useMenu();

    // If the category parameter is not provided or invalid, default to the first category
    const initialIndex = categories.indexOf(category) !== -1 ? categories.indexOf(category) : 0;
    const [tabIndex, setTabIndex] = useState(initialIndex);

    const salad = menu.filter(item => item.category === 'Salad');
    const pizza = menu.filter(item => item.category === 'Pizza');
    const soup = menu.filter(item => item.category === 'Soup');
    const dessert = menu.filter(item => item.category === 'Dessert');

    return (
        <div className='mx-20'>
            <Helmet>
                <title>Quick Bite | Order Food</title>
            </Helmet>
            <img className='h-24' src="https://i.ibb.co/tLh3hBB/Untitled-design-1.png" alt="Order Food Banner" />
            <Sectiontitle
                subheading={"Order Your Favorite Dishes"}
                heading={"Meals delivered hot and fresh!"}
            />
            <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                <TabList>
                    <Tab>Salad</Tab>
                    <Tab>Pizza</Tab>
                    <Tab>Soup</Tab>
                    <Tab>Dessert</Tab>
                    <Tab>Drinks</Tab>
                </TabList>

                <TabPanel>
                    <OrderTab items={salad} />
                </TabPanel>
                <TabPanel>
                    <OrderTab items={pizza} />
                </TabPanel>
                <TabPanel>
                    <OrderTab items={soup} />
                </TabPanel>
                <TabPanel>
                    <OrderTab items={dessert} />
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default Order;
