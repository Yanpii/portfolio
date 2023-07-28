// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import { FaEye, FaGithub, FaLink } from "react-icons/fa";
import { motion } from "framer-motion";
import { fadeIn } from "@/styles/variants";

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-8 lg:py-24 lg:h-screen flex items-center mb-8 mt-8">
      <div className="w-full justify-center items-center">
      <motion.h1
       variants={fadeIn("right", 0.3)}
       initial="hidden"
       whileInView={"show"}
       viewport={{ once: false, amount: 0.7 }}
      className="title font-primary font-bold text-[40px] lg:text-[60px] text-center lg:text-left">Portfolio</motion.h1>
        <Swiper
          spaceBetween={50}
          slidesPerView={3}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide>
            <div className=" project-2 w-[300px] h-[300px] lg:w-[400px] lg:h-[400px] container mx-auto p-9 max-w-sm rounded-2xl overflow-hidden  ">
            <div
              className="flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0"
            >
              <a href="https://github.com/Yanpii/ecommerce-NEXT-WspApi" className="transition-transform hover:scale-110 rounded-full bg-black">
                <FaGithub />
              </a>
              <a href="https://nextjs-ecommerce-theta-lemon.vercel.app/" target="_blank" className="transition-transform hover:scale-110 rounded-full bg-black">
                <FaLink />
              </a>
              <a href="" className="transition-transform hover:scale-110 rounded-full bg-black">
                <FaEye />
              </a>
            </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
             <div className=" project-3 w-[300px] h-[300px] lg:w-[400px] lg:h-[400px] container mx-auto p-9 max-w-sm rounded-2xl overflow-hidden  ">
            <div
              className="flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0"
            >
              <a href="" className="transition-transform hover:scale-110 rounded-full bg-black">
                <FaGithub />
              </a>
              <a href="" className="transition-transform hover:scale-110 rounded-full bg-black">
                <FaLink />
              </a>
              <a href="" className="transition-transform hover:scale-110 rounded-full bg-black">
                <FaEye />
              </a>
            </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
             <div className=" project-4 w-[300px] h-[300px] lg:w-[400px] lg:h-[400px] container mx-auto p-9 max-w-sm rounded-2xl overflow-hidden  ">
            <div
              className="flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0"
            >
              <a href="" className="transition-transform hover:scale-110 rounded-full bg-black">
                <FaGithub />
              </a>
              <a href="" className="transition-transform hover:scale-110 rounded-full bg-black">
                <FaLink />
              </a>
              <a href="" className="transition-transform hover:scale-110 rounded-full bg-black">
                <FaEye />
              </a>
            </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
             <div className=" project-1 w-[300px] h-[300px] lg:w-[400px] lg:h-[400px] container mx-auto p-9 max-w-sm rounded-2xl overflow-hidden  ">
            <div
              className="flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0"
            >
              <a href="" className="transition-transform hover:scale-110 rounded-full bg-black">
                <FaGithub />
              </a>
              <a href="" className="transition-transform hover:scale-110 rounded-full bg-black">
                <FaLink />
              </a>
              <a href="" className="transition-transform hover:scale-110 rounded-full bg-black">
                <FaEye />
              </a>
            </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
             <div className=" project-1 w-[300px] h-[300px] lg:w-[400px] lg:h-[400px] container mx-auto p-9 max-w-sm rounded-2xl overflow-hidden  ">
            <div
              className="flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0"
            >
              <a href="" className="transition-transform hover:scale-110 rounded-full bg-black">
                <FaGithub />
              </a>
              <a href="" className="transition-transform hover:scale-110 rounded-full bg-black">
                <FaLink />
              </a>
              <a href="" className="transition-transform hover:scale-110 rounded-full bg-black">
                <FaEye />
              </a>
            </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default Portfolio;
