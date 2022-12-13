import React, { useState, useEffect } from "react";
import { Error, Loader, PictureCard } from "../components";
import { PictureDetails } from "./";
import { useGetRandomPhotosQuery } from "../utils/redux/services/unsplashCore";
import { dummyPictureData } from "../assets"; //Read data from local json file

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
    pins = dummyPictureData.results;
  } else if (error) {
    return <Error />;
  } else {
    pins = data;
  }

  return (
    <div className="md:mx-auto items-center flex flex-col ">
      {error?.status === 429 ? (
        <h2 className="font-bold text-xl text-white text-left mt-4 mb-10">
          Sorry, API request call has reached the max amount. Displaying random
          pictures instead.
        </h2>
      ) : null}
      <div className="hidden sm:block sticky top-0">
        {openModal && (
          <PictureDetails toggleModal={toggleModal} openPin={openPin} />
        )}
      </div>

      <div className="flex w-full h-full justify-center md:ml-2">
        <div className="h-full md:columns-5 ">
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
