import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { MusicHeader, Error, Loader, RelatedSongs } from "../components";
import { setActiveSong, playPause } from "../utils/redux/features/playerSlice";
import {
  useGetSongDetailsQuery,
  useGetSongRelatedQuery,
} from "../utils/redux/services/shazam/shazamCore";
import { dummySongDetail, dummyRelatedSongData } from "../assets"; //Read data from local json file

const SongDetails = ({ setPage }) => {
  useEffect(() => {
    setPage("Music");
  }, []);
  const dispatch = useDispatch();
  const { songid, id: artistId } = useParams();
  const { activeSong, isPlaying } = useSelector((state) => state.player);
  const {
    data,
    isFetching: isFetchinRelatedSongs,
    error,
  } = useGetSongRelatedQuery({ songid });
  const { data: songData, isFetching: isFetchingSongDetails } =
    useGetSongDetailsQuery({ songid });

  if (isFetchingSongDetails && isFetchinRelatedSongs)
    return <Loader title="Loading Song Details" />;

  let working_songData;
  let working_relatedSongs;

  if (error?.status === 429) {
    working_songData = dummySongDetail;
    working_relatedSongs = dummyRelatedSongData;
  } else if (error) {
    return <Error />;
  } else {
    working_songData = songData;
    working_relatedSongs = data;
  }

  const handlePauseClick = () => {
    dispatch(playPause(false));
  };

  const handlePlayClick = (song, i) => {
    dispatch(setActiveSong({ song, data, i }));
    dispatch(playPause(true));
  };

  return (
    <div className="ml-5 flex flex-col">
      {error?.status === 429 ? (
        <h2 className="font-bold text-xl text-white text-left mt-4 mb-10">
          Sorry, API request call has reached the max amount. Displaying Bloody
          Mary by Lady Gaga instead.
        </h2>
      ) : null}

      <MusicHeader artistId={artistId} songData={working_songData} />

      <div className="mb-10">
        <h2 className="text-white text-3xl font-bold">Lyrics:</h2>

        <div className="mt-5">
          {working_songData?.sections[1].type === "LYRICS" ? (
            working_songData?.sections[1]?.text.map((line, i) => (
              <p
                key={`lyrics-${line}-${i}`}
                className="text-gray-400 text-base my-1"
              >
                {line}
              </p>
            ))
          ) : (
            <p className="text-gray-400 text-base my-1">
              Sorry, No lyrics found!
            </p>
          )}
        </div>
      </div>

      <RelatedSongs
        data={working_relatedSongs}
        artistId={artistId}
        isPlaying={isPlaying}
        activeSong={activeSong}
        handlePauseClick={handlePauseClick}
        handlePlayClick={handlePlayClick}
      />
    </div>
  );
};

export default SongDetails;
