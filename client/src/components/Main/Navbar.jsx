import React from "react";
import MusicSearchbar from "../Music/MusicSearchBar";
import PictureSearchbar from "../Picture/PictureSearchBar";
import VideoSearchbar from "../Video/VideoSearchBar";
const Navbar = ({ page }) => {
  console.log(page);
  return (
    <div className=" flex flex-row items-center text-white bg-black dark:bg-black body-font ">
      <div className="w-1/2 ">
        {page === "Music" ? (
          <MusicSearchbar />
        ) : page === "Picture" ? (
          <PictureSearchbar />
        ) : (
          <VideoSearchbar />
        )}
      </div>

      {/* <div className="flex flex-row items-center justify-end w-full">
        <div>Theme</div>
        <div>About</div>
      </div> */}
    </div>
  );
};

export default Navbar;
