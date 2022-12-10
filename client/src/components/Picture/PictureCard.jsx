import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

const PictureCard = ({ pin }) => {
  //   const dispatch = useDispatch();

  //   const handlePauseClick = () => {
  //     dispatch(playPause(false));
  //   };

  //   const handlePlayClick = () => {
  //     dispatch(setActiveSong({ song, data, i }));
  //     dispatch(playPause(true));
  //   };

  return (
    <div className="mt-6 inline-flex p-2 animate-slideup">
      <div className="flex items-center box-border cursor-pointer w-60">
        <img
          className="flex w-full cursor-zoom-in rounded-2xl object-cover"
          src={pin.urls?.regular}
          alt="pin"
        />
      </div>
    </div>
  );
};

export default PictureCard;
