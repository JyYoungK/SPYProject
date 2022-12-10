import React from "react";
import { useParams } from "react-router-dom";
import { Error, Loader, PictureCard, PictureSearchBar } from "../components";
import { useGetPicturesBySearchQuery } from "../redux/services/unsplashCore";
import dummyPictureJSON from "../assets/dummyPictureData.json"; //Read data from local json file

const SearchPicture = () => {
  const { searchTerm } = useParams();
  const { data, isFetching, error } = useGetPicturesBySearchQuery(searchTerm);
  let pins;
  if (data?.results) {
    pins = data.results;
  } else {
    pins = dummyPictureJSON.results;
  }

  if (isFetching) return <Loader title={`Searching ${searchTerm}...`} />;

  if (error) return <Error />;

  return (
    <div className="flex flex-col">
      <PictureSearchBar />
      {data?.results ? (
        <h2 className="ml-5 font-bold text-3xl text-white text-left mt-4 mb-10">
          Showing results for <span className="font-black">{searchTerm}</span>
        </h2>
      ) : (
        <h2 className="ml-5 font-bold text-3xl text-white text-left mt-4 mb-10">
          Sorry API exceeded the max amount. Displaying Car pictures instead
        </h2>
      )}

      <div className="ml-5 flex flex-wrap sm:justify-start justify-center gap-8">
        {pins.map((pin, i) => (
          <PictureCard key={i} pin={pin} />
        ))}
      </div>
    </div>
  );
};

export default SearchPicture;
