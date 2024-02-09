"use client";
import Image from "next/image";
import LogoIcon from "../../../public/assets/logo_icon.svg";
import GroveLogo from "../../../public/assets/grove-logo-h.png";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-[#001429] relative">
      <nav className="text-white px-3 py-3 lg:px-6 lg:py-[1.7rem] mx-5 md:mx-10 lg:mx-16 2xl:mx-20 3xl:mx-52">
        <div className="flex justify-between items-center">
          {/* Logo and Icon */}
          <div className="">
            <Link href="/" className="flex items-center">
              <Image
                src={GroveLogo}
                alt="grove-logo"
                className="mr-2 d hidden md:block"
              />
              <Image
                src={LogoIcon}
                alt="grove-icon"
                className="mr-2 md:hidden"
              />
            </Link>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center -ml-10 gap-4">
            <Link
              href="/events"
              className="text-white text-base hover:text-gray-300 px-3 py-2 -m-l-10"
            >
              Private Events
            </Link>
            <Link
              href="/sponsorship"
              className="text-white text-base font-medium hover:text-gray-300 px-3 py-2"
            >
              Sponsorship
            </Link>
          </div>

          <div>
            <Link
              href="/sponsorship"
              className="px-4 py-2 lg:px-8 lg:py-[14px] shadow-custom-shadow bg-secondary text-white font-normal text-md md:text-base lg:font-medium"
            >
              Reserve Court
            </Link>
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
        <div
          className={`md:hidden ${
            isOpen ? "block" : "hidden"
          } text-center md:text-end py-8 mobile_menu show`}
        >
          <Link
            href="/events"
            onClick={() => setIsOpen(!isOpen)}
            className="block text-gray-300 hover:text-white px-3 py-2 rounded"
          >
            Private Events
          </Link>
          <Link
            href="/sponsorship"
            className="block text-gray-300 hover:text-white px-3 py-2 rounded"
            onClick={() => setIsOpen(!isOpen)}
          >
            Sponsorship
          </Link>
        </div>
      </nav>
    </div>
  );
}
