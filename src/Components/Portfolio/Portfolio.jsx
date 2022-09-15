import React from 'react'
import '../Portfolio/Portfolio.css'
import {Swiper,SwiperSlide} from 'swiper/react'
import MusicApp from '../../img/musicapp.png'
import Sidebar from '../../img/sidebar.png'
import Ecommerce from '../../img/ecommerce.png'
import Hoc from '../../img/hoc.png'

import 'swiper/css'

const Portfolio = () => {
    return (

    <div className="portfolio">

        {/**heading  */}
        <span>Recent Project</span>
        <span>Portfolio</span>

        {/**Slider */}

        <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={3}
        className="portfolio-slider"
        
        >
            
            <SwiperSlide>
                <img src={Sidebar} alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={Ecommerce} alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={Hoc} alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={MusicApp} alt="" />
            </SwiperSlide>

        </Swiper>


    </div>
    )
}

export default Portfolio
