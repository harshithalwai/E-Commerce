import React, { useState } from "react";
import {
  FaTruck,
  FaUndo,
  FaWallet,
  FaGift,
  FaHeadset,
  FaComments,
  FaFacebookF,
  FaYoutube,
  FaPinterestP,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";
import axios from "axios";
import { toast } from "react-toastify";
export default function EcommerceFooter() {
  const [formData, setFormData] = useState({
    email: "",
    agreed: false,
  });

  // Feature list
  const features = [
    {
      icon: <FaTruck className="w-8 h-8" />,
      title: "Free Shipping",
      subtitle: "Orders Over $100",
    },
    {
      icon: <FaUndo className="w-8 h-8" />,
      title: "30 Days Returns",
      subtitle: "Easy Exchanges",
    },
    {
      icon: <FaWallet className="w-8 h-8" />,
      title: "Secure Payment",
      subtitle: "100% Protected",
    },
    {
      icon: <FaGift className="w-8 h-8" />,
      title: "Special Gifts",
      subtitle: "First Order Bonus",
    },
    {
      icon: <FaHeadset className="w-8 h-8" />,
      title: "24/7 Support",
      subtitle: "We’re Here Always",
    },
  ];

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubscribe = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    setFormData({ email: "", agreed: false });
  };

  return (
    <footer className="relative text-gray-800 transition-all duration-500">
      <div className="absolute inset-0 bg-gradient-to-br from-red-50 via-white to-gray-100 backdrop-blur-2xl opacity-90 -z-10" />

      {/* Highlights Section */}
      <section className="py-12 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 text-center">
          {features.map((item, i) => (
            <div
              key={i}
              className="flex flex-col items-center hover:scale-105 transition-transform duration-300"
            >
              <div className="mb-3">{item.icon}</div>
              <h4 className="font-semibold">{item.title}</h4>
              <p className="text-sm opacity-80">{item.subtitle}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer Content */}
      <section className="py-14">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-lg mb-6">Contact Us</h3>
            <ul className="space-y-2">
              <li>Classyshop - Mega Super Store</li>
              <li>507 Union Trade Centre, France</li>
              <li>sales@yourcompany.com</li>
              <li className="font-semibold text-lg mt-3">(+91) 9876-543-210</li>
            </ul>
            <div className="flex items-center gap-3 mt-6 cursor-pointer">
              <FaComments className="text-2xl" />
              <div>
                <p className="font-semibold">Online Chat</p>
                <p className="text-sm opacity-80">Get Expert Help</p>
              </div>
            </div>
          </div>

          {/* Products */}
          <div>
            <h3 className="font-bold text-lg mb-6">Products</h3>
            <ul className="space-y-3">
              {[
                "Prices Drop",
                "New Products",
                "Best Sales",
                "Contact Us",
                "Sitemap",
                "Stores",
              ].map((text, i) => (
                <li key={i}>
                  <a href="#" className="hover:underline transition-colors">
                    {text}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-bold text-lg mb-6">Our Company</h3>
            <ul className="space-y-3">
              {[
                "Delivery",
                "Legal Notice",
                "Terms & Conditions",
                "About Us",
                "Secure Payment",
                "Login",
              ].map((text, i) => (
                <li key={i}>
                  <a href="#" className="hover:underline transition-colors">
                    {text}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter Form */}
          <div>
            <h3 className="font-bold text-lg mb-6">Subscribe to Newsletter</h3>
            <p className="text-sm opacity-80 mb-6">
              Get the latest updates, news, and exclusive offers directly to
              your inbox.
            </p>

            <form onSubmit={handleSubscribe} className="space-y-4">
              <input
                type="email"
                name="email"
                placeholder="Your Email Address"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-md bg-white/70 focus:ring-2 focus:ring-red-400 focus:shadow-[0_0_10px_rgba(255,75,75,0.5)] transition-all duration-300"
                required
              />

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-red-500 via-pink-500 to-orange-400 text-white font-semibold py-3 rounded-md transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,100,100,0.7)]"
              >
                SUBSCRIBE
              </button>

              <label className="flex items-start gap-2 text-sm cursor-pointer">
                <input
                  type="checkbox"
                  name="agreed"
                  checked={formData.agreed}
                  onChange={handleChange}
                  className="accent-red-500 mt-1"
                />
                I agree to the terms and privacy policy.
              </label>
            </form>
          </div>
        </div>
      </section>

      {/* Bottom Section */}
      <div className="border-t border-gray-200 py-6">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Social Icons */}
          <div className="flex items-center gap-4">
            {[FaFacebookF, FaTwitter, FaYoutube, FaPinterestP, FaInstagram].map(
              (Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 flex items-center justify-center text-gray-700 hover:text-red-500 transition-colors"
                >
                  <Icon />
                </a>
              )
            )}
          </div>

          <p className="text-sm opacity-80 text-center">
            © 2025 ClassyShop — Built with ❤️ by Harshit™
          </p>

          <div className="flex items-center gap-2">
            <span className="bg-blue-700 text-white px-3 py-1.5 rounded-md font-semibold text-xs">
              C.O.D
            </span>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/0/04/Visa.svg"
              alt="Visa"
              className="h-6"
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg"
              alt="PayPal"
              className="h-6"
            />
          </div>
        </div>
      </div>
    </footer>
  );
}
