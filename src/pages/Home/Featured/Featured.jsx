import React from 'react';
import Sectiontitle from '../../Components/Sectiontitle';
import img from '../../../assets/assets/home/featured.jpg'
import './Featured.css'
const Featured = () => {
    return (
        <div>
                 <Sectiontitle
   
   subheading={"Check it out "}
   heading={"Featued Item"}>
    
   </Sectiontitle>
   <div className= ' featured-item bg-fixed md:flex justify-center items-center pb-20 pt-12 px-36 bg-slate-500 bg-opacity-60'>
   <div>
    <img src={"https://i.ibb.co/Wy0q36r/pexels-enginakyurt-2619970-2.jpg" }></img>
   </div>
   <div className='md:ml-10 px-3 text-black font-bold'>
    <p>The Pepperoni Pizza features a classic combination of spicy pepperoni slices atop a bed of melted mozzarella cheese and tangy tomato sauce, all baked to perfection on a crispy crust. It's a timeless favorite that brings together bold flavors and a satisfying crunch with every bite
    </p>
    
   </div>
   </div>
 
        </div>
    );
};

export default Featured;