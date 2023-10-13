import React, { Component } from 'react';
import "./RecommendCarousel.css"

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y,Mousewheel } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/mousewheel';
import { useNavigate } from 'react-router-dom';
// import 'swiper/css/scrollbar';
// import 'swiper/css/scrollbar';

function RecommendCarousel() {

  const navigate = useNavigate()
  const handleNavigate= ()=>{

navigate("/transitremedy")
  }

  return (
  
  <div>

<h3 className='reco-head'>RECOMMENDED FOR YOU</h3>

<div className='reco-divCarousel'>

<Swiper
 modules={[Navigation, Pagination, Scrollbar, A11y,Mousewheel]}
 spaceBetween={50}
 slidesPerView={3}
 navigation
 mousewheel = {{}}
 pagination={{ clickable: true }}
//  scrollbar={{ draggable: false }}
 onSwiper={(swiper) => console.log(swiper)}
 onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide className='reco-slide' onClick={handleNavigate}>
        <img  src={"https://images.pexels.com/photos/7615463/pexels-photo-7615463.jpeg?cs=srgb&dl=pexels-nataliya-vaitkevich-7615463.jpg&fm=jpg"} alt="s1" className='reco-img' />
        <div className='reco-div'>
            <p className='reco-p1'>Transit</p>
            <p className='reco-p2'>Remedies</p>
            <p className='reco-p3'>20+ Categories</p>
        </div>
      </SwiperSlide>
       <SwiperSlide className='reco-slide'>
        <img  src={"https://images.pexels.com/photos/5098043/pexels-photo-5098043.jpeg?auto=compress&cs=tinysrgb&w=600"} alt="s1" className='reco-img' />
        <div className='reco-div'>
            <p className='reco-p1'>Transit</p>
            <p className='reco-p2'>Remedies</p>
            <p className='reco-p3'>20+ Categories</p>
        </div>
      </SwiperSlide>
       <SwiperSlide className='reco-slide'>
        <img  src={"https://images.pexels.com/photos/7615463/pexels-photo-7615463.jpeg?cs=srgb&dl=pexels-nataliya-vaitkevich-7615463.jpg&fm=jpg"} alt="s1" className='reco-img' />
        <div className='reco-div'>
            <p className='reco-p1'>Transit</p>
            <p className='reco-p2'>Remedies</p>
            <p className='reco-p3'>20+ Categories</p>
        </div>
      </SwiperSlide>
       <SwiperSlide className='reco-slide'>
        <img  src={"https://images.pexels.com/photos/7615463/pexels-photo-7615463.jpeg?cs=srgb&dl=pexels-nataliya-vaitkevich-7615463.jpg&fm=jpg"} alt="s1" className='reco-img' />
        <div className='reco-div'>
            <p className='reco-p1'>Transit</p>
            <p className='reco-p2'>Remedies</p>
            <p className='reco-p3'>20+ Categories</p>
        </div>
      </SwiperSlide>
       <SwiperSlide className='reco-slide'>
        <img  src={"https://images.pexels.com/photos/7615463/pexels-photo-7615463.jpeg?cs=srgb&dl=pexels-nataliya-vaitkevich-7615463.jpg&fm=jpg"} alt="s1" className='reco-img' />
        <div className='reco-div'>
            <p className='reco-p1'>Transit</p>
            <p className='reco-p2'>Remedies</p>
            <p className='reco-p3'>20+ Categories</p>
        </div>
      </SwiperSlide>
   
    </Swiper>

</div>

  </div>
  )
}

export default RecommendCarousel