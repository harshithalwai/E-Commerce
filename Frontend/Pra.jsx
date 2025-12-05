import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import PersonIcon from "@mui/icons-material/Person";
import EmailIcon from "@mui/icons-material/Email";
import LockIcon from "@mui/icons-material/Lock";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

const formVariants = {
  enter: { opacity: 0, y: 20 },
  center: { opacity: 1, y: 0, transition: { duration: 0.3 } },
  exit: { opacity: 0, y: -20, transition: { duration: 0.3 } },
};

const Pra = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const switchMode = () => setIsLogin(!isLogin);

  const handleChange = (field) => (e) => {
    setFormData({ ...formData, [field]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(isLogin ? "Login" : "Signup", formData);
  };

  return (
   <>
    <AnimatePresence mode="wait">
      <motion.form
        key={isLogin ? "login" : "signup"}
        variants={formVariants}
        initial="enter"
        animate="center"
        exit="exit"
        onSubmit={handleSubmit}
        className="space-y-3"
      >
        {/* Name - Signup only */}
        {!isLogin && (
          <motion.div className="relative">
            <PersonIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4" />
            <input
              type="text"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange("name")}
              required
              className="w-full px-10 py-2.5 rounded-lg border"
            />
          </motion.div>
        )}

        {/* Email */}
        <div className="relative">
          <EmailIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4" />
          <input
            type="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange("email")}
            required
            className="w-full px-10 py-2.5 rounded-lg border"
          />
        </div>

        {/* Password */}
        <div className="relative">
          <LockIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4" />
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            value={formData.password}
            onChange={handleChange("password")}
            required
            className="w-full px-10 py-2.5 rounded-lg border"
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-1/2 -translate-y-1/2"
          >
            {showPassword ? <VisibilityOff /> : <Visibility />}
          </button>
        </div>

        {/* Confirm Password - Signup only */}
        {!isLogin && (
          <motion.div className="relative">
            <LockIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4" />
            <input
              type={showConfirmPassword ? "text" : "password"}
              placeholder="Confirm Password"
              value={formData.confirmPassword}
              onChange={handleChange("confirmPassword")}
              required
              className="w-full px-10 py-2.5 rounded-lg border"
            />
            <button
              type="button"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2"
            >
              {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
            </button>
          </motion.div>
        )}

        <button type="submit" className="w-full py-2.5 rounded-lg bg-red-500 text-white">
          {isLogin ? "Login" : "Sign Up"}
        </button>

        <button
          type="button"
          onClick={switchMode}
          className="mt-2 text-sm underline"
        >
          {isLogin ? "Switch to Sign Up" : "Switch to Login"}
        </button>
      </motion.form>
    </AnimatePresence>
   </>
  );
};

export default Pra;
