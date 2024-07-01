
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import Sectiontitle from '../Components/Sectiontitle';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css'
import { FreeMode, Pagination } from 'swiper/modules';
import { useEffect } from 'react';

const Testimonial = () => {
    const[reviews,setReviews]=useState([])
    useEffect(()=>{
        fetch('/reviews.json')
        .then(res=>res.json())
        .then(data=>setReviews(data))


    },[]
    )
    return (
        <>
            <Sectiontitle
   
   subheading={"What our client say"}
   heading={"Testimonials"}   >
    
   </Sectiontitle>
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          freeMode={true}
          pagination={{
            clickable: true,
          }}
          modules={[FreeMode, Pagination]}
          className="mySwiper"
        >
          {
            reviews.map(review=><SwiperSlide
                key={review._id}>
                  <div>
                 <Rating className='px-4'
                 style={{mazWidth:180}}
                 value={review.rating}//reviews in dynamic
                 readOnly 
                  />
    <p className='px-4'>{review.details}</p>
<h3 className='text-2xl text-orange-400'>{review.name}</h3>


    </div>



                </SwiperSlide>
                
                )
          }
        </Swiper>
      </>
    );
};

export default Testimonial;