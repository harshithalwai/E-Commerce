import React from "react";

export default function DisplayBar() {
  return (
    <div className="container">
      <div
        className="relative rounded-lg overflow-hidden h-[100px]
                   bg-cover bg-center group transition-transform  flex justify-center items-center duration-700 ease-in-out"
        style={{ backgroundImage: "url('/watch.png')" }}
      >
        {/* Overlay */}
        {/* <div className="absolute inset-0 bg-black/40 transition-opacity duration-500 group-hover:bg-black/60"></div> */}

        {/* Text Content */}
        <div className="relative z-10 flex items-center gap-10 pl-8 text-white transition-transform duration-700 group-hover:scale-105">
          <h2 className="text-3xl font-bold uppercase tracking-widest">
            WATCH
          </h2>
          <p className="text-sm leading-tight">
            M6 Smart Band 2.3 &ndash; Fitness Band{" "}
            <span className="block">
              Men&rsquo;s and Women&rsquo;s Health Tracking, Red Strap
            </span>
          </p>
        </div>

        {/* Hover Animation */}
        <div
          className="absolute inset-0 scale-100 group-hover:scale-110 transition-transform duration-700 ease-out bg-cover bg-center"
          style={{ backgroundImage: "url('/watch.png')" }}
        ></div>
      </div>
    </div>
  );
}
