"use client";
import Image from "next/image";
import LogoIcon from "../../../public/assets/logo_icon.svg";
import GroveLogo from "../../../public/assets/grove_white.png";
import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-[#001429] relative">
      <nav className="text-white px-3 py-3 lg:px-6 lg:py-4">
        <div className="flex justify-between items-center">
          {/* Logo and Icon */}
          <div className=" mx-4 md:mx-10 lg:mx-20 xl:mx-40 2xl:mx-60 ">
            <Link href="/" className="flex items-center">
              <Image src={LogoIcon} alt="grove-icon" className="w-5 mr-2" />
              <Image
                src={GroveLogo}
                alt="The Grove"
                className="w-24 md:w-32 "
              />
            </Link>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center -ml-10">
            <Link
              href="/events"
              className="text-white text-base hover:text-gray-300 px-3 py-2 font-space -m-l-10"
            >
              Private Events
            </Link>
            <Link
              href="/sponsorship"
              className="text-white text-base font-medium hover:text-gray-300 px-3 py-2 font-space"
            >
              Sponsorship
            </Link>
          </div>

          {/* Profile Icon */}
          <div className="right-0 hidden md:flex items-center mx-16 lg:mx-16 2xl:mx-60">
            <svg
              width={26}
              height={27}
              viewBox="0 0 26 27"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13.35 14.99C9.40748 14.99 6.20001 11.7825 6.20001 7.84C6.20001 3.89747 9.40748 0.689999 13.35 0.689999C17.2925 0.689999 20.5 3.89747 20.5 7.84C20.5 11.7825 17.2925 14.99 13.35 14.99ZM13.35 1.99C10.1243 1.99 7.50001 4.6143 7.50001 7.84C7.50001 11.0657 10.1243 13.69 13.35 13.69C16.5757 13.69 19.2 11.0657 19.2 7.84C19.2 4.6143 16.5757 1.99 13.35 1.99Z"
                fill="white"
                stroke="white"
                strokeWidth={0.380859}
              />
              <path
                d="M23.75 26.69H2.95C1.87478 26.69 1 25.8153 1 24.74C1 24.6515 1.01808 22.5492 2.5925 20.45C3.50895 19.2281 4.76375 18.2573 6.32195 17.5648C8.22516 16.7189 10.5897 16.29 13.35 16.29C16.1102 16.29 18.4748 16.7189 20.378 17.5648C21.9363 18.2573 23.1911 19.228 24.1075 20.45C25.6819 22.5492 25.7 24.6515 25.7 24.74C25.7 25.8153 24.8253 26.69 23.75 26.69ZM13.35 17.59C8.81727 17.59 5.47213 18.8288 3.67617 21.1724C2.33019 22.9288 2.30013 24.7247 2.3 24.7426C2.3 25.0984 2.59161 25.39 2.95 25.39H23.75C24.1084 25.39 24.4 25.0984 24.4 24.74C24.3998 24.7247 24.3698 22.9288 23.0239 21.1725C21.2279 18.8288 17.8827 17.59 13.35 17.59V17.59Z"
                fill="white"
                stroke="white"
                strokeWidth={0.380859}
              />
            </svg>
          </div>

          <div className="md:hidden px-2 py-2 lg:px-8 lg:py-4 shadow-custom-shadow bg-secondary text-white font-normal text-xs">
            <button>Reserve Court</button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)}>
              <svg fill="white" viewBox="0 0 20 20" className="w-6 h-6">
                {isOpen ? (
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  />
                ) : (
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 6a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm1 5a1 1 0 100 2h12a1 1 0 100-2H4z"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden ${isOpen ? "block" : "hidden"}`}>
          <a
            href="#"
            className="block text-gray-300 hover:text-white px-3 py-2 rounded"
          >
            Private Events
          </a>
          <a
            href="#"
            className="block text-gray-300 hover:text-white px-3 py-2 rounded"
          >
            Sponsorship
          </a>
        </div>
      </nav>
    </div>
  );
}
