import { useState,useContext } from "react";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { MdCompare, MdFullscreen } from "react-icons/md";
import { FiShoppingCart } from "react-icons/fi";
import StarRating from "./StarRating";
import CountdownTimer from "./CountdownTimer";
import StoreContext from "../context/storeContext/store";
export default function ProductCard({ product }) {
  const {setOpenProductDeatilsModel} = useContext(StoreContext);
  const [isHovered, setIsHovered] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <div
      className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-xl 
      transition-all duration-300 relative group h-full 
      border border-gray-200"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Section */}
      <div className="relative overflow-hidden bg-gray-50 aspect-square w-full">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 
          group-hover:scale-105"
        />

        {/* Badges */}
        <div className="absolute top-2 left-2 flex flex-col gap-1 z-10">
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
          className={`absolute right-2 bottom-2 flex flex-col gap-2 
          transition-all duration-300 z-10
          ${isHovered ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4"}`}
        >
          {/* Favorites */}
          <button
            onClick={() => setIsFavorite(!isFavorite)}
            className="w-9 h-9 sm:w-10 sm:h-10 bg-white rounded-full 
            flex items-center justify-center shadow-md 
            hover:bg-red-500 hover:text-white transition-all duration-200"
            aria-label="Add to favorites"
          >
            {isFavorite ? (
              <AiFillHeart size={20} className="text-red-500" />
            ) : (
              <AiOutlineHeart size={20} />
            )}
          </button>

          {/* Compare */}
          <button
            className="w-9 h-9 sm:w-10 sm:h-10 bg-white rounded-full flex items-center justify-center shadow-md hover:bg-blue-500 hover:text-white transition-all duration-200"
          >
            <MdCompare size={20} />
          </button>

          {/* Fullscreen */}
          <button
            className="w-9 h-9 sm:w-10 sm:h-10 bg-white rounded-full flex items-center justify-center shadow-md hover:bg-blue-500 hover:text-white transition-all duration-200"
             onClick={() => setOpenProductDeatilsModel((prev)=>!prev)}
          >
            <MdFullscreen size={20} />
          </button>

          {/* Add to Cart */}
          <button
            className="w-9 h-9 sm:w-10 sm:h-10 bg-white rounded-full flex items-center justify-center shadow-md hover:bg-green-500 hover:text-white transition-all duration-200"
          >
            <FiShoppingCart size={20} />
          </button>
        </div>

        {/* Color Options */}
        {product.colors.length > 0 && (
          <div className="absolute bottom-2 left-2 flex gap-2 z-10">
            {product.colors.map((color, index) => (
              <button
                key={index}
                className="w-4 h-4 sm:w-5 sm:h-5 rounded-full border-2 border-white shadow-md hover:scale-125 transition-transform duration-200"
                style={{ backgroundColor: color }}
              />
            ))}
          </div>
        )}
      </div>

      {/* Timer Below Image */}
      <div className="flex justify-center mt-3 px-3">
        <div className="bg-blue-600 group-hover:bg-red-600 px-4 py-2 rounded-md shadow-md transition-colors duration-300 w-full max-w-[180px]">
          <CountdownTimer />
        </div>
      </div>

      {/* Product Info */}
      <div className="p-4">
        <p className="text-gray-500 text-xs mb-1">{product.brand}</p>

        <h3
          className="text-sm font-medium mb-2 h-10 line-clamp-2 cursor-pointer 
          hover:text-[#ff5252] transition-colors"
        >
          {product.name}
        </h3>

        <div className="mb-3">
          <StarRating rating={product.rating} />
        </div>

        <div className="flex items-center gap-2 flex-wrap">
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
