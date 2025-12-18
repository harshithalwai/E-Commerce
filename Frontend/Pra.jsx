import React from "react";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import { motion } from "framer-motion";

const Pra = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const list = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.4,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };
  return (
    <>
      <motion.div
        key={item.id}
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 20, height: 0 }}
        transition={{ delay: index * 0.1 }}
        className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow p-6"
      >
        <div className="flex gap-6">
          {/* IMAGE */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="w-32 h-32 bg-gray-200 rounded-xl overflow-hidden flex-shrink-0"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* DETAILS */}
          <div className="flex-1">
            <div className="flex justify-between items-start mb-2">
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-1">
                  {item.name}
                </h3>

                <div className="flex gap-2 mb-1">
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                    Size: {item.size}
                  </span>
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                    {item.color}
                  </span>
                </div>

                {item.seller && (
                  <p className="text-sm text-gray-500">
                    Seller: <span className="font-medium">{item.seller}</span>
                  </p>
                )}
              </div>

              {/* REMOVE BUTTON */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => removeItem(item.id)}
                className="text-gray-400 hover:text-[#ff5252] transition-colors p-2"
              >
                <FiTrash2 className="text-xl" />
              </motion.button>
            </div>

            {/* QUANTITY + PRICING */}
            <div className="flex justify-between items-center mt-4">
              <div className="flex items-center gap-3 bg-gray-100 rounded-lg p-1">
                <motion.button
                  whileTap={{ scale: 0.9 }}
                  onClick={() => updateQuantity(item.id, -1)}
                  className="w-8 h-8 flex items-center justify-center rounded-md hover:bg-white transition-colors"
                >
                  <FiMinus className="text-[#ff5252]" />
                </motion.button>

                <span className="font-semibold text-gray-800 w-8 text-center">
                  {item.quantity}
                </span>

                <motion.button
                  whileTap={{ scale: 0.9 }}
                  onClick={() => updateQuantity(item.id, 1)}
                  className="w-8 h-8 flex items-center justify-center rounded-md hover:bg-white transition-colors"
                >
                  <FiPlus className="text-[#ff5252]" />
                </motion.button>
              </div>

              {/* PRICE AREA */}
              <div className="text-right">
                <p className="text-2xl font-bold text-[#ff5252]">
                  ₹{(item.price * item.quantity).toFixed(2)}
                </p>

                {item.oldPrice && (
                  <p className="text-sm line-through text-gray-400">
                    ₹{item.oldPrice}
                  </p>
                )}

                {item.discountPercent && (
                  <p className="text-sm text-green-600 font-medium">
                    {item.discountPercent}% Off
                  </p>
                )}
              </div>
            </div>

            {/* SAVE FOR LATER & REMOVE BUTTONS */}
            <div className="flex gap-6 mt-4 text-sm font-medium">
              {/* SAVE FOR LATER */}
              <button
                onClick={() => saveForLater(item)}
                className="text-[#ff5252] hover:underline"
              >
                Save for Later
              </button>

              {/* REMOVE */}
              <button
                onClick={() => removeItem(item.id)}
                className="text-gray-500 hover:text-[#ff5252] hover:underline"
              >
                Remove
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Pra;
