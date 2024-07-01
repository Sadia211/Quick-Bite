import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import { Pagination } from 'swiper/modules';

import slide1 from '../../assets/assets/home/slide1.jpg';
import slide2 from '../../assets/assets/home/slide2.jpg';
import slide3 from '../../assets/assets/home/slide3.jpg';
import slide4 from '../../assets/assets/home/slide4.jpg';
import slide5 from '../../assets/assets/home/slide5.jpg';
import Sectiontitle from '../Components/Sectiontitle';
const Category = () => {
    return (
        <div className='mx-5'>
   <Sectiontitle
   
   subheading={"From 11:00am to 10:00pm"}
   heading={"Order Online"}
   
   
   >
    
   </Sectiontitle>



    <Swiper
        slidesPerView={4}
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
      <SwiperSlide><img src={slide1}/>
      <h3 className='text-3xl text-center text-white -mt-16'>SALAD</h3>
      </SwiperSlide>

      <SwiperSlide><img src={slide2}/>
      <h3 className='text-3xl text-center text-white -mt-16'>PIZZA</h3></SwiperSlide>

      <SwiperSlide><img src={slide3}/>
      <h3 className='text-3xl text-center text-white -mt-16'>Soup</h3></SwiperSlide>

      <SwiperSlide><img src={slide4}/>
      <h3 className='text-3xl text-center text-white -mt-16'>DESERT</h3></SwiperSlide>
      
      ...
    </Swiper>
  

            
        </div>
    );
};

export default Category;