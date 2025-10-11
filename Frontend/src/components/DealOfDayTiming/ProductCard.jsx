import { useState } from "react";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { MdCompare, MdFullscreen } from "react-icons/md";
import { FiShoppingCart } from "react-icons/fi";
import StarRating from "./StarRating";
import CountdownTimer from "./CountdownTimer";

export default function ProductCard({ product }) {
  const [isHovered, setIsHovered] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <div
      className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 relative group h-full"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Section */}
      <div className="relative overflow-hidden bg-gray-50 aspect-square">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />

        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          <span className="bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded">
            {product.badge}
          </span>
          {product.isNew && (
            <span className="bg-green-500 text-white text-xs font-semibold px-2 py-1 rounded">
              NEW
            </span>
          )}
        </div>

        {/* Hover Actions */}
        <div
          className={`absolute right-3 top-3 flex flex-col gap-2 transition-all duration-300 ${
            isHovered ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4"
          }`}
        >
          <button
            onClick={() => setIsFavorite(!isFavorite)}
            className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md hover:bg-red-500 hover:text-white transition-all duration-200"
            aria-label="Add to favorites"
          >
            {isFavorite ? <AiFillHeart size={20} className="text-red-500" /> : <AiOutlineHeart size={20} />}
          </button>
          <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md hover:bg-blue-500 hover:text-white transition-all duration-200">
            <MdCompare size={20} />
          </button>
          <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md hover:bg-blue-500 hover:text-white transition-all duration-200">
            <MdFullscreen size={20} />
          </button>
          <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md hover:bg-green-500 hover:text-white transition-all duration-200">
            <FiShoppingCart size={20} />
          </button>
        </div>

        {/* Color Options */}
        {product.colors.length > 0 && (
          <div className="absolute bottom-3 left-3 flex gap-2">
            {product.colors.map((color, index) => (
              <button
                key={index}
                className="w-6 h-6 rounded-full border-2 border-white shadow-md hover:scale-125 transition-transform duration-200"
                style={{ backgroundColor: color }}
              />
            ))}
          </div>
        )}

        {/* Timer */}
        <div className="absolute bottom-3 right-3 bg-white bg-opacity-90 px-2 py-1 rounded">
          <CountdownTimer />
        </div>
      </div>

      {/* Product Info */}
      <div className="p-4">
        <p className="text-gray-500 text-xs mb-1">{product.brand}</p>
        <h3 className="text-sm font-medium mb-2 h-10 line-clamp-2 hover:text-blue-600 transition-colors cursor-pointer">
          {product.name}
        </h3>
        <div className="mb-3">
          <StarRating rating={product.rating} />
        </div>
        <div className="flex items-center gap-2">
          <span className="text-gray-400 line-through text-sm">${product.originalPrice.toFixed(2)}</span>
          <span className="text-red-500 font-bold text-lg">${product.salePrice.toFixed(2)}</span>
        </div>
      </div>
    </div>
  );
}
