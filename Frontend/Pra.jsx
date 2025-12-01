import React, { useState } from "react";

const Pra = () => {
  const [activeTab, setActiveTab] = useState("description");
  const [showReviewForm, setShowReviewForm] = useState(false);
  const [reviewData, setReviewData] = useState({
    name: "",
    title: "",
    rating: 5,
    review: "",
  });

  //     return (
  //       <div className="flex gap-1">
  //         {[...Array(total)].map((_, i) => (
  //           <svg
  //             key={i}
  //             className={`w-4 h-4 ${
  //               i < rating ? "text-yellow-400 fill-current" : "text-gray-300"
  //             }`}
  //             viewBox="0 0 20 20"
  //           >
  //             <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
  //           </svg>
  //         ))}
  //       </div>
  //     );
  //   };

  return (
    <div>
      <div>
        <label className="block font-semibold text-gray-700 mb-2">Rating</label>
        <div className="flex gap-2">
          {[1, 2, 3, 4, 5].map((star) => (
            <button
              key={star}
              onClick={() => {
                setReviewData({ ...reviewData, rating: star });
              }}
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
    </div>
  );
};

export default Pra;
