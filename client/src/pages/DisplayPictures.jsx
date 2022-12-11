import React, { useState } from "react";
import { Error, Loader, PictureCard, PictureSearchBar } from "../components";
import { PictureDetails } from "./";
import { useGetRandomPhotosQuery } from "../redux/services/unsplashCore";
import dummyPictureJSON from "../assets/dummyPictureData.json"; //Read data from local json file

const DisplayPictures = ({ setPage }) => {
  setPage("Picture");
  const { data, isFetching, error } = useGetRandomPhotosQuery();
  const [openModal, setOpenModal] = useState(false);
  const [openPin, setOpenPin] = useState();
  const toggleModal = () => {
    setOpenModal(!openModal);
  };

  let pins;
  if (data) {
    pins = data;
  } else {
    pins = dummyPictureJSON.results;
  }

  if (isFetching) return <Loader title={`Searching Pictures...`} />;

  if (error) return <Error />;

  return (
    <div className="ml-5 flex flex-col ">
      {/* <PictureSearchBar className="fixed bottom-0 left-0 w-full" /> */}

      {openModal && (
        <PictureDetails toggleModal={toggleModal} openPin={openPin} />
      )}

      {data ? (
        <h2 className="font-bold text-3xl text-white text-left mt-4 mb-10"></h2>
      ) : (
        <h2 className="font-bold text-3xl text-white text-left mt-4 mb-10">
          Sorry, API request call has reached the max amount. Displaying Car
          pictures instead.
        </h2>
      )}

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
