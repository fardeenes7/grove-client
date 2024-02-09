"use client";
import { useState } from "react";
import React from "react";
import Image from "next/image";
import SunShape from "../../../public/assets/shape_sun_tp.svg";
import CustomModal from "./CustomModal";

const SubscribeCTA = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="container mx-auto max-w-[1200px]">
      <div className="flex flex-col lg:flex-row content-start max-w-[40rem] lg:max-w-fit mx-auto items-center py-14 gap-4 g:gap-10 lg:gap-32 lg:py-24 ">
        <div className="flex flex-col items-center gap-4 sm:gap-0 sm:flex-row text-white mb-4 md:mb-0">
          <Image alt="" src={SunShape} />
          <div className="sm:ml-5 flex flex-col justify-center sm:justify-normal text-center md:text-left gap-4 sm:gap-0">
            <h2 className="font-c-bold font-black text-3xl lg:text-4xl xl:text-5xl">
              SUBSCRIBE & STAY UPDATED!
            </h2>
            <h3 className="font-bold lg:mt-4 text-xl md:text-2xl lg:text-3xl xl:text-4xl italic tracking-widest">
              COMING FEBRUARY 2024
            </h3>
          </div>
        </div>
        <div className="sm:pl-10 lg:pl-0 flex justify-center lg:justify-start w-full lg:w-fit">
        <button
          onClick={() => setIsOpen(true)}
          className="px-4 py-2 lg:px-8 lg:py-4 shadow-custom-shadow bg-secondary text-white font-bold text-sm"
        >
          STAY UPDATED!
        </button>
        </div>
    
        <CustomModal isOpen={isOpen} onRequestClose={() => setIsOpen(false)} />
      </div>
    </div>
  );
};

export default SubscribeCTA;
