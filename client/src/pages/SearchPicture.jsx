import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Error, Loader, PictureCard } from "../components";
import { PictureDetails } from "./";
import { useGetPicturesBySearchQuery } from "../utils/redux/services/unsplashCore";
import dummyPictureJSON from "../assets/dummyPictureData.json"; //Read data from local json file

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
    pins = dummyPictureJSON.results;
  } else if (error) {
    return <Error />;
  } else {
    pins = data.results;
  }

  return (
    <div className="ml-5 flex flex-col">
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
      <div className="sticky relative top-0">
        {openModal && (
          <PictureDetails toggleModal={toggleModal} openPin={openPin} />
        )}
      </div>

      <div className="flex w-full h-full justify-center">
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
    </div>
  );
};

export default SearchPicture;
