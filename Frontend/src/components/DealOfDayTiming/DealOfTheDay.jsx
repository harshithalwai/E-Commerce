import { useRef, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";
import ProductCard from "./ProductCard";

const products = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=400&h=400&fit=crop",
    badge: "-8%",
    brand: "Initech space",
    name: "Pendant Light Lamps for Home Decor",
    rating: 4,
    originalPrice: 92.0,
    salePrice: 84.64,
    colors: [],
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=400&h=400&fit=crop",
    badge: "-7%",
    brand: "Massive Dynamic",
    name: "BoAt Lite Smartwatch 1.69 Inches HD Display",
    rating: 5,
    originalPrice: 69.0,
    salePrice: 64.17,
    colors: ["#E74C3C", "#F39C12", "#3498DB"],
    isNew: true,
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1610701596007-11502861dcfa?w=400&h=400&fit=crop",
    badge: "-15%",
    brand: "Soylent Green",
    name: "Menu Bottle Salt And Pepper Grinder steel",
    rating: 0,
    originalPrice: 67.0,
    salePrice: 56.95,
    colors: [],
  },
  {
    id: 4,
    image:
      "https://images.unsplash.com/photo-1524484485831-a92ffc0de03f?w=400&h=400&fit=crop",
    badge: "-$12.00",
    brand: "Massive Dynamic",
    name: "Natural Wood Ceiling Pendant Light Shade",
    rating: 0,
    originalPrice: 67.0,
    salePrice: 55.0,
    colors: [],
  },
  {
    id: 5,
    image:
      "https://images.unsplash.com/photo-1631540501239-1ca8e5a0a8b5?w=400&h=400&fit=crop",
    badge: "-8%",
    brand: "Soylent Green",
    name: "Plastic Bamboo Dustpan & Brush Black",
    rating: 0,
    originalPrice: 57.0,
    salePrice: 52.44,
    colors: [],
  },
  {
    id: 6,
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop",
    badge: "-12%",
    brand: "Initech space",
    name: "Apple Smart Watch / Midnight Aluminum",
    rating: 4,
    originalPrice: 58.0,
    salePrice: 51.04,
    colors: [],
  },
];

export default function DealOfTheDay() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [swiperReady, setSwiperReady] = useState(false);

  useEffect(() => {
    // Let refs get assigned before Swiper initializes navigation
    setSwiperReady(true);
  }, []);

  return (
    <div className="container py-10">
      <h2 className="text-xl font-bold text-gray-800 mb-8 ">
        Deal Of The Day
      </h2>

      <div className="flex items-center justify-center gap-4 relative">
        {/* Left Navigation */}
        <button
          ref={prevRef}
          className="swiper-button-prev-custom w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center hover:bg-gray-100 transition-all duration-300 cursor-pointer"
        >
          <IoChevronBack size={22} />
        </button>

        {/* Swiper */}
        <div className="w-[90%]">
          {swiperReady && (
            <Swiper
              modules={[Navigation, Autoplay]}
              spaceBetween={24}
              slidesPerView={1}
              loop
              autoplay={{
                delay: 3500,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
              speed={800}
              navigation={{
                prevEl: prevRef.current,
                nextEl: nextRef.current,
              }}
              breakpoints={{
                640: { slidesPerView: 2, spaceBetween: 20 },
                768: { slidesPerView: 3, spaceBetween: 20 },
                1024: { slidesPerView: 4, spaceBetween: 24 },
                1280: { slidesPerView: 4, spaceBetween: 24 },
              }}
            >
              {products.map((product) => (
                <SwiperSlide key={product.id}>
                  <ProductCard product={product} />
                </SwiperSlide>
              ))}
            </Swiper>
          )}
        </div>

        {/* Right Navigation */}
        <button
          ref={nextRef}
          className="swiper-button-next-custom w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center hover:bg-gray-100 transition-all duration-300 cursor-pointer"
        >
          <IoChevronForward size={22} />
        </button>
      </div>
    </div>
  );
}
