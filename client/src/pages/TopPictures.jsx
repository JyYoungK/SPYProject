import React from "react";
import { useSelector } from "react-redux";
import { Error, Loader } from "../components";
// import { useGetTopChartsQuery } from "../redux/services/shazamCore";
import { PictureSearchBar } from "../components";

const TopPictures = () => {
  // const { data, isFetching, error } = useGetTopChartsQuery();
  // const { activeSong, isPlaying } = useSelector((state) => state.player);
  // if (isFetching) return <Loader title="Loading Top Charts" />;

  // if (error) return <Error />;

  return (
    <div className="ml-5 flex flex-col">
      <PictureSearchBar />
      <h2 className="font-bold text-3xl text-white text-left mt-4 mb-10">
        Top Charts
      </h2>
      <div class="flex items-center box-sizing-border cursor-pointer w-236">
        <img
          class="flex w-full cursor-zoom-in rounded-lg shadow-md transition duration-300 ease-in-out object-fit-cover"
          src="https://images.unsplash.com/photo-1670348282399-5407569f9019?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80"
          alt="image"
        />
        <img
          class="flex w-full cursor-zoom-in rounded-lg shadow-md transition duration-300 ease-in-out object-fit-cover"
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

export default TopPictures;
