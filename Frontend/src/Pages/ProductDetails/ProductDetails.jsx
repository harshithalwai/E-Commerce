import React, { useState } from "react";
import { Breadcrumb, ProductDetailsCont } from "../../components/index.js";
import "react-inner-image-zoom/lib/styles.min.css";

const ProductPage = () => {
  const [activeTab, setActiveTab] = useState("description");
  const [showReviewForm, setShowReviewForm] = useState(false);
  const [reviewData, setReviewData] = useState({
    name: "",
    title: "",
    rating: 5,
    review: "",
  });

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

  const handleSubmitReview = () => {
    console.log("Review submitted:", reviewData);
    setShowReviewForm(false);
    setReviewData({ name: "", title: "", rating: 5, review: "" });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container pt-3">
        <Breadcrumb />
      </div>

      <div className="container pt-3">
      <ProductDetailsCont />
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
          <div className="border-b border-gray-200 pb-4 mb-4">
            <div className="flex gap-6">
              {/* Left side - Avatar and User Info */}
              <div className="flex-shrink-0 flex flex-col items-center gap-2">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center text-white font-bold text-lg shadow-sm">
                  M
                </div>
                <div className="text-center">
                  <div className="font-semibold text-sm text-gray-900">
                    Marco
                  </div>
                  <div className="text-xs text-gray-500">03/05/2023</div>
                </div>
              </div>

              {/* Right side - Review Content */}
              <div className=" min-w-0">
                <div className="flex items-center gap-2 mb-2">
                  <h3 className="font-bold text-lg text-gray-900">
                    Perfect product!
                  </h3>
                </div>

                <p className="text-gray-600 text-sm leading-relaxed mb-2">
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form, by injected humour, or randomised words which don't look
                  even slightly believable.
                </p>

                <StarRating rating={5} />
              </div>
            </div>
          </div>

          {showReviewForm && (
            <div className="mb-6 p-6 bg-gray-50 rounded-lg">
              <h3 className="text-xl font-bold mb-4 text-gray-900">
                Write Your Review
              </h3>
              <div className="space-y-4">
                <div>
                  <label className="block font-semibold text-gray-700 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    value={reviewData.name}
                    onChange={(e) =>
                      setReviewData({ ...reviewData, name: e.target.value })
                    }
                    className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-orange-500 focus:outline-none"
                    placeholder="Enter your name"
                  />
                </div>

                <div>
                  <label className="block font-semibold text-gray-700 mb-2">
                    Review Title
                  </label>
                  <input
                    type="text"
                    value={reviewData.title}
                    onChange={(e) =>
                      setReviewData({ ...reviewData, title: e.target.value })
                    }
                    className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-orange-500 focus:outline-none"
                    placeholder="Give your review a title"
                  />
                </div>

                <div>
                  <label className="block font-semibold text-gray-700 mb-2">
                    Rating
                  </label>
                  <div className="flex gap-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        onClick={() =>
                          setReviewData({ ...reviewData, rating: star })
                        }
                        className="focus:outline-none"
                      >
                        <svg
                          className={`w-8 h-8 ${
                            star <= reviewData.rating
                              ? "text-yellow-400 fill-current"
                              : "text-gray-300"
                          }`}
                          viewBox="0 0 20 20"
                        >
                          <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                        </svg>
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block font-semibold text-gray-700 mb-2">
                    Your Review
                  </label>
                  <textarea
                    value={reviewData.review}
                    onChange={(e) =>
                      setReviewData({ ...reviewData, review: e.target.value })
                    }
                    rows={6}
                    className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-orange-500 focus:outline-none resize-none"
                    placeholder="Share your thoughts about this product..."
                  />
                </div>

                <div className="flex gap-3">
                  <button
                    onClick={handleSubmitReview}
                    className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold py-3 px-8 rounded-lg transition shadow-lg hover:shadow-xl"
                  >
                    Submit Review
                  </button>
                  <button
                    onClick={() => setShowReviewForm(false)}
                    className="border-2 border-gray-300 hover:border-gray-400 text-gray-700 font-bold py-3 px-8 rounded-lg transition"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          )}

          <button
            onClick={() => setShowReviewForm(!showReviewForm)}
            className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold py-3 px-8 rounded-lg transition shadow-lg hover:shadow-xl"
          >
            {showReviewForm ? "Hide Review Form" : "Write a Review"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
