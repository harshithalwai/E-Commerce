import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import "./BannerSlider.css";

export default function BannerSlider({ slidesPerViewCount = 3 }) {
  const products = [
    {
      id: 1,
      name: "Samsung Gear VR Camera",
      price: "$129.00",
      image: "./cms-banner-1.jpg",
    },
    {
      id: 2,
      name: "Marcel Dining Room Chair",
      price: "$129.00",
      image: "./cms-banner-2.jpg",
    },
    {
      id: 3,
      name: "Noise Wireless Headphones",
      price: "$129.00",
      image: "./cms-banner-3.jpg",
    },
  ];

  return (
<div className="bg-white overflow-x-hidden">
      <div className="container mx-auto px-2 sm:px-4 relative overflow-x-hidden">
        {/* Navigation */}
        <div className="swiper-button-prev !hidden md:!flex !-left-2 lg:!-left-4 !text-black !bg-white !rounded-full !shadow-md hover:!bg-black hover:!text-white !w-10 !h-10 lg:!w-12 lg:!h-12"></div>
        <div className="swiper-button-next !hidden md:!flex !-right-2 lg:!-right-4 !text-black !bg-white !rounded-full !shadow-md hover:!bg-black hover:!text-white !w-10 !h-10 lg:!w-12 lg:!h-12"></div>


        <Swiper
          slidesPerView={slidesPerViewCount}
          spaceBetween={24}
          loop={true}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          modules={[Navigation]}
          breakpoints={{
            320: { slidesPerView: 1, spaceBetween: 12 },
            640: { slidesPerView: 1.5, spaceBetween: 16 },
            768: { slidesPerView: 2, spaceBetween: 20 },
            1024: { slidesPerView: slidesPerViewCount, spaceBetween: 24 },
          }}
          className="product-swiper !overflow-hidden"
        >
          {products.map((product) => (
            <SwiperSlide key={product.id} className="!flex !justify-center">
              <div className="!relative w-full max-w-[420px] rounded-lg overflow-hidden group shadow-md transition-all duration-300 hover:shadow-xl hover:scale-[1.02]">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-auto transition-transform duration-500 group-hover:scale-110 object-cover"
                />
                <div className="!absolute right-2 top-0 h-full w-[50%] flex items-center justify-end">
                  <div className="p-4 rounded-lg text-right text-black">
                    <h3 className="font-bold leading-tight mb-1">
                      {product.name}
                    </h3>
                    <p className="font-bold text-[#ff4d4d] mb-3">
                      {product.price}
                    </p>
                    <button className="cursor-pointer px-4 py-2 bg-white text-black hover:bg-black hover:text-white transition-all duration-300 rounded font-semibold text-sm">
                      SHOP NOW
                    </button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
