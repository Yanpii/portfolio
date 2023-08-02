import React from "react";
import Data from "../../data/data.json";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow } from "swiper/modules";
import { TbHandFinger } from "react-icons/tb";

import "swiper/css";
import "swiper/css/effect-coverflow";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  messageId: number;
}

const ModalPortfolio: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  messageId,
}) => {
  if (!isOpen) return null;

  const message = Data.find((msg) => msg.id === messageId);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center">
      <div className="bg-black bg-opacity-70 p-4 w-full text-center text-white z-50  items-center justify-center  rounded-lg">
        <div className="max-h-[70vh] overflow-y-auto overflow-hidden">
          <h1 className="font-extrabold font-primary title text-[26px] mb-4">
            {message?.title}
          </h1>
          <p className="font-secondary text-[18px] mb-4">{message?.info}</p>
          <h2 className="font-primary font-bold mb-4 title">Main technologies used</h2>
          <p className="font-secondary text-[18px] mb-4">{message?.technologies}</p>
          <div className="flex items-center justify-center mb-4">
         <h2 className="title font-primary font-bold">Slide the image to change it  </h2> <TbHandFinger className="ml-2 w-[25px] h-[25px] text-accent"/>
         </div>
          <Swiper
            modules={[EffectCoverflow]}
            spaceBetween={50}
            slidesPerView={1}
            effect={"coverflow"} // Use the EffectCards effect
            coverflowEffect={{
              slideShadows: false, // Set to false to remove slide shadows
            }}
            className="swiper-container z-0"
          >
            {message?.strings.map((str, index) => (
              <SwiperSlide key={index}>
                <img src={str} className="min-w-[400px] min-h-[400px]" />
              </SwiperSlide>
            ))}
          </Swiper>
          <button
            onClick={onClose}
            className="mt-4 px-4 py-2 btn font-bold font-primary rounded"
          >
            Cerrar
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalPortfolio;
