import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/scaler.png'
import AVTR2 from '../../assets/leetcode.png'
import AVTR3 from '../../assets/gfg.png'
import AVTR4 from '../../assets/codeforces.png'

import { Pagination ,Nagi , Navigation } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';



const data = [
  {
    avatar:AVTR1,
    name: 'Scaler Academy',
    link:'https://www.scaler.com/academy/profile/4a97326189f0/',
    review:'Attended Fullstack Dev Program . Solved 580+ DSA problems . Learned OOPS , LLD , DBMS , OS , CN and computer science fundamentals   '

  },
  {
    avatar:AVTR2,
    name: 'Leetcode',
    link:'https://leetcode.com/rastogitarang/',
    review:'Solved 200 DSA problems'

  },
  {
    avatar:AVTR3,
    name: 'GeeksForGeeks',
    link:'https://auth.geeksforgeeks.org/user/rastogitarang5/practice',
    review:'Solved 200 DSA problems'

  },
  {
    avatar:AVTR4,
    name: 'Codeforces',
    link:'https://codeforces.com/profile/TarangMessiah',
    review:'Work in progress'

  }


]






const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Slide to tee more</h5>
      <h2>Profiles</h2>
      
      <Swiper className='container testimonials__container'
            modules={[Pagination]}
            spaceBetween={40}
            slidesPerView={1}
            pagination={{ clickable: true }}>
        


        {data.map(({avatar , name ,link ,  review} , index)=>{
          
          return(
              <SwiperSlide key={index} className='testimonials'>
              <div className="client__avatar">
                <img src={avatar} alt ='avatar'></img>
              </div>
              <h3 className='client__name'><a href= {link}  target='_blank'>{name}</a></h3>
              <small className='client__review'>
                  {review}
              </small>
            </SwiperSlide>
          )


        } 
        )}



      </Swiper>
    
    
    </section>
  )
}

export default Testimonials






