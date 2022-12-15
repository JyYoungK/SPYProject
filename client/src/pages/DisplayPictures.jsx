import React, { useState, useEffect } from "react";
import { Error, Loader, PictureCard } from "../components";
import { PictureDetails } from "./";
import {
  useGetRandomPhotosQuery,
  useGetPicturesBySearchQuery,
} from "../utils/redux/services/unsplashCore";
import { dummyPictureData } from "../assets"; //Read data from local json file

const DisplayPictures = ({ setPage }) => {
  useEffect(() => {
    setPage("Picture");
  }, []);
  const { data, isFetching, error } = useGetRandomPhotosQuery();
  const { data: data2 } = useGetPicturesBySearchQuery("nature");
  const { data: data3 } = useGetPicturesBySearchQuery("puppy");
  const { data: data4 } = useGetPicturesBySearchQuery("space");
  const { data: data5 } = useGetPicturesBySearchQuery("art");
  const { data: data6 } = useGetPicturesBySearchQuery("kitten");
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
          {data2?.results?.map((pin, i) => (
            <PictureCard
              key={i}
              pin={pin}
              openModal={toggleModal}
              setOpenPin={setOpenPin}
            />
          ))}
          {data3?.results?.map((pin, i) => (
            <PictureCard
              key={i}
              pin={pin}
              openModal={toggleModal}
              setOpenPin={setOpenPin}
            />
          ))}
          {data4?.results?.map((pin, i) => (
            <PictureCard
              key={i}
              pin={pin}
              openModal={toggleModal}
              setOpenPin={setOpenPin}
            />
          ))}
          {data5?.results?.map((pin, i) => (
            <PictureCard
              key={i}
              pin={pin}
              openModal={toggleModal}
              setOpenPin={setOpenPin}
            />
          ))}
          {data6?.results?.map((pin, i) => (
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
