import React from "react";
import { FaSearchMinus } from "react-icons/fa";

const NoSearchbar = () => {
  return (
    <form autoComplete="off" className="p-2 ">
      <label htmlFor="search-field" className="sr-only">
        Search all files
      </label>
      <div className="flex flex-row justify-start items-center bg-gray-300 border-4 border-black rounded-3xl">
        <FaSearchMinus aria-hidden="true" className="w-5 h-5 ml-4 text-black" />
        <input
          name="search-field"
          autoComplete="off"
          id="search-field"
          className="flex-1 bg-transparent border-none placeholder-black outline-none text-base text-black md:p-4 p-2"
          placeholder="Nothing to search here"
          disabled={true}
        />
      </div>
    </form>
  );
};

export default NoSearchbar;
