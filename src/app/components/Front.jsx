import React from "react";
import Image from "next/image";
import GroveImg from "../../../public/assets/GroveHeader.png";
import WelcomeImg from "../../../public/assets/welcome_img.svg";
import Subscribe from "./Subscribe";
import SubscribeCTA from "./SubscribeCTA";

const Front = () => {
  return (
    <div>
      <div className="relative w-full h-[20vw] md:h-[30vw] lg:[40vw]">
        <Image
          alt="hero-image"
          src={GroveImg}
          layout="fill"
          objectFit="cover"
          objectPosition="center"
        />
      </div>
      <div className="bg-primary">
        <SubscribeCTA />

        <div className="bg-white">
          <div className="container mx-auto px-4  md:px-6  lg:px-32">
            <div className="relative flex flex-col md:flex-row items-center justify-between md:h-[80vh]">
              {/*Background_Image*/}
              <div className="absolute inset-0 bg-[url('/assets/vector.svg')] bg-center bg-contain bg-fixed bg-no-repeat z-0"></div>
              {/* Logo */}
              <div className="relative z-10 w-full md:w-1/3 lg:w-1/4 min-w-[40%] mb-4 md:mb-0">
                <Image src={WelcomeImg} alt="welcome-grove" />
              </div>
              {/* Text */}
              <div className="relative z-10 bg-opacity-75 w-full md:w-3/4 white-space-pre-line mb-5 md:mb-0">
                <div className="flex flex-col">
                  <span className="uppercase font-black text-xl md:text-2xl tracking-widest italic text-gray-700 -mb-2">
                    WELCOME TO
                  </span>
                  <h2 className="font-black text-4xl md:text-6xl text-secondary mb-3">
                    THE GROVE
                  </h2>
                </div>
                <p className="mt-2 text-lg md:text-xl font-semibold mb-3 text-gray-700">
                  The first indoor pickleball venue in Dallas, TX opening in
                  February of 2024, boasting two premier courts for players to
                  enjoy. Upon opening, players in the Dallas area can now play
                  the sport year-round regardless of weather conditions.
                </p>
                <p className="mt-2 text-lg md:text-xl font-semibold mb-3 text-gray-700">
                  We have everything you need for a great time; like court
                  reservations, tournaments, leagues, daily drop-in play lessons
                  from our in-house pros, and even a snack bar and pro shop.
                </p>
                <p className="mt-2 text-lg md:text-xl font-semibold text-gray-700">
                  Trust us; you won&apos;t find better spot to play pickleball!
                </p>
              </div>
            </div>
          </div>
        </div>
        <Subscribe />
      </div>
    </div>
  );
};

export default Front;
