"use client";
import { useState } from "react";
import React from "react";
import Image from "next/image";
import TennisIcon from "../../../public/assets/tennis_icon.svg";
import CustomModal from "./CustomModal";

const Subscribe = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="container mx-auto py-20">
      <div className="flex items-center justify-evenly px-6 py-4 -space-x-20 mx-10">
        <div className="flex items-center text-white">
          <div className="ml-2 flex flex-col">
            <div className="flex">
              <Image alt="" src={TennisIcon} />

              <span className="uppercase text-6xl font-black ">Subscribe</span>
            </div>
            <div className="mt-4">
              <button
                onClick={() => setIsOpen(true)}
                className="px-4 py-2 rounded bg-secondary text-white w-1/2"
              >
                Subscribe
              </button>
              <CustomModal
                isOpen={isOpen}
                onRequestClose={() => setIsOpen(false)}
              />
            </div>
          </div>
        </div>
        <div className="text-xl text-white font-medium">
          <p className="text-wrap">
            Be the first to hear about our grand opening, tips to improve
          </p>
          <p>your play, and Dallas pickleball leagues</p>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
