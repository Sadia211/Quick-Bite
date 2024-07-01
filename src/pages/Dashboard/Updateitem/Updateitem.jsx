import React from 'react';
import Sectiontitle from '../../Components/Sectiontitle';
import { useLoaderData } from 'react-router-dom';

const Updateitem = () => {
    const item=useLoaderData();
    console.log('update',item);
    return (
        <div>
            <Sectiontitle heading ="Update" subheading="refresh  it"></Sectiontitle>
            
        </div>
    );
};

export default Updateitem;