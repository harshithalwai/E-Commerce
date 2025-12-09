import React, { useState } from "react";
import { useForm } from "react-hook-form";
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

  // ⬇⬇ React Hook Form setup
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  // Password match check
  const passwordValue = watch("password");

  const onSubmit = (data) => {
    console.log("Submitted:", data);
    alert(`${isLogin ? "Login" : "Signup"} successful!`);
    reset();
  };

  const switchMode = () => {
    setIsLogin(!isLogin);
    reset();
    setShowPassword(false);
    setShowConfirmPassword(false);
  };

  const handleOAuthLogin = (provider) => {
    alert(`${provider} login API Pending`);
  };

  // Animation Variants
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
      {/* Floating Shapes */}
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

      {/* FORM BOX */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 w-full max-w-sm"
      >
        <div className="bg-white/10 backdrop-blur-xl rounded-3xl shadow-2xl p-8 border border-white/20">
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
                onClick={() => !isLogin && switchMode()}
                className={`relative z-10 px-6 py-1.5 rounded-full text-sm font-medium ${
                  isLogin ? "text-red-500" : "text-white"
                }`}
              >
                Login
              </button>
              <button
                type="button"
                onClick={() => isLogin && switchMode()}
                className={`relative z-10 px-6 py-1.5 rounded-full text-sm font-medium ${
                  !isLogin ? "text-red-500" : "text-white"
                }`}
              >
                Sign Up
              </button>
            </div>
          </div>

          {/* Title Icon */}
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

          {/* FORM */}
          <AnimatePresence mode="wait" custom={isLogin ? 1 : -1}>
            <motion.form
              key={isLogin ? "login" : "signup"}
              custom={isLogin ? 1 : -1}
              variants={formVariants}
              initial="enter"
              animate="center"
              exit="exit"
              onSubmit={handleSubmit(onSubmit)}
              className="space-y-3"
            >
              {/* FULL NAME */}
              {!isLogin && (
                <div className="relative">
                  <PersonIcon className="absolute left-3 top-1/2 -translate-y-1/2 text-white/70 w-4 h-4" />
                  <input
                    type="text"
                    placeholder="Full Name"
                    {...register("name", {
                      required: "Name is required",
                      minLength: {
                        value: 3,
                        message: "Minimum 3 characters",
                      },
                    })}
                    className="w-full bg-white/20 border border-white/30 rounded-lg px-10 py-2.5 text-white text-sm outline-none"
                  />
                  {errors.name && (
                    <p className="text-red-200 text-xs mt-1">{errors.name.message}</p>
                  )}
                </div>
              )}

              {/* EMAIL */}
              <div className="relative">
                <EmailIcon className="absolute left-3 top-1/2 -translate-y-1/2 text-white/70 w-4 h-4" />
                <input
                  type="email"
                  placeholder="Email Address"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: "Invalid email format",
                    },
                  })}
                  className="w-full bg-white/20 border border-white/30 rounded-lg px-10 py-2.5 text-white text-sm outline-none"
                />
                {errors.email && (
                  <p className="text-red-200 text-xs mt-1">{errors.email.message}</p>
                )}
              </div>

              {/* PASSWORD */}
              <div className="relative">
                <LockIcon className="absolute left-3 top-1/2 -translate-y-1/2 text-white/70 w-4 h-4" />

                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  {...register("password", {
                    required: "Password is required",
                    minLength: { value: 6, message: "Minimum 6 characters" },
                  })}
                  className="w-full bg-white/20 border border-white/30 rounded-lg px-10 py-2.5 text-white text-sm outline-none"
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-white/70"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </button>

                {errors.password && (
                  <p className="text-red-200 text-xs mt-1">{errors.password.message}</p>
                )}
              </div>

              {/* CONFIRM PASSWORD */}
              {!isLogin && (
                <div className="relative">
                  <LockIcon className="absolute left-3 top-1/2 -translate-y-1/2 text-white/70 w-4 h-4" />

                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    placeholder="Confirm Password"
                    {...register("confirmPassword", {
                      required: "Confirm your password",
                      validate: (v) =>
                        v === passwordValue || "Passwords do not match",
                    })}
                    className="w-full bg-white/20 border border-white/30 rounded-lg px-10 py-2.5 text-white text-sm outline-none"
                  />

                  <button
                    type="button"
                    onClick={() =>
                      setShowConfirmPassword(!showConfirmPassword)
                    }
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-white/70"
                  >
                    {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                  </button>

                  {errors.confirmPassword && (
                    <p className="text-red-200 text-xs mt-1">
                      {errors.confirmPassword.message}
                    </p>
                  )}
                </div>
              )}

              {/* SUBMIT */}
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02, y: -1 }}
                whileTap={{ scale: 0.98 }}
                className="w-full text-white py-2.5 rounded-lg font-bold text-sm shadow-md mt-3 cursor-pointer"
                style={{ backgroundColor: "#ff5252" }}
              >
                {isLogin ? "Sign In" : "Create Account"}
              </motion.button>
            </motion.form>
          </AnimatePresence>

          {/* Divider */}
          <div className="mt-5 mb-4 flex items-center">
            <div className="flex-1 border-t border-white/30"></div>
            <span className="px-3 text-white/70 text-xs">or continue with</span>
            <div className="flex-1 border-t border-white/30"></div>
          </div>

          {/* OAuth */}
          <div className="flex justify-between gap-2">
            {[GoogleIcon, GitHubIcon, MicrosoftIcon].map((Icon, i) => (
              <button
                key={i}
                onClick={() =>
                  handleOAuthLogin(
                    i === 0 ? "Google" : i === 1 ? "GitHub" : "Microsoft"
                  )
                }
                className="w-full bg-white/20 border border-white/30 rounded-lg py-2.5 flex justify-center"
              >
                <Icon className="text-white w-4 h-4" />
              </button>
            ))}
          </div>

          {/* Forgot Password */}
          {isLogin && (
            <div className="mt-4 text-center">
              <a href="#" className="text-white/80 text-xs">
                Forgot password?
              </a>
            </div>
          )}

          {/* Switch Mode */}
          <div className="mt-4 text-center text-white/80 text-xs">
            {isLogin ? "Don't have an account? " : "Already have an account? "}
            <button
              type="button"
              onClick={switchMode}
              className="!text-white font-semibold text-xs"
            >
              {isLogin ? "Sign Up" : "Login"}
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
