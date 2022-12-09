import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { AiOutlineYoutube } from "react-icons/ai";
import {
  HiOutlineHashtag,
  HiOutlineHome,
  HiOutlineMenu,
  HiOutlinePhotograph,
  HiOutlineUserGroup,
} from "react-icons/hi";
import { RiCloseLine } from "react-icons/ri";
import { FiAward } from "react-icons/fi";
import Divider from "@mui/material/Divider";

import { logo } from "../../assets";

const musiclinks = [
  // { name: "Around You", to: "/around-you", icon: HiOutlinePhotograph },
  { name: "Top Charts", to: "/", icon: FiAward },
  { name: "Top Artists", to: "/top-artists", icon: HiOutlineUserGroup },
];
const videolinks = [
  { name: "Youtube", to: "/top-videos", icon: AiOutlineYoutube },
];

const NavLinks = ({ handleClick }) => (
  <div className="mt-5">
    {musiclinks.map((item) => (
      <NavLink
        key={item.name}
        to={item.to}
        className="flex flex-row justify-start items-center my-8 text-sm font-medium text-gray-400 hover:text-cyan-400 active:bg-violet-700"
        onClick={() => handleClick && handleClick()} //If handleClick is passed, call it
      >
        <item.icon className="w-6 h-6 mr-2 " />
        {item.name}
      </NavLink>
    ))}
    <Divider className="bg-white" />
    {videolinks.map((item) => (
      <NavLink
        key={item.name}
        to={item.to}
        className="flex flex-row justify-start items-center my-8 text-sm font-medium text-gray-400 hover:text-cyan-400 active:bg-violet-700"
        onClick={() => handleClick && handleClick()} //If handleClick is passed, call it
      >
        <item.icon className="w-6 h-6 mr-2 " />
        {item.name}
      </NavLink>
    ))}
  </div>
);

const Sidebar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <div className="md:flex hidden flex-col w-[180px] py-5 px-4 bg-[#191624]">
        <img src={logo} alt="logo" className="w-full h-12 object-contain" />
        <NavLinks />
      </div>

      {/* Mobile sidebar */}
      <div className="absolute md:hidden block top-6 right-3">
        {!mobileMenuOpen ? (
          <HiOutlineMenu
            className="w-6 h-6 mr-2 text-white"
            onClick={() => setMobileMenuOpen(true)}
          />
        ) : (
          <RiCloseLine
            className="w-6 h-6 mr-2 text-white"
            onClick={() => setMobileMenuOpen(false)}
          />
        )}
      </div>

      <div
        className={`absolute top-0 h-screen w-1/3 bg-gradient-to-tl from-white/10 to-[#483D8B] backdrop-blur-lg z-10 p-6 md:hidden smooth-transition ${
          mobileMenuOpen ? "left-0" : "-left-full"
        }`}
      >
        <img src={logo} alt="logo" className="w-full h-14 object-contain" />
        <NavLinks handleClick={() => setMobileMenuOpen(false)} />
      </div>
    </>
  );
};

export default Sidebar;
