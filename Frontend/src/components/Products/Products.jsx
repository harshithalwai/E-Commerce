import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import ProductCard from "./ProductCard";

export default function Products({ category }) {
  const allProducts = [
    {
      image:
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400",
      brand: "Initech Space",
      title: "Apple Smart Watch / Midnight Aluminum",
      price: "51.04",
      originalPrice: "58.00",
      rating: 4,
      badge: { type: "discount", text: "-12%" },
      category: "Smart Watches",
    },
    {
      image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400",
      brand: "Pro Tech Gear",
      title: "Cropped Satin Bomber Jacket",
      price: "94.00",
      rating: 0,
      badge: { type: "new", text: "NEW" },
      colors: ["#8B9197", "#2C3E50"],
      category: "Jackets",
    },
    {
      image:
        "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=400",
      brand: "Soylent Green",
      title: "Mens Cotton Casual Short Sleeve T-Shirts",
      price: "86.00",
      rating: 5,
      category: "T-Shirts",
    },
    {
      image:
        "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400",
      brand: "Gadget Zone",
      title: "Multicolored Open-Knit Crewneck",
      price: "79.00",
      rating: 0,
      category: "T-Shirts",
    },
    {
      image:
        "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=400",
      brand: "Looney Tunes",
      title: "Michels Kors Jet Set Tote Bag",
      price: "82.00",
      rating: 5,
      category: "Bags",
    },
    {
      image:
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400",
      brand: "Weeds Capital",
      title: "Nike Air Max Invigor 'Black' 749680",
      price: "84.00",
      rating: 4,
      category: "Shoes",
    },
  ];

  const filteredProducts =
    category === "All"
      ? allProducts
      : allProducts.filter((item) => item.category === category);

  return (
    <div className="relative max-w-7xl mx-auto px-4">
      <Swiper
        modules={[Navigation]}
        navigation={{
          nextEl: ".swiper-button-next-custom",
          prevEl: ".swiper-button-prev-custom",
        }}
        spaceBetween={20}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
          1280: { slidesPerView: 5 },
        }}
        className="product-swiper"
      >
        {filteredProducts.map((product, index) => (
          <SwiperSlide key={index}>
            <ProductCard {...product} />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Navigation Buttons */}
      <button className="swiper-button-prev-custom absolute left-0 top-1/2 -translate-y-1/2 z-20 w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center hover:bg-gray-100 transition-all duration-300 cursor-pointer">
        &#10094;
      </button>
      <button className="swiper-button-next-custom absolute right-0 top-1/2 -translate-y-1/2 z-20 w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center hover:bg-gray-100 transition-all duration-300 cursor-pointer">
        &#10095;
      </button>
    </div>
  );
}
