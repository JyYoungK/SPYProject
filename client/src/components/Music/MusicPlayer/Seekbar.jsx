import React from "react";

const Seekbar = ({ value, min, max, onInput, setSeekTime, appTime }) => {
  // converts the time to format 0:00
  const getTime = (time) =>
    `${Math.floor(time / 60)}:${`0${Math.floor(time % 60)}`.slice(-2)}`;

  return (
    <div className="flex items-center justify-around">
      {/* <button
        type="button"
        onClick={() => setSeekTime(appTime - 5)}
        className="hidden lg:mr-1 lg:block lg:text-2xl lg:pb-3 text-white"
      >
        -
      </button> */}
      <p className="text-white pt-2">{value === 0 ? "0:00" : getTime(value)}</p>
      <input
        type="range"
        step="any"
        value={value}
        min={min}
        max={max}
        onInput={onInput}
        className="w-full h-1 mx-2"
      />
      <p className="text-white pt-2">{max === 0 ? "0:00" : getTime(max)}</p>
      {/* <button
        type="button"
        onClick={() => setSeekTime(appTime + 5)}
        className="hidden lg:ml-1 lg:block lg:text-2xl lg:pb-3 text-white"
      >
        +
      </button> */}
    </div>
  );
};

export default Seekbar;
