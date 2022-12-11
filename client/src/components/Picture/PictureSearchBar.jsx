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
    <form onSubmit={handleSubmit} autoComplete="off" className="p-2 ">
      <label htmlFor="search-field" className="sr-only">
        Search all pictures
      </label>
      <div className="flex flex-row justify-start items-center bg-gray-300 border-4 border-pink-600 rounded-3xl ">
        <FiSearch aria-hidden="true" className="w-5 h-5 ml-4 text-pink-600" />
        <input
          name="search-field"
          autoComplete="off"
          id="search-field"
          className="flex-1 bg-transparent border-none placeholder-pink-600 outline-none text-base text-pink-600 p-4"
          placeholder="Search on Pinterest"
          type="search"
          value={searchPicture}
          onChange={(e) => setSearchPicture(e.target.value)}
        />
      </div>
    </form>
  );
};

export default PictureSearchbar;
