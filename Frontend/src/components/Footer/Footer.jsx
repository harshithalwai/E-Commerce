import React, { useState } from "react";
import {
  FaTruck,
  FaUndo,
  FaWallet,
  FaGift,
  FaHeadset,
  FaComments,
  FaChevronUp,
  FaFacebookF,
  FaYoutube,
  FaPinterestP,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";

export default function EcommerceFooter() {
  const [email, setEmail] = useState("");
  const [agreed, setAgreed] = useState(false);

  const features = [
    {
      icon: <FaTruck className="w-8 h-8 " />,
      title: "Free Shipping",
      subtitle: "Orders Over $100",
    },
    {
      icon: <FaUndo className="w-8 h-8 " />,
      title: "30 Days Returns",
      subtitle: "Easy Exchanges",
    },
    {
      icon: <FaWallet className="w-8 h-8 " />,
      title: "Secure Payment",
      subtitle: "100% Protected",
    },
    {
      icon: <FaGift className="w-8 h-8 " />,
      title: "Special Gifts",
      subtitle: "First Order Bonus",
    },
    {
      icon: <FaHeadset className="w-8 h-8 " />,
      title: "24/7 Support",
      subtitle: "We’re Here Always",
    },
  ];

  const handleSubscribe = () => {
    if (email && agreed) {
      alert("Subscribed successfully!");
      setEmail("");
      setAgreed(false);
    } else if (!email) alert("Please enter your email address");
    else if (!agreed) alert("Please agree to the terms and conditions");
  };

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="relative text-gray-800 transition-all duration-500">
      {/* Background gradient glass effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-red-50 via-white to-gray-100 backdrop-blur-2xl opacity-90 -z-10" />

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 bg-gradient-to-r from-red-500 via-pink-500 to-orange-400 hover:from-orange-500 hover:to-red-600 text-white p-4 rounded-full shadow-[0_0_15px_rgba(255,75,75,0.6)] hover:shadow-[0_0_25px_rgba(255,75,75,0.9)] transition-all duration-300 hover:scale-110 z-50"
        aria-label="Scroll to top"
      >
        <FaChevronUp size={22} />
      </button>

      {/* Feature Highlights */}
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

      {/* Main Footer */}
      <section className="py-14">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Contact Us */}
          <div>
            <h3 className="font-bold text-lg mb-6">Contact Us</h3>
            <ul className="space-y-2">
              <li>Classyshop - Mega Super Store</li>
              <li>507 Union Trade Centre, France</li>
              <li>sales@yourcompany.com</li>
              <li className=" font-semibold text-lg mt-3">
                (+91) 9876-543-210
              </li>
            </ul>
            <div className="flex items-center gap-3 mt-6 hover: cursor-pointer transition-colors">
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
                  <a href="#" className="hover: transition-colors">
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
                  <a href="#" className="hover: transition-colors">
                    {text}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-bold text-lg mb-6">Subscribe to Newsletter</h3>
            <p className="text-sm opacity-80 mb-6">
              Get the latest updates, news, and exclusive offers directly to
              your inbox.
            </p>
            <div className="space-y-4">
              {/* Animated input */}
              <input
                type="email"
                placeholder="Your Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-md bg-white/70 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-red-400 focus:shadow-[0_0_10px_rgba(255,75,75,0.5)] transition-all duration-300"
              />
              {/* Animated button */}
              <button
                onClick={handleSubscribe}
                className="w-full bg-gradient-to-r from-red-500 via-pink-500 to-orange-400 bg-size-200 hover:bg-right-bottom text-white font-semibold py-3 rounded-md transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,100,100,0.7)]"
                style={{
                  backgroundSize: "200% 100%",
                  backgroundPosition: "left center",
                }}
              >
                SUBSCRIBE
              </button>
              <label className="flex items-start gap-2 text-sm cursor-pointer">
                <input
                  type="checkbox"
                  checked={agreed}
                  onChange={(e) => setAgreed(e.target.checked)}
                  className="accent-red-500 mt-1"
                />
                I agree to the terms and privacy policy.
              </label>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Section */}
      <div className="border-t border-gray-200 py-6">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Social Icons */}
          <div className="flex items-center gap-4">
            {[
              { icon: <FaFacebookF />, color: "hover:text-blue-600" },
              { icon: <FaTwitter />, color: "hover:text-blue-400" },
              { icon: <FaYoutube />, color: "hover:text-red-600" },
              { icon: <FaPinterestP />, color: "hover:text-red-600" },
              { icon: <FaInstagram />, color: "hover:text-pink-600" },
            ].map((s, i) => (
              <a
                key={i}
                href="#"
                className={`w-9 h-9 flex items-center justify-center text-gray-700 transition-colors ${s.color}`}
              >
                {s.icon}
              </a>
            ))}
          </div>

          {/* Copyright */}
          <p className="text-sm opacity-80 text-center">
            © 2025 ClassyShop — Built with ❤️ by Harshit™
          </p>

          {/* Payment Icons */}
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
              src="https://up.yimg.com/ib/th/id/OIP.VeRlcnPS5ozdaAvWoKRdfAHaEl?pid=Api&rs=1&c=1&qlt=95&w=168&h=104"
              alt="Mastercard"
              className="h-6"
            />
            <img
              src="https://tse1.mm.bing.net/th/id/OIP.kC-jrayZVL3751vzLmcawgHaEF?pid=Api&P=0&h=180"
              alt="Amex"
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
