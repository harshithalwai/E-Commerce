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

    // Parent animation controls the stagger
  const list = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.4,
      },
    },
  };

  // Each child animation
  const item = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <div className="w-full h-[73vh]">
      <div className="container w-full h-full grid grid-cols-[3fr_1fr] p-4 gap-8 place-items-center">
        {/* Main Slider */}
        <div className="box-1 row-span-2 overflow-hidden w-full h-full rounded-2xl">
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            loop={true}
            pagination={{ clickable: true }}
            navigation={true}
            autoplay={{ delay: 4000, disableOnInteraction: true }}
            speed={800}
            modules={[Pagination, Navigation, Autoplay]}
            onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
            className="w-full h-full rounded-2xl overflow-hidden"
          >
            {/* Slide 1 */}
            <SwiperSlide className="relative w-full h-full">
              <img
                src="./Hero-slider-1.jpg"
                alt="Modern Chair"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/30 flex flex-col justify-center items-start text-white px-12">
                <motion.div
                  key={activeIndex === 0 ? "slide1-active" : "slide1-inactive"}
                  variants={list}
                  initial="hidden"
                  animate={activeIndex === 0 ? "visible" : "hidden"}
                  className="absolute right-10"
                >
                  <motion.p variants={item} className="text-lg mb-2 font-medium">
                    Big Saving Days Sale
                  </motion.p>
                  <motion.h2
                    variants={item}
                    className="text-4xl font-bold leading-snug"
                  >
                    Buy Modern Chair In <br /> Black Color
                  </motion.h2>
                  <motion.p variants={item} className="text-2xl mt-3">
                    Starting At Only{" "}
                    <span className="text-[#ff4d4d] font-semibold">$99.00</span>
                  </motion.p>
                  <motion.button
                    variants={item}
                    className="cursor-pointer mt-6 px-6 py-3 bg-[#ff4d4d] hover:bg-[#ff2e2e] transition-all rounded-lg font-semibold"
                  >
                    SHOP NOW
                  </motion.button>
                </motion.div>
              </div>
            </SwiperSlide>

            {/* Slide 2 */}
            <SwiperSlide className="relative w-full h-full">
              <img
                src="./Hero-slider-2.jpg"
                alt="Green T-Shirt"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/30 flex flex-col justify-center items-start text-white px-12">
                <motion.div
                  key={activeIndex === 1 ? "slide2-active" : "slide2-inactive"}
                  variants={list}
                  initial="hidden"
                  animate={activeIndex === 1 ? "visible" : "hidden"}
                  className="absolute right-10"
                >
                  <motion.p variants={item} className="text-lg mb-2 font-medium">
                    Big Saving Days Sale
                  </motion.p>
                  <motion.h2
                    variants={item}
                    className="text-4xl font-bold leading-snug"
                  >
                    Women Solid Round <br /> Green T-Shirt
                  </motion.h2>
                  <motion.p variants={item} className="text-2xl mt-3">
                    Starting At Only{" "}
                    <span className="text-[#ff4d4d] font-semibold">$59.00</span>
                  </motion.p>
                  <motion.button
                    variants={item}
                    className="cursor-pointer mt-6 px-6 py-3 bg-[#ff4d4d] hover:bg-[#ff2e2e] transition-all rounded-lg font-semibold"
                  >
                    SHOP NOW
                  </motion.button>
                </motion.div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>

        {/* Right boxes */}
        <motion.div
          className="box-2 relative w-full h-full rounded-2xl overflow-hidden group"
          whileHover={{ scale: 1.03 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <img
            src="./Hero-sub-banner-1.jpg"
            className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-110"
            alt="Samsung Gear VR Camera"
          />
          <motion.div
            className="absolute inset-0 flex flex-col justify-center items-start text-black px-8"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h3 className="font-bold leading-tight mb-2">
              Samsung Gear <br /> VR Camera
            </h3>
            <p className="font-bold text-[#ff4d4d] mb-3">$129.00</p>
            <button className="cursor-pointer px-5 py-2 bg-white text-black hover:bg-black hover:text-white transition-all duration-300 rounded font-semibold text-sm">
              SHOP NOW
            </button>
          </motion.div>
        </motion.div>

        <motion.div
          className="box-3 relative w-full h-full rounded-2xl overflow-hidden group"
          whileHover={{ scale: 1.03 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <img
            src="./Hero-sub-banner-2.jpg"
            className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-110"
            alt="Marcel Dining Room Chair"
          />
          <motion.div
            className="absolute inset-0 right-0 flex flex-col justify-center items-start text-black px-8"
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="absolute right-10">
              <h3 className="font-bold leading-tight mb-2">
                Marcel Dining <br /> Room Chair
              </h3>
              <p className="font-bold text-[#ff4d4d] mb-3">$129.00</p>
              <button className="cursor-pointer px-5 py-2 bg-white text-black hover:bg-black hover:text-white transition-all duration-300 rounded font-semibold text-sm">
                SHOP NOW
              </button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default HomeSlider;
