import React, { useEffect } from "react";
import { ArtistCard, Error, Loader } from "../components";
import { useGetTopChartsQuery } from "../redux/services/shazamCore";
import dummyTopArtistJSON from "../assets/dummyTopArtistData.json"; //Read data from local json file

const TopArtists = ({ setPage }) => {
  useEffect(() => {
    setPage("Music");
  }, []);
  const { data, isFetching, error } = useGetTopChartsQuery();

  console.log(data);

  let workingData;

  if (error?.status === 429) {
    workingData = dummyTopArtistJSON;
  } else if (error) {
    return <Error />;
  } else {
    workingData = data;
  }

  if (isFetching) return <Loader title="Loading Artists..." />;

  return (
    <div className="ml-5 flex flex-col">
      {error?.status === 429 ? (
        <h2 className="font-bold text-xl text-white text-left mt-4 mb-10">
          Sorry, API request call has reached the max amount. Displaying random
          artists instead.
        </h2>
      ) : (
        <h2 className="font-bold text-3xl text-white text-left mt-4 mb-10">
          Top Artists
        </h2>
      )}

      <div className="flex flex-wrap sm:justify-start justify-center gap-8">
        {workingData?.map((track) => (
          <ArtistCard key={track.key} track={track} />
        ))}
      </div>
    </div>
  );
};

export default TopArtists;
