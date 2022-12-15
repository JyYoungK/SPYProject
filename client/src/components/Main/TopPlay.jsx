import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  playPause,
  setActiveSong,
} from "../../utils/redux/features/playerSlice";
import TopChartCard from "../Music/TopChartCard";
import { useGetTopChartsQuery } from "../../utils/redux/services/shazamCore";
import { dummyTopArtistData } from "../../assets"; //Read data from local json file

const TopPlay = () => {
  const dispatch = useDispatch();
  const { activeSong, isPlaying } = useSelector((state) => state.player);
  const [topChartsClosed, setTopChartsClosed] = useState(false);
  const { data, error } = useGetTopChartsQuery();
  const divRef = useRef(null);

  let workingData;

  if (error?.status === 429) {
    workingData = dummyTopArtistData?.slice(0, 5);
  } else {
    workingData = data?.slice(0, 5); // Only show top 5 songs
  }

  const closeTopCharts = () => {
    setTopChartsClosed(true);
  };

  const handlePauseClick = () => {
    dispatch(playPause(false));
  };

  const handlePlayClick = (song, i) => {
    dispatch(setActiveSong({ song, data, i }));
    dispatch(playPause(true));
  };

  return (
    <div>
      {!topChartsClosed && (
        <div
          ref={divRef}
          className="px-2 xl:ml-5 ml-0 xl:mb-0 mb-6 flex-1 xl:max-w-[340px] max-w-full flex flex-col bg-black border-x-red-500 border-l-4 border-r-4 border-b-red-500 border-b-4"
        >
          <div className="w-full flex flex-col">
            <div className="flex flex-row justify-between items-center">
              <h2 className="pl-1 text-white font-bold text-2xl">Top Charts</h2>
              <p
                className="text-gray-300 text-base cursor-pointer"
                onClick={closeTopCharts}
              >
                Hide for now
              </p>
              {/* <Link to="/top-charts">
            <p className="text-gray-300 text-base cursor-pointer">See more</p>
          </Link> */}
            </div>

            <div className="mt-4 flex flex-col gap-1">
              {workingData?.map((song, i) => (
                <TopChartCard
                  key={song.key}
                  song={song}
                  i={i}
                  isPlaying={isPlaying}
                  activeSong={activeSong}
                  handlePauseClick={handlePauseClick}
                  handlePlayClick={() => handlePlayClick(song, i)}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TopPlay;
