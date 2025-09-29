import { useState, useRef, useEffect } from "react";

// Enhanced SearchBar component with better UX
const SearchBar = () => {
  const [searchValue, setSearchValue] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className="relative w-full group">
      <div
        className={`relative transition-all duration-300 ${
          isFocused ? "transform scale-[1.02]" : ""
        }`}
      >
        <input
          type="text"
          placeholder="Search for products, brands and more..."
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          className={`w-full border-2 rounded-full text-gray-700 placeholder-gray-400 transition-all duration-300 focus:outline-none px-3 py-2 pl-4 pr-10 text-sm xl:px-2 xl:py-3.5 xl:pl-6 xl:pr-14 xl:text-base ${
            isFocused
              ? "border-red-400 bg-white shadow-lg shadow-red-100"
              : "border-gray-200 bg-gray-50 hover:bg-white hover:border-gray-300"
          }`}
        />

        <button
          className={`absolute right-2 top-1/2 transform -translate-y-1/2 rounded-full text-sm font-medium transition-all duration-200 px-2 py-1 xl:px-3 xl:py-1.5 
              text-gray-400 hover:text-red-500
          `}
        >
          <svg
            className={`transition-colors duration-200 w-4 h-4 xl:w-5 xl:h-5 ${
              isFocused ? "text-red-500" : "text-gray-400"
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

// Enhanced Badge Component with animations
const Badge = ({ children, count, className = "" }) => {
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (count > 0) {
      setIsAnimating(true);
      const timer = setTimeout(() => setIsAnimating(false), 500);
      return () => clearTimeout(timer);
    }
  }, [count]);

  return (
    <div className={`relative inline-block ${className}`}>
      {children}
      {count > 0 && (
        <span
          className={`absolute -top-1 -right-1 bg-gradient-to-r from-red-500 to-red-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-bold border-2 border-white shadow-lg transition-all duration-300 ${
            isAnimating ? "animate-pulse scale-110" : "hover:scale-110"
          }`}
        >
          {count > 99 ? "99+" : count}
        </span>
      )}
    </div>
  );
};

// Enhanced Icon Button with better interactions
const IconButton = ({
  children,
  onClick,
  className = "",
  ariaLabel,
  isActive = false,
  size = "default",
}) => {
  const [isPressed, setIsPressed] = useState(false);

  const sizeClasses = {
    default: "p-3",
    small: "p-2",
  };

  return (
    <button
      onClick={onClick}
      onMouseDown={() => setIsPressed(true)}
      onMouseUp={() => setIsPressed(false)}
      onMouseLeave={() => setIsPressed(false)}
      className={`relative ${
        sizeClasses[size]
      } rounded-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 group ${
        isActive
          ? "bg-red-50 text-red-600 shadow-md"
          : "hover:bg-gray-50 text-gray-600 hover:text-red-500 hover:shadow-md"
      } ${isPressed ? "scale-95" : "hover:scale-105"} ${className}`}
      aria-label={ariaLabel}
    >
      <div className="transition-transform duration-200 group-hover:scale-110">
        {children}
      </div>
      {/* Ripple effect */}
      <div className="absolute inset-0 rounded-full bg-red-500 opacity-0 scale-0 group-active:opacity-20 group-active:scale-100 transition-all duration-200"></div>
    </button>
  );
};

// Enhanced SVG Icons with better styling
const HeartIcon = ({ className = "w-6 h-6" }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2.5}
      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
    />
  </svg>
);

const BellIcon = ({ className = "w-6 h-6" }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2.5}
      d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
    />
  </svg>
);

const ShoppingCartIcon = ({ className = "w-6 h-6" }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2.5}
      d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.293 2.293c-.63.63-.184 1.707.707 1.707H19M7 13v4a2 2 0 002 2h4a2 2 0 002-2v-4m-6 0h6"
    />
  </svg>
);

const MoreIcon = ({ className = "w-5 h-5" }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
    />
  </svg>
);

// Enhanced Link component
const Link = ({ to, children, className = "", variant = "default" }) => {
  const baseClasses =
    "transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 rounded-lg";
  const variants = {
    default: "hover:text-red-500",
    button:
      "px-3 py-2 font-medium hover:bg-red-50 hover:text-red-600 border border-transparent hover:border-red-200 text-sm",
    primary:
      "px-4 py-2 bg-red-500 text-white font-medium hover:bg-red-600 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 text-sm",
    mobileButton:
      "px-2 py-1.5 font-medium hover:bg-red-50 hover:text-red-600 border border-transparent hover:border-red-200 text-xs",
    mobilePrimary:
      "px-3 py-1.5 bg-red-500 text-white font-medium hover:bg-red-600 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 text-xs",
  };

  return (
    <a href={to} className={`${baseClasses} ${variants[variant]} ${className}`}>
      {children}
    </a>
  );
};

// Notification dropdown component
const NotificationDropdown = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="absolute right-0 top-full mt-2 w-80 bg-white rounded-xl shadow-2xl border border-gray-100 z-50 transform transition-all duration-300 origin-top">
      <div className="p-4 border-b border-gray-100">
        <h3 className="font-semibold text-gray-800">Notifications</h3>
      </div>
      <div className="max-h-64 overflow-y-auto">
        {[1, 2, 3].map((item) => (
          <div
            key={item}
            className="p-4 hover:bg-gray-50 transition-colors duration-150 border-b border-gray-50 last:border-b-0"
          >
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <p className="text-sm font-medium text-gray-800">
                  Your order has been shipped!
                </p>
                <p className="text-xs text-gray-500 mt-1">2 minutes ago</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="p-3 border-t border-gray-100">
        <button className="w-full text-center text-red-500 font-medium text-sm hover:text-red-600 transition-colors duration-200">
          View All Notifications
        </button>
      </div>
    </div>
  );
};

// Mobile Actions Popup with Login/Signup
const MobileActionsPopup = ({
  isOpen,
  onClose,
  wishlistCount,
  notificationCount,
  cartCount,
  onWishlistClick,
  onNotificationClick,
  onCartClick,
}) => {
  if (!isOpen) return null;

  return (
    <div className="absolute right-0 top-full mt-2 w-56 bg-white rounded-xl shadow-2xl border border-gray-100 z-50 transform transition-all duration-300 origin-top">
      <div className="p-2">
        {/* Wishlist */}
        <button
          onClick={onWishlistClick}
          className="w-full flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg transition-colors duration-150"
        >
          <div className="flex items-center gap-3">
            <HeartIcon className="w-5 h-5 text-gray-600" />
            <span className="text-sm font-medium text-gray-800">Wishlist</span>
          </div>
          {wishlistCount > 0 && (
            <span className="bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-bold">
              {wishlistCount > 99 ? "99+" : wishlistCount}
            </span>
          )}
        </button>

        {/* Notifications */}
        <button
          onClick={onNotificationClick}
          className="w-full flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg transition-colors duration-150"
        >
          <div className="flex items-center gap-3">
            <BellIcon className="w-5 h-5 text-gray-600" />
            <span className="text-sm font-medium text-gray-800">
              Notifications
            </span>
          </div>
          {notificationCount > 0 && (
            <span className="bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-bold">
              {notificationCount > 99 ? "99+" : notificationCount}
            </span>
          )}
        </button>

        {/* Cart */}
        <button
          onClick={onCartClick}
          className="w-full flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg transition-colors duration-150"
        >
          <div className="flex items-center gap-3">
            <ShoppingCartIcon className="w-5 h-5 text-gray-600" />
            <span className="text-sm font-medium text-gray-800">Cart</span>
          </div>
          {cartCount > 0 && (
            <span className="bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-bold">
              {cartCount > 99 ? "99+" : cartCount}
            </span>
          )}
        </button>
        {/* Login/Signup Section */}
        <div className="p-1 border-t border-gray-100">
          <div className="flex flex-col gap-1">
            <Link
              to="/login"
              className="w-full text-center px-4 py-2 text-sm font-medium text-gray-700 hover:bg-red-50 hover:text-red-600 border border-transparent hover:border-red-200 rounded-lg transition-all duration-200"
            >
              Login
            </Link>
            <Link
              to="/register"
              className="w-full text-center px-4 py-2 bg-red-500 text-white font-medium hover:bg-red-600 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 text-sm rounded-lg transition-all duration-200"
            >
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

const MidNavbar = ({ isSticky = false }) => {
  const [wishlistCount, setWishlistCount] = useState(2);
  const [notificationCount, setNotificationCount] = useState(5);
  const [cartCount, setCartCount] = useState(4);
  const [showNotifications, setShowNotifications] = useState(false);
  const [showMobileActions, setShowMobileActions] = useState(false);
  const notificationRef = useRef(null);
  const mobileActionsRef = useRef(null);

  // Close notifications when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        notificationRef.current &&
        !notificationRef.current.contains(event.target)
      ) {
        setShowNotifications(false);
      }
      if (
        mobileActionsRef.current &&
        !mobileActionsRef.current.contains(event.target)
      ) {
        setShowMobileActions(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className={
        `mid-strip bg-white border-b border-gray-100 transition-all duration-200 ` +
        (isSticky
          ? "py-1 xl:py-2" // slightly smaller when stuck
          : "py-2 xl:py-3")
      }>
      <div className="container  mx-auto ">
        {/* Unified Responsive Layout */}
        <div className="flex justify-between items-center gap-2 xl:gap-8">
          {/* Logo Section - Responsive */}
          <div className="flex-shrink-0">
            <Link
              to="/"
              className="inline-block transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 rounded-lg xl:p-1"
            >
              <img
                src="/Nav-logo.jpg"
                alt="ClassyShop - Big Mega Store"
                className="h-6 xl:h-12 w-auto object-contain hover:brightness-110 transition-all duration-200"
                onError={(e) => {
                  // Fallback if image doesn't load
                  e.target.style.display = "none";
                  e.target.nextSibling.style.display = "flex";
                }}
              />
              {/* Fallback logo - Responsive */}
              <div className="h-6 w-20 xl:h-12 xl:w-48 bg-gradient-to-r from-red-500 to-red-600 rounded-md xl:rounded-lg hidden items-center justify-center shadow-md hover:shadow-lg transition-shadow duration-200">
                <span className="text-white font-bold text-xs xl:text-lg">
                  CLASSYSHOP
                </span>
              </div>
            </Link>
          </div>

          {/* Search Section - Responsive */}
          <div className=" w-full flex-1  mx-1 xl:mx-0">
            <SearchBar />
          </div>

          {/* Unified Actions Section - Responsive */}
          <div className="flex items-center gap-1 xl:gap-6 flex-shrink-0">
            {/* Desktop Auth Links - Hidden on Mobile */}
            <div className="hidden xl:flex items-center gap-2">
              <Link
                to="/login"
                variant="button"
                className="text-gray-700 hover:text-red-600"
              >
                Login
              </Link>
              <span className="text-gray-300 select-none mx-1">|</span>
              <Link to="/register" variant="primary" className="shadow-red-200">
                Sign Up
              </Link>
            </div>

            {/* Desktop Action Icons - Hidden on Mobile */}
            <div className="hidden xl:flex items-center gap-2 bg-gray-50 rounded-full p-2">
              {/* Wishlist */}
              <Badge count={wishlistCount}>
                <IconButton
                  ariaLabel="View wishlist"
                  onClick={() => {
                    console.log("Wishlist clicked");
                    setWishlistCount((prev) => (prev > 0 ? prev - 1 : 3));
                  }}
                  className="hover:bg-white"
                >
                  <HeartIcon className="w-6 h-6" />
                </IconButton>
              </Badge>

              {/* Notifications with dropdown */}
              <div className="relative" ref={notificationRef}>
                <Badge count={notificationCount}>
                  <IconButton
                    ariaLabel="View notifications"
                    onClick={() => {
                      setShowNotifications(!showNotifications);
                      if (notificationCount > 0) setNotificationCount(0);
                    }}
                    isActive={showNotifications}
                    className="hover:bg-white"
                  >
                    <BellIcon className="w-6 h-6" />
                  </IconButton>
                </Badge>
                <NotificationDropdown
                  isOpen={showNotifications}
                  onClose={() => setShowNotifications(false)}
                />
              </div>

              {/* Shopping Cart */}
              <Badge count={cartCount}>
                <IconButton
                  ariaLabel="View shopping cart"
                  onClick={() => {
                    console.log("Cart clicked");
                    setCartCount((prev) => (prev > 0 ? prev - 1 : 5));
                  }}
                  className="hover:bg-white ring-2 ring-red-100"
                >
                  <ShoppingCartIcon className="w-6 h-6" />
                </IconButton>
              </Badge>
            </div>

            {/* Mobile Actions Trigger - Visible on Mobile Only */}
            <div className="xl:hidden relative" ref={mobileActionsRef}>
              <IconButton
                ariaLabel="More actions"
                onClick={() => setShowMobileActions(!showMobileActions)}
                isActive={showMobileActions}
                size="small"
                className="bg-gray-50 hover:bg-gray-100 ml-1"
              >
                <MoreIcon className="w-4 h-4" />
                {/* Combined count indicator */}
                {wishlistCount + notificationCount + cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center font-bold border border-white">
                    {wishlistCount + notificationCount + cartCount > 99
                      ? "99+"
                      : wishlistCount + notificationCount + cartCount}
                  </span>
                )}
              </IconButton>

              <MobileActionsPopup
                isOpen={showMobileActions}
                onClose={() => setShowMobileActions(false)}
                wishlistCount={wishlistCount}
                notificationCount={notificationCount}
                cartCount={cartCount}
                onWishlistClick={() =>
                  setWishlistCount((prev) => (prev > 0 ? prev - 1 : 3))
                }
                onNotificationClick={() =>
                  setNotificationCount((prev) => (prev > 0 ? prev - 1 : 5))
                }
                onCartClick={() =>
                  setCartCount((prev) => (prev > 0 ? prev - 1 : 4))
                }
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MidNavbar;
