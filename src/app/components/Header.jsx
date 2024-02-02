import React from "react";
import Navbar from "./Navbar"

const Header = () => {
  return (
    <header>
      <div className="header-top bg-[#329BEC] h-9">
        <h1 className="text-white font-bold p-1 text-center">
          OPENING FEBRUARY 2024
        </h1>
      </div>
      <Navbar/>
    </header>
  );
};

export default Header;
