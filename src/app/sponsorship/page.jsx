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
      <div className="flex py-10 items-start">
        <div className="flex flex-1 flex-col items-end">
          <div className="w-2/3">
            <Image src={WelcomeImg} alt="" />
            <h1 className="text-gray-700 font-bold text-7xl">
                THE GROVE SPONSORS
            </h1>
            <h2 className="text-3xl font-semibold w-2/3 my-2 text-gray-700">Thanks to the sponsors that make The Grove possible.</h2>
            <p className="text-base font-normal text-gray-700">
                Please consider supporting brands that support the growthof
                pickleball.
            </p>
            <span className="text-base font-semibold text-primary my-2">
                Interested in sponsorship?{" "}
                <Link className="underline" href="/sponsorship">
                Become a Sponsor?
                </Link>
            </span>
          </div>
        </div>
        <div className="flex-1">
          <Image src={SponsorImg} alt="" className="-mr-10"/>
        </div>
      </div>

      <div className="relative bg-gray-200 mt-16">
      <div className="flex flex-col items-center">
      <h1 className="text-9xl font-black mb-4 uppercase text-primary pt-48 pb-24">
          Become a Sponsor
        </h1>
        <div className="inline-block w-3/4 mx-auto bg-white py-20 px-11 -mb-20 relative z-10">
          <h2 className="text-4xl font-light">Interested in talking sponsorship</h2>
          <p className="text-lg font-normal my-2">
            The Grove Pickleball will create and customize a sponsorship package
            based on your priorities. Whatever your priorities, we are committed
            to providing offerings that satisfy our partner’s requirements and
            objectives. We are dedicated to increasing your brand exposure and
            showcasing your company to the ever-growing audience of pickleball,
            which includes on-court signage & marketing, and so much more!
          </p>
          <p className="text-lg font-normal my-4 text-gray-600">Fill out the form below to get started.</p>
          <form className="flex flex-col">
            <div className="flex">
                <div className="flex-1 flex flex-col gap-5 w-full mr-2">
                <label>Name <span className="italic text-red-500">{"(Required)"}</span>
                </label>
                <input
                    type="text"
                    className="px-4 py-2 bg-gray-100 rounded-sm"
                />
                <label>Phone Number <span className="italic text-red-500">{"(Required)"}</span></label>
                <input
                    type="text"
                    className="px-4 py-2 bg-gray-100 rounded-sm"
                />
                </div>
                <div className="flex-1 flex flex-col gap-5 w-full ml-2">
                <label>Company <span className="italic text-red-500">{"(Optional)"}</span></label>
                <input
                    type="text"
                    className="px-4 py-2 bg-gray-100 rounded-sm"
                />
                <label>Email <span className="italic text-red-500">{"(Required)"}</span></label>
                <input
                    type="text"
                    className="px-4 py-2 bg-gray-100 rounded-sm"
                />
                </div>   
            </div>
            <label className="my-2">What are you looking for?</label>
            <textarea
              className="px-4 py-2 bg-gray-100 rounded-sm w-full my-2"
            ></textarea>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-700 text-white uppercase w-1/6 mt-2 rounded-md"
            >
              Submit
            </button>
            
          </form>
        </div>
      </div>
        
      </div>
      <div className="w-full h-16 bg-white"></div>
      <div className="relative w-full overflow-hidden">
        <Image src={BatImg} alt="" className="" />
      </div>
    </>
  );
};

export default page;
