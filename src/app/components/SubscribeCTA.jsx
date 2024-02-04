"use client";
import { useState } from "react";
import React from "react";
import Image from "next/image";
import SunShape from "../../../public/assets/shape_sun_tp.svg";
import CustomModal from "./CustomModal";

const SubscribeCTA = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="container mx-auto">
      <div className="flex flex-col md:flex-row items-center justify-around px-6 py-4 md:py-14 lg:py-16 md:mx-10 lg:mx-32">
        <div className="flex flex-col items-center md:flex-row text-white mb-4 md:mb-0">
          <Image alt="" src={SunShape} />
          <div className="ml-5 flex flex-col">
            <h2 className="font-black text-xl md:text-2xl lg:text-5xl">
              SUBSCRIBE & STAY UPDATED!
            </h2>
            <p className="font-bold text-xl md:text-2xl lg:text-4xl italic tracking-widest">
              COMING FEBRUARY 2024
            </p>
          </div>
        </div>
        <button
          onClick={() => setIsOpen(true)}
          className="px-4 py-2 lg:px-8 lg:py-4 shadow-custom-shadow bg-secondary text-white font-bold text-sm"
        >
          STAY UPDATED!
        </button>
        <CustomModal isOpen={isOpen} onRequestClose={() => setIsOpen(false)} />
      </div>
    </div>
  );
};

export default SubscribeCTA;
