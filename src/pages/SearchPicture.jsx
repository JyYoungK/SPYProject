import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Error, Loader, PictureCard } from "../components";
import { PictureDetails } from "./";
import { useGetPicturesBySearchQuery } from "../utils/redux/services/unsplashCore";
import { dummyPictureData } from "../assets"; //Read data from local json file

const SearchPicture = ({ setPage }) => {
  useEffect(() => {
    setPage("Picture");
  }, []);
  const { searchTerm } = useParams();
  const { data, isFetching, error } = useGetPicturesBySearchQuery(searchTerm);
  const [openModal, setOpenModal] = useState(false);
  const [openPin, setOpenPin] = useState();
  const toggleModal = () => {
    setOpenModal(!openModal);
  };

  if (isFetching) return <Loader title={`Searching ${searchTerm}...`} />;

  let pins;

  if (error?.status === 429) {
    pins = dummyPictureData.results;
  } else if (error) {
    return <Error />;
  } else {
    pins = data.results;
  }

  return (
    <div className="md:mx-auto items-center flex flex-col ">
      {error?.status === 429 ? (
        <h2 className="font-bold text-xl text-white text-left mt-4 mb-10">
          Sorry, API request call has reached the max amount. Displaying Car
          pictures instead.
        </h2>
      ) : (
        <h2 className="font-bold text-3xl text-white text-left mt-4 mb-10">
          Showing results for <span className="font-black">{searchTerm}</span>
        </h2>
      )}
      <div className="hidden sm:block sticky top-0">
        {openModal && (
          <PictureDetails toggleModal={toggleModal} openPin={openPin} />
        )}
      </div>

      <div className="flex w-full h-full justify-center">
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

export default SearchPicture;
