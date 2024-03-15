"use client";

import { useEffect, useRef } from "react";

interface BtnBackToTopProps {}
export default function BtnBackToTop(props: BtnBackToTopProps) {
  const btnBackToTopRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const offset = 300;
    const offset_opacity = 1200;

    const toggleBtnBackToTop = () => {
      if (window.scrollY > offset) {
        btnBackToTopRef.current?.classList.add("block");
        btnBackToTopRef.current?.classList.remove("hidden");
      } else {
        btnBackToTopRef.current?.classList.remove("block");
        btnBackToTopRef.current?.classList.add("hidden");
      }
    };

    window.addEventListener("scroll", toggleBtnBackToTop);

    return () => window.removeEventListener("scroll", toggleBtnBackToTop);
  }, []);

  const handleGoToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <a
      data-component-name="BtnBackToTop"
      href="#"
      className="back-top fixed p-4 rounded bg-gray-100 border border-gray-100 text-gray-500 dark:bg-gray-900 dark:border-gray-800 right-4 bottom-4 hidden"
      aria-label="Scroll To Top"
      ref={btnBackToTopRef}
      onClick={handleGoToTop}
    >
      <svg
        width="1rem"
        height="1rem"
        viewBox="0 0 16 16"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          d="M8 3.5a.5.5 0 01.5.5v9a.5.5 0 01-1 0V4a.5.5 0 01.5-.5z"
          clipRule="evenodd"
        ></path>
        <path
          fillRule="evenodd"
          d="M7.646 2.646a.5.5 0 01.708 0l3 3a.5.5 0 01-.708.708L8 3.707 5.354 6.354a.5.5 0 11-.708-.708l3-3z"
          clipRule="evenodd"
        ></path>
      </svg>
    </a>
  );
}
