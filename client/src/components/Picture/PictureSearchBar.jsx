import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FiSearch } from "react-icons/fi";

const PictureSearchbar = () => {
  const navigate = useNavigate();
  const [searchPicture, setSearchPicture] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page refresh
    navigate(`/searchPicture/${searchPicture}`);
  };

  return (
    <form
      onSubmit={handleSubmit}
      autoComplete="off"
      className="p-2 text-gray-400 focus-within:text-gray-600 "
    >
      <label htmlFor="search-field" className="sr-only">
        Search all pictures
      </label>
      <div className="flex flex-row justify-start items-center bg-gray-300 rounded-3xl">
        <FiSearch aria-hidden="true" className="w-5 h-5 ml-4" />
        <input
          name="search-field"
          autoComplete="off"
          id="search-field"
          className="flex-1 bg-transparent border-none placeholder-gray-500 outline-none text-base text-black p-4"
          placeholder="Search"
          type="search"
          value={searchPicture}
          onChange={(e) => setSearchPicture(e.target.value)}
        />
      </div>
    </form>
  );
};

export default PictureSearchbar;
