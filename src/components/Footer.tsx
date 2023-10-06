import { SvgFacebook } from "./SvgFacebook";
import { SvgInstagram } from "./SvgInstagram";
import { SvgPinterest } from "./SvgPinterest";
import { SvgTwitter } from "./SvgTwitter";

export const Footer = () => {
  return (
    <footer className="bg-black max-w-[var(--max-width)] m-auto py-11 px-[var(--side-padding)] flex justify-between">
      <div>
        <div className="mb-8">
          <a href="#" aria-label="Home Page">
            <img src="../assets/images/logo.svg" alt="" />
          </a>
        </div>
        <nav className="text-white font-normal">
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
        </nav>
      </div>
      <div>
        <div className="mb-8 flex justify-end gap-4">
          <a
            href="#"
            aria-label="Facebook"
            className="relative after:content-[''] after:absolute after:left-[50%] after:-translate-x-1/2 after:top-[150%] after:h-[3px] after:w-full hover:after:bg-white"
          >
            <SvgFacebook />
          </a>
          <a
            href="#"
            aria-label="Twitter"
            className="relative after:content-[''] after:absolute after:left-[50%] after:-translate-x-1/2 after:top-[150%] after:h-[3px] after:w-full hover:after:bg-white"
          >
            <SvgTwitter />
          </a>
          <a
            href="#"
            aria-label="Pinterest"
            className="relative after:content-[''] after:absolute after:left-[50%] after:-translate-x-1/2 after:top-[150%] after:h-[3px] after:w-full hover:after:bg-white"
          >
            <SvgPinterest />
          </a>
          <a
            href="#"
            aria-label="Instagram"
            className="relative after:content-[''] after:absolute after:left-[50%] after:-translate-x-1/2 after:top-[150%] after:h-[3px] after:w-full hover:after:bg-white"
          >
            <SvgInstagram />
          </a>
        </div>
        <div className="text-[var(--dark-gray)] text-xs">
          ©️ 2021 Loopstudios. All rights reserved.
        </div>
      </div>
    </footer>
  );
};
