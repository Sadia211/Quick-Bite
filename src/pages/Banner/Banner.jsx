import React from 'react';
import { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css";

import { Carousel } from 'react-responsive-carousel';

const Banner = () => {
    return (
        <div className='mx-5 '>
             <Carousel>
             <div>
                    <img src={"https://i.ibb.co/gygh2DN/syper-delicious-menu-this-weekend-only.png"} />
                  
                </div>
                <div>
                    <img src={"https://i.ibb.co/Nss0jQK/delicious-food-1.png"} />
                    
                </div>
                
                <div>
                    <img src={"https://i.ibb.co/GPJNL7g/Get-the-tastiest-salad-bowl.png"} />
                    
                </div>
               
            </Carousel>
        </div>
    );
};

export default Banner;