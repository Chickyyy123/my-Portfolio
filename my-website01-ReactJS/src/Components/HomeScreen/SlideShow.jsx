// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "../../assets/css/SlideShow.css"
import AOS from "aos";
import "aos/dist/aos.css";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Navigation, Autoplay, Parallax } from "swiper/modules";
import Image from "../../utils/Image";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function SlideShowComp() {

  useEffect(() => {
    // Initialize AOS
    AOS.init({
      easing: "ease-out-back",
      duration: 1000,
    });

    // Refresh AOS when the component mounts
    AOS.refresh();
  }, []);

  const handleSlideChange = () => {
    AOS.refresh();
  };
   const navigate = useNavigate();

   const freeQuote = () => {
    navigate("/freequote")
   }

   const contactUs = () => {
    navigate("/contact")
   }

  return (
    <>
      <Swiper
        speed={1000}
        parallax={true}
        onDurationChange={3000}
        autoplay={true}
        navigation={true}
        loop={true}
        onSlideChange={handleSlideChange}
        modules={[Navigation, Autoplay, Parallax]}
        className="mySwiper z-0"
      >
        <SwiperSlide>
          <div className=" position-relative">
            <Image
              image="http://kiloit-learning.s3-website-ap-southeast-1.amazonaws.com/reactjs/team-1/sample-to-react/img/carousel-1.jpg"
              className=" img-fluid w-100"
            />
          </div>
          <div className=" overlays">
            <div className=" text-white text-slideshow">
              <h5
                className="mb-lg-5 mb-md-4 mb-sm-4 mb-3 text1"
                data-aos="fade-down"
                data-aos-duration="1500"
                data-aos-delay="200"
              >
                Creative & Innovative
              </h5>
              <h1
                className=" mt-0 mb-0 ms-auto me-auto text2"
                data-aos="zoom-out"
                data-aos-duration="1000"
                data-aos-delay="200"
              >
                Creative & Innovative <br /> Digital Solution
              </h1>
              <div className=" d-flex gap-4 justify-content-center mt-lg-5 mt-md-4 mt-sm-4 mt-3">
                <button
                  className=" buttons text-capitalize px-lg-5 py-lg-3 px-md-5 py-md-3 px-sm-3 py-sm-2 px-sm-1 py-1 px-sm-1 py-1 button1"
                  data-aos="fade-right"
                  data-aos-duration="900"
                  data-aos-delay="200"
                  onClick={freeQuote}
                >
                  Free Quote
                </button>
                <button
                  className=" buttons text-capitalize px-lg-5 py-lg-3 px-md-5 py-md-3 px-sm-3 py-sm-2 px-sm-1 py-1 px-sm-1 py-1 bg-success button2"
                  data-aos="fade-left"
                  data-aos-duration="900"
                  data-aos-delay="200"
                  onClick={contactUs}
                >
                  Contact Us
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" position-relative">
            <Image
              image="http://kiloit-learning.s3-website-ap-southeast-1.amazonaws.com/reactjs/team-1/sample-to-react/img/carousel-2.jpg"
              className=" img-fluid w-100"
            />
          </div>
          <div className=" overlays">
            <div className=" text-white text-slideshow">
              <h5
                className="mb-lg-5 mb-md-4 mb-sm-4 mb-3 text1"
                data-aos="fade-down"
                data-aos-duration="1500"
                data-aos-delay="200"
              >
                Creative & Innovative
              </h5>
              <h1
                className=" mt-0 mb-0 ms-auto me-auto text2"
                data-aos="zoom-out"
                data-aos-duration="1000"
                data-aos-delay="200"
              >
                Creative & Innovative <br /> Digital Solution
              </h1>
              <div className=" d-flex gap-4 justify-content-center mt-lg-5 mt-md-4 mt-sm-4 mt-3">
                <button
                  className=" buttons text-capitalize px-lg-5 py-lg-3 px-md-5 py-md-3 px-sm-3 py-sm-2 px-sm-1 py-1 px-sm-1 py-1 button1"
                  data-aos="fade-right"
                  data-aos-duration="900"
                  data-aos-delay="200"
                  onClick={freeQuote}
                >
                  Free Quote
                </button>
                <button
                  className=" buttons text-capitalize px-lg-5 py-lg-3 px-md-5 py-md-3 px-sm-3 py-sm-2 px-sm-1 py-1 px-sm-1 py-1 bg-success button2"
                  data-aos="fade-left"
                  data-aos-duration="900"
                  data-aos-delay="200"
                  onClick={contactUs}
                >
                  Contact Us
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
