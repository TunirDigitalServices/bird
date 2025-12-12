"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

export default function Partners() {
  const images = [
    "/images/partners/org.png",
    // "/images/partners/domiciliation.tn-logo.webp",
    "/images/partners/mka.png",
    "/images/partners/sfectonir.png",
   
  ];

  // Repeat images for smooth looping
  const slides = [...images, ...images, ...images];

  return (
    <section className="speedyui speedyui-partner bg-light py-5 pb-5 mb-5">
      <div className="container">
        {/* Title + Subtitle */}
        <div className="row ">
          <div className="col-md-6 text-center mx-auto">
            <span
              className="subtitle text-uppercase mb-3"
              data-aos="fade-up"
            >
              Nos Partenaires
            </span>
        
           
          </div>
        </div>

        {/* Partners Carousel */}
        <div className="swiper-content position-relative mt-3 px-5">
          <Swiper
            modules={[Navigation, Autoplay]}
            slidesPerView={2}
            loop={true}
            speed={5000} // smooth continuous
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
            }}
            freeMode={true}
            freeModeMomentum={false}
            navigation={{
              nextEl: ".partner-next",
              prevEl: ".partner-prev",
            }}
            breakpoints={{
              1100: { slidesPerView: 6 },
              900: { slidesPerView: 4 },
              576: { slidesPerView: 3 },
            }}
            className="partnerswiper"
          >
            {slides.map((src, index) => (
              <SwiperSlide
                key={index}
                className="bg-white p-lg-4 rounded-pill bg-light d-flex justify-content-center align-items-center"
              >
                <img src={src} className="img-fluid" />
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Navigation buttons */}
          <div className="swiper-button-next partner-next bg-white rounded-circle"></div>
          <div className="swiper-button-prev partner-prev bg-white rounded-circle"></div>
        </div>
      </div>
    </section>
  );
}
