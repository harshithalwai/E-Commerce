import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import "./HomeSlider.css";

const HomeSlider = () => {
  return (
    <>
      <div className="w-full h-[73vh]">
        <div className="container w-full h-full grid grid-cols-[3fr_1fr] p-4 gap-8 place-items-center">
          <div className="box-1 row-span-2 overflow-hidden w-full h-full rounded-2xl">
            <Swiper
              slidesPerView={1}
              spaceBetween={30}
              loop={true}
              pagination={{ clickable: true }}
              navigation={true}
              autoplay={{
                delay: 4000,
                disableOnInteraction: true,
              }}
              modules={[Pagination, Navigation, Autoplay]}
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
                  <div className="absolute right-10">
                    <p className="text-lg mb-2 font-medium">
                      Big Saving Days Sale
                    </p>
                    <h2 className="text-4xl font-bold leading-snug">
                      Buy Modern Chair In <br /> Black Color
                    </h2>
                    <p className="text-2xl mt-3">
                      Starting At Only{" "}
                      <span className="text-[#ff4d4d] font-semibold">
                        $99.00
                      </span>
                    </p>
                    <button className="cursor-pointer mt-6 px-6 py-3 bg-[#ff4d4d] hover:bg-[#ff2e2e] transition-all rounded-lg font-semibold">
                      SHOP NOW
                    </button>
                  </div>
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
                  <div className="absolute right-10">
                    <p className="text-lg mb-2 font-medium">
                      Big Saving Days Sale
                    </p>
                    <h2 className="text-4xl font-bold leading-snug">
                      Women Solid Round <br /> Green T-Shirt
                    </h2>
                    <p className="text-2xl mt-3">
                      Starting At Only{" "}
                      <span className="text-[#ff4d4d] font-semibold">
                        $59.00
                      </span>
                    </p>
                    <button className="cursor-pointer mt-6 px-6 py-3 bg-[#ff4d4d] hover:bg-[#ff2e2e] transition-all rounded-lg font-semibold">
                      SHOP NOW
                    </button>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>

          <div className="box-2 relative w-full h-full rounded-2xl overflow-hidden group">
            <img
              src="./Hero-sub-banner-1.jpg"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              alt="Samsung Gear VR Camera"
            />
            <div className="absolute inset-0 flex flex-col justify-center items-start text-black px-8">
              <h3 className=" font-bold leading-tight mb-2">
                Samsung Gear
                <br />
                VR Camera
              </h3>
              <p className=" font-bold text-[#ff4d4d] mb-3">$129.00</p>
              <button className="cursor-pointer px-5 py-2 bg-white text-black hover:bg-black hover:text-white transition-all duration-300 rounded font-semibold text-sm">
                SHOP NOW
              </button>
            </div>
          </div>
          <div className="box-3 relative w-full h-full rounded-2xl overflow-hidden group">
            <img
              src="./Hero-sub-banner-2.jpg"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              alt="Marcel Dining Room Chair"
            />
            <div className="absolute inset-0 right-0 flex flex-col justify-center items-start text-black px-8">
              <div className="absolute right-10">
                <h3 className=" font-bold leading-tight mb-2">
                  Marcel Dining
                  <br />
                  Room Chair
                </h3>
                <p className=" font-bold text-[#ff4d4d] mb-3">$129.00</p>
                <button className="cursor-pointer px-5 py-2 bg-white text-black hover:bg-black hover:text-white transition-all duration-300 rounded font-semibold text-sm ">
                  SHOP NOW
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeSlider;
