import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";

export default function ProductCardsSwiper() {
  const products = [
    {
      id: 1,
      name: "Samsung Gear VR Camera",
      price: "$129.00",
      image: "./Hero-sub-banner-1.jpg",
    },
    {
      id: 2,
      name: "Marcel Dining Room Chair",
      price: "$129.00",
      image: "./Hero-sub-banner-2.jpg",
    },
    {
      id: 3,
      name: "Noise Wireless Headphones",
      price: "$129.00",
      image: "./cms-banner-3.jpg",
    },
  ];

  return (
    <div className="bg-white min-h-screen pb-16">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <Swiper
          slidesPerView={3}
          spaceBetween={24}
          loop={true}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          breakpoints={{
            320: { slidesPerView: 1, spaceBetween: 16 },
            768: { slidesPerView: 2, spaceBetween: 20 },
            1024: { slidesPerView: 3, spaceBetween: 24 },
          }}
          className="product-swiper"
        >
          {products.map((product) => (
            <SwiperSlide key={product.id}>
              <div className="relative w-full h-80 rounded-2xl overflow-hidden group shadow-lg">
                {/* Product Image */}
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />

                {/* Content Overlay */}
                <div className="absolute inset-0 flex flex-col justify-center items-end pr-8">
                  <div className="bg-white/80 p-4 rounded-lg max-w-[70%] text-right">
                    <h3 className="font-bold leading-tight mb-2">{product.name}</h3>
                    <p className="font-bold text-[#ff4d4d] mb-3">{product.price}</p>
                    <button className="cursor-pointer px-5 py-2 bg-white text-black hover:bg-black hover:text-white transition-all duration-300 rounded font-semibold text-sm">
                      SHOP NOW
                    </button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <style>{`
          .product-swiper .swiper-button-next,
          .product-swiper .swiper-button-prev {
            background: white;
            width: 50px;
            height: 50px;
            border-radius: 50%;
            box-shadow: 0 4px 15px rgba(0, 0, 0, 0.15);
            border: 2px solid #e5e7eb;
            transition: all 0.3s ease;
          }
          .product-swiper .swiper-button-next:hover,
          .product-swiper .swiper-button-prev:hover {
            background: #ff5252;
            border-color: #ff5252;
            transform: scale(1.1);
          }
          .product-swiper .swiper-pagination-bullet {
            width: 12px;
            height: 12px;
            background: #d1d5db;
            opacity: 1;
            transition: all 0.3s ease;
          }
          .product-swiper .swiper-pagination-bullet-active {
            background: #ff5252;
            width: 32px;
            border-radius: 6px;
          }
        `}</style>
      </div>
    </div>
  );
}
        