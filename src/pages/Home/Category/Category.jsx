import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper";

import slider1 from "../../../assets/home/slide1.jpg";
import slider2 from "../../../assets/home/slide2.jpg";
import slider3 from "../../../assets/home/slide3.jpg";
import slider4 from "../../../assets/home/slide4.jpg";
import slider5 from "../../../assets/home/slide5.jpg";
import SectionTilte from "../../../components/SectionTitle/SectionTilte";

const Category = () => {
  return (
    <section>
        <SectionTilte subHadding={"Form 11.00pm to 10.00pm"} headding={"Order Online"}/>
        <Swiper
        slidesPerView={4}
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper mb-12"
      >
        <SwiperSlide>
          <img src={slider1} alt="" />
          <h3 className="text-4xl text-center -mt-16 uppercase text-white">Salads</h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider2} alt="" />
          <h3 className="text-4xl text-center -mt-16 uppercase text-white">Pizza</h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider3} alt="" />
          <h3 className="text-4xl text-center -mt-16 uppercase text-white">soup</h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider4} alt="" />
          <h3 className="text-4xl text-center -mt-16 uppercase text-white">desserts</h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider5} alt="" />
          <h3 className="text-4xl text-center -mt-16 uppercase text-white">Salads</h3>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Category;
