"use client";
import { useState } from "react";
import React from "react";
import Image from "next/image";
import TennisIcon from "../../../public/assets/tennis_icon.svg";
import CustomModal from "./CustomModal";

const Subscribe = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="container mx-auto py-20 px-20 ">
      <div className="flex items-end justify-between px-6 my-28">
        <div className="w-[30%] flex items-end">
          <Image alt="" src={TennisIcon} className="mr-5" />
          <div className="flex flex-col text-white">
            <span className="uppercase">Don&apos;t miss out</span>
            <span className="uppercase text-6xl font-black ">Subscribe</span>
          </div>
        </div>
        <div className="w-[60%] flex items-start text-white">
          <div className="w-[80%] text-2xl text-white font-light ">
            <p className="text-wrap">
              Be the first to hear about our grand opening, tips to improve
          
            your play, and Dallas pickleball leagues</p>
          </div>
        </div>
      </div>
      <div className="ml-24">
        <button
          onClick={() => setIsOpen(true)}
          className="px-8 py-2 bg-secondary rounded-sm text-white font-semibold text-xl uppercase"
        >
          Subscribe!
        </button>
        <CustomModal isOpen={isOpen} onRequestClose={() => setIsOpen(false)} />
      </div>
    </div>
  );
};

export default Subscribe;
