import Image from "next/image";
import React from "react";
import SponsorImg from "../../../public/assets/sponsor_img.png";
import WelcomeImg from "../../../public/assets/welcome_img.svg";
import BatImg from "../../../public/assets/bat_img.png";
import Link from "next/link";

const page = () => {
  return (
    <>
      {/* landing page section */}
      <div className="flex flex-col md:flex-row 2xl:py-10 md:items-center lg:items-start 2xl:items-start mt-40">
        <div className="flex flex-1 flex-col items-center md:items-end 2xl:mr-10">
          <div className="w-full 2xl:w-2/3 sm:min-h-[50vh]">
            <Image src={WelcomeImg} alt="" className="w-full lg:w-3/4" />
            <div className="hidden md:hidden md:pl-16 lg:-mt-8 lg:flex flex-col ">
              <h1 className="text-gray-700 font-bold text-4xl md:text-5xl 3xl:text-7xl">
                THE GROVE SPONSORS
              </h1>
              <h2 className="text-2xl md:text-3xl font-semibold my-2 md:my-4 text-gray-700">
                Thanks to the sponsors that make The Grove possible.
              </h2>
              <p className="text-sm md:text-lg leading-none font-normal text-gray-700 my-2 md:my-3">
                Please consider supporting brands that support the growth of
                pickleball.
              </p>
              <span className="text-sm md:text-base font-semibold text-primary my-2">
                Interested in sponsorship?{" "}
                <Link className="underline" href="/sponsorship#sponsors">
                  Become a Sponsor?
                </Link>
              </span>
            </div>
          </div>
        </div>
        <div className="flex-1 my-4 md:mt-0">
          <Image
            src={SponsorImg}
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      <div className="lg:hidden md:flex flex-col items-center justify-center p-4">
        <h1 className="text-gray-700 font-bold text-4xl md:text-5xl lg:text-7xl">
          THE GROVE SPONSORS
        </h1>
        <h2 className="text-2xl md:text-3xl font-semibold my-2 md:my-4 text-gray-700">
          Thanks to the sponsors that make The Grove possible.
        </h2>
        <p className="text-sm md:text-lg leading-none font-normal text-gray-700 my-2 md:my-3">
          Please consider supporting brands that support the growth of
          pickleball.
        </p>
        <span className="text-sm md:text-base font-semibold text-primary my-2">
          Interested in sponsorship?{" "}
          <Link className="underline" href="/sponsorship#sponsors">
            Become a Sponsor?
          </Link>
        </span>
      </div>

      <div id="sponsors" className="relative bg-gray-200 mt-5 lg:mt-16">
        <div className="flex flex-col items-center relative z-10 px-4 md:px-0">
          <h1 className="text-4xl text-center md:text-5xl 2xl:text-8xl 3xl:text-9xl font-black 2xl:mb-4 uppercase text-primary py-6 md:py-8 lg:py-14 2xl:pt-48 2xl:pb-24">
            Become a Sponsor
          </h1>
          <div className="inline-block w-full md:w-3/5 mx-auto bg-white p-4 md:p-20 -mb-20 relative z-10">
            <h2  className="text-2xl md:text-4xl font-light text-myGray">
              Interested in talking sponsorship
            </h2>
            <p className="text-base md:text-lg font-normal my-2 text-myGray">
              The Grove Pickleball will create and customize a sponsorship
              package based on your priorities. Whatever your priorities, we are
              committed to providing offerings that satisfy our partner’s
              requirements and objectives. We are dedicated to increasing your
              brand exposure and showcasing your company to the ever-growing
              audience of pickleball, which includes on-court signage &
              marketing, and so much more!
            </p>
            <p className="text-base md:text-lg font-normal my-5 text-myGray">
              Fill out the form below to get started.
            </p>
            <form className="flex flex-col text-myGray">
              <div className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg lg:space-x-4">
                <div className="flex-1 flex flex-col w-full">
                  <label>
                    Name{" "}
                    <span className="italic text-red-500">{"(Required)"}</span>
                  </label>
                  <input
                    type="text"
                    className="px-4 py-2 bg-gray-100 rounded-sm mb-5"
                  />
                  <label>
                    Phone Number{" "}
                    <span className="italic text-red-500">{"(Required)"}</span>
                  </label>
                  <input
                    type="text"
                    className="px-4 py-2 bg-gray-100 rounded-sm"
                  />
                </div>
                <div className="flex-1 flex flex-col w-full">
                  <label>
                    Company{" "}
                    <span className="italic text-red-500">{"(Optional)"}</span>
                  </label>
                  <input
                    type="text"
                    className="px-4 py-2 bg-gray-100 rounded-sm mb-5"
                  />
                  <label>
                    Email{" "}
                    <span className="italic text-red-500">{"(Required)"}</span>
                  </label>
                  <input
                    type="text"
                    className="px-4 py-2 bg-gray-100 rounded-sm"
                  />
                </div>
              </div>
              <label className="mt-5">What are you looking for?</label>
              <textarea className="px-4 py-4 bg-gray-100 rounded-sm w-full"></textarea>
              <button
                type="submit"
                className="p-4 bg-[#329bec] text-white w-24 mt-8 rounded-md"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="w-full h-16 bg-white"></div>
      <div className="relative w-full overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <Image src={BatImg} alt="" className="w-full h-full object-cover" />
      </div>
    </>
  );
};

export default page;
