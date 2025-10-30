import { useState } from "react";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { MdCompare, MdFullscreen } from "react-icons/md";
import { FiShoppingCart } from "react-icons/fi";

const ProductCard = ({
  image,
  hoverImage,
  brand,
  title,
  price,
  originalPrice,
  rating = 0,
  badge,
  colors = [],
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);
  const [selectedColor, setSelectedColor] = useState(0);

  const renderStars = (rating) => (
    <div className="flex gap-1 mt-1">
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
      className="relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 cursor-pointer group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Badge */}
      {badge && (
        <div className="absolute top-3 left-3 z-10">
          <span
            className={`px-2 py-1 text-xs font-semibold rounded-lg shadow-sm ${
              badge.type === "discount"
                ? "bg-red-500 text-white"
                : "bg-green-500 text-white"
            }`}
          >
            {badge.text}
          </span>
        </div>
      )}

      {/* Image Section */}
      <div
        className="relative bg-gray-50 overflow-hidden"
        style={{ paddingBottom: "100%" }}
      >
        {/* Default Image */}
        <img
          src={image}
          alt={title}
          className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-in-out ${
            isHovered ? "opacity-0 scale-105" : "opacity-100 scale-100"
          }`}
        />

        {/* Hover Image */}
        <img
          src={hoverImage || image}
          alt={`${title} hover`}
          className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-in-out ${
            isHovered ? "opacity-100 scale-105" : "opacity-0 scale-100"
          }`}
        />

        {/* Hover Action Buttons */}
        <div
          className={`absolute right-4 top-1/2 -translate-y-1/2 flex flex-col gap-3 transition-all duration-300 ${
            isHovered ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4"
          }`}
        >
          <button
            onClick={() => setIsFavorite(!isFavorite)}
            className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md hover:bg-red-500 hover:text-white transition-all duration-200"
            aria-label="Add to favorites"
          >
            {isFavorite ? (
              <AiFillHeart
                size={20}
                className="text-red-500 group-hover:text-white transition-all"
              />
            ) : (
              <AiOutlineHeart size={20} />
            )}
          </button>
          <button
            className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md hover:bg-blue-500 hover:text-white transition-all duration-200"
            aria-label="Compare"
          >
            <MdCompare size={20} />
          </button>
          <button
            className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md hover:bg-blue-500 hover:text-white transition-all duration-200"
            aria-label="Fullscreen View"
          >
            <MdFullscreen size={20} />
          </button>
          <button
            className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md hover:bg-green-500 hover:text-white transition-all duration-200"
            aria-label="Add to Cart"
          >
            <FiShoppingCart size={20} />
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
                    : "border-gray-200"
                }`}
                style={{ backgroundColor: color }}
                aria-label={`Select color ${color}`}
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
