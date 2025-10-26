import React, { useState } from "react";
import { Breadcrumb } from "../../components/index.js";
import "react-inner-image-zoom/lib/styles.min.css";
import InnerImageZoom from "react-inner-image-zoom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
const ProductPage = () => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState("grey");
  const [selectedDimension, setSelectedDimension] = useState("60x90cm");
  const [activeTab, setActiveTab] = useState("description");

  const images = [
    "https://demos.codezeel.com/prestashop/PRS21/PRS210502/29-medium_default/hummingbird-printed-t-shirt.jpg",
    "https://demos.codezeel.com/prestashop/PRS21/PRS210502/25-medium_default/hummingbird-printed-t-shirt.jpg",
    "https://demos.codezeel.com/prestashop/PRS21/PRS210502/24-medium_default/hummingbird-printed-t-shirt.jpg",
    "https://demos.codezeel.com/prestashop/PRS21/PRS210502/27-medium_default/hummingbird-printed-t-shirt.jpg",
    "https://demos.codezeel.com/prestashop/PRS21/PRS210502/28-medium_default/hummingbird-printed-t-shirt.jpg",
  ];

  const colors = [
    { name: "Grey", value: "grey", color: "#AAB2BD" },
    { name: "Green", value: "green", color: "#A0D468" },
    { name: "Yellow", value: "yellow", color: "#F1C40F" },
  ];

  const dimensions = ["60x90cm", "20x40cm"];

  const relatedProducts = [
    {
      id: 1,
      name: "Cropped Satin Bomber Jacket",
      price: "$94.00",
      brand: "Pro Tech Gear",
      image:
        "https://demos.codezeel.com/prestashop/PRS21/PRS210502/49-home_default/today-is-a-good-day-framed-poster.jpg",
    },
    {
      id: 2,
      name: "Apple Macbook 8 Gb/512 Gb Ssd/Mac Os",
      price: "$45.00",
      brand: "Weeds Capital",
      image:
        "https://demos.codezeel.com/prestashop/PRS21/PRS210502/61-home_default/mug-the-adventure-begins.jpg",
    },
    {
      id: 3,
      name: "Mens Cotton Casual Short Sleeve T-Shirts",
      price: "$86.00",
      brand: "Soylent Green",
      image:
        "https://demos.codezeel.com/prestashop/PRS21/PRS210502/70-home_default/mug-today-is-a-good-day.jpg",
    },
    {
      id: 4,
      name: "Menu Bottle Salt And Pepper Grinder steel",
      price: "$56.95",
      brand: "Soylent Green",
      originalPrice: "$67.00",
      image:
        "https://demos.codezeel.com/prestashop/PRS21/PRS210502/74-home_default/mountain-fox-cushion.jpg",
    },
  ];

  const StarRating = ({ rating = 5, total = 5 }) => {
    return (
      <div className="flex gap-1">
        {[...Array(total)].map((_, i) => (
          <svg
            key={i}
            className={`w-4 h-4 ${
              i < rating ? "text-yellow-400 fill-current" : "text-gray-300"
            }`}
            viewBox="0 0 20 20"
          >
            <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
          </svg>
        ))}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <div className="container pt-3">
        <Breadcrumb />
      </div>

      <div className="container pt-3">
        <div className="flex gap-6">
          {/* Left Column - Images */}
          <div className="w-1/3 ">
            <div className="relative bg-white rounded-lg overflow-hidden shadow-md group mb-4">
              <InnerImageZoom
                src={images[selectedImage]}
                zoomType="hover"
                zoomScale={1.5}
                alt="Product"
              />
              <button className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 opacity-0 group-hover:opacity-100 transition">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                  />
                </svg>
              </button>
              <span className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                New
              </span>
            </div>

            {/* Thumbnail Images */}
            <div className="w-full mt-2">
              <Swiper
                modules={[Navigation]}
                navigation
                spaceBetween={10}
                slidesPerView={4}
                breakpoints={{
                  320: { slidesPerView: 3 },
                  640: { slidesPerView: 4 },
                  1024: { slidesPerView: 5 },
                }}
                className="thumbnail-swiper"
              >
                {images.map((img, idx) => (
                  <SwiperSlide key={idx}>
                    <button
                      onClick={() => setSelectedImage(idx)}
                      className={`w-full h-20 border-2 rounded-lg overflow-hidden transition ${
                        selectedImage === idx
                          ? "border-[#ff5252]"
                          : "border-gray-200 hover:border-gray-300"
                      }`}
                    >
                      <img
                        src={img}
                        alt={`Thumbnail ${idx + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>

          {/* Right Column - Product Details */}
          <div className="w-2/3  flex flex-col gap-3">
            {/* Rating */}
            <div className="flex items-center gap-3">
              <StarRating rating={5} />
              <span className="text-sm text-gray-600">1 Review's</span>
            </div>

            {/* Title */}
            <h1 className="text-2xl font-bold text-gray-900">
              Apple AirPods Max Over-Ear Wireless Headphone
            </h1>

            {/* Description */}
            <p className="text-gray-600 text-sm leading-relaxed">
              We denounce with righteous indignation and dislike men who are so
              beguiled and demoralized by the charms of pleasure of the moment,
              so blinded by desire that they cannot foresee.
            </p>

            {/* Brand */}
            <div className="flex items-center gap-2 pb-4 border-b border-gray-400">
              <span className="font-semibold text-gray-700">Brand :</span>
              <span className="text-orange-600 hover:text-orange-700 cursor-pointer">
                Gadget Zone
              </span>
            </div>

            {/* Product Info */}
            <div className="space-y-3 mt-2 text-sm">
              <div className="flex items-center gap-2">
                <span className="font-semibold text-gray-700 text-sm">
                  Condition:
                </span>
                <span className=" text-sm bg-green-100 text-green-800 px-2 py-1 rounded">
                  New
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-semibold text-gray-700">Reference:</span>
                <span>Product1</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-semibold text-gray-700">
                  Available In Stock:
                </span>
                <span className="text-green-600 font-medium">243 Items</span>
              </div>
            </div>

            {/* Color Selection */}
            <div>
              <label className="block font-semibold text-gray-700 mb-3">
                Color:{" "}
                <span className="font-normal capitalize text-gray-600">
                  {selectedColor}
                </span>
              </label>
              <div className="flex gap-3">
                {colors.map((color) => (
                  <button
                    key={color.value}
                    onClick={() => setSelectedColor(color.value)}
                    className={`relative w-6 h-6 rounded-full border-2 transition-all ${
                      selectedColor === color.value
                        ? "border-gray-900 scale-110"
                        : "border-gray-300 hover:border-gray-400"
                    }`}
                    style={{ backgroundColor: color.color }}
                    title={color.name}
                  >
                    {selectedColor === color.value && (
                      <svg
                        className="absolute inset-0 m-auto w-3 h-3 text-white"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Price */}
            <div className="">
              <div className="flex items-center gap-3">
                <span className="text-gray-400 line-through text-sm">
                  $47.00
                </span>
                <span className="bg-red-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                  Save $5.00
                </span>
              </div>
              <div className="text-2xl font-bold text-[#ff5252]">$42.00</div>
              <div className="flex items-center gap-2 text-green-600">
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                  <path d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1V5a1 1 0 00-1-1H3zM14 7a1 1 0 00-1 1v6.05A2.5 2.5 0 0115.95 16H17a1 1 0 001-1v-5a1 1 0 00-.293-.707l-2-2A1 1 0 0015 7h-1z" />
                </svg>
                <span className="text-sm font-medium">
                  Free Shipping (Est. Delivery Time 2-3 Days)
                </span>
              </div>
            </div>

            {/* Quantity & Add to Cart */}
            <div className="flex gap-4">
              <div className="flex items-center border-2 border-gray-300 rounded-lg overflow-hidden">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-4 py-3 hover:bg-gray-100 transition"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M20 12H4"
                    />
                  </svg>
                </button>
                <input
                  type="number"
                  value={quantity}
                  onChange={(e) =>
                    setQuantity(Math.max(1, parseInt(e.target.value) || 1))
                  }
                  className="w-16 text-center border-x-2 border-gray-300 py-3 focus:outline-none font-semibold"
                />
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-4 py-3 hover:bg-gray-100 transition"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 4v16m8-8H4"
                    />
                  </svg>
                </button>
              </div>
              <button className="flex-1 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold py-3 px-6 rounded-lg transition shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
                Add to Cart
              </button>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3">
              <button className="flex-1 border-2 border-gray-300 hover:border-red-500 hover:text-red-500 py-3 px-4 rounded-lg flex items-center justify-center gap-2 transition group">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
                <span className="font-medium">Wishlist</span>
              </button>
              <button className="flex-1 border-2 border-gray-300 hover:border-blue-500 hover:text-blue-500 py-3 px-4 rounded-lg flex items-center justify-center gap-2 transition">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                  />
                </svg>
                <span className="font-medium">Compare</span>
              </button>
            </div>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="mt-5 grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 bg-white rounded-lg shadow-md p-8">
          {[
            {
              icon: (
                <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              ),
              title: "Security policy",
              desc: "(edit with the Customer Reassurance module)",
            },
            {
              icon: (
                <path d="M5 8a1 1 0 011-1h1V6a1 1 0 012 0v1h1a1 1 0 110 2H9v1a1 1 0 11-2 0V9H6a1 1 0 01-1-1zm13 2a1 1 0 011 1v5a1 1 0 01-1 1h-5a1 1 0 01-1-1v-5a1 1 0 011-1h5z" />
              ),
              title: "Delivery policy",
              desc: "(edit with the Customer Reassurance module)",
            },
            {
              icon: (
                <path
                  fillRule="evenodd"
                  d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z"
                  clipRule="evenodd"
                />
              ),
              title: "Return policy",
              desc: "(edit with the Customer Reassurance module)",
            },
          ].map((item, idx) => (
            <div key={idx} className="text-center">
              <div className="inline-block p-4 bg-orange-100 rounded-full mb-4">
                <svg
                  className="w-12 h-12 text-orange-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  {item.icon}
                </svg>
              </div>
              <h3 className="font-bold text-gray-900 mb-1">{item.title}</h3>
              <p className="text-sm text-gray-500">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Tabs Section */}
        <div className="bg-white rounded-lg shadow-md mb-12">
          <div className="border-b">
            <div className="flex">
              <button
                onClick={() => setActiveTab("description")}
                className={`px-8 py-4 font-semibold transition ${
                  activeTab === "description"
                    ? "text-orange-500 "
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                Description
              </button>
              <button
                onClick={() => setActiveTab("details")}
                className={`px-8 py-4 font-semibold transition ${
                  activeTab === "details"
                    ? "text-orange-500 "
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                Product Details
              </button>
            </div>
          </div>

          <div className="p-8">
            {activeTab === "description" ? (
              <div className="prose max-w-none">
                <p className="mb-4 text-gray-600 leading-relaxed">
                  Symbol of lightness and delicacy, the hummingbird evokes
                  curiosity and joy. Studio Design' PolyFaune collection
                  features classic products with colorful patterns, inspired by
                  the traditional japanese origamis. To wear with a chino or
                  jeans. The sublimation textile printing process provides an
                  exceptional color rendering and a color, guaranteed overtime.
                </p>
                <h3 className="font-bold text-xl mt-6 mb-3 text-gray-900">
                  The standard Lorem Ipsum passage, used since the 1500
                </h3>
                <p className="mb-4 text-gray-600 leading-relaxed">
                  Fashion has been creating well-designed collections since
                  2010. The brand offers feminine designs delivering stylish
                  separates and statement dresses which has since evolved into a
                  full ready-to-wear collection in which every item is a vital
                  part of a woman's wardrobe. The result? Cool, easy, chic looks
                  with youthful elegance.
                </p>
                <h3 className="font-bold text-xl mt-6 mb-3 text-gray-900">
                  Contrary to popular belief, Lorem Ipsum is not simply random
                  text.
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Many desktop publishing packages and web page editors now use
                  Lorem Ipsum as their default model text, and a search for
                  'lorem ipsum' will uncover many web sites still in their
                  infancy. Various versions have evolved over the years,
                  sometimes by accident, sometimes on purpose (injected humour
                  and the like).
                </p>
              </div>
            ) : (
              <div className="space-y-6">
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-bold text-gray-900 mb-3">Data Sheet</h4>
                    <dl className="space-y-2">
                      <div className="flex">
                        <dt className="font-semibold text-gray-700 w-32">
                          Composition
                        </dt>
                        <dd className="text-gray-600">Cotton</dd>
                      </div>
                      <div className="flex">
                        <dt className="font-semibold text-gray-700 w-32">
                          Property
                        </dt>
                        <dd className="text-gray-600">Long sleeves</dd>
                      </div>
                      <div className="flex">
                        <dt className="font-semibold text-gray-700 w-32">
                          Style
                        </dt>
                        <dd className="text-gray-600">Classic</dd>
                      </div>
                    </dl>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-3">
                      Product Info
                    </h4>
                    <dl className="space-y-2">
                      <div className="flex">
                        <dt className="font-semibold text-gray-700 w-32">
                          Reference
                        </dt>
                        <dd className="text-gray-600">Product1</dd>
                      </div>
                      <div className="flex">
                        <dt className="font-semibold text-gray-700 w-32">
                          In stock
                        </dt>
                        <dd className="text-gray-600">243 Items</dd>
                      </div>
                    </dl>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Reviews Section */}
        <div className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">REVIEWS</h2>
          <div className="border-b pb-6 mb-6">
            <div className="flex gap-6">
              <div className="flex-shrink-0 text-center bg-gray-50 rounded-lg p-4">
                <div className="mb-3 flex justify-center">
                  <StarRating rating={5} />
                </div>
                <div className="font-bold text-gray-900">Marco</div>
                <div className="text-sm text-gray-600 mt-1">03/05/2023</div>
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-xl mb-3 text-gray-900">
                  Perfect product!
                </h3>
                <p className="text-gray-600 leading-relaxed mb-3">
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form, by injected humour, or randomised words which don't look
                  even slightly believable.
                </p>
                <p className="text-sm text-gray-500 flex items-center gap-2">
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  3 out of 3 people found this review useful.
                </p>
              </div>
            </div>
          </div>
          <button className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold py-3 px-8 rounded-lg transition shadow-lg hover:shadow-xl">
            Write a Review
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
