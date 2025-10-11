import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
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
  return (
    <div className="max-w-7xl mx-auto px-4 py-8 bg-gray-50">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-800">Deal Of The Day</h2>
      </div>

      <Swiper
        modules={[Navigation, Autoplay]}
        spaceBetween={24}
        slidesPerView={1}
        navigation
        loop
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        speed={800}
        breakpoints={{
          640: { slidesPerView: 2, spaceBetween: 20 },
          768: { slidesPerView: 3, spaceBetween: 20 },
          1024: { slidesPerView: 4, spaceBetween: 24 },
          1280: { slidesPerView: 5, spaceBetween: 24 },
        }}
        className="pb-12"
      >
        {products.map((product) => (
          <SwiperSlide key={product.id}>
            <ProductCard product={product} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
