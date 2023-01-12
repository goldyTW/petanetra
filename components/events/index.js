/* eslint-disable @next/next/no-img-element */
import React, { useEffect } from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from 'swiper'
import "swiper/css/navigation"
SwiperCore.use([Navigation]);
import AOS from 'aos';

const events = [
    {
        id:1,
        name:'Top 10 dalam Indigo Challenge pada 22 Oktober 2022',
        src:'/images/eventimg.png'
    },
    // {
    //     id:2,
    //     name:'eventname2',
    //     src:'/images/eventimg.png'
    // },
    // {
    //     id:3,
    //     name:'eventname3',
    //     src:'/images/eventimg.png'
    // }
]
function Events() {
    useEffect(() => {
        AOS.init();
      }, []);
  return (
    <div className='container py-5 mb-5'>
      <h1 className='event-title'>Event dan Penghargaan</h1>
      <div className="row justify-content-center" data-aos="fade-up">
        <div className='col-xl-10 col-12'>
            <Swiper
            slidesPerView={1}
            navigation={true} 
            >
            {events.map((item, i) => (
                <SwiperSlide key={i}>
                    <div className="card">
                        <div className="poster">
                            <img src={item.src} alt={item.name}/>
                        </div>
                        <div className="details">
                            <h3>{item.name}</h3>
                        </div>
                    </div>
                </SwiperSlide>
            ))}
            </Swiper>
        </div>
        </div>
    </div>
  )
}

export default Events
