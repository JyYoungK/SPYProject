import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  Error,
  Loader,
  MusicSearchBar,
  ArtistHeader,
  SongCard,
} from "../components";
import {
  useGetArtistDetailsQuery,
  useGetSongsBySearchQuery,
} from "../redux/services/shazamCore";

const ArtistDetails = () => {
  const { id: artistId } = useParams();
  const { activeSong, isPlaying } = useSelector((state) => state.player);
  const {
    data: artistData,
    isFetching: isFetchingArtistDetails,
    error,
  } = useGetArtistDetailsQuery(artistId);

  const { data, isFetching } = useGetSongsBySearchQuery(
    artistData?.data[0].attributes.name
  );

  const songs = data?.tracks?.hits.map((song) => song.track);
  if (isFetchingArtistDetails && isFetching)
    return <Loader title="Loading Artist Details" />;

  if (error) return <Error />;

  return (
    <div className="ml-5 flex flex-col">
      <MusicSearchBar />

      <ArtistHeader artistId={artistId} artistData={artistData?.data[0]} />

      <h2 className="ml-5 font-bold text-3xl text-white text-left mb-10">
        Other Songs By{" "}
        <span className="font-black">
          {artistData?.data[0].attributes.name}
        </span>
      </h2>

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
