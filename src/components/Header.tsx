"use client";

import { Josefin_Sans } from "next/font/google";
import { useEffect, useState } from "react";

const font = Josefin_Sans({ subsets: ["latin"], weight: ["300"] });

export const Header = () => {
  const [isMenuOpen, setisMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
  });

  const handleResize = () => {
    if (window.innerWidth < 768) {
      setisMenuOpen(false);
    }    
  };

  return (
    <header className="max-w-[var(--max-width)] m-auto pt-16 pb-36 px-[var(--mobile-padding)] md:px-[var(--tablet-padding)] lg:px-[var(--side-padding)] bg-[url(../assets/images/mobile/image-hero.jpg)] md:bg-[url(../assets/images/desktop/image-hero.jpg)] bg-cover bg-no-repeat">
      <div className="flex justify-between">
        <div>
          {!isMenuOpen && (
            <a href="#" aria-label="Home Page">
              <img src="../assets/images/logo.svg" alt="" />
            </a>
          )}
        </div>
        <div className="text-white font-normal hidden md:block">
          <ul className="flex gap-10">
            <li>
              <a
                href="#"
                className="relative after:content-[''] after:absolute after:left-[50%] after:-translate-x-1/2 after:top-[150%] after:h-[3px] after:w-1/2 hover:after:bg-white"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#"
                className="relative after:content-[''] after:absolute after:left-[50%] after:-translate-x-1/2 after:top-[150%] after:h-[3px] after:w-1/2 hover:after:bg-white"
              >
                Careers
              </a>
            </li>
            <li>
              <a
                href="#"
                className="relative after:content-[''] after:absolute after:left-[50%] after:-translate-x-1/2 after:top-[150%] after:h-[3px] after:w-1/2 hover:after:bg-white"
              >
                Events
              </a>
            </li>
            <li>
              <a
                href="#"
                className="relative after:content-[''] after:absolute after:left-[50%] after:-translate-x-1/2 after:top-[150%] after:h-[3px] after:w-1/2 hover:after:bg-white"
              >
                Products
              </a>
            </li>
            <li>
              <a
                href="#"
                className="relative after:content-[''] after:absolute after:left-[50%] after:-translate-x-1/2 after:top-[150%] after:h-[3px] after:w-1/2 hover:after:bg-white"
              >
                Support
              </a>
            </li>
          </ul>
        </div>
        <div
          className={`md:hidden absolute right-[20px] ${
            isMenuOpen && "bg-black left-0 right-0 top-0 pb-12 pr-5"
          }`}
        >
          <div className="flex justify-between">
            {isMenuOpen && (
              <a href="#" aria-label="Home Page" className="mt-4 ml-4">
                <img src="../assets/images/logo.svg" alt="" />
              </a>
            )}
            <button onClick={() => setisMenuOpen((prev) => !prev)} className="relative top-2">
              {isMenuOpen ? <img src="../assets/images/icon-close.svg" alt="" /> : <img src="../assets/images/icon-hamburger.svg" alt="" />}
            </button>
          </div>
          {isMenuOpen && (
            <ul className={`${font.className} reltaive left-0 text-white uppercase mt-16 ml-4`}>
              <li className="mb-4">
                <a href="#">About</a>
              </li>
              <li className="mb-4">
                <a href="#">Careers</a>
              </li>
              <li className="mb-4">
                <a href="#">Events</a>
              </li>
              <li className="mb-4">
                <a href="#">Products</a>
              </li>
              <li>
                <a href="#">Support</a>
              </li>
            </ul>
          )}
        </div>
      </div>
      <div
        className={`${font.className} uppercase text-white text-4xl md:text-7xl border-2 border-white md:w-[580px] p-8 pr-0 mt-32`}
      >
        Immersive experiences that deliver
      </div>
    </header>
  );
};
