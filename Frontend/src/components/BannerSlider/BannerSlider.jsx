import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";
import "./BannerSlider.css";
export default function ProductCardsSwiper() {
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
    <div className="bg-white py-5">
      <div className="container">
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
            <SwiperSlide key={product.id} className="relative">
              <div className=" w-full rounded-sm overflow-hidden group shadow-lg">
                {/* Product Image */}
                <img
                  src={product.image}
                  alt={product.name}
                  className=" transition-transform duration-500 group-hover:scale-110"
                />

                {/* Content Overlay */}
                <div className="absolute inset-0 flex items-center justify-end pr-6">
                  <div className=" p-4 rounded-lg text-right max-w-[60%]">
                    <h3 className="font-bold leading-tight mb-2">
                      {product.name}
                    </h3>
                    <p className="font-bold text-[#ff4d4d] mb-3">
                      {product.price}
                    </p>
                    <button className="cursor-pointer px-5 py-2 bg-black text-white hover:bg-white hover:text-black transition-all duration-300 rounded font-semibold text-sm">
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
