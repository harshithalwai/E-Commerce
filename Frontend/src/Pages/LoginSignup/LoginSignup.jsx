import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import EmailIcon from "@mui/icons-material/Email";
import LockIcon from "@mui/icons-material/Lock";
import PersonIcon from "@mui/icons-material/Person";
import LoginIcon from "@mui/icons-material/Login";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import GoogleIcon from "@mui/icons-material/Google";
import GitHubIcon from "@mui/icons-material/GitHub";
import MicrosoftIcon from "@mui/icons-material/Microsoft";

export default function AnimatedAuthForm({ loginFlag }) {
  const [isLogin, setIsLogin] = useState(loginFlag);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!isLogin && formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    console.log(isLogin ? "Login" : "Signup", formData);
    alert(`${isLogin ? "Login" : "Signup"} successful!`);
  };

  const handleChange = (field) => (e) => {
    setFormData({ ...formData, [field]: e.target.value });
  };

  const switchMode = () => {
    setIsLogin(!isLogin);
    setFormData({ name: "", email: "", password: "", confirmPassword: "" });
    setShowPassword(false);
    setShowConfirmPassword(false);
  };

  const handleOAuthLogin = (provider) => {
    console.log(`${provider} OAuth login initiated`);
    alert(`${provider} login - API integration pending`);
    // Add your OAuth API calls here
  };

  const containerVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 50 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const formVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.4, ease: "easeInOut" },
    },
    exit: (direction) => ({
      x: direction < 0 ? 300 : -300,
      opacity: 0,
      transition: { duration: 0.4, ease: "easeInOut" },
    }),
  };

  const floatingShapes = [
    { size: 60, x: "10%", y: "15%", duration: 20, delay: 0 },
    { size: 50, x: "85%", y: "25%", duration: 15, delay: 2 },
    { size: 80, x: "15%", y: "75%", duration: 25, delay: 4 },
    { size: 50, x: "80%", y: "70%", duration: 18, delay: 1 },
  ];

  return (
    <div className="h-screen flex items-center justify-center bg-gradient-to-br from-red-500 via-pink-500 to-rose-400 overflow-hidden relative p-4">
      {/* Background Shapes */}
      {floatingShapes.map((shape, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full opacity-20 blur-3xl"
          style={{
            width: shape.size,
            height: shape.size,
            left: shape.x,
            top: shape.y,
            background:
              "linear-gradient(135deg, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0.1) 100%)",
          }}
          animate={{
            y: [0, -20, 0],
            x: [0, 15, 0],
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: shape.duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: shape.delay,
          }}
        />
      ))}

      {/* Centered Form */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 w-full max-w-sm"
      >
        <div className="bg-white/10 backdrop-blur-xl rounded-3xl shadow-2xl p-8 border border-white/20  overflow-y-auto mx-auto">
          {/* Toggle */}
          <div className="flex justify-center mb-6 relative">
            <div className="bg-white/20 rounded-full p-1 flex gap-2 relative">
              <motion.div
                className="absolute bg-white rounded-full"
                initial={false}
                animate={{
                  left: isLogin ? "4px" : "calc(50%)",
                  width: "calc(50% - 8px)",
                }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                style={{ top: "4px", bottom: "4px" }}
              />
              <button
                type="button"
                onClick={() => {
                  if (!isLogin) switchMode();
                }}
                className={`relative z-10 px-6 py-1.5 rounded-full text-sm transition-colors font-medium ${
                  isLogin ? "text-red-500" : "text-white"
                }`}
              >
                Login
              </button>
              <button
                type="button"
                onClick={() => {
                  if (isLogin) switchMode();
                }}
                className={`relative z-10 px-6 py-1.5 rounded-full text-sm transition-colors font-medium ${
                  !isLogin ? "text-red-500" : "text-white"
                }`}
              >
                Sign Up
              </button>
            </div>
          </div>

          {/* Icon */}
          <motion.div
            key={isLogin ? "login-icon" : "signup-icon"}
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
            className="flex justify-center mb-4"
          >
            <div className="bg-white/20 p-3 rounded-full">
              {isLogin ? (
                <LoginIcon className="text-white w-7 h-7" />
              ) : (
                <PersonAddIcon className="text-white w-7 h-7" />
              )}
            </div>
          </motion.div>

          {/* Title */}
          <motion.h2
            key={isLogin ? "login-title" : "signup-title"}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="text-2xl font-bold text-white text-center mb-6"
          >
            {isLogin ? "Welcome Back" : "Create Account"}
          </motion.h2>

          {/* Form */}
          <AnimatePresence mode="wait" custom={isLogin ? 1 : -1}>
            <motion.form
              key={isLogin ? "login" : "signup"}
              custom={isLogin ? 1 : -1}
              variants={formVariants}
              initial="enter"
              animate="center"
              exit="exit"
              onSubmit={handleSubmit}
              className="space-y-3"
            >
              {!isLogin && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="relative"
                >
                  <PersonIcon className="absolute left-3 top-1/2 -translate-y-1/2 text-white/70 w-4 h-4" />
                  <input
                    type="text"
                    placeholder="Full Name"
                    value={formData.name}
                    onChange={handleChange("name")}
                    required={!isLogin}
                    className="w-full bg-white/20 border border-white/30 rounded-lg px-10 py-2.5 text-white text-sm placeholder-white/60 outline-none"
                  />
                </motion.div>
              )}

              <div className="relative">
                <EmailIcon className="absolute left-3 top-1/2 -translate-y-1/2 text-white/70 w-4 h-4" />
                <input
                  type="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleChange("email")}
                  required
                  className="w-full bg-white/20 border border-white/30 rounded-lg px-10 py-2.5 text-white text-sm placeholder-white/60 outline-none"
                />
              </div>

              <div className="relative">
                <LockIcon className="absolute left-3 top-1/2 -translate-y-1/2 text-white/70 w-4 h-4" />
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  value={formData.password}
                  onChange={handleChange("password")}
                  required
                  className="w-full bg-white/20 border border-white/30 rounded-lg px-10 py-2.5 text-white text-sm placeholder-white/60 outline-none"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-white/70 text-sm"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </button>
              </div>

              {!isLogin && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="relative"
                >
                  <LockIcon className="absolute left-3 top-1/2 -translate-y-1/2 text-white/70 w-4 h-4" />
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    placeholder="Confirm Password"
                    value={formData.confirmPassword}
                    onChange={handleChange("confirmPassword")}
                    required={!isLogin}
                    className="w-full bg-white/20 border border-white/30 rounded-lg px-10 py-2.5 text-white text-sm placeholder-white/60 outline-none"
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-white/70 text-sm"
                  >
                    {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                  </button>
                </motion.div>
              )}

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02, y: -1 }}
                whileTap={{ scale: 0.98 }}
                className="w-full text-white py-2.5 rounded-lg font-bold text-sm shadow-md hover:shadow-lg transition-all mt-3 cursor-pointer"
                style={{ backgroundColor: "#ff5252" }}
              >
                {isLogin ? "Sign In" : "Create Account"}
              </motion.button>
            </motion.form>
          </AnimatePresence>

          {/* Divider */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="mt-5 mb-4 flex items-center"
          >
            <div className="flex-1 border-t border-white/30"></div>
            <span className="px-3 text-white/70 text-xs">or continue with</span>
            <div className="flex-1 border-t border-white/30"></div>
          </motion.div>

          {/* OAuth Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex justify-between items-center gap-2"
          >
            <motion.button
              type="button"
              onClick={() => handleOAuthLogin("Google")}
              whileHover={{ scale: 1.02, y: -1 }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-white/20 backdrop-blur-sm border border-white/30 rounded-lg px-4 py-2.5 text-white text-sm font-medium hover:bg-white/30 transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <GoogleIcon className="w-4 h-4" />
            </motion.button>

            <motion.button
              type="button"
              onClick={() => handleOAuthLogin("GitHub")}
              whileHover={{ scale: 1.02, y: -1 }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-white/20 backdrop-blur-sm border border-white/30 rounded-lg px-4 py-2.5 text-white text-sm font-medium hover:bg-white/30 transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <GitHubIcon className="w-4 h-4" />
            </motion.button>

            <motion.button
              type="button"
              onClick={() => handleOAuthLogin("Microsoft")}
              whileHover={{ scale: 1.02, y: -1 }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-white/20 backdrop-blur-sm border border-white/30 rounded-lg px-4 py-2.5 text-white text-sm font-medium hover:bg-white/30 transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <MicrosoftIcon className="w-4 h-4" />
            </motion.button>
          </motion.div>

          {/* Forgot Password */}
          {isLogin && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ delay: 0.4 }}
              className="mt-4 text-center"
            >
              <a href="#" className="text-white/80 hover:text-white text-xs">
                Forgot password?
              </a>
            </motion.div>
          )}

          {/* Switch Bottom */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-4 text-center text-white/80 text-xs"
          >
            {isLogin ? "Don't have an account? " : "Already have an account? "}
            <button
              type="button"
              onClick={switchMode}
              className="!text-white font-semibold link text-xs"
            >
              {isLogin ? "Sign Up" : "Login"}
            </button>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
