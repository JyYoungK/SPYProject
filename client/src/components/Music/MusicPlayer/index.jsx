import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  nextSong,
  prevSong,
  playPause,
  setActiveSong,
} from "../../../utils/redux/features/playerSlice";
import Controls from "./Controls";
import Player from "./Player";
import Seekbar from "./Seekbar";
import Track from "./Track";
import VolumeBar from "./VolumeBar";
import AddIcon from "@mui/icons-material/Add";
import MinimizeIcon from "@mui/icons-material/Minimize";
import CloseIcon from "@mui/icons-material/Close";

const MusicPlayer = () => {
  const { activeSong, currentSongs, currentIndex, isActive, isPlaying } =
    useSelector((state) => state.player);
  const [musicPlayerMinimized, setMusicPlayerMinimized] = useState(false);
  const [duration, setDuration] = useState(0);
  const [seekTime, setSeekTime] = useState(0);
  const [appTime, setAppTime] = useState(0);
  const [volume, setVolume] = useState(0.3);
  const [repeat, setRepeat] = useState(false);
  const [shuffle, setShuffle] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    if (currentSongs?.length) dispatch(playPause(true));
  }, [currentIndex]);

  const closeMusicPlayer = () => {
    dispatch(setActiveSong({})); // Reset active song
  };

  const handlePlayPause = () => {
    if (!isActive) return;

    if (isPlaying) {
      dispatch(playPause(false));
    } else {
      dispatch(playPause(true));
    }
  };

  const handleNextSong = () => {
    dispatch(playPause(false));

    if (!shuffle) {
      dispatch(nextSong((currentIndex + 1) % currentSongs?.length));
    } else {
      dispatch(nextSong(Math.floor(Math.random() * currentSongs?.length)));
    }
  };

  const handlePrevSong = () => {
    if (currentIndex === 0) {
      dispatch(prevSong(currentSongs?.length - 1));
    } else if (shuffle) {
      dispatch(prevSong(Math.floor(Math.random() * currentSongs?.length)));
    } else {
      dispatch(prevSong(currentIndex - 1));
    }
  };

  return (
    <div>
      {!musicPlayerMinimized && (
        <div className="px-8 xl:ml-5 ml-0 pt-2 xl:mb-0 flex-1 xl:max-w-[340px]  bg-black  border-4 border-red-600">
          <div className="flex-col items-center justify-center">
            <div className="absolute top-4 right-2 ">
              <button className=" text-white ">
                <MinimizeIcon onClick={() => setMusicPlayerMinimized(true)} />
                <CloseIcon onClick={closeMusicPlayer} />
              </button>
            </div>
            <Track
              isPlaying={isPlaying}
              isActive={isActive}
              activeSong={activeSong}
            />
            <Controls
              isPlaying={isPlaying}
              isActive={isActive}
              repeat={repeat}
              setRepeat={setRepeat}
              shuffle={shuffle}
              setShuffle={setShuffle}
              currentSongs={currentSongs}
              handlePlayPause={handlePlayPause}
              handlePrevSong={handlePrevSong}
              handleNextSong={handleNextSong}
            />
            <Seekbar
              value={appTime}
              min="0"
              max={duration}
              onInput={(event) => setSeekTime(event.target.value)}
              setSeekTime={setSeekTime}
              appTime={appTime}
            />
            <VolumeBar
              value={volume}
              min="0"
              max="1"
              onChange={(event) => setVolume(event.target.value)}
              setVolume={setVolume}
            />
          </div>
          <div></div>
        </div>
      )}
      {musicPlayerMinimized && (
        <div className="flex flex-row justify-between px-1 xl:ml-5 xl:mb-0 xl:max-w-[340px] bg-black border-4 border-red-600">
          <div className="flex">
            <p className="px-2 pt-3 truncate text-white font-bold text-lg">
              {activeSong?.title
                ? activeSong?.title.length > 20
                  ? activeSong?.title.slice(0, 20) + "..."
                  : activeSong?.title
                : "No active Song"}{" "}
            </p>
          </div>
          <div className="flex ">
            <button className=" text-white ">
              <AddIcon onClick={() => setMusicPlayerMinimized(false)} />
              <CloseIcon onClick={closeMusicPlayer} />
            </button>
          </div>
        </div>
      )}
      <Player
        activeSong={activeSong}
        volume={volume}
        isPlaying={isPlaying}
        seekTime={seekTime}
        repeat={repeat}
        currentIndex={currentIndex}
        onEnded={handleNextSong}
        onTimeUpdate={(event) => setAppTime(event.target.currentTime)}
        onLoadedData={(event) => setDuration(event.target.duration)}
      />
    </div>
  );
};

export default MusicPlayer;
