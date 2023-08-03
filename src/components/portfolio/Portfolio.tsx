// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

import { FaEye, FaGithub, FaLink } from "react-icons/fa";
import { motion } from "framer-motion";
import { fadeIn } from "@/styles/variants";
import { useState } from "react";
import ModalPortfolio from "../modal/ModalPortfolio";

const Portfolio = () => {
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [messageId, setMessageId] = useState<number | null>(null);

  const openModal = (id: number) => {
    setModalOpen(true);
    setMessageId(id);
  };

  const closeModal = () => {
    setModalOpen(false);
    setMessageId(null);
  };

  return (
    <section
      id="portfolio"
      className="py-8 lg:py-24 lg:h-screen flex items-center mb-8 mt-8 xs:mb-80 "
    >
      <div className="w-full justify-center items-center xs:mt-16">
        <motion.h1
          variants={fadeIn("right", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="title font-primary mb-4 font-bold text-[40px] lg:text-[60px] text-center lg:text-left lg:ml-10"
        >
          Portfolio
        </motion.h1>
        <div className="w-full justify-center items-center overflow-hidden">
          <Swiper
            modules={[EffectCards]}
            effect={"cards"} // Use the EffectCards effect
            cardsEffect={{
              slideShadows: false, // Set to false to remove slide shadows
            }}
            slidesPerView={1}
            className="swiper-container z-0"
          >
            <SwiperSlide>
              <div className=" project-2 w-[300px] h-[300px] lg:w-[400px] lg:h-[400px] container mx-auto p-9 max-w-sm rounded-2xl overflow-hidden  ">
                <div className="flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0">
                  <a
                    href="https://github.com/Yanpii/ecommerce-NEXT-WspApi"
                    className="transition-transform  hover:scale-110 rounded-full btn"
                  >
                    <FaGithub className="w-8 h-8" />
                  </a>
                  <a
                    href="https://nextjs-ecommerce-theta-lemon.vercel.app/"
                    target="_blank"
                    className="transition-transform hover:scale-110 rounded-full btn"
                  >
                    <FaLink className="w-8 h-8" />
                  </a>
                  <a
                    onClick={() => openModal(1)}
                    className="transition-transform hover:scale-110 rounded-full btn"
                  >
                    <FaEye className="w-8 h-8" />
                  </a>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className=" project-3 w-[300px] h-[300px] lg:w-[400px] lg:h-[400px] container mx-auto p-9 max-w-sm rounded-2xl overflow-hidden  ">
                <div className="flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0">
                  <a
                    href="#"
                    className="transition-transform hover:scale-110 rounded-full btn"
                  >
                    <FaGithub className="w-8 h-8" />
                  </a>
                  <a
                    href="https://appcristo.000webhostapp.com/login.php"
                    className="transition-transform hover:scale-110 rounded-full btn"
                  >
                    <FaLink className="w-8 h-8" />
                  </a>
                  <a
                    onClick={() => openModal(2)}
                    className="transition-transform hover:scale-110 rounded-full btn"
                  >
                    <FaEye className="w-8 h-8" />
                  </a>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className=" project-4 w-[300px] h-[300px] lg:w-[400px] lg:h-[400px] container mx-auto p-9 max-w-sm rounded-2xl overflow-hidden  ">
                <div className="flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0">
                  <a
                    href=""
                    className="transition-transform hover:scale-110 rounded-full btn"
                  >
                    <FaGithub className="w-8 h-8" />
                  </a>
                  <a
                    href=""
                    className="transition-transform hover:scale-110 rounded-full btn"
                  >
                    <FaLink className="w-8 h-8" />
                  </a>
                  <a
                    onClick={() => openModal(3)}
                    className="transition-transform hover:scale-110 rounded-full btn"
                  >
                    <FaEye className="w-8 h-8" />
                  </a>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className=" project-1 w-[300px] h-[300px] lg:w-[400px] lg:h-[400px] container mx-auto p-9 max-w-sm rounded-2xl overflow-hidden  ">
                <div className="flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0">
                  <a
                    href=""
                    className="transition-transform hover:scale-110 rounded-full btn"
                  >
                    <FaGithub className="w-8 h-8" />
                  </a>
                  <a
                    href=""
                    className="transition-transform hover:scale-110 rounded-full btn"
                  >
                    <FaLink className="w-8 h-8" />
                  </a>
                  <a
                    onClick={() => openModal(4)}
                    className="transition-transform hover:scale-110 rounded-full btn"
                  >
                    <FaEye className="w-8 h-8" />
                  </a>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
      <ModalPortfolio
        isOpen={modalOpen}
        onClose={closeModal}
        messageId={messageId || 0}
      />
    </section>
  );
};

export default Portfolio;
