import React, { useEffect } from "react";
import { Error, Loader } from "../components";
import { useGetPicturesBySearchQuery } from "../redux/services/unsplashCore";

import { PictureSearchBar } from "../components";

const DisplayPictures = () => {
  const [pins, setPins] = React.useState([]);
  // const { data, isFetching, error } = useGetPicturesBySearchQuery(searchTerm);

  const getNewPins = () => {
    let promises = [];
    let pinData = [];
    let pins = [
      "ocean",
      "nature",
      "dogs",
      "cats",
      "cars",
      "flowers",
      "mountains",
      "beaches",
      "sunsets",
      "sunrises",
      "lakes",
      "rivers",
      "waterfalls",
      "snow",
      "rain",
      "clouds",
      "birds",
      "butterflies",
      "insects",
      "trees",
      "grass",
      "deserts",
      "canyons",
      "forests",
      "jungles",
      "mountains",
      "hills",
      "valleys",
      "caves",
      "rocks",
      "ice",
      "snow",
      "rain",
      "clouds",
      "birds",
      "butterflies",
      "insects",
      "trees",
      "grass",
      "deserts",
      "canyons",
      "forests",
      "jungles",
      "mountains",
      "hills",
      "valleys",
      "caves",
      "rocks",
      "ice",
      "snow",
      "rain",
      "clouds",
      "birds",
      "butterflies",
      "insects",
      "trees",
      "grass",
      "deserts",
      "canyons",
      "forests",
      "jungles",
      "mountains",
      "hills",
      "valleys",
      "caves",
      "rocks",
      "ice",
      "snow",
      "rain",
      "clouds",
      "birds",
      "butterflies",
      "insects",
      "trees",
      "grass",
      "deserts",
      "canyons",
      "forests",
      "jungles",
      "mountains",
      "hills",
      "valleys",
      "caves",
      "rocks",
      "ice",
      "snow",
      "rain",
      "clouds",
      "birds",
      "butterflies",
      "insects",
      "trees",
      "grass",
      "deserts",
      "canyons",
      "forests",
      "jungles",
      "mountains",
      "hills",
      "valleys",
      "caves",
      "rocks",
      "ice",
      "snow",
      "rain",
      "clouds",
      "birds",
      "butterflies",
      "insects",
      "trees",
      "grass",
      "deserts",
      "canyons",
      "forests",
      "jungles",
      "mountains",
      "hills",
      "valleys",
      "caves",
      "rocks",
      "ice",
      "snow",
      "rain",
      "clouds",
      "birds",
      "butterflies",
      "insects",
      "trees",
      "grass",
      "deserts",
      "canyons",
      "forests",
      "jungles",
      "mountains",
    ];

    // pins.forEach((pin) => {
    //   promises.push(
    //     useGetPicturesBySearchQuery(pin).then((response) => {
    //       console.log(response);
    //     })
    //   );
    // });
  };
  // useEffect(() => {
  //   //useEffect is a hook that runs once when the component is mounted
  // });

  return (
    <div className="ml-5 flex flex-col">
      <PictureSearchBar />
      <h2 className="font-bold text-3xl text-white text-left mt-4 mb-10">
        Top Charts
      </h2>
      <div className="flex items-center box-sizing-border cursor-pointer w-236">
        <img
          className="flex w-full cursor-zoom-in rounded-lg shadow-md transition duration-300 ease-in-out object-fit-cover"
          src="https://images.unsplash.com/photo-1670348282399-5407569f9019?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80"
          alt="image"
        />
        <img
          className="flex w-full cursor-zoom-in rounded-lg shadow-md transition duration-300 ease-in-out object-fit-cover"
          src="https://images.unsplash.com/photo-1670348282399-5407569f9019?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80"
          alt="image"
        />
      </div>
      {/* <div className="flex flex-wrap sm:justify-start justify-center gap-8">
          {data.map((song, i) => (
            <SongCard
              key={song.key}
              song={song}
              isPlaying={isPlaying}
              activeSong={activeSong}
              data={data}
              i={i}
            />
          ))}
        </div> */}
    </div>
  );
};

export default DisplayPictures;
