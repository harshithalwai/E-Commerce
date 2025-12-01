import React, { useState } from "react";
import InnerImageZoom from "react-inner-image-zoom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

const ProductDetailsCont = () => {
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

  const StarRating = ({ rating = 5, total = 5 }) => {
    return (
      <div className="flex gap-1">
        {[...Array(total)].map((_, i) => (
          <svg
            key={i}
            className={`w-4 h-4 ${
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
    <>
      <div className="flex gap-6">
        <div className="w-1/3 pt-10">
          <div className="relative bg-white rounded-lg overflow-hidden shadow-md group mb-4">
            <InnerImageZoom
              src={images[selectedImage]}
              zoomType="hover"
              zoomScale={2}
              alt="Product"
            />
            <button className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 opacity-0 group-hover:opacity-100 transition">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                />
              </svg>
            </button>
            <span className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
              New
            </span>
          </div>

          <div className="w-full mt-2">
            <Swiper
              modules={[Navigation]}
              navigation
              spaceBetween={10}
              slidesPerView={4}
              breakpoints={{
                320: { slidesPerView: 3 },
                640: { slidesPerView: 4 },
                1024: { slidesPerView: 5 },
              }}
              className="thumbnail-swiper"
            >
              {images.map((img, idx) => (
                <SwiperSlide key={idx}>
                  <button
                    onClick={() => setSelectedImage(idx)}
                    className={`w-full h-20 border-2 rounded-lg overflow-hidden transition ${
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

        <div className="w-full lg:w-2/3 flex flex-col gap-3">
          <div className="flex items-center gap-3">
            <StarRating rating={5} />
            <span className="text-sm text-gray-600">1 Review's</span>
          </div>

          <h1 className="text-2xl font-bold text-gray-900">
            Apple AirPods Max Over-Ear Wireless Headphone
          </h1>

          <p className="text-gray-600 text-sm leading-relaxed">
            We denounce with righteous indignation and dislike men who are so
            beguiled and demoralized by the charms of pleasure of the moment, so
            blinded by desire that they cannot foresee.
          </p>

          <div className="flex items-center gap-2 pb-4 border-b border-gray-400">
            <span className="font-semibold text-gray-700">Brand :</span>
            <span className="text-orange-600 hover:text-orange-700 cursor-pointer">
              Gadget Zone
            </span>
          </div>

          <div className="grid grid-cols-2 gap-x-8 gap-y-3 mt-2 text-sm">
            <div className="flex items-center gap-2">
              <span className="font-semibold text-gray-700 text-sm">
                Condition:
              </span>
              <span className="text-sm bg-green-100 text-green-800 px-2 py-1 rounded">
                New
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-semibold text-gray-700">Reference:</span>
              <span>Product1</span>
            </div>
            <div className="flex items-center gap-2 col-span-2">
              <span className="font-semibold text-gray-700">
                Available In Stock:
              </span>
              <span className="text-green-600 font-medium">243 Items</span>
            </div>
          </div>

          <div>
            <label className="block font-semibold text-gray-700 mb-3">
              Size:{" "}
              <span className="font-normal capitalize text-gray-600">
                {selectedSize}
              </span>
            </label>
            <div className="flex gap-3">
              {sizes.map((size) => (
                <button
                  key={size.value}
                  onClick={() => setSelectedSize(size.value)}
                  className={`px-6 py-2 border-2 rounded transition-all font-medium ${
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

          <div>
            <label className="block font-semibold text-gray-700 mb-3">
              Color:{" "}
              <span className="font-normal capitalize text-gray-600">
                {selectedColor}
              </span>
            </label>
            <div className="flex gap-3">
              {colors.map((color) => (
                <button
                  key={color.value}
                  onClick={() => setSelectedColor(color.value)}
                  className={`relative w-6 h-6 rounded-full border-2 transition-all ${
                    selectedColor === color.value
                      ? "border-gray-900 scale-110"
                      : "border-gray-300 hover:border-gray-400"
                  }`}
                  style={{ backgroundColor: color.color }}
                  title={color.name}
                >
                  {selectedColor === color.value && (
                    <svg
                      className="absolute inset-0 m-auto w-3 h-3 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  )}
                </button>
              ))}
            </div>
          </div>

          <div className="">
            <div className="flex items-center gap-3">
              <span className="text-gray-400 line-through text-sm">$47.00</span>
              <span className="bg-red-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                Save $5.00
              </span>
            </div>
            <div className="text-2xl font-bold text-[#ff5252]">$42.00</div>
            <div className="flex items-center gap-2 text-green-600">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                <path d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1V5a1 1 0 00-1-1H3zM14 7a1 1 0 00-1 1v6.05A2.5 2.5 0 0115.95 16H17a1 1 0 001-1v-5a1 1 0 00-.293-.707l-2-2A1 1 0 0015 7h-1z" />
              </svg>
              <span className="text-sm font-medium">
                Free Shipping (Est. Delivery Time 2-3 Days)
              </span>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="flex items-center border-2 border-gray-300 rounded-lg overflow-hidden">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="px-4 py-3 hover:bg-gray-100 transition"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M20 12H4"
                  />
                </svg>
              </button>
              <input
                type="number"
                value={quantity}
                onChange={(e) =>
                  setQuantity(Math.max(1, parseInt(e.target.value) || 1))
                }
                className="w-16 text-center border-x-2 border-gray-300 py-3 focus:outline-none font-semibold"
              />
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="px-4 py-3 hover:bg-gray-100 transition"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 4v16m8-8H4"
                  />
                </svg>
              </button>
            </div>
            <button className="flex-1 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold py-3 px-6 rounded-lg transition shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
              Add to Cart
            </button>
          </div>

          <div className="flex gap-3">
            <button className="flex-1 border-2 border-gray-300 hover:border-red-500 hover:text-red-500 py-3 px-4 rounded-lg flex items-center justify-center gap-2 transition group">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
              <span className="font-medium">Wishlist</span>
            </button>
            <button className="flex-1 border-2 border-gray-300 hover:border-blue-500 hover:text-blue-500 py-3 px-4 rounded-lg flex items-center justify-center gap-2 transition">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                />
              </svg>
              <span className="font-medium">Compare</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetailsCont;
