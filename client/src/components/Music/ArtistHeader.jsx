import React from "react";
import Divider from "@mui/material/Divider";

const ArtistHeader = ({ artistId, artistData }) => {
  let artistBio = artistData?.attributes.artistBio;
  artistBio = artistBio
    ?.replaceAll("<i>", "")
    .replaceAll("</i>", "")
    .replaceAll("<I>", "")
    .replaceAll("</I>", "");
  return (
    <div className="relative w-full flex flex-col">
      <div className="mb-5 inset-0 flex items-center">
        <img
          alt="profile"
          src={
            artistId
              ? artistData?.attributes?.artwork?.url
                  .replace("{w}", "500")
                  .replace("{h}", "500")
              : "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
          }
          className="sm:w-48 w-28 sm:h-48 h-28 rounded-full object-cover border-2 shadow-xl shadow-black"
        />

        <div className="ml-5">
          {/* Artist Name */}
          <p className="font-bold sm:text-3xl text-xl text-white">
            {artistData ? artistData?.attributes.name : "Unknown"}
          </p>
          {/* Genre Type */}
          <p className="sm:text-base md:text-xl text-gray-400 mt-2">
            Genre:{" "}
            {artistData?.attributes.genreNames[0]
              ? artistData?.attributes.genreNames[0]
              : "Unknown"}
          </p>
          <p className="sm:text-base md:text-xl text-gray-400 mt-2">
            Born:{" "}
            {artistData?.attributes.bornOrFormed
              ? artistData?.attributes.bornOrFormed
              : "Unknown"}
          </p>
          <p className="sm:text-base md:text-xl text-gray-400 mt-2">
            Origin:{" "}
            {artistData?.attributes.origin
              ? artistData?.attributes.origin
              : "Unknown"}
          </p>
        </div>
      </div>
      <Divider className="bg-white" />

      <p className="mt-5 indent-10 sm:text-base md:text-2xl  text-white mt-2">
        {artistBio ? artistBio : "No Bio"}
      </p>
      <div className="w-full sm:h-44 h-24" />
    </div>
  );
};
export default ArtistHeader;
