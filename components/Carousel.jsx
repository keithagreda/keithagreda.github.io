"use client"
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import { Navigation , Pagination, Autoplay, Parallax} from "swiper/modules";
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import 'swiper/css/parallax';
import Image from 'next/image';


const Carousel= (props) => {
    const slides = props.slides;
  return (
    <div className="about-carousel">
        <p className="light-orange">Tech that I have used recently:</p>
        <Swiper
            className="carouselSwiper"
            modules={[Pagination, Navigation, Autoplay, Parallax]}
            spaceBetween={50}
            slidesPerView={3}
            autoplay = {{delay: 5000}}
            scrollbar = {{draggable: true}}
            pagination = {{type: 'progressbar',
        }}
        >
            {slides.map((slide) => (
                <div className="carousel-slide" key = {slide.id}>
                    <SwiperSlide><Image src={slide.icon} alt={slide.title} className="slideImage" /></SwiperSlide>
                </div>
            ))}
            
        </Swiper>
        <div className="slider-progress-wrap">
            <div className="slider-progress"></div>
            <div className="slider-progress2"></div>
            <div className="slider-scrollbar"></div>
        </div>
    </div>
  )
}

export default Carousel