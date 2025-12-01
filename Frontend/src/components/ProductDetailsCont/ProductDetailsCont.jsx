import React, { useState } from "react";
import InnerImageZoom from "react-inner-image-zoom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

const ProductDetailsCont = ({ inModal = false }) => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState("grey");
  const [selectedSize, setSelectedSize] = useState("small");

  const sizes = [
    { name: "Small", value: "small" },
    { name: "Large", value: "large" },
    { name: "XL", value: "xl" },
    { name: "XXL", value: "xxl" },
  ];

  const images = [
    "/watch1.png",
    "/watch2.png",
    "/watch1.png",
    "/watch1.png",
    "/watch1.png",
  ];

  const colors = [
    { name: "Grey", value: "grey", color: "#AAB2BD" },
    { name: "Green", value: "green", color: "#A0D468" },
    { name: "Yellow", value: "yellow", color: "#F1C40F" },
  ];

  const textBase = inModal ? "text-xs sm:text-sm" : "text-sm";
  const textLg = inModal ? "text-lg sm:text-xl" : "text-2xl";
  const textTitle = inModal ? "text-base sm:text-lg md:text-xl" : "text-2xl";

  const StarRating = ({ rating = 5, total = 5 }) => {
    return (
      <div className="flex gap-1">
        {[...Array(total)].map((_, i) => (
          <svg
            key={i}
            className={`w-3 h-3 sm:w-4 sm:h-4 ${
              i < rating ? "text-yellow-400 fill-current" : "text-gray-300"
            }`}
            viewBox="0 0 20 20"
          >
            <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
          </svg>
        ))}
      </div>
    );
  };

  return (
    <div
      className={`flex flex-col lg:flex-row justify-between gap-6 w-full 
        ${inModal ? "p-2 max-w-full overflow-hidden" : ""}
      `}
    >
      {/* LEFT SECTION */}
      <div className="w-full lg:w-1/3">
        <div className="relative bg-white rounded-lg overflow-hidden shadow-md mb-3 w-full">
          <div className="relative w-full" style={{ aspectRatio: "1/1" }}>
            <InnerImageZoom
              src={images[selectedImage]}
              zoomSrc={images[selectedImage]}
              zoomType="hover"
              zoomScale={1.5}
              moveType="pan"
              className="w-full h-full object-contain"
              imgAttributes={{
                alt: "Product",
                style: { objectFit: "contain" },
              }}
            />
          </div>

          <span
            className={`absolute top-3 left-3 bg-red-500 text-white px-2 py-1 rounded-full 
              ${inModal ? "text-[10px] sm:text-xs" : "text-sm"}
            `}
          >
            New
          </span>
        </div>

        {/* THUMBNAILS */}
        <div className="w-full">
          <Swiper
            modules={[Navigation]}
            navigation
            spaceBetween={8}
            slidesPerView={4}
            breakpoints={{
              320: { slidesPerView: 3 },
              640: { slidesPerView: 4 },
              1024: { slidesPerView: 5 },
            }}
          >
            {images.map((img, idx) => (
              <SwiperSlide key={idx}>
                <button
                  onClick={() => setSelectedImage(idx)}
                  className={`w-full h-16 sm:h-20 border-2 rounded-lg overflow-hidden transition ${
                    selectedImage === idx
                      ? "border-[#ff5252]"
                      : "border-gray-200 hover:border-gray-300"
                  }`}
                >
                  <img
                    src={img}
                    alt={`Thumbnail ${idx + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      {/* RIGHT SECTION */}
      <div className="w-full lg:w-2/3 flex flex-col gap-3">
        <div className="flex items-center gap-2">
          <StarRating rating={5} />
          <span className={`${textBase} text-gray-600`}>1 Review's</span>
        </div>

        <h1 className={`font-bold text-gray-900 leading-snug ${textTitle}`}>
          Apple AirPods Max Over-Ear Wireless Headphone
        </h1>

        <p className={`text-gray-600 leading-relaxed ${textBase}`}>
          We denounce with righteous indignation and dislike men who are so
          beguiled and demoralized by the charms of pleasure of the moment.
        </p>

        {/* INFO GRID */}
        <div className="grid grid-cols-2 gap-x-6 gap-y-2 mt-1">
          <div className={`flex items-center gap-2 ${textBase}`}>
            <span className="font-semibold text-gray-700">Condition:</span>
            <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-[10px]">
              New
            </span>
          </div>
          <div className={`flex items-center gap-2 ${textBase}`}>
            <span className="font-semibold text-gray-700">Reference:</span>
            <span>Product1</span>
          </div>
          <div className={`flex items-center gap-2 col-span-2 ${textBase}`}>
            <span className="font-semibold text-gray-700">
              Available In Stock:
            </span>
            <span className="text-green-600 font-medium">243 Items</span>
          </div>
        </div>

        {/* SIZE */}
        <div>
          <label className={`block font-semibold text-gray-700 mb-2 ${textBase}`}>
            Size:
            <span className="font-normal capitalize text-gray-600 ml-1">
              {selectedSize}
            </span>
          </label>

          <div className="flex gap-2 flex-wrap">
            {sizes.map((size) => (
              <button
                key={size.value}
                onClick={() => setSelectedSize(size.value)}
                className={`px-4 py-2 border-2 rounded font-medium text-xs sm:text-sm transition ${
                  selectedSize === size.value
                    ? "bg-[#ff5252] text-white border-[#ff5252]"
                    : "bg-white text-gray-700 border-gray-300 hover:border-gray-400"
                }`}
              >
                {size.name}
              </button>
            ))}
          </div>
        </div>

        {/* COLOR */}
        <div>
          <label
            className={`block font-semibold text-gray-700 mb-2 ${textBase}`}
          >
            Color:
            <span className="font-normal capitalize text-gray-600 ml-1">
              {selectedColor}
            </span>
          </label>

          <div className="flex gap-3">
            {colors.map((color) => (
              <button
                key={color.value}
                onClick={() => setSelectedColor(color.value)}
                className={`relative w-6 h-6 sm:w-7 sm:h-7 rounded-full border-2 transition ${
                  selectedColor === color.value
                    ? "border-gray-900 scale-105"
                    : "border-gray-300 hover:border-gray-400"
                }`}
                style={{ backgroundColor: color.color }}
              />
            ))}
          </div>
        </div>

        {/* PRICE */}
        <div>
          <div className="flex items-center gap-2">
            <span className={`text-gray-400 line-through ${textBase}`}>
              $47.00
            </span>
            <span className="bg-red-500 text-white px-2 py-1 rounded-full text-[10px] sm:text-xs">
              Save $5.00
            </span>
          </div>

          <div className={`font-bold text-[#ff5252] ${textLg}`}>$42.00</div>
        </div>

        {/* QUANTITY */}
        <div className="flex flex-wrap gap-3">
          <div className="flex items-center border-2 border-gray-300 rounded-lg overflow-hidden">
            <button
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
              className="px-3 py-2 hover:bg-gray-100 transition"
            >
              -
            </button>

            <input
              type="number"
              value={quantity}
              onChange={(e) =>
                setQuantity(Math.max(1, parseInt(e.target.value) || 1))
              }
              className="w-12 text-center border-x-2 border-gray-300 py-2 font-semibold text-sm"
            />

            <button
              onClick={() => setQuantity(quantity + 1)}
              className="px-3 py-2 hover:bg-gray-100 transition"
            >
              +
            </button>
          </div>

          <button className="flex-1 bg-orange-600 hover:bg-orange-700 text-white font-bold py-2 sm:py-3 rounded-lg transition shadow-md text-xs sm:text-sm">
            Add to Cart
          </button>
        </div>

        {!inModal && (
          <div className="flex flex-wrap gap-3">
            <button className="flex-1 border-2 border-gray-300 hover:border-red-500 hover:text-red-500 py-3 rounded-lg transition text-center font-medium">
              Wishlist
            </button>
            <button className="flex-1 border-2 border-gray-300 hover:border-blue-500 hover:text-blue-500 py-3 rounded-lg transition text-center font-medium">
              Compare
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDetailsCont;
