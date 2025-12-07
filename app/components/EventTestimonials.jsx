"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

export default function EventTestimonials() {
  return (
    <div className="section EventTestimonials">
      <div className="container">
        <div className="row">

          {/* Slider */}
          <div className="col-lg-7 order-2 order-lg-1">
            <Swiper
              modules={[Autoplay]}
              spaceBetween={30}
              slidesPerView={1}
              loop={true}
              autoplay={{
                delay: 4000,
                disableOnInteraction: false,
              }}
            >
              <SwiperSlide>
                <div className="item">
                  <p>
                    “Please tell your friends or colleagues about TemplateMo website. Anyone can access the website to download free templates. Thank you for visiting.”
                  </p>
                  <div className="author">
                    <img src="/images/testimonial-author.jpg" alt="Claude David" />
                    <span className="category">Full Stack Master</span>
                    <h4>Claude David</h4>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="item">
                  <p>
                    “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.”
                  </p>
                  <div className="author">
                    <img src="/images/testimonial-author.jpg" alt="Thomas Jefferson" />
                    <span className="category">UI Expert</span>
                    <h4>Thomas Jefferson</h4>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="item">
                  <p>
                    “Scholar is free website template provided by TemplateMo for educational related websites. This CSS layout is based on Bootstrap v5.”
                  </p>
                  <div className="author">
                    <img src="/images/testimonial-author.jpg" alt="Stella Blair" />
                    <span className="category">Digital Animator</span>
                    <h4>Stella Blair</h4>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>

          {/* Text Section */}
          <div className="col-lg-5 align-self-center order-1 order-lg-2">
            <div className="section-heading">
              <h6 className="subtitle">TESTIMONIALS</h6>
              <h2>What they say about us?</h2>
              <p>
                You can search free CSS templates on Google using different
                keywords such as templatemo portfolio, templatemo gallery,
                templatemo blue color, etc.
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
