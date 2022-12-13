import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Error, Loader, SongCard } from "../components";
import { useGetSongsBySearchQuery } from "../utils/redux/services/shazamCore";
import dummyArtistDetailJSON from "../assets/dummyArtistDetail.json"; //Read data from local json file

const SearchMusic = ({ setPage }) => {
  useEffect(() => {
    setPage("Music");
  }, []);
  const { searchTerm } = useParams();
  const { activeSong, isPlaying } = useSelector((state) => state.player);
  const { data, isFetching, error } = useGetSongsBySearchQuery(searchTerm);

  if (isFetching) return <Loader title={`Searching ${searchTerm}...`} />;

  let songs;

  if (error?.status === 429) {
    songs = dummyArtistDetailJSON.tracks.hits.map((song) => song.track);
  } else if (error) {
    return <Error />;
  } else {
    songs = data?.tracks?.hits.map((song) => song.track);
  }

  return (
    <div className="ml-5 flex flex-col">
      {error?.status === 429 ? (
        <h2 className="font-bold text-xl text-white text-left mt-4 mb-10">
          Sorry, API request call has reached the max amount. Displaying details
          of Lady Gaga instead.
        </h2>
      ) : (
        <h2 className="font-bold text-3xl text-white text-left mt-4 mb-10">
          Showing results for <span className="font-black">{searchTerm}</span>
        </h2>
      )}

      <div className="flex flex-wrap sm:justify-start justify-center gap-8">
        {songs.map((song, i) => (
          <SongCard
            key={song.key}
            song={song}
            isPlaying={isPlaying}
            activeSong={activeSong}
            data={data}
            i={i}
          />
        ))}
      </div>
    </div>
  );
};

export default SearchMusic;
