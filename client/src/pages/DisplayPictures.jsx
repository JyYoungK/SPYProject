import React from "react";
import { Error, Loader, PictureCard, PictureSearchBar } from "../components";
import { useGetRandomPhotosQuery } from "../redux/services/unsplashCore";
import dummyPictureJSON from "../assets/dummyPictureData.json"; //Read data from local json file

const DisplayPictures = () => {
  const { data, isFetching, error } = useGetRandomPhotosQuery();
  let pins;
  if (data) {
    pins = data;
  } else {
    pins = dummyPictureJSON.results;
  }

  if (isFetching) return <Loader title={`Searching Pictures...`} />;

  if (error) return <Error />;

  return (
    <div className="ml-5 flex flex-col">
      <PictureSearchBar />
      {data ? (
        <h2 className="font-bold text-3xl text-white text-left mt-4 mb-10">
          Here are some nice pictures for you
        </h2>
      ) : (
        <h2 className="font-bold text-3xl text-white text-left mt-4 mb-10">
          Sorry, API request call has reached the max amount. Displaying Car
          pictures instead.
        </h2>
      )}

      <div className="flex w-full h-full justify-center">
        <div className="columns-5 h-full max-w-7xl sm:columns-2 sm:max-w-xl">
          {pins.map((pin, i) => (
            <PictureCard key={i} pin={pin} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default DisplayPictures;
