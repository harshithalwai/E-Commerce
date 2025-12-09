import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiArrowLeft,
  FiCreditCard,
  FiLock,
  FiMapPin,
  FiUser,
  FiMail,
  FiPhone,
  FiCheck,
  FiPackage,
  FiShield,
  FiTruck,
  FiStar,
} from "react-icons/fi";
import {
  Card,
  CardContent,
  Chip,
  Divider,
  LinearProgress,
  Tooltip,
  Badge,
} from "@mui/material";

export default function Checkout() {
  const [step, setStep] = useState(1);
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState("card");

  const {
    register,
    handleSubmit,
    formState: { errors },
    trigger,
  } = useForm();

  const onSubmit = () => {
    setOrderPlaced(true);
  };

  const handleNext = async (fields) => {
    const valid = await trigger(fields);
    if (valid) setStep(step + 1);
  };

  /* ---------- ORDER PLACED UI ---------- */
  if (orderPlaced) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-red-50 flex items-center justify-center p-4">
        <motion.div
          initial={{ scale: 0.8, opacity: 0, y: 50 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          transition={{ type: "spring", duration: 0.8 }}
          className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl p-12 max-w-md text-center border border-white/20"
        >
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
            className="w-28 h-28 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg"
          >
            <FiCheck className="text-6xl text-white" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-4xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent mb-3"
          >
            Order Placed!
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-gray-600 mb-2 text-lg"
          >
            Thank you for your purchase 🎉
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="text-sm text-gray-500 mb-8"
          >
            Order #ORD-{Math.random().toString(36).substr(2, 9).toUpperCase()}
          </motion.p>

          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            whileHover={{ scale: 1.02, boxShadow: "0 20px 40px rgba(255,82,82,0.3)" }}
            whileTap={{ scale: 0.98 }}
            className="w-full bg-gradient-to-r from-[#ff5252] to-[#ff1744] text-white py-4 rounded-xl font-bold shadow-lg hover:shadow-xl transition-all mb-3 flex items-center justify-center gap-2"
          >
            <FiTruck className="text-xl" />
            Track Order
          </motion.button>

          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
            whileHover={{ scale: 1.05 }}
            className="text-gray-600 hover:text-[#ff5252] font-medium transition-colors"
          >
            Continue Shopping
          </motion.button>
        </motion.div>
      </div>
    );
  }

  /* ---------- MAIN CHECKOUT ---------- */
  const stepProgress = (step / 3) * 100;

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-red-50 py-12"
    >
      <div className="container mx-auto px-4 max-w-7xl">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8 flex items-center justify-between"
        >
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 bg-gradient-to-br from-[#ff5252] to-[#ff1744] rounded-2xl flex items-center justify-center shadow-lg">
              <FiLock className="text-2xl text-white" />
            </div>
            <div>
              <h1 className="text-4xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
                Secure Checkout
              </h1>
              <p className="text-gray-600 text-sm flex items-center gap-2 mt-1">
                <FiShield className="text-green-500" />
                256-bit SSL Encrypted
              </p>
            </div>
          </div>
          <Chip
            icon={<FiStar className="text-yellow-500" />}
            label="Trusted"
            className="bg-white shadow-md"
          />
        </motion.div>

        {/* PROGRESS BAR */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="mb-8"
        >
          <LinearProgress
            variant="determinate"
            value={stepProgress}
            className="h-2 rounded-full bg-gray-200"
            sx={{
              "& .MuiLinearProgress-bar": {
                background: "linear-gradient(90deg, #ff5252 0%, #ff1744 100%)",
                borderRadius: "999px",
              },
            }}
          />
        </motion.div>

        {/* STEPS */}
        <div className="flex items-center justify-center gap-4 max-w-2xl mx-auto mb-12">
          {[
            { num: 1, label: "Contact", icon: FiUser },
            { num: 2, label: "Shipping", icon: FiTruck },
            { num: 3, label: "Payment", icon: FiCreditCard },
          ].map(({ num, label, icon: Icon }) => (
            <motion.div
              key={num}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: num * 0.1 }}
              className="flex flex-col items-center gap-2 flex-1"
            >
              <div
                className={`w-14 h-14 flex items-center justify-center rounded-2xl font-bold text-lg transition-all duration-300 ${
                  step >= num
                    ? "bg-gradient-to-br from-[#ff5252] to-[#ff1744] text-white shadow-lg scale-110"
                    : "bg-white text-gray-400 shadow"
                }`}
              >
                {step > num ? <FiCheck className="text-2xl" /> : <Icon className="text-xl" />}
              </div>
              <span
                className={`text-sm font-semibold ${
                  step >= num ? "text-[#ff5252]" : "text-gray-400"
                }`}
              >
                {label}
              </span>
            </motion.div>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* FORM SECTION */}
          <div className="lg:col-span-2">
            <AnimatePresence mode="wait">
              {/* STEP 1: CONTACT */}
              {step === 1 && (
                <motion.div
                  key="contact"
                  initial={{ opacity: 0, x: -40 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 40 }}
                  transition={{ type: "spring", stiffness: 100 }}
                >
                  <Card className="rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
                    <CardContent className="p-8">
                      <div className="flex items-center gap-3 mb-8">
                        <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl flex items-center justify-center">
                          <FiUser className="text-blue-600 text-xl" />
                        </div>
                        <h2 className="text-3xl font-bold text-gray-800">
                          Contact Information
                        </h2>
                      </div>

                      {/* Email */}
                      <div className="mb-6">
                        <label className="block text-sm font-semibold text-gray-700 mb-2 flex items-center gap-2">
                          <FiMail className="text-gray-400" />
                          Email Address
                        </label>
                        <input
                          {...register("email", {
                            required: "Email is required",
                            pattern: {
                              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                              message: "Invalid email address",
                            },
                          })}
                          className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:border-[#ff5252] focus:outline-none transition-colors bg-gray-50 hover:bg-white"
                          placeholder="you@example.com"
                        />
                        {errors.email && (
                          <motion.p
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-red-500 text-sm mt-2 flex items-center gap-1"
                          >
                            ⚠️ {errors.email.message}
                          </motion.p>
                        )}
                      </div>

                      {/* Name */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2">
                            First Name
                          </label>
                          <input
                            {...register("firstName", {
                              required: "First name required",
                            })}
                            className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:border-[#ff5252] focus:outline-none transition-colors bg-gray-50 hover:bg-white"
                            placeholder="John"
                          />
                          {errors.firstName && (
                            <motion.p
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              className="text-red-500 text-sm mt-2"
                            >
                              ⚠️ {errors.firstName.message}
                            </motion.p>
                          )}
                        </div>

                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2">
                            Last Name
                          </label>
                          <input
                            {...register("lastName", {
                              required: "Last name required",
                            })}
                            className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:border-[#ff5252] focus:outline-none transition-colors bg-gray-50 hover:bg-white"
                            placeholder="Doe"
                          />
                          {errors.lastName && (
                            <motion.p
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              className="text-red-500 text-sm mt-2"
                            >
                              ⚠️ {errors.lastName.message}
                            </motion.p>
                          )}
                        </div>
                      </div>

                      {/* Phone */}
                      <div className="mb-8">
                        <label className="block text-sm font-semibold text-gray-700 mb-2 flex items-center gap-2">
                          <FiPhone className="text-gray-400" />
                          Phone Number
                        </label>
                        <input
                          {...register("phone", {
                            required: "Phone number required",
                          })}
                          className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:border-[#ff5252] focus:outline-none transition-colors bg-gray-50 hover:bg-white"
                          placeholder="+1 (555) 000-0000"
                        />
                        {errors.phone && (
                          <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="text-red-500 text-sm mt-2"
                          >
                            ⚠️ {errors.phone.message}
                          </motion.p>
                        )}
                      </div>

                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() =>
                          handleNext(["email", "firstName", "lastName", "phone"])
                        }
                        type="button"
                        className="w-full bg-gradient-to-r from-[#ff5252] to-[#ff1744] text-white py-5 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transition-all"
                      >
                        Continue to Shipping →
                      </motion.button>
                    </CardContent>
                  </Card>
                </motion.div>
              )}

              {/* STEP 2: SHIPPING */}
              {step === 2 && (
                <motion.div
                  key="shipping"
                  initial={{ opacity: 0, x: -40 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 40 }}
                  transition={{ type: "spring", stiffness: 100 }}
                >
                  <Card className="rounded-3xl shadow-xl border border-gray-100">
                    <CardContent className="p-8">
                      <div className="flex items-center gap-3 mb-8">
                        <div className="w-12 h-12 bg-gradient-to-br from-green-100 to-green-200 rounded-xl flex items-center justify-center">
                          <FiMapPin className="text-green-600 text-xl" />
                        </div>
                        <h2 className="text-3xl font-bold text-gray-800">
                          Shipping Address
                        </h2>
                      </div>

                      <div className="mb-6">
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Street Address
                        </label>
                        <input
                          {...register("address", {
                            required: "Address required",
                          })}
                          className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:border-[#ff5252] focus:outline-none transition-colors bg-gray-50 hover:bg-white"
                          placeholder="123 Main Street, Apt 4B"
                        />
                        {errors.address && (
                          <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="text-red-500 text-sm mt-2"
                          >
                            ⚠️ {errors.address.message}
                          </motion.p>
                        )}
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2">
                            City
                          </label>
                          <input
                            {...register("city", { required: "City required" })}
                            className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:border-[#ff5252] focus:outline-none transition-colors bg-gray-50 hover:bg-white"
                            placeholder="New York"
                          />
                          {errors.city && (
                            <motion.p
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              className="text-red-500 text-sm mt-2"
                            >
                              ⚠️ {errors.city.message}
                            </motion.p>
                          )}
                        </div>

                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2">
                            State
                          </label>
                          <input
                            {...register("state", { required: "State required" })}
                            className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:border-[#ff5252] focus:outline-none transition-colors bg-gray-50 hover:bg-white"
                            placeholder="NY"
                          />
                          {errors.state && (
                            <motion.p
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              className="text-red-500 text-sm mt-2"
                            >
                              ⚠️ {errors.state.message}
                            </motion.p>
                          )}
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2">
                            Zip Code
                          </label>
                          <input
                            {...register("zipCode", {
                              required: "Zip code required",
                            })}
                            className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:border-[#ff5252] focus:outline-none transition-colors bg-gray-50 hover:bg-white"
                            placeholder="10001"
                          />
                          {errors.zipCode && (
                            <motion.p
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              className="text-red-500 text-sm mt-2"
                            >
                              ⚠️ {errors.zipCode.message}
                            </motion.p>
                          )}
                        </div>

                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2">
                            Country
                          </label>
                          <select
                            {...register("country")}
                            className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:border-[#ff5252] focus:outline-none transition-colors bg-gray-50 hover:bg-white"
                          >
                            <option>India</option>
                            <option>USA</option>
                            <option>UK</option>
                          </select>
                        </div>
                      </div>

                      <div className="flex gap-4">
                        <motion.button
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          type="button"
                          onClick={() => setStep(1)}
                          className="flex-1 border-2 border-gray-300 py-5 rounded-xl font-bold text-gray-700 hover:bg-gray-50 transition-all"
                        >
                          ← Back
                        </motion.button>

                        <motion.button
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          type="button"
                          onClick={() =>
                            handleNext(["address", "city", "state", "zipCode"])
                          }
                          className="flex-1 bg-gradient-to-r from-[#ff5252] to-[#ff1744] text-white py-5 rounded-xl font-bold shadow-lg hover:shadow-xl transition-all"
                        >
                          Continue to Payment →
                        </motion.button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              )}

              {/* STEP 3: PAYMENT */}
              {step === 3 && (
                <motion.div
                  key="payment"
                  initial={{ opacity: 0, x: -40 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 40 }}
                  transition={{ type: "spring", stiffness: 100 }}
                >
                  <Card className="rounded-3xl shadow-xl border border-gray-100">
                    <CardContent className="p-8">
                      <div className="flex items-center gap-3 mb-8">
                        <div className="w-12 h-12 bg-gradient-to-br from-purple-100 to-purple-200 rounded-xl flex items-center justify-center">
                          <FiCreditCard className="text-purple-600 text-xl" />
                        </div>
                        <h2 className="text-3xl font-bold text-gray-800">
                          Payment Method
                        </h2>
                      </div>

                      {/* Select Method */}
                      <div className="grid grid-cols-3 gap-4 mb-8">
                        {[
                          { id: "card", label: "Card", icon: FiCreditCard },
                          { id: "upi", label: "UPI", icon: FiPhone },
                          { id: "cod", label: "COD", icon: FiPackage },
                        ].map(({ id, label, icon: Icon }) => (
                          <motion.button
                            key={id}
                            type="button"
                            whileHover={{ scale: 1.05, y: -2 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => setPaymentMethod(id)}
                            className={`py-4 border-2 rounded-xl font-semibold transition-all flex flex-col items-center gap-2 ${
                              paymentMethod === id
                                ? "border-[#ff5252] bg-gradient-to-br from-red-50 to-pink-50 text-[#ff5252] shadow-lg"
                                : "border-gray-200 bg-white hover:border-gray-300"
                            }`}
                          >
                            <Icon className="text-2xl" />
                            {label}
                          </motion.button>
                        ))}
                      </div>

                      {/* CARD FIELDS */}
                      {paymentMethod === "card" && (
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                        >
                          <div className="mb-6">
                            <label className="block text-sm font-semibold text-gray-700 mb-2">
                              Card Number
                            </label>
                            <input
                              {...register("cardNumber", {
                                required: "Card number required",
                              })}
                              className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:border-[#ff5252] focus:outline-none transition-colors bg-gray-50 hover:bg-white"
                              placeholder="1234 5678 9012 3456"
                              maxLength="19"
                            />
                            {errors.cardNumber && (
                              <motion.p
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                className="text-red-500 text-sm mt-2"
                              >
                                ⚠️ {errors.cardNumber.message}
                              </motion.p>
                            )}
                          </div>

                          <div className="mb-6">
                            <label className="block text-sm font-semibold text-gray-700 mb-2">
                              Cardholder Name
                            </label>
                            <input
                              {...register("cardName", {
                                required: "Cardholder name required",
                              })}
                              className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:border-[#ff5252] focus:outline-none transition-colors bg-gray-50 hover:bg-white"
                              placeholder="JOHN DOE"
                            />
                            {errors.cardName && (
                              <motion.p
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                className="text-red-500 text-sm mt-2"
                              >
                                ⚠️ {errors.cardName.message}
                              </motion.p>
                            )}
                          </div>

                          <div className="grid grid-cols-2 gap-6">
                            <div>
                              <label className="block text-sm font-semibold text-gray-700 mb-2">
                                Expiry Date
                              </label>
                              <input
                                {...register("expiry", {
                                  required: "Expiry date required",
                                })}
                                className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:border-[#ff5252] focus:outline-none transition-colors bg-gray-50 hover:bg-white"
                                placeholder="MM/YY"
                                maxLength="5"
                              />
                              {errors.expiry && (
                                <motion.p
                                  initial={{ opacity: 0 }}
                                  animate={{ opacity: 1 }}
                                  className="text-red-500 text-sm mt-2"
                                >
                                  ⚠️ Required
                                </motion.p>
                              )}
                            </div>

                            <div>
                              <label className="block text-sm font-semibold text-gray-700 mb-2">
                                CVV
                              </label>
                              <input
                                {...register("cvv", {
                                  required: "CVV required",
                                })}
                                className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:border-[#ff5252] focus:outline-none transition-colors bg-gray-50 hover:bg-white"
                                placeholder="123"
                                maxLength="3"
                                type="password"
                              />
                              {errors.cvv && (
                                <motion.p
                                  initial={{ opacity: 0 }}
                                  animate={{ opacity: 1 }}
                                  className="text-red-500 text-sm mt-2"
                                >
                                  ⚠️ Required
                                </motion.p>
                              )}
                            </div>
                          </div>
                        </motion.div>
                      )}

                      {/* UPI */}
                      {paymentMethod === "upi" && (
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                        >
                          <label className="block text-sm font-semibold text-gray-700 mb-2">
                            UPI ID
                          </label>
                          <input
                            {...register("upi", {
                              required: "UPI ID required",
                            })}
                            className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:border-[#ff5252] focus:outline-none transition-colors bg-gray-50 hover:bg-white"
                            placeholder="username@upi"
                          />
                          {errors.upi && (
                            <motion.p
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              className="text-red-500 text-sm mt-2"
                            >
                              ⚠️ {errors.upi.message}
                            </motion.p>
                          )}
                        </motion.div>
                      )}

                      {/* COD */}
                      {paymentMethod === "cod" && (
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="p-6 rounded-xl bg-gradient-to-br from-yellow-50 to-orange-50 border-2 border-yellow-200"
                        >
                          <div className="flex items-center gap-3 mb-2">
                            <FiPackage className="text-2xl text-orange-600" />
                            <h3 className="font-bold text-gray-800">
                              Cash on Delivery
                            </h3>
                          </div>
                          <p className="text-gray-700">
                            Pay with cash when your order is delivered to your doorstep.
                          </p>
                        </motion.div>
                      )}

                      <div className="flex gap-4 mt-8">
                        <motion.button
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          onClick={() => setStep(2)}
                          type="button"
                          className="flex-1 border-2 border-gray-300 py-5 rounded-xl font-bold text-gray-700 hover:bg-gray-50 transition-all"
                        >
                          ← Back
                        </motion.button>

                        <motion.button
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          type="submit"
                          className="flex-1 bg-gradient-to-r from-[#ff5252] to-[#ff1744] text-white py-5 rounded-xl font-bold shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2"
                        >
                          <FiLock />
                          Place Order Securely
                        </motion.button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* ORDER SUMMARY */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Card className="rounded-3xl shadow-xl border border-gray-100 sticky top-8">
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                  <FiPackage className="text-[#ff5252]" />
                  Order Summary
                </h2>

                <Divider className="mb-6" />

                {/* Sample Items */}
                <div className="space-y-4 mb-6">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-100 to-pink-100 rounded-xl flex items-center justify-center">
                      <FiPackage className="text-2xl text-purple-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-800">Premium Product</h3>
                      <p className="text-sm text-gray-500">Qty: 2</p>
                    </div>
                    <p className="font-bold text-gray-800">₹2,999</p>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-xl flex items-center justify-center">
                      <FiPackage className="text-2xl text-blue-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-800">Accessories</h3>
                      <p className="text-sm text-gray-500">Qty: 1</p>
                    </div>
                    <p className="font-bold text-gray-800">₹500</p>
                  </div>
                </div>

                <Divider className="mb-6" />

                {/* Price Breakdown */}
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between text-gray-700">
                    <span>Subtotal</span>
                    <span className="font-semibold">₹3,499</span>
                  </div>
                  <div className="flex justify-between text-gray-700">
                    <span>Shipping</span>
                    <span className="font-semibold text-green-600">Free</span>
                  </div>
                  <div className="flex justify-between text-gray-700">
                    <span>Tax (18%)</span>
                    <span className="font-semibold">₹630</span>
                  </div>
                </div>

                <Divider className="mb-6" />

                {/* Total */}
                <div className="flex justify-between items-center mb-6">
                  <span className="text-xl font-bold text-gray-800">Total</span>
                  <span className="text-3xl font-bold bg-gradient-to-r from-[#ff5252] to-[#ff1744] bg-clip-text text-transparent">
                    ₹4,129
                  </span>
                </div>

                {/* Trust Badges */}
                <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-4 rounded-xl border border-green-200">
                  <div className="flex items-center gap-2 mb-3">
                    <FiShield className="text-green-600 text-xl" />
                    <span className="font-semibold text-gray-800">Secure Payment</span>
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-xs text-gray-600">
                    <div className="flex items-center gap-1">
                      <FiCheck className="text-green-600" />
                      SSL Encrypted
                    </div>
                    <div className="flex items-center gap-1">
                      <FiCheck className="text-green-600" />
                      PCI Compliant
                    </div>
                    <div className="flex items-center gap-1">
                      <FiCheck className="text-green-600" />
                      Money Back
                    </div>
                    <div className="flex items-center gap-1">
                      <FiCheck className="text-green-600" />
                      24/7 Support
                    </div>
                  </div>
                </div>

                {/* Promo Code */}
                <div className="mt-6">
                  <Tooltip title="Enter promo code for discount">
                    <div className="flex gap-2">
                      <input
                        type="text"
                        placeholder="Promo code"
                        className="flex-1 px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#ff5252] focus:outline-none text-sm"
                      />
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        type="button"
                        className="px-6 py-3 bg-gray-800 text-white rounded-xl font-semibold hover:bg-gray-900 transition-colors"
                      >
                        Apply
                      </motion.button>
                    </div>
                  </Tooltip>
                </div>
              </CardContent>
            </Card>

            {/* Additional Trust Indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="mt-6 grid grid-cols-2 gap-4"
            >
              <div className="bg-white p-4 rounded-xl shadow-md text-center">
                <FiTruck className="text-3xl text-blue-600 mx-auto mb-2" />
                <p className="text-xs font-semibold text-gray-700">Free Shipping</p>
                <p className="text-xs text-gray-500">On all orders</p>
              </div>
              <div className="bg-white p-4 rounded-xl shadow-md text-center">
                <FiShield className="text-3xl text-green-600 mx-auto mb-2" />
                <p className="text-xs font-semibold text-gray-700">Secure</p>
                <p className="text-xs text-gray-500">100% Protected</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </form>
  );
}