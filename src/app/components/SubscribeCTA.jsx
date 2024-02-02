"use client"
import { useState } from 'react';
import React from "react";
import Image from "next/image";
import TennisIcon from "../../../public/assets/tennis_icon.svg"
import CustomModal from './CustomModal';

const SubscribeCTA = () => {
    const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="container mx-auto py-20">
      <div className="flex items-center justify-between px-6 py-4 -space-x-20 mx-10">
        <div className="flex items-center text-white">
          <Image alt="" src={TennisIcon} />
          <div className="ml-2 flex flex-col">
            <h2 className="font-bold text-2xl">SUBSCRIBE & STAY UPDATED!</h2>
            <p>COMING FEBRUARY 2024</p>
          </div>
        </div>
        <button onClick={() => setIsOpen(true)} className="px-4 py-2 rounded bg-secondary text-white">
                    STAY UPDATED!
                </button>
                <CustomModal isOpen={isOpen} onRequestClose={() => setIsOpen(false)} />
      </div>
    </div>
  );
};

export default SubscribeCTA;
