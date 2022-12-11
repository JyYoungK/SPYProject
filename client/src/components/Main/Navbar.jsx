import React from "react";
import Toggle from "./toggle";
import MusicSearchbar from "../Music/MusicSearchBar";
import PictureSearchbar from "../Picture/PictureSearchBar";
const Navbar = ({ page }) => {
  console.log(page);
  return (
    <header className="ml-5 mt-7 flex flex-row items-center text-white bg-black dark:bg-black body-font ">
      <div className="w-full">
        {page === "Music" ? <MusicSearchbar /> : <PictureSearchbar />}
      </div>

      <div className="flex flex-row items-center justify-end w-full">
        <div>Theme</div>
        <div>About</div>
      </div>
    </header>
  );
};

export default Navbar;
