import React, { useEffect, useRef, useState } from "react";
import { TopNavbar, MidNavbar, BotNavbar } from "../index.js";

const Navbar = () => {
  const midWrapRef = useRef(null);
  const [isSticky, setIsSticky] = useState(false);
  const [midHeight, setMidHeight] = useState(0);

  useEffect(() => {
    const midEl = midWrapRef.current;
    if (!midEl) return;

    // store the height so we can render a placeholder when fixed
    setMidHeight(midEl.offsetHeight);

    // compute offset top (distance from top of document)
    const initialOffsetTop = midEl.getBoundingClientRect().top + window.scrollY;

    const onScroll = () => {
      // when we scrolled past the MidNavbar's initial top position -> make it fixed
      if (window.scrollY >= initialOffsetTop) setIsSticky(true);
      else setIsSticky(false);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", () => setMidHeight(midEl.offsetHeight));

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", () => setMidHeight(midEl.offsetHeight));
    };
  }, []);

  return (
    <div className="bg-white">
      <TopNavbar />

      {/* wrapper used to measure position */}
      <div ref={midWrapRef} className="relative">
        {/* actual sticky/fixed element */}
        <div
          className={
            "w-full transition-all duration-200 " +
            (isSticky
              ? "fixed top-0 left-0 right-0 z-50 shadow-md bg-white"
              : "relative bg-white")
          }
        >
          {/* pass isSticky to MidNavbar so it can reduce padding / styles */}
          <MidNavbar isSticky={isSticky} />
        </div>
      </div>

      {/* placeholder to avoid layout shift when mid becomes fixed */}
      {isSticky && <div style={{ height: midHeight }} aria-hidden="true" />}

      <BotNavbar />
    </div>
  );
};

export default Navbar;
