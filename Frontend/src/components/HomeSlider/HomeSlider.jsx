import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import { motion } from "framer-motion";
import "./HomeSlider.css";

const HomeSlider = () => {
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
    <div className="w-full h-auto md:h-[73vh]">
      <div className="container w-full h-full flex flex-col md:flex-row p-3 sm:p-4 gap-4 sm:gap-6">
        {/* LEFT MAIN SLIDER */}
        <div className="flex-1 w-full h-[42vh] xs:h-[48vh] sm:h-[55vh] md:h-full rounded-2xl overflow-hidden">
          <Swiper
            slidesPerView={1}
            spaceBetween={20}
            loop
            pagination={{ clickable: true }}
            navigation
            autoplay={{ delay: 4000, disableOnInteraction: true }}
            speed={800}
            modules={[Pagination, Navigation, Autoplay]}
            onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
            className="w-full h-full rounded-2xl overflow-hidden"
          >
            {/* Slide 1 */}
            <SwiperSlide className="relative w-full h-full">
              <img
                src="./Hero-slider-2.jpg"
                className="w-full h-full object-cover"
                alt="Modern Chair"
              />

              <div className="absolute inset-0 bg-black/30 flex items-center text-white px-3 sm:px-6 md:px-12">
                <motion.div
                  key={activeIndex === 0 ? "slide1-active" : "slide1-inactive"}
                  variants={list}
                  initial="hidden"
                  animate={activeIndex === 0 ? "visible" : "hidden"}
                  className="absolute right-3 sm:right-6 md:right-10 max-w-[90%] sm:max-w-[60%]"
                >
                  <motion.p
                    variants={item}
                    className="hidden sm:inline-block mb-1 sm:mb-2 font-medium text-xs sm:text-sm"
                  >
                    Big Saving Days Sale
                  </motion.p>

                  <motion.h2
                    variants={item}
                    className="text-md xs:text-base sm:text-2xl md:text-4xl font-bold leading-snug"
                  >
                    Buy Modern Chair In <br /> Black Color
                  </motion.h2>

                  <motion.p
                    variants={item}
                    className="text-base sm:text-lg md:text-2xl mt-2 sm:mt-3"
                  >
                    <span className="hidden md:inline-block">
                      Starting At Only
                    </span>{" "}
                    <span className="text-[#ff4d4d] font-semibold">$99.00</span>
                  </motion.p>

                  <motion.button
                    variants={item}
                    className="cursor-pointer mt-4 sm:mt-5 px-3 sm:px-6 py-2 sm:py-3 bg-[#ff4d4d] hover:bg-[#ff2e2e] rounded-lg font-semibold text-xs sm:text-base"
                  >
                    SHOP NOW
                  </motion.button>
                </motion.div>
              </div>
            </SwiperSlide>

            {/* Slide 2 */}
            <SwiperSlide className="relative w-full h-full">
              <img
                src="./Hero-slider-1.jpg"
                className="w-full h-full object-cover"
                alt="Green T-Shirt"
              />

              <div className="absolute inset-0 bg-black/30 flex items-center text-white px-3 sm:px-6 md:px-12">
                <motion.div
                  key={activeIndex === 1 ? "slide2-active" : "slide2-inactive"}
                  variants={list}
                  initial="hidden"
                  animate={activeIndex === 1 ? "visible" : "hidden"}
                  className="absolute right-3 sm:right-6 md:right-10 max-w-[90%] sm:max-w-[60%]"
                >
                  <motion.p
                    variants={item}
                    className="hidden sm:inline-block mb-1 sm:mb-2 font-medium text-xs sm:text-sm"
                  >
                    Big Saving Days Sale
                  </motion.p>

                  <motion.h2
                    variants={item}
                    className="text-md xs:text-base sm:text-2xl md:text-4xl font-bold leading-snug"
                  >
                    Women Solid Round <br /> Green T-Shirt
                  </motion.h2>

                  <motion.p
                    variants={item}
                    className="text-base sm:text-lg md:text-2xl mt-2 sm:mt-3"
                  >
                    <span className="hidden md:inline-block">
                      Starting At Only
                    </span>{" "}
                    <span className="text-[#ff4d4d] font-semibold">$59.00</span>
                  </motion.p>

                  <motion.button
                    variants={item}
                    className="cursor-pointer mt-4 sm:mt-5 px-3 sm:px-6 py-2 sm:py-3 bg-[#ff4d4d] hover:bg-[#ff2e2e] rounded-lg font-semibold text-xs sm:text-base"
                  >
                    SHOP NOW
                  </motion.button>
                </motion.div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>

        {/* RIGHT SIDE BANNERS */}
        <div className="flex flex-col gap-4 sm:gap-6 w-full md:w-[35%]">
          {/* Banner 1 */}
          <motion.div
            className="relative w-full h-[170px] xs:h-[200px] md:h-1/2 rounded-2xl overflow-hidden group"
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <img
              src="./Hero-sub-banner-1.jpg"
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />

            <motion.div
              className="absolute inset-0 flex flex-col justify-center items-start text-black px-4 sm:px-6"
              initial={{ opacity: 0, x: -80 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="font-bold leading-tight mb-1 sm:mb-2 text-base sm:text-lg md:text-xl">
                Samsung Gear <br /> VR Camera
              </h3>
              <p className="font-bold text-[#ff4d4d] mb-2 sm:mb-3 text-sm sm:text-base">
                $129.00
              </p>
              <button className="cursor-pointer px-4 sm:px-5 py-2 bg-white text-black hover:bg-black hover:text-white transition rounded font-semibold text-xs sm:text-sm">
                SHOP NOW
              </button>
            </motion.div>
          </motion.div>

          {/* Banner 2 */}
          <motion.div
            className="relative w-full h-[170px] xs:h-[200px] md:h-1/2 rounded-2xl overflow-hidden group"
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <img
              src="./Hero-sub-banner-2.jpg"
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />

            <motion.div
              className="absolute top-1/2 right-4 sm:right-10 -translate-y-1/2 text-black"
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="font-bold leading-tight mb-1 sm:mb-2 text-base sm:text-lg md:text-xl">
                Marcel Dining <br /> Room Chair
              </h3>
              <p className="font-bold text-[#ff4d4d] mb-2 sm:mb-3 text-sm sm:text-base">
                $129.00
              </p>
              <button className="cursor-pointer px-4 sm:px-5 py-2 bg-white text-black hover:bg-black hover:text-white transition rounded font-semibold text-xs sm:text-sm">
                SHOP NOW
              </button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default HomeSlider;
