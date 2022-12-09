import React from "react";
import Toggle from "./toggle";

const Navbar = () => {
  return (
    <header className="text-white bg-black dark:bg-black body-font ">
      <div className="flex lg:container flex-col flex-wrap p-5 mx-auto md:items-center md:flex-row ">
        <div className="flex">
          <a
            href="javascript.void(0)"
            className="flex items-center w-40 mb-4 font-medium text-white title-font md:mb-0 text-right"
          >
            Navbar
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
