
import React, { useEffect, useState } from 'react';
import MenuItem from '../Menu/MenuItem/MenuItem';
import Sectiontitle from '../Components/Sectiontitle';
import useMenu from '../Components/hooks/useMenu';


const PopularMenu = () => {
 const [menu]=useMenu([]);
 
 /*useEffect(()=>{
    fetch('menu.json')
    .then(res=>res.json())
    .then(data=>{
        const popularItems=data.filter(item=>item.category==='popular');
        setMenu(popularItems)
    },[])
 })*/
    return (
        
        <div>
            <Sectiontitle
   
   subheading={"Popular Items "}
   heading={"From our menu"}
> </Sectiontitle>
   <div className='grid md:grid-cols-2 gap-4'>
   {
                menu.map(item=><MenuItem
                key={item._id}
                item={item}>
                </MenuItem>)
            }
   </div>
          
        </div>
    );
};

export default  PopularMenu;



















