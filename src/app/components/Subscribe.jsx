"use client";
import { useState } from "react";
import React from "react";
import Image from "next/image";
import TennisIcon from "../../../public/assets/tennis_icon.svg";
import CustomModal from "./CustomModal";

const Subscribe = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className="container max-w-[1380px] mx-auto">
        <div className="flex flex-col md:flex-row gap-4 md:gap-20 xl:gap-40 items-center md:items-end justify-center md:justify-between px-2 lg:px-6 mt-16 lg:mt-28">
          <div className="max-w-[25rem] md:w-full xl:w-1/3 2xl:w-1/3 flex justify-start items-center  text-center md:text-left md:mb-0">
            <Image alt="" src={TennisIcon} className="mr-2 md:mr-5" />

            <div className="flex flex-col text-start items-center md:items-start text-white">
              <span className="uppercase text-sm md:text-lg">
                Don&apos;t miss out
              </span>
              <h2 className="uppercase text-2xl md:text-4xl lg:text-6xl font-black">
                Subscribe
              </h2>
            </div>
          </div>
          <div className="w-full 2xl:w-3/4 flex text-white mt-4">
            <div className="xl:w-2/3 text-sm md:text-lg lg:text-[19px] text-white font-light text-center md:text-left">
              <p className="text-wrap">
                Be the first to hear about our grand opening, tips to improve
                your play, and Dallas pickleball leagues
              </p>
            </div>
          </div>
        </div>
        <div className="ml-2 mt-6 lg:ml-[6.5rem] md:mt-8 justify-center flex md:justify-start">
          <button
            onClick={() => setIsOpen(true)}
            className="px-4 py-2 md:px-8 md:py-4 shadow-custom-shadow bg-secondary text-white font-bold text-sm uppercase"
          >
            Subscribe!
          </button>
          <CustomModal
            isOpen={isOpen}
            onRequestClose={() => setIsOpen(false)}
          />
        </div>
      </div>
      {/* <div className="container mx-auto">
        <div className="border-t border-gray-600 w-full py-5 mt-5 md:mt-10"></div>
      </div> */}
    </>
  );
};

export default Subscribe;
