import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "./SocialSwiper.css";

const items = [
  {
    id: 1,
    title: "Mountain Bike",
    price: "$499",
    img: "https://images.unsplash.com/photo-1519677100203-a0e668c92439?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&s=1",
  },
  {
    id: 2,
    title: "Vintage Camera",
    price: "$249",
    img: "https://images.unsplash.com/photo-1519677100203-a0e668c92439?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&s=1",
  },
  {
    id: 3,
    title: "Headphones",
    price: "$129",
    img: "https://images.unsplash.com/photo-1519677100203-a0e668c92439?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&s=1",
  },
  {
    id: 4,
    title: "Sneakers",
    price: "$89",
    img: "https://images.unsplash.com/photo-1519677100203-a0e668c92439?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&s=1",
  },
];

export default function SocialSwiper() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <div className="w-full container">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-semibold">Featured</h2>

       
        <div className="flex gap-3 items-center">
          <button
            ref={prevRef}
            className="prev-button hover-shake p-2 rounded-lg bg-white/80 shadow-md border border-gray-200"
            aria-label="Previous"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          <button
            ref={nextRef}
            className="next-button hover-shake p-2 rounded-lg bg-white/80 shadow-md border border-gray-200"
            aria-label="Next"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>

      <div className="relative">
        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={18}
          slidesPerView={3}
          loop={true}
          autoplay={{ delay: 3500, disableOnInteraction: true }}
          breakpoints={{
            320: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          onBeforeInit={(swiper) => {
            // link external navigation buttons
            // eslint-disable-next-line no-param-reassign
            swiper.params.navigation.prevEl = prevRef.current;
            // eslint-disable-next-line no-param-reassign
            swiper.params.navigation.nextEl = nextRef.current;
          }}
          navigation={{ prevEl: prevRef.current, nextEl: nextRef.current }}
        >
          {items.map((it) => (
            <SwiperSlide key={it.id}>
              <div className="card hover:shadow-xl transition-shadow duration-200 bg-white rounded-2xl overflow-hidden border border-gray-100">
                <div className="relative">
                  <img
                    src={it.img}
                    alt={it.title}
                    className="w-full h-56 object-cover"
                  />

                  {/* Timer-like badge centered over image (as requested in earlier messages) */}
                  <div className="absolute left-1/2 -translate-x-1/2 bottom-3 bg-white/90 px-3 py-1 rounded-md shadow-md text-sm font-medium">
                    Deal ends in 02:15:23
                  </div>
                </div>

                <div className="p-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-gray-800">
                      {it.title}
                    </h3>
                    <span className="text-[#ff5252] font-bold">{it.price}</span>
                  </div>

                  <p className="text-sm text-gray-500 mt-2">
                    High quality and limited stock — grab it while it lasts.
                  </p>

                  <div className="mt-3 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      {/* Social SVGs (inline) */}
                      <a
                        href="#"
                        className="social-icon hover-shake p-1 rounded-full"
                        title="Share to Facebook"
                      >
                        <svg
                          width="18"
                          height="18"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          aria-hidden
                        >
                          <path d="M22 12.07C22 6.48 17.52 2 11.93 2S2 6.48 2 12.07c0 4.99 3.66 9.12 8.44 9.93v-7.03H7.9v-2.9h2.54V9.41c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.23.2 2.23.2v2.45h-1.25c-1.23 0-1.61.76-1.61 1.54v1.85h2.74l-.44 2.9h-2.3V22c4.78-.81 8.44-4.94 8.44-9.93z" />
                        </svg>
                      </a>

                      <a
                        href="#"
                        className="social-icon hover-shake p-1 rounded-full"
                        title="Share to Twitter"
                      >
                        <svg
                          width="18"
                          height="18"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          aria-hidden
                        >
                          <path d="M22.46 6c-.77.35-1.6.58-2.46.69a4.3 4.3 0 0 0 1.88-2.37 8.59 8.59 0 0 1-2.72 1.04A4.28 4.28 0 0 0 11.07 9.5a12.14 12.14 0 0 1-8.82-4.47 4.28 4.28 0 0 0 1.32 5.71 4.23 4.23 0 0 1-1.94-.54v.05c0 2.05 1.46 3.76 3.39 4.15a4.3 4.3 0 0 1-1.93.07 4.29 4.29 0 0 0 4 2.98A8.6 8.6 0 0 1 2 19.54a12.12 12.12 0 0 0 6.56 1.92c7.88 0 12.2-6.53 12.2-12.2v-.56A8.64 8.64 0 0 0 22.46 6z" />
                        </svg>
                      </a>

                      <a
                        href="#"
                        className="social-icon hover-shake p-1 rounded-full"
                        title="Share to Instagram"
                      >
                        <svg
                          width="18"
                          height="18"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          aria-hidden
                        >
                          <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm5 6.2A4.8 4.8 0 1 0 16.8 13 4.8 4.8 0 0 0 12 8.2zm6.4-3.2a1.2 1.2 0 1 1-1.2 1.2 1.2 1.2 0 0 1 1.2-1.2z" />
                        </svg>
                      </a>

                      <a
                        href="#"
                        className="social-icon hover-shake p-1 rounded-full"
                        title="Share to LinkedIn"
                      >
                        <svg
                          width="18"
                          height="18"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          aria-hidden
                        >
                          <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9h4v12H3zM9 9h3.8v1.7h.05c.53-1 1.82-2.1 3.75-2.1C20.5 8.6 21 11 21 14.3V21h-4v-6.1c0-1.45-.03-3.3-2-3.3-2 0-2.3 1.56-2.3 3.18V21H9z" />
                        </svg>
                      </a>
                    </div>

                    <button className="px-3 py-1 rounded-md bg-[#ff5252] text-white text-sm hover:brightness-105 transition-all">
                      Add to cart
                    </button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
