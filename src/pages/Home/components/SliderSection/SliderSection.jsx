import img1 from "../../../../assets/sliderImg/sliderimg1.webp";
import img2 from "../../../../assets/sliderImg/sliderimg2.webp";
import img3 from "../../../../assets/sliderImg/sliderimg3.webp";
import img4 from "../../../../assets/sliderImg/sliderimg5.webp";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./styles.css";

// import required modules
import { Autoplay, Pagination } from "swiper/modules";

export default function SliderSection() {
  const images = [img1, img2, img3, img4];
  return (
    <>
      <Swiper 
      pagination={true} 
      autoplay={{
        delay: 2000,
        disableOnInteraction: false,
      }}
      modules={[Pagination,Autoplay]} className="mySwiper my-10 max-w-[75rem] mx-auto">
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <img
              src={image}
              alt={`Slider Image ${index + 1}`}
              className="rounded-lg"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
