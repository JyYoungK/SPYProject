import React from "react";
import { ArtistCard, Error, Loader, MusicSearchBar } from "../components";
import { useGetTopChartsQuery } from "../redux/services/shazamCore";

const TopArtists = ({ setPage }) => {
  setPage("Music");
  const { data, isFetching, error } = useGetTopChartsQuery();

  if (isFetching) return <Loader title="Loading Artists..." />;

  if (error) return <Error />;

  return (
    <div className="ml-5 flex flex-col">
      <MusicSearchBar />
      <h2 className="font-bold text-3xl text-white text-left mt-4 mb-10">
        Top Artists
      </h2>

      <div className="flex flex-wrap sm:justify-start justify-center gap-8">
        {data?.map((track) => (
          <ArtistCard key={track.key} track={track} />
        ))}
      </div>
    </div>
  );
};

export default TopArtists;
