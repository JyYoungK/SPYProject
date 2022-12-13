import React, { useState, useEffect } from "react";
import { Error, Loader, PictureCard } from "../components";
import { PictureDetails } from "./";
import { useGetRandomPhotosQuery } from "../utils/redux/services/unsplashCore";
import dummyPictureJSON from "../assets/dummyPictureData.json"; //Read data from local json file

const DisplayPictures = ({ setPage }) => {
  useEffect(() => {
    setPage("Picture");
  }, []);
  const { data, isFetching, error } = useGetRandomPhotosQuery();
  const [openModal, setOpenModal] = useState(false);
  const [openPin, setOpenPin] = useState();
  const toggleModal = () => {
    setOpenModal(!openModal);
  };

  if (isFetching) return <Loader title={`Searching Pictures...`} />;

  let pins;
  if (error?.status === 429) {
    pins = dummyPictureJSON.results;
  } else if (error) {
    return <Error />;
  } else {
    pins = data;
  }

  return (
    <div className="ml-5 flex flex-col ">
      {error?.status === 429 ? (
        <h2 className="font-bold text-3xl text-white text-left mt-4 mb-10">
          Sorry, API request call has reached the max amount. Displaying random
          pictures instead.
        </h2>
      ) : null}
      <div className="sticky relative top-0">
        {openModal && (
          <PictureDetails toggleModal={toggleModal} openPin={openPin} />
        )}
      </div>

      <div className="flex w-full h-full justify-center">
        <div className="h-full 3xl:max-w-7xl 3xl:columns-5 md:max-w-4xl md:columns-3 sm:max-w-xl sm:columns-2  ">
          {pins.map((pin, i) => (
            <PictureCard
              key={i}
              pin={pin}
              openModal={toggleModal}
              setOpenPin={setOpenPin}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default DisplayPictures;
