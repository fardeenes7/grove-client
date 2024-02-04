"use client";
import { useState } from "react";
import React from "react";
import Image from "next/image";
import TennisIcon from "../../../public/assets/tennis_icon.svg";
import CustomModal from "./CustomModal";

const Subscribe = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="container mx-auto py-4 lg:py-20 px-4 lg:px-20">
      <div className="flex flex-col md:flex-row md:gap-20 items-center md:items-end justify-between px-2 lg:px-6 mt-4 lg:mt-28 md:ml-10">
        <div className="w-full lg:w-1/3 flex flex-col md:flex-row items-center md:items-end text-center md:text-left mb-4 md:mb-0">
          <Image alt="" src={TennisIcon} className="mr-2 md:mr-5" />

          <div className="flex flex-col items-center md:items-start text-white">
            <span className="uppercase text-sm md:text-lg">
              Don&apos;t miss out
            </span>
            <span className="uppercase text-2xl md:text-4xl lg:text-6xl font-black">
              Subscribe
            </span>
          </div>
        </div>
        <div className="w-full 2xl:w-2/3 flex items-start text-white mt-4 md:mt-0">
          <div className="w-full text-sm md:text-lg lg:text-2xl text-white font-light text-center md:text-left">
            <p className="text-wrap md:w-2/3">
              Be the first to hear about our grand opening, tips to improve your
              play, and Dallas pickleball leagues
            </p>
          </div>
        </div>
      </div>
      <div className="ml-2 lg:ml-36 mt-2 md:mt-8 justify-center flex lg:justify-start">
        <button
          onClick={() => setIsOpen(true)}
          className="px-4 py-2 lg:px-8 lg:py-4 shadow-custom-shadow bg-secondary text-white font-bold text-sm uppercase"
        >
          Subscribe!
        </button>
        <CustomModal isOpen={isOpen} onRequestClose={() => setIsOpen(false)} />
      </div>
    </div>
  );
};

export default Subscribe;
