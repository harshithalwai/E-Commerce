import React from "react";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import { motion } from "framer-motion";

const Pra = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const list = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.4,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };
  return (
    <>
      <SwiperSlide className="relative w-full h-full">
              <img
                src="./Hero-slider-1.jpg"
                alt="Green T-Shirt"
                className="w-full h-full object-cover"
              />

              <div className="absolute inset-0 bg-black/30 flex items-center text-white px-4 sm:px-6 md:px-12">
                <motion.div
                  key={activeIndex === 1 ? "slide2-active" : "slide2-inactive"}
                  variants={list}
                  initial="hidden"
                  animate={activeIndex === 1 ? "visible" : "hidden"}
                  className="absolute right-4 sm:right-6 md:right-10 max-w-[85%] sm:max-w-[60%]"
                >
                  <motion.p
                    variants={item}
                    className="hidden sm:inline-block mb-2 font-medium"
                  >
                    Big Saving Days Sale
                  </motion.p>

                  <motion.h2
                    variants={item}
                    className="text-base sm:text-3xl md:text-4xl font-bold leading-snug"
                  >
                    Women Solid Round <br /> Green T-Shirt
                  </motion.h2>

                  <motion.p
                    variants={item}
                    className="text-lg sm:text-xl md:text-2xl mt-3"
                  >
                    <span className="hidden md:inline-block">
                      Starting At Only
                    </span>{" "}
                    <span className="text-[#ff4d4d] font-semibold">$59.00</span>
                  </motion.p>

                  <motion.button
                    variants={item}
                    className="cursor-pointer mt-5 sm:mt-6 px-4 sm:px-6 py-2 sm:py-3 bg-[#ff4d4d] hover:bg-[#ff2e2e] transition-all rounded-lg font-semibold text-sm sm:text-base"
                  >
                    SHOP NOW
                  </motion.button>
                </motion.div>
              </div>
            </SwiperSlide>
    </>
  );
};

export default Pra;
