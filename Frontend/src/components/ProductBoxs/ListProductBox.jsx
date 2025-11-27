import React, { useState } from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import CompareArrowsIcon from "@mui/icons-material/CompareArrows";
import VisibilityIcon from "@mui/icons-material/Visibility";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const ListProductBox = ({ product = {} }) => {
  const [isHovered, setIsHovered] = useState(false);

  const {
    title = "Apple AirPods Max Over-Ear Wireless Headphone",
    brand = "Gadget Zone",
    description = "We denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment.",
    image = "./Headset1.jpg",
    hoverImage = "./Headset1-hover.jpg",
    price = "42.00",
    originalPrice,
    discount,
    rating = 5,
    isNew,
    colors = ["#AAB2BD", "#A0D468", "#F1C40F"],
    inStock = true,
  } = product;

  const renderStars = (rating) => (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((star) => (
        <svg
          key={star}
          className={`w-4 h-4 ${
            star <= rating ? "fill-yellow-400" : "fill-gray-300"
          }`}
          viewBox="0 0 20 20"
          aria-hidden="true"
        >
          <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
        </svg>
      ))}
    </div>
  );

  return (
    <div
      className="flex flex-col md:flex-row gap-4 p-4 border border-gray-200 bg-white rounded-xl hover:shadow-xl transition-all duration-300 mb-4 relative group overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Product Image Section */}
      <div className="relative w-full md:w-48 h-48 flex-shrink-0 bg-gray-50 rounded-lg overflow-hidden">
        {/* Badges */}
        <div className="absolute top-2 left-2 flex flex-col gap-1 z-10">
          {discount && (
            <span className="px-2 py-1 text-xs font-bold rounded bg-red-500 text-white shadow-sm">
              {discount}
            </span>
          )}
          {isNew && (
            <span className="px-2 py-1 text-xs font-bold rounded bg-green-500 text-white shadow-sm">
              NEW
            </span>
          )}
        </div>

        {/* Main & Hover Images */}
        <img
          src={image}
          alt={title}
          className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ${
            isHovered ? "opacity-0 scale-105" : "opacity-100 scale-100"
          }`}
          draggable="false"
        />
        <img
          src={hoverImage}
          alt={`${title} (hover view)`}
          className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ${
            isHovered ? "opacity-100 scale-105" : "opacity-0 scale-100"
          }`}
          draggable="false"
        />

        {/* Hover Action Buttons */}
        <div
          className={`absolute right-4 top-1/2 -translate-y-1/2 flex flex-col gap-2 transition-all duration-300 ${
            isHovered ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4"
          }`}
        >
          {[
            { icon: <FavoriteIcon fontSize="small" />, color: "red", label: "Add to Wishlist" },
            { icon: <CompareArrowsIcon fontSize="small" />, color: "blue", label: "Compare" },
            { icon: <VisibilityIcon fontSize="small" />, color: "purple", label: "Quick View" },
            { icon: <ShoppingCartIcon fontSize="small" />, color: "green", label: "Add to Cart" },
          ].map(({ icon, color, label }, idx) => (
            <button
              key={idx}
              aria-label={label}
              className={`w-10 h-10 bg-white rounded-full flex items-center justify-center transition-all border border-gray-300 shadow-sm hover:bg-${color}-500 hover:text-white hover:scale-110`}
            >
              {icon}
            </button>
          ))}
        </div>

        {/* Color Options */}
        <div
          className={`absolute bottom-2 left-2 flex gap-2 transition-all duration-300 ${
            isHovered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
          }`}
        >
          {colors.map((color, idx) => (
            <button
              key={idx}
              aria-label={`Color option ${idx + 1}`}
              className="w-5 h-5 rounded-full border-2 border-white hover:border-gray-800 hover:scale-110 transition-all"
              style={{ backgroundColor: color }}
            />
          ))}
        </div>
      </div>

      {/* Product Info Section */}
      <div className="flex-1 flex flex-col justify-between py-2">
        <div>
          <p className="text-xs text-gray-500 mb-1 uppercase tracking-wide">{brand}</p>
          <h3 className="text-lg font-semibold text-gray-900 mb-2 hover:text-red-500 transition-colors cursor-pointer">
            {title}
          </h3>
          <div className="mb-2">{renderStars(rating)}</div>
          <p className="text-sm text-gray-600 mb-3 line-clamp-3">{description}</p>
        </div>

        {/* Price + Stock */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            {originalPrice && (
              <span className="text-sm text-gray-400 line-through">${originalPrice}</span>
            )}
            <span className="text-2xl font-bold text-red-500">${price}</span>
            {discount && (
              <span className="text-xs px-2 py-1 bg-red-100 text-red-600 rounded font-semibold">
                {discount}
              </span>
            )}
          </div>

          <span
            className={`text-sm font-medium ${
              inStock ? "text-green-600" : "text-red-500"
            }`}
          >
            {inStock ? "In Stock" : "Out of Stock"}
          </span>
        </div>
      </div>

      {/* Options Button */}
      <div className="absolute bottom-4 right-4">
        <button className="px-6 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors font-medium shadow-sm">
          OPTIONS
        </button>
      </div>
    </div>
  );
};

export default ListProductBox;
