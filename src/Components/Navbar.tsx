"use client";

import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="flex justify-around  items-center w-[100%] h-[15vh] border-b-2 border-gray-100">
      {/* log */}
      <div className=" flex-auto flex justify-center  ">
        <h1 className="text-4xl font-bold ">Miino</h1>

        <button className="bg-red-400 w-2 h-2 relative rounded-full top-6 left-1 cursor-default"></button>
      </div>
      {/* list */}
      <div className="flex flex-auto justify-around p-2 font-bold text-sm">
        <p>Home</p>
        <div className="flex  items-center gap-1">
          <p>Works</p>
          <button>
            {" "}
            <FaChevronDown />
          </button>
        </div>

        <p>About</p>
        <p>Service</p>
      </div>
      {/* button */}
      <div className="flex-auto flex justify-center ">
        <button className="border-black border-2 px-7 py-2 ">
          {" "}
          Let's Chat
        </button>
      </div>
    </div>
  );
};

export default Navbar;
