import React from "react";
import GroveWhite from "../../../public/assets/grove_white_2.png";
import GroveCourtA from "../../../public/assets/grove_court_angle_A.png";
import GroveCourtB from "../../../public/assets/grove_court_angle_B.png";
import Image from "next/image";

const page = () => {
  return (
    <div className="bg-primary">
      <div className="container mx-auto px-4 md:px-[20%] py-10">
        <div className="flex flex-col items-center justify-center mt-40 gap-2 text-white">
          <h1 className="text-3xl md:text-5xl font-bold my-4 text-center text-white">
            The Grove Private Event Enquiry
          </h1>
          <div className="p-5 md:p-10">
            <Image src={GroveWhite} alt="grove_private_enquiry" />
          </div>
          <p className="text-lg font-normal text-justify mt-2">
            Looking to host a private event? The Grove offers a versatile space
            for various occasions from birthday parties to corporate events,
            team building exercises and private clinics.
          </p>
          <p className="text-lg font-normal text-justify my-4">
            If you have a Pickleball-themed event in mind, let&apos;s discuss
            how The Grove can elevate your experience. Our air-conditioned
            Pickleball courts ensure a comfortable environment for your guests
            while they enjoy the excitement of the game.
          </p>
          <p className="text-lg font-normal text-left mb-4">
            Contact us to explore the possibilities and see if The Grove is the
            perfect fit for your event!
          </p>
          <div>
            <Image src={GroveCourtA} alt="grove_best_court" className="mb-4" />
            <Image src={GroveCourtB} alt="grove_best_court" />
          </div>
          <p className="text-base font-light text-justify my-4">
            Please take a moment to fill out this form to provide us with more
            details about your requirements. We will review your request within
            48 hours. A member of our team will reach out to you via email or
            phone to discuss your event. Thank you for considering us!
          </p>
          <form className="w-full flex flex-col gap-2 bg-white p-4 py-8 md:p-8 rounded-sm">
            <label className="block text-black text-sm font-semibold mb-2">
              First Name
              <input
                type="text"
                className="shadow appearance-none border rounded-full w-full py-[12px] sm:py-4 px-4 mt-2 mb-4 bg-gray-100 text-black leading-tight focus:outline-none focus:shadow-outline"
              />
            </label>
            <label className="block text-black text-sm font-bold mb-2">
              Last Name
              <input
                type="text"
                className="shadow appearance-none border rounded-full w-full py-[12px] sm:py-4 px-4 mt-2 mb-4 bg-gray-100 text-black leading-tight focus:outline-none focus:shadow-outline"
              />
            </label>
            <label className="block text-black text-sm font-bold mb-2">
              Phone
              <input
                type="text"
                className="shadow appearance-none border rounded-full w-full py-[12px] sm:py-4 px-4 mt-2 mb-4 bg-gray-100 text-black leading-tight focus:outline-none focus:shadow-outline"
              />
            </label>
            <label className="block text-black text-sm font-bold mb-2">
              Email
              <input
                type="text"
                className="shadow appearance-none border rounded-full w-full py-[12px] sm:py-4 px-4 mt-2 mb-4 bg-gray-100 text-black leading-tight focus:outline-none focus:shadow-outline"
              />
            </label>
            <label className="block text-black text-sm font-bold mb-2">
              Company Name (if applicable)
              <input
                type="text"
                className="shadow appearance-none border rounded-full w-full py-[12px] sm:py-4 px-4 mt-2 mb-4 bg-gray-100 text-black leading-tight focus:outline-none focus:shadow-outline"
              />
            </label>
            <label className="block text-black text-sm font-bold mb-2">
              What type of event would you like to host?
              <textarea
                type="text"
                className="shadow appearance-none border rounded-xl w-full py-4 px-3 bg-gray-100 text-black leading-tight focus:outline-none focus:shadow-outline h-[7rem]"
              />
              <span className="text-xs text-[#6C757D]">
                Company event, birthday party, private clinic, etc.
              </span>
            </label>
            <label className="block text-black text-sm font-bold mb-2">
              Approximately how many guests do you expect will attend?
              <input
                type="text"
                className="shadow appearance-none border rounded-full w-full py-[12px] sm:py-4 px-4 mt-2 mb-4 bg-gray-100 text-black leading-tight focus:outline-none focus:shadow-outline"
              />
              <span className="text-xs text-[#6C757D]">
                Please not we have maximum capacity of 120 guests.
              </span>
            </label>
            <label className="block text-black text-sm font-bold mb-2">
              What date are you interested in your event?
              <input
                type="text"
                className="shadow appearance-none border rounded-full w-full py-[12px] sm:py-4 px-4 mt-2 mb-4 bg-gray-100 text-black leading-tight focus:outline-none focus:shadow-outline"
              />
              <span className="text-xs text-[#6C757D]">
                If you&apos;re not sure, leave it blank.
              </span>
            </label>
            <label className="block text-black text-sm font-bold mb-2">
              What time adore you wish for your event start?
              <input
                type="text"
                className="shadow appearance-none border rounded-full w-full py-[12px] sm:py-4 px-4 mt-2 mb-4 bg-gray-100 text-black leading-tight focus:outline-none focus:shadow-outline"
              />
              <span className="text-xs text-[#6C757D]">
                Please not we have a 3 hour minimum rental.
              </span>
            </label>

           <div>
           <button
              type="submit"
              className="bg-[#FF9E1B] inline-block hover:bg-blue-dark text-black font-bold py-4 px-8 rounded-full focus:outline-none focus:shadow-outline mt-4"
            >
              Submit
            </button>
           </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default page;
