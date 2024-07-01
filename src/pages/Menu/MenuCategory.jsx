import React from 'react';
import MenuItem from './MenuItem/MenuItem';
import Cover from '../../Shared/Cover/Cover';
import { Link } from 'react-router-dom';
const MenuCategory = ({items,title,img}) => {
    return (
        <div>
            {title &&<Cover img={img} title="SALAD"></Cover>}
            <div className='grid md:grid-cols-2 gap-10'>
            {
                items.map(item=><MenuItem
                key={item._id}
                item={item}
                ></MenuItem>
                    
                    
                    
                    )
            }</div>
            <Link to={`/order/${title}`}>
                <button className='btn btn-outline border-0 border-4 mt-4'>Order now</button>
            </Link>
        </div>
    );
};

export default MenuCategory;