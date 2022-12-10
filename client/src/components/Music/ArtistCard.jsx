import React from "react";
import { useNavigate } from "react-router-dom";

const ArtistCard = ({ track }) => {
  const navigate = useNavigate();
  return (
    <div
      className="mt-6 flex flex-col h-[200px] w-[200px] p-4 bg-white/5 bg-opacity-80 backdrop-blur-sm animate-slideup rounded-lg cursor-pointer"
      onClick={() => navigate(`/artists/${track?.artists[0].adamid}`)}
    >
      <div className="relative w-full h-56 group">
        <img
          alt="song_img"
          src={track?.images?.coverart}
          className="w-full h-full rounded-lg"
        />
      </div>
      <div className="mt-4 flex flex-col">
        <p className="mt-4 font-semibold text-lg text-white truncate">
          {track?.subtitle}
        </p>
      </div>
    </div>
  );
};

export default ArtistCard;
