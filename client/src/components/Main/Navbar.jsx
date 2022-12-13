import React from "react";
import MusicSearchbar from "../Music/MusicSearchBar";
import PictureSearchbar from "../Picture/PictureSearchBar";
import VideoSearchbar from "../Video/VideoSearchBar";
import NoSearchbar from "./NoSearchBar";
import { spring, summer, autumn, winter } from "../../assets";
import { MdDarkMode, MdOutlineDarkMode } from "react-icons/md";
const Navbar = ({
  page,
  currentSeason,
  handleSetSeason,
  currentTheme,
  handleSetTheme,
}) => {
  const handleSeasonClick = () => {
    handleSetSeason(currentSeason + 1);
    if (currentSeason === 4) {
      handleSetSeason(1);
    }
  };
  const handleThemeClick = () => {
    console.log(currentTheme);
    handleSetTheme(currentTheme + 1);
    if (currentTheme === 2) {
      handleSetTheme(1);
    }
  };

  return (
    <div className="flex flex-row items-center body-font text-white bg-black">
      <div className="w-1/2 ">
        {page === "Music" ? (
          <MusicSearchbar />
        ) : page === "Picture" ? (
          <PictureSearchbar />
        ) : page === "Video" ? (
          <VideoSearchbar />
        ) : (
          <NoSearchbar />
        )}
      </div>
      <div className="pr-3 w-1/2 flex flex-row justify-end">
        {currentSeason == 1 && (
          <img
            src={spring}
            alt="Spring"
            className=" w-10 h-10 object-contain"
            onClick={handleSeasonClick}
          />
        )}
        {currentSeason == 2 && (
          <img
            src={summer}
            alt="Summer"
            className="w-10 h-10 object-contain"
            onClick={handleSeasonClick}
          />
        )}
        {currentSeason == 3 && (
          <img
            src={autumn}
            alt="Autumn"
            className="w-10 h-10 object-contain"
            onClick={handleSeasonClick}
          />
        )}
        {currentSeason == 4 && (
          <img
            src={winter}
            alt="Winter"
            className="w-10 h-10 object-contain"
            onClick={handleSeasonClick}
          />
        )}
        {currentTheme == 1 && (
          <MdDarkMode
            alt="Day"
            className="w-10 h-10 object-contain "
            onClick={handleThemeClick}
          />
        )}
        {currentTheme == 2 && (
          <MdOutlineDarkMode
            alt="Night"
            className="w-10 h-10 object-contain"
            onClick={handleThemeClick}
          />
        )}
      </div>
    </div>
  );
};

export default Navbar;
