import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
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
  { name: "Top Charts", to: "/top-charts", icon: FiAward },
  { name: "Top Artists", to: "/top-artists", icon: HiOutlineUserGroup },
];
const picturelinks = [
  { name: "Pictures", to: "/pictures", icon: AiOutlinePicture },
];
const videolinks = [
  { name: "Trending", to: "/top-videos", icon: AiOutlineYoutube },
  { name: "Movie", to: "/movie-videos", icon: TbMovie },
  { name: "Sports", to: "/sports-videos", icon: MdSportsSoccer },
  { name: "Gaming", to: "/gaming-videos", icon: IoGameControllerOutline },
];

const NavLinks = ({ handleClick }) => {
  return (
    <div>
      <div className="flex flex-row justify-start items-center text-2xl font-medium text-green-500">
        <b className="text-3xl"> S </b> potify
      </div>
      {musiclinks.map((item) => (
        <NavLink
          style={({ isActive }) => ({
            background: isActive ? "#50C878" : "",
          })}
          key={item.name}
          to={item.to}
          className={`flex flex-row justify-start items-center my-8 text-md font-black text-white  `}
          onClick={() => handleClick && handleClick()} //If handleClick is passed, call it
        >
          <item.icon className="w-6 h-6 mr-2 " />
          {item.name}
        </NavLink>
      ))}
      <Divider className="bg-white" />
      <div className="flex flex-row justify-start items-center my-3 text-2xl font-medium text-pink-500">
        <b className="text-3xl"> P </b> interest
      </div>
      {picturelinks.map((item) => (
        <NavLink
          style={({ isActive }) => ({
            background: isActive ? "#C64B8C" : "",
          })}
          key={item.name}
          to={item.to}
          className={`flex flex-row justify-start items-center my-8 text-md font-black text-white  `}
          onClick={() => handleClick && handleClick()} //If handleClick is passed, call it
        >
          <item.icon className="w-6 h-6 mr-2 " />
          {item.name}
        </NavLink>
      ))}
      <Divider className="bg-white" />
      <div className="flex flex-row justify-start items-center my-3 text-2xl font-medium text-red-500">
        <b className="text-3xl"> Y </b> outube
      </div>
      {videolinks.map((item) => (
        <NavLink
          style={({ isActive }) => ({
            background: isActive ? "#FE3939" : "",
          })}
          key={item.name}
          to={item.to}
          className={`flex flex-row justify-start items-center my-8 text-md font-black text-white  `}
          onClick={() => handleClick && handleClick()} //If handleClick is passed, call it
        >
          <item.icon className="w-6 h-6 mr-2 " />
          {item.name}
        </NavLink>
      ))}
    </div>
  );
};

const Sidebar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <div className="md:flex hidden flex-col w-[180px] px-4 bg-[#191624]">
        <Link to="/">
          <img src={logo} alt="logo" className="w-full h-20 object-contain" />
        </Link>
        <NavLinks />
      </div>

      {/* Mobile sidebar Burger Menu */}
      <div className="absolute md:hidden block mt-2 top-6 right-3">
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
        className={`absolute top-0 h-full w-2/3 bg-gradient-to-tl py-5 from-white/10 to-[#483D8B] backdrop-blur-lg z-10 p-6 md:hidden smooth-transition ${
          mobileMenuOpen ? "left-0" : "-left-full"
        }`}
      >
        <NavLinks handleClick={() => setMobileMenuOpen(false)} />
      </div>
    </>
  );
};

export default Sidebar;
