// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "../../assets/css/SlideShow.css";

// import required modules
import { Autoplay, Pagination } from "swiper/modules";
import SlideShows from "../../utils/SlideShow";

export default function App() {
  return (
    <>
      <div className=" position-relative z-0">
        <Swiper
          speed={1500}
          loop={true}
          centeredSlides={true}
          spaceBetween={30}
          slidesPerView={3}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Autoplay, Pagination]}
          className="mySwiper"
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 30,
            },
            640: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}
        >
          <SwiperSlide>
            <SlideShows
              image="http://kiloit-learning.s3-website-ap-southeast-1.amazonaws.com/reactjs/team-1/sample-to-react/img/testimonial-2.jpg"
              client="Client Name"
              profession="PROFESSION"
              text="Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam"
            />
          </SwiperSlide>
          <SwiperSlide>
            <SlideShows
              image="http://kiloit-learning.s3-website-ap-southeast-1.amazonaws.com/reactjs/team-1/sample-to-react/img/testimonial-3.jpg"
              client="Client Name"
              profession="PROFESSION"
              text="Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam"
            />
          </SwiperSlide>
          <SwiperSlide>
            <SlideShows
              image="http://kiloit-learning.s3-website-ap-southeast-1.amazonaws.com/reactjs/team-1/sample-to-react/img/testimonial-4.jpg"
              client="Client Name"
              profession="PROFESSION"
              text="Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam"
            />
          </SwiperSlide>
          <SwiperSlide>
            <SlideShows
              image="http://kiloit-learning.s3-website-ap-southeast-1.amazonaws.com/reactjs/team-1/sample-to-react/img/testimonial-1.jpg"
              client="Client Name"
              profession="PROFESSION"
              text="Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam"
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}
