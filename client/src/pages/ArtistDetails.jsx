import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Error, Loader, ArtistHeader, SongCard } from "../components";
import {
  useGetArtistDetailsQuery,
  useGetSongsBySearchQuery,
} from "../utils/redux/services/shazamCore";
import dummyArtistDetailJSON from "../assets/dummyArtistDetail.json"; //Read data from local json file
import dummyArtistDataJSON from "../assets/dummyArtistData.json"; //Read data from local json file

const ArtistDetails = ({ setPage }) => {
  useEffect(() => {
    setPage("Music");
  }, []);
  const { artistid: artistId } = useParams();
  const { activeSong, isPlaying } = useSelector((state) => state.player);
  const {
    data: artistData,
    isFetching: isFetchingArtistDetails,
    error,
  } = useGetArtistDetailsQuery(artistId);

  const { data, isFetching } = useGetSongsBySearchQuery(
    artistData?.data[0].attributes.name
  );

  if (isFetchingArtistDetails && isFetching)
    return <Loader title="Loading Artist Details" />;

  let working_aristData;
  let songs;

  if (error?.status === 429) {
    working_aristData = dummyArtistDataJSON;
    songs = dummyArtistDetailJSON.tracks.hits.map((song) => song.track);
  } else if (error) {
    return <Error />;
  } else {
    working_aristData = artistData?.data[0];
    songs = data?.tracks?.hits.map((song) => song.track);
  }

  return (
    <div className="ml-5 flex flex-col">
      {error?.status === 429 ? (
        <h2 className="font-bold text-xl text-white text-left mt-4 mb-10">
          Sorry, API request call has reached the max amount. Displaying details
          of Lady Gaga instead.
        </h2>
      ) : null}

      <ArtistHeader artistId={artistId} artistData={working_aristData} />

      {error?.status === 429 ? (
        <h2 className="font-bold text-xl text-white text-left mt-4 mb-10">
          Other Songs By Lady Gaga
        </h2>
      ) : (
        <h2 className="ml-5 font-bold text-3xl text-white text-left mb-10">
          Other Songs By{" "}
          <span className="font-black">
            {artistData?.data[0].attributes.name}
          </span>
        </h2>
      )}

      <div className="ml-5 flex flex-wrap sm:justify-start justify-center gap-8">
        {songs?.map((song, i) => (
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

export default ArtistDetails;
