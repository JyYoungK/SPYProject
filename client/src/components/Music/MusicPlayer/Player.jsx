import React, { useRef, useEffect } from "react";

const Player = ({
  activeSong,
  isPlaying,
  volume,
  seekTime,
  onEnded,
  onTimeUpdate,
  onLoadedData,
  repeat,
}) => {
  const ref = useRef(null);
  console.log(ref);
  // eslint-disable-next-line no-unused-expressions
  if (ref.current) {
    if (isPlaying) {
      ref.current.play();
    } else {
      ref.current.pause();
    }
  }

  useEffect(() => {
    ref?.current.volume = volume;
  }, [volume]);
  // updates audio element only on seekTime change (and not on each rerender):
  useEffect(() => {
    ref?.current.currentTime = seekTime;
  }, [seekTime]);

  return (
    <div>
      {activeSong?.hub?.actions && (
        <audio
          src={activeSong?.hub?.actions[1]?.uri}
          ref={ref}
          loop={repeat}
          onEnded={onEnded}
          onTimeUpdate={onTimeUpdate}
          onLoadedData={onLoadedData}
        />
      )}
    </div>
  );
};

export default Player;
