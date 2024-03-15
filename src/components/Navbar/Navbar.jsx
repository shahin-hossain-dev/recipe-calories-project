import React from "react";
import { HiOutlineUserCircle } from "react-icons/hi2";
import { HiMiniMagnifyingGlass } from "react-icons/hi2";
const Navbar = () => {
  return (
    <div className="flex py-6 lg:py-12 justify-between items-center bg-base-100">
      <div className="">
        <a className="text-[#150B2B] text-2xl lg:text-3xl font-bold font-lexend">
          Recipe Calories
        </a>
      </div>
      <div className="hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-base text-[#150B2BB3]">
          <li>
            <a>Home</a>
          </li>
          <li>
            <a>Recipes</a>
          </li>
          <li>
            <a>About</a>
          </li>
          <li>
            <a>Search</a>
          </li>
        </ul>
      </div>
      <div className="flex items-center justify-center">
        <div className="form-control relative hidden md:block">
          <HiMiniMagnifyingGlass className="absolute top-1/2 -translate-y-1/2 left-4 text-2xl text-[#150B2BB3]" />
          <input
            type="text"
            placeholder="Search"
            className="input bg-[#150B2B0D] ps-11 input-bordered w-24 md:w-auto rounded-full"
          />
        </div>
        <div>
          <div className="w-12 h-12 ms-4 bg-[#0BE58A] rounded-full flex justify-center items-center">
            <HiOutlineUserCircle className="text-3xl" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
