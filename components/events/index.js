import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from 'swiper'
// import "swiper/css/navigation"
SwiperCore.use([Navigation]);

const events = [
    {
        id:1,
        name:'Top 10 dalam Indigo Challenge pada 22 Oktober 2022',
        src:'/images/eventimg.png'
    },
    {
        id:2,
        name:'eventname2',
        src:'/images/eventimg.png'
    },
    {
        id:3,
        name:'eventname3',
        src:'/images/eventimg.png'
    }
]
function Events() {
  return (
    <div className='container py-5 mb-5'>
      <h1 className='event-title'>Event dan Penghargaan</h1>
      <div className="row justify-content-center">
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
                    {/* <div className='event-img-overlay'>
                        <img className='event-img' alt={item.name} src={item.src} width="100%"></img>
                    </div>
                    <div className='event-name-wrapper text-center p-3'>
                        <h2 className='event-name'>{item.name}</h2>
                    </div> */}
                </SwiperSlide>
            ))}
            </Swiper>
        </div>
        </div>
    </div>
  )
}

export default Events
