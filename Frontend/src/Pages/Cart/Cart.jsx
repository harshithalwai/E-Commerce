import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FiTrash2,
  FiMinus,
  FiPlus,
  FiShoppingBag,
  FiArrowLeft,
  FiTag,
  FiShoppingCart,
  FiHeart
} from 'react-icons/fi';

export default function Cart() {
  const [cartItems, setCartItems] = useState([
    {
      id: 101,
      name: "BRUTON Lite Sports Shoes Running Shoes For Men",
      price: 407,
      oldPrice: 2499,
      quantity: 1,
      image:
        "https://rukminim2.flixcart.com/image/224/224/xif0q/shoe/q/w/y/6-rng-854-grey-40-bruton-grey-original-imahbhzs8zgnexrz.jpeg?q=90",
      color: "Grey",
      size: "10",
      seller: "BRUTONFOOTWEAR",
      discountPercent: 83
    },

    {
      id: 2,
      name: 'Premium Wireless Headphones',
      price: 299.99,
      quantity: 1,
      image:
        'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop',
      color: 'Black',
      size: 'One Size'
    },

    {
      id: 3,
      name: 'Smart Watch Pro',
      price: 399.99,
      quantity: 2,
      image:
        'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop',
      color: 'Silver',
      size: '42mm'
    },

    {
      id: 4,
      name: 'Designer Backpack',
      price: 149.99,
      quantity: 1,
      image:
        'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=400&fit=crop',
      color: 'Navy Blue',
      size: 'Large'
    }
  ]);

  // SAVE FOR LATER LIST
  const [savedItems, setSavedItems] = useState([]);

  // Functions
  const updateQuantity = (id, delta) => {
    setCartItems(items =>
      items.map(item =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + delta) }
          : item
      )
    );
  };

  const removeItem = (id) => {
    setCartItems(items => items.filter(item => item.id !== id));
  };

  const saveForLater = (item) => {
    removeItem(item.id);
    setSavedItems(prev => [...prev, item]);
  };

  const moveToCart = (item) => {
    setSavedItems(prev => prev.filter(i => i.id !== item.id));
    setCartItems(prev => [...prev, item]);
  };

  const [promoCode, setPromoCode] = useState('');
  const [discount, setDiscount] = useState(0);
  const [promoApplied, setPromoApplied] = useState(false);

  const applyPromo = () => {
    if (promoCode.toUpperCase() === 'SAVE20') {
      setDiscount(20);
      setPromoApplied(true);
    }
  };

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const discountAmount = (subtotal * discount) / 100;
  const shipping = subtotal > 500 ? 0 : 15;
  const tax = (subtotal - discountAmount) * 0.08;
  const total = subtotal - discountAmount + shipping + tax;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center">
      <div className="max-w-7xl mx-auto px-4 py-8">
        
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <button className="flex items-center gap-2 text-gray-600 hover:text-[#ff5252] transition-colors mb-4">
            <FiArrowLeft className="text-xl" />
            <span className="font-medium">Continue Shopping</span>
          </button>

          <div className="flex items-center gap-3">
            <div className="bg-[#ff5252] p-3 rounded-2xl shadow-lg">
              <FiShoppingBag className="text-3xl text-white" />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-gray-800">Shopping Cart</h1>
              <p className="text-gray-600">{cartItems.length} items in your cart</p>
            </div>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          
          {/* CART ITEMS */}
          <div className="lg:col-span-2 space-y-4">
            {cartItems.length === 0 ? (
              <motion.div className="bg-white rounded-2xl shadow-lg p-12 text-center">
                <FiShoppingCart className="text-6xl text-gray-300 mx-auto mb-4" />
                <h3 className="text-2xl font-semibold text-gray-800 mb-2">Your cart is empty</h3>
                <p className="text-gray-600 mb-6">Add some items to get started!</p>

                <button className="bg-[#ff5252] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#ff3838] transition-colors">
                  Start Shopping
                </button>
              </motion.div>
            ) : (
              <AnimatePresence>
                {cartItems.map((item, index) => (
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
                ))}
              </AnimatePresence>
            )}

            {/* SAVED FOR LATER SECTION */}
            {savedItems.length > 0 && (
              <div className="mt-10">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Saved for Later</h2>

                {savedItems.map((item) => (
                  <motion.div
                    key={item.id}
                    className="bg-white rounded-2xl shadow-lg p-6 flex gap-6 mb-4"
                  >
                    <img
                      src={item.image}
                      className="w-28 h-28 rounded-xl object-cover"
                    />

                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-800">{item.name}</h3>

                      <p className="text-sm text-gray-600 mt-1">
                        Size: {item.size} • {item.color}
                      </p>

                      <p className="text-[#ff5252] font-bold text-xl mt-2">
                        ₹{item.price}
                      </p>

                      <button
                        onClick={() => moveToCart(item)}
                        className="mt-3 text-[#ff5252] font-semibold hover:underline"
                      >
                        Move to Cart
                      </button>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}

          </div>

          {/* ORDER SUMMARY */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:col-span-1"
          >
            <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-[20%]">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">
                Order Summary
              </h2>

              {/* PROMO */}
              <div className="mb-6">
                <div className="flex gap-2">
                  <div className="flex-1 relative">
                    <FiTag className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Promo code"
                      value={promoCode}
                      onChange={(e) => setPromoCode(e.target.value)}
                      className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ff5252] focus:outline-none"
                    />
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={applyPromo}
                    className="px-6 py-2 border-2 border-[#ff5252] text-[#ff5252] rounded-lg font-semibold hover:bg-[#ff5252] hover:text-white transition-colors"
                  >
                    Apply
                  </motion.button>
                </div>

                <AnimatePresence>
                  {promoApplied && (
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="text-green-600 text-sm mt-2 font-medium"
                    >
                      ✓ {discount}% discount applied!
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>

              {/* PRICE DETAILS */}
              <div className="space-y-3 mb-6 pb-6 border-b border-gray-200">
                <div className="flex justify-between text-gray-600">
                  <span>Subtotal</span>
                  <span className="font-medium">₹{subtotal.toFixed(2)}</span>
                </div>

                {discount > 0 && (
                  <div className="flex justify-between text-green-600">
                    <span>Discount ({discount}%)</span>
                    <span className="font-medium">-₹{discountAmount.toFixed(2)}</span>
                  </div>
                )}

                <div className="flex justify-between text-gray-600">
                  <span>Shipping</span>
                  <span className="font-medium">
                    {shipping === 0 ? (
                      <span className="text-green-600 font-semibold">FREE</span>
                    ) : (
                      `₹${shipping.toFixed(2)}`
                    )}
                  </span>
                </div>

                <div className="flex justify-between text-gray-600">
                  <span>Tax (8%)</span>
                  <span className="font-medium">₹{tax.toFixed(2)}</span>
                </div>
              </div>

              {/* TOTAL */}
              <div className="flex justify-between items-center mb-6">
                <span className="text-xl font-bold text-gray-800">Total</span>
                <span className="text-3xl font-bold text-[#ff5252]">
                  ₹{total.toFixed(2)}
                </span>
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-[#ff5252] text-white py-4 rounded-xl font-bold text-lg shadow-lg hover:bg-[#ff3838] transition-colors"
              >
                Proceed to Checkout
              </motion.button>

              <p className="text-center text-sm text-gray-500 mt-4">
                🚚 Free shipping on orders over ₹500
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
