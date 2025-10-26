import { useState } from "react";

const ProductBox = ({ product, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [selectedColor, setSelectedColor] = useState(0);

  // Example colors
  const colors = product?.colors || ["#6B7280", "#84CC16", "#EAB308"];

  const renderStars = (rating) => (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((star) => (
        <svg
          key={star}
          className={`w-3.5 h-3.5 ${
            star <= rating ? "fill-yellow-400" : "fill-gray-300"
          }`}
          viewBox="0 0 20 20"
        >
          <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
        </svg>
      ))}
    </div>
  );

  return (
    <div
      key={index}
      className="cursor-pointer p-2 relative w-full border-2 border-gray-300 bg-white overflow-hidden rounded-md group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Badges */}
      <div className="absolute top-2 left-2 flex flex-col gap-1 z-10">
        {product?.discount && (
          <span className="px-1.5 py-0.5 text-[10px] font-bold rounded bg-red-500 text-white">
            -${product.discount}
          </span>
        )}
        {product?.isNew && (
          <span className="px-1.5 py-0.5 text-[10px] font-bold rounded bg-green-500 text-white">
            NEW
          </span>
        )}
      </div>

      {/* Image */}
      <div
        className="relative bg-gray-50 overflow-hidden"
        style={{ paddingBottom: "100%" }}
      >
        <img
          src={product?.image || "./Headset1.jpg"}
          alt={product?.title || "Product"}
          className={`absolute inset-0 object-fit w-full transition-all duration-700 ease-in-out ${
            isHovered ? "opacity-0 scale-105" : "opacity-100 scale-100"
          }`}
        />
        <img
          src={product?.hoverImage || "./Headset1-hover.jpg"}
          alt={product?.title || "Hover Product"}
          className={`absolute inset-0 object-cover w-full transition-all duration-700 ease-in-out ${
            isHovered ? "opacity-100 scale-105" : "opacity-0 scale-100"
          }`}
        />

        {/* Hover Buttons */}
        <div
          className={`absolute right-2 top-1/2 -translate-y-1/2 flex flex-col gap-2 transition-all duration-300 ${
            isHovered ? "opacity-100 translate-x-0" : "opacity-0 translate-x-2"
          }`}
        >
          {["wishlist", "compare", "view", "cart"].map((btn, idx) => (
            <button
              key={idx}
              className={`w-8 h-8 bg-white rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 border border-gray-300 ${
                btn === "wishlist"
                  ? "hover:bg-red-500 hover:text-white hover:border-red-500"
                  : btn === "compare"
                  ? "hover:bg-blue-500 hover:text-white hover:border-blue-500"
                  : btn === "view"
                  ? "hover:bg-purple-500 hover:text-white hover:border-purple-500"
                  : "hover:bg-green-500 hover:text-white hover:border-green-500"
              }`}
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {btn === "wishlist" && (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                )}
                {btn === "compare" && (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"
                  />
                )}
                {btn === "view" && (
                  <>
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                    />
                  </>
                )}
                {btn === "cart" && (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                )}
              </svg>
            </button>
          ))}
        </div>

        {/* Color Options */}
        <div
          className={`absolute bottom-2 left-2 flex gap-1 transition-all duration-300 ${
            isHovered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-1"
          }`}
        >
          {colors.map((color, idx) => (
            <button
              key={idx}
              onClick={() => setSelectedColor(idx)}
              className={`w-5 h-5 rounded-full border-2 transition-transform ${
                selectedColor === idx
                  ? "border-gray-800 scale-110"
                  : "border-white"
              }`}
              style={{ backgroundColor: color }}
            />
          ))}
        </div>
      </div>

      {/* Info */}
      <div className="p-3">
        <p className="text-[10px] text-gray-500 mb-0.5 uppercase tracking-wide">
          {product?.brand || "Gadget Zone"}
        </p>
        <h3 className="text-sm font-semibold text-gray-900 mb-1 hover:text-red-500 transition-colors duration-300">
          {product?.title || "Apple AirPods Max Over-Ear Wireless Headphone"}
        </h3>
        {renderStars(product?.rating || 5)}
        <div className="flex items-center justify-between gap-1 mt-1">
          <span className="text-[11px] text-gray-400 line-through">$47.00</span>
          <span className="text-md font-bold text-red-500">
            ${product?.price || 42.0}
          </span>
          {product?.originalPrice && (
            <span className="text-[11px] text-gray-400 line-through">
              ${product.originalPrice}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductBox;
