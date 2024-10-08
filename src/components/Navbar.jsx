import React, { useState } from "react";
import logo from "../assets/logo.png";
import search_icon from "../assets/search_icon.svg";
import bell_icon from "../assets/bell_icon.svg";
import profile_img from "../assets/profile_img.png";
import caret_icon from "../assets/caret_icon.svg";
import Dropdown from "./dropdown";

const Navbar = () => {
const [isDropdownVisible,setDropdownVisible]=useState(false);

const handleMouseEnter =()=>{
  setDropdownVisible(true);
}
  const handleMouseLeave=()=>{
    setDropdownVisible(false);
  }
  return (
    <div className="fixed flex justify-between w-full px-5 py-4">
      <div className="flex items-center">
        <div className="">
          <img src={logo} alt="logo" className="h-9" />
        </div>
        <ul className="hidden gap-6 ml-20 text-lg cursor-pointer lg:flex">
          <li>Home</li>
          <li>TV Shows</li>
          <li>Movies</li>
          <li>News And Popular</li>
          <li>My List</li>
          <li>Browse By Languages</li>
        </ul>
      </div>
      <div className="hidden gap-6 text-lg cursor-pointer lg:flex lg:items-center lg:ml-80">
        <img src={search_icon} alt="search-icon" className="font-2xl" />
        <p>Children</p>
        <img src={bell_icon} alt="bell-icon" />
      </div>
      <div className="relative flex items-center gap-2 cursor-pointer">
        <img
          src={profile_img}
          alt="profile-icon"
          className="rounded-lg h-7 w-7"
          
        />
        <img src={caret_icon} alt="caret_icon" onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}/>
        {isDropdownVisible && <Dropdown/>}
      </div>
    </div>
  );
};

export default Navbar;
