import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FiSearch } from "react-icons/fi";

const VideoSearchbar = () => {
  const navigate = useNavigate();
  const [searchVideo, setSearchVideo] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page refresh
    navigate(`/search/${searchVideo}`); //VideoDetails
  };

  return (
    <form onSubmit={handleSubmit} autoComplete="off" className="p-2 ">
      <label htmlFor="search-field" className="sr-only">
        Search all files
      </label>
      <div className="flex flex-row justify-start items-center bg-gray-300 border-4 border-red-600 rounded-3xl">
        <FiSearch aria-hidden="true" className="w-5 h-5 ml-4 text-red-600" />
        <input
          name="search-field"
          autoComplete="off"
          id="search-field"
          className="flex-1 bg-transparent border-none placeholder-red-600 outline-none text-base text-red-600 p-4"
          placeholder="Search on Youtube"
          type="search"
          value={searchVideo}
          onChange={(e) => setSearchVideo(e.target.value)}
        />
      </div>
    </form>
  );
};

export default VideoSearchbar;
