import { useState } from "react";

const ProductCard = ({
  image,
  brand,
  title,
  price,
  originalPrice,
  rating = 0,
  badge,
  colors = [],
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [selectedColor, setSelectedColor] = useState(0);

  const renderStars = (rating) => (
    <div className="flex gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <svg
          key={star}
          className={`w-4 h-4 transition-colors duration-300 ${
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
      className="relative bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 cursor-pointer group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Badge */}
      {badge && (
        <div className="absolute top-3 left-3 z-10">
          <span
            className={`px-2 py-1 text-xs font-bold rounded ${
              badge.type === "discount"
                ? "bg-red-500 text-white"
                : "bg-green-500 text-white"
            }`}
          >
            {badge.text}
          </span>
        </div>
      )}

      {/* Image Container */}
      <div
        className="relative bg-gray-50 overflow-hidden"
        style={{ paddingBottom: "100%" }}
      >
        <img
          src={image}
          alt={title}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />

        {/* Hover Action Buttons */}
        <div
          className={`absolute right-4 top-1/2 -translate-y-1/2 flex flex-col gap-3 transition-all duration-300 ${
            isHovered ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4"
          }`}
        >
          {/* Wishlist Button */}
          <button
            className="cursor-pointer w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center transition-all duration-300 hover:bg-red-500 hover:text-white hover:scale-110"
            aria-label="Add to wishlist"
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
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              />
            </svg>
          </button>

          {/* Compare Button */}
          <button
            className="cursor-pointer w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center transition-all duration-300 hover:bg-blue-500 hover:text-white hover:scale-110"
            aria-label="Compare"
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
                d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"
              />
            </svg>
          </button>

          {/* Quick View Button */}
          <button
            className="cursor-pointer w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center transition-all duration-300 hover:bg-purple-500 hover:text-white hover:scale-110"
            aria-label="Quick view"
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
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
              />
            </svg>
          </button>

          {/* Add to Cart Button */}
          <button
            className="cursor-pointer w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center transition-all duration-300 hover:bg-green-500 hover:text-white hover:scale-110"
            aria-label="Add to cart"
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
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
          </button>
        </div>

        {/* Color Options */}
        {colors.length > 0 && (
          <div
            className={`absolute bottom-3 left-3 flex gap-2 transition-all duration-300 ${
              isHovered
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-2"
            }`}
          >
            {colors.map((color, index) => (
              <button
                key={index}
                onClick={() => setSelectedColor(index)}
                className={`w-6 h-6 rounded-full border-2 transition-transform ${
                  selectedColor === index
                    ? "border-gray-800 scale-110"
                    : "border-white"
                }`}
                style={{ backgroundColor: color }}
                aria-label={`Select color ${index + 1}`}
              />
            ))}
          </div>
        )}
      </div>

      {/* Product Info */}
      <div className="p-4">
        <p className="text-xs text-gray-500 mb-1 uppercase tracking-wide">
          {brand}
        </p>
        <h3 className="text-sm font-semibold text-gray-900 mb-2 line-clamp-2 hover:text-red-500 transition-colors duration-300">
          {title}
        </h3>
        {renderStars(rating)}
        <div className="flex items-center gap-2 mt-2">
          <span className="text-lg font-bold text-red-500">${price}</span>
          {originalPrice && (
            <span className="text-sm text-gray-400 line-through">
              ${originalPrice}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
