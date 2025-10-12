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
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-1">
          {product.isNew && (
            <span className="bg-green-500 text-white text-[10px] font-semibold px-2 py-1 rounded shadow">
              NEW
            </span>
          )}
          {product.badge && (
            <span className="bg-red-500 text-white text-[10px] font-semibold px-2 py-1 rounded shadow">
              {product.badge}
            </span>
          )}
        </div>

        {/* Hover Actions */}
        <div
          className={`absolute right-3 bottom-3 flex flex-col gap-2 transition-all duration-300 ${
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
                className="w-5 h-5 rounded-full border-2 border-white shadow-md hover:scale-125 transition-transform duration-200"
                style={{ backgroundColor: color }}
              />
            ))}
          </div>
        )}
      </div>

      {/* Timer Below Image */}
      <div className="flex justify-center mt-3">
        <div className="bg-blue-600 group-hover:bg-red-600 px-4 py-2 rounded-md shadow-md transition-colors duration-300">
          <CountdownTimer />
        </div>
      </div>

      {/* Product Info */}
      <div className="p-4">
        <p className="text-gray-500 text-xs mb-1">{product.brand}</p>
        <h3 className="text-sm font-medium mb-2 h-10 line-clamp-2 cursor-pointer hover:text-[#ff5252] transition-colors">
          {product.name}
        </h3>
        <div className="mb-3">
          <StarRating rating={product.rating} />
        </div>
        <div className="flex items-center gap-2">
          {product.originalPrice > product.salePrice && (
            <span className="text-gray-400 line-through text-sm">
              ${product.originalPrice.toFixed(2)}
            </span>
          )}
          <span className="text-red-500 font-bold text-lg">
            ${product.salePrice.toFixed(2)}
          </span>
        </div>
      </div>
    </div>
  );
}
