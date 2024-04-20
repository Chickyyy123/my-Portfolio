import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
// import required modules
import { Autoplay } from "swiper/modules";
import Image from "../../utils/Image";

export default function VendorComp() {
  return (
    <>
      <div
        className=" container mt-10rem mb-5 position-relative z-0"
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay="200"
      >
        <Swiper
          speed={1200}
          slidesPerView={7}
          spaceBetween={20}
          loop={true}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
          breakpoints={{
            320: {
              slidesPerView: 2,
            },
            640: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 60,
            },
            1024: {
              slidesPerView: 7,
              spaceBetween: 50,
            },
          }}
          className="mySwiper"
        >
          <SwiperSlide>
            <Image image="http://kiloit-learning.s3-website-ap-southeast-1.amazonaws.com/reactjs/team-1/sample-to-react/img/vendor-6.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <Image image="http://kiloit-learning.s3-website-ap-southeast-1.amazonaws.com/reactjs/team-1/sample-to-react/img/vendor-7.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <Image image="http://kiloit-learning.s3-website-ap-southeast-1.amazonaws.com/reactjs/team-1/sample-to-react/img/vendor-8.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <Image image="http://kiloit-learning.s3-website-ap-southeast-1.amazonaws.com/reactjs/team-1/sample-to-react/img/vendor-9.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <Image image="http://kiloit-learning.s3-website-ap-southeast-1.amazonaws.com/reactjs/team-1/sample-to-react/img/vendor-1.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <Image image="http://kiloit-learning.s3-website-ap-southeast-1.amazonaws.com/reactjs/team-1/sample-to-react/img/vendor-2.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <Image image="http://kiloit-learning.s3-website-ap-southeast-1.amazonaws.com/reactjs/team-1/sample-to-react/img/vendor-3.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <Image image="http://kiloit-learning.s3-website-ap-southeast-1.amazonaws.com/reactjs/team-1/sample-to-react/img/vendor-4.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <Image image="http://kiloit-learning.s3-website-ap-southeast-1.amazonaws.com/reactjs/team-1/sample-to-react/img/vendor-5.jpg" />
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}
