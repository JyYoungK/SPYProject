import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FiSearch } from "react-icons/fi";

const MusicSearchbar = () => {
  const navigate = useNavigate();
  const [searchMusic, setSearchMusic] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page refresh
    navigate(`/searchMusic/${searchMusic}`); //SongDetails
  };

  return (
    <form onSubmit={handleSubmit} autoComplete="off" className="p-2 ">
      <label htmlFor="search-field" className="sr-only">
        Search all files
      </label>
      <div className="flex flex-row justify-start items-center bg-gray-300 border-4 border-green-600 rounded-3xl">
        <FiSearch aria-hidden="true" className="w-5 h-5 ml-4 text-green-600" />
        <input
          name="search-field"
          autoComplete="off"
          id="search-field"
          className="flex-1 bg-transparent border-none placeholder-green-600 outline-none text-base text-green-600 p-4"
          placeholder="Search on Spotify"
          type="search"
          value={searchMusic}
          onChange={(e) => setSearchMusic(e.target.value)}
        />
      </div>
    </form>
  );
};

export default MusicSearchbar;
