import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { AiOutlinePicture, AiOutlineYoutube } from "react-icons/ai";
import { FiAward } from "react-icons/fi";
import { HiOutlineMenu, HiOutlineUserGroup } from "react-icons/hi";
import { IoGameControllerOutline } from "react-icons/io5";
import { MdSportsSoccer } from "react-icons/md";
import { RiCloseLine } from "react-icons/ri";
import { TbMovie } from "react-icons/tb";
import Divider from "@mui/material/Divider";
import { logo } from "../../assets";

const musiclinks = [
  // { name: "Around You", to: "/around-you", icon: HiOutlinePhotograph },
  { name: "Top Charts", to: "/", icon: FiAward },
  { name: "Top Artists", to: "/top-artists", icon: HiOutlineUserGroup },
];
const picturelinks = [
  { name: "Pictures", to: "/top-pictures", icon: AiOutlinePicture },
];
const videolinks = [
  { name: "Trending", to: "/top-videos", icon: AiOutlineYoutube },
  { name: "Movie", to: "/top-videos", icon: TbMovie },
  { name: "Sports", to: "/top-videos", icon: MdSportsSoccer },
  { name: "Gaming", to: "/top-videos", icon: IoGameControllerOutline },
];

const NavLinks = ({ handleClick }) => (
  <div className="mt-2">
    <div className="flex flex-row justify-start items-center my-4 text-2xl font-medium text-green-500">
      <b className="mr-1"> S </b> potify
    </div>
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
    <div className="flex flex-row justify-start items-center my-4 text-2xl font-medium text-pink-500">
      <b className="mr-1"> P </b> interest
    </div>
    {picturelinks.map((item) => (
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
    <div className="flex flex-row justify-start items-center my-4 text-2xl font-medium text-red-500">
      <b className="mr-1"> Y </b> outube
    </div>
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
