import { useState, useContext } from "react";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { MdCompare, MdFullscreen } from "react-icons/md";
import { FiShoppingCart } from "react-icons/fi";
import StoreContext from "../context/storeContext/store";

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
  const { setOpenProductDeatilsModel } = useContext(StoreContext);
  const [isHovered, setIsHovered] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);
  const [selectedColor, setSelectedColor] = useState(0);

  const renderStars = () => (
    <div className="flex gap-1 mt-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <svg
          key={star}
          className={`w-4 h-4 ${
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
      className="
        relative bg-white rounded-2xl overflow-hidden shadow-sm
        hover:shadow-2xl transition-all duration-300 cursor-pointer group

        w-[260px] sm:w-[280px] md:w-[300px]
        h-[430px]
      "
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Badge */}
      {badge && (
        <span
          className={`absolute top-3 left-3 z-10 px-2 py-1 text-xs rounded-lg text-white ${
            badge.type === "discount" ? "bg-red-500" : "bg-green-500"
          }`}
        >
          {badge.text}
        </span>
      )}

      {/* Image */}
      <div className="relative h-[260px] bg-gray-50 overflow-hidden">
        <img
          src={image}
          alt={title}
          className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ${
            isHovered ? "opacity-0 scale-105" : "opacity-100"
          }`}
        />
        <img
          src={hoverImage || image}
          alt="hover"
          className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ${
            isHovered ? "opacity-100 scale-105" : "opacity-0"
          }`}
        />

        {/* Actions */}
        <div
          className="
            absolute right-4 top-1/2 -translate-y-1/2 flex flex-col gap-3
            opacity-100 md:opacity-0 md:group-hover:opacity-100
          "
        >
          <button
            onClick={() => setIsFavorite(!isFavorite)}
            className="w-10 h-10 bg-white rounded-full shadow flex items-center justify-center hover:bg-red-500 hover:text-white"
          >
            {isFavorite ? (
              <AiFillHeart className="text-red-500" />
            ) : (
              <AiOutlineHeart />
            )}
          </button>
          <button className="w-10 h-10 bg-white rounded-full shadow flex items-center justify-center hover:bg-blue-500 hover:text-white">
            <MdCompare />
          </button>
          <button
            onClick={() => setOpenProductDeatilsModel((p) => !p)}
            className="w-10 h-10 bg-white rounded-full shadow flex items-center justify-center hover:bg-blue-500 hover:text-white"
          >
            <MdFullscreen />
          </button>
          <button className="w-10 h-10 bg-white rounded-full shadow flex items-center justify-center hover:bg-green-500 hover:text-white">
            <FiShoppingCart />
          </button>
        </div>
      </div>

      {/* Info */}
      <div className="p-4 h-[170px] flex flex-col justify-between">
        <div>
          <p className="text-xs text-gray-500 uppercase">{brand}</p>
          <h3 className="text-sm font-semibold line-clamp-2 mt-1">
            {title}
          </h3>
          {renderStars()}
        </div>

        <div className="flex gap-2 items-center">
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
