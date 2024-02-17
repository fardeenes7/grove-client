import React from "react";
import Image from "next/image";
import GroveImg from "../../../public/assets/GroveHeader.png";
import GroveImgMob from "../../../public/assets/GroveHeader2a_mobile.png";
import WelcomeImg from "../../../public/assets/welcome_img.svg";
import Subscribe from "./Subscribe";
import SubscribeCTA from "./SubscribeCTA";
import MyCarousel from "./MyCarousel";
import Findus from "./Findus";

const Front = () => {
    return (
        <div>
            <div className="relative w-full h-[30vh] md:h-[50vh] lg:[50vh] xl:h-[60vh] 2xl:h-[70vh] mt-[6.5rem] lg:mt-36">
                <div className="hidden md:block">
                    <Image
                        alt="hero-image"
                        src={GroveImg}
                        fill
                        objectFit="cover"
                        objectPosition="center"
                    />
                </div>

                <div className="md:hidden">
                    <Image
                        alt="hero-image"
                        src={GroveImgMob}
                        className="md:hidden"
                        layout="fill"
                        objectFit="cover"
                        objectPosition="center"
                    />
                </div>
            </div>
            <div className="bg-primary">
                <SubscribeCTA />

                <div className="bg-white">
                    <div className="container mx-auto max-w-[1280px]">
                        <div className="relative flex flex-col lg:flex-row items-center md:p-6 py-16 md:py-20 lg:gap-24">
                            {/*Background_Image*/}
                            <div className="absolute inset-0 bg-[url('/Vector.svg')] bg-center bg-fixed bg-auto bg-no-repeat z-0"></div>
                            {/* Logo */}
                            <div className="w-[20rem] lg:w-[30rem] relative z-10 mb-4 md:mb-0">
                                <Image
                                    src={WelcomeImg}
                                    alt="welcome-grove"
                                    className="w-full"
                                />
                            </div>
                            {/* Text */}
                            <div className="relative md:w-[58%] z-10 bg-opacity-75 white-space-pre-line mb-5 md:mb-0 mx-4 ms:mx-0">
                                <div className="flex flex-col text-center lg:text-left">
                                    <h3 className="uppercase font-black text-xl md:text-2xl tracking-widest italic text-[#0E0E0E] -mb-2">
                                        WELCOME TO
                                    </h3>
                                    <h2 className="font-c-bold font-black text-4xl md:text-6xl text-secondary mb-3">
                                        THE GROVE
                                    </h2>
                                </div>
                                <p className="mt-2 text-sm lg:text-xl font-semibold mb-3 text-center lg:text-start text-[#0E0E0E]">
                                    The first indoor pickleball venue in Dallas,
                                    TX opening in February of 2024, boasting two
                                    premier courts for players to enjoy. Upon
                                    opening, players in the Dallas area can now
                                    play the sport year-round regardless of
                                    weather conditions.
                                </p>
                                <p className="mt-2 text-sm lg:text-xl font-semibold mb-3 text-[#0E0E0E] text-center lg:text-start">
                                    We have everything you need for a great
                                    time; like court reservations, tournaments,
                                    leagues, daily drop-in play lessons from our
                                    in-house pros, and even a snack bar and pro
                                    shop.
                                </p>
                                <p className="mt-2 text-sm md:text-xl font-semibold text-secondary text-center lg:text-start">
                                    Trust us; you won&apos;t find better spot to
                                    play pickleball!
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <MyCarousel />
                <div className="bg-white">
                    <Findus />
                </div>
                <Subscribe />
            </div>
        </div>
    );
};

export default Front;
