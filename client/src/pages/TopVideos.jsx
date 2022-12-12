import React, { useEffect } from "react";
import { Error, Loader, VideoCard } from "../components";
import { useGetTopVideosQuery } from "../redux/services/youtubeCore";
import dummyVideoDataJSON from "../assets/dummyVideoData.json"; //Read data from local json file

const TopVideos = ({ setPage }) => {
  useEffect(() => {
    setPage("Video");
  }, []);
  const { data, isFetching, error } = useGetTopVideosQuery();

  let workingData;

  if (isFetching) return <Loader title="Loading Videos..." />;

  if (error?.status === 429) {
    workingData = dummyVideoDataJSON;
  } else if (error) {
    return <Error />;
  } else {
    workingData = data.videos;
  }

  return (
    <div className="flex flex-col">
      <div className="flex flex-wrap sm:justify-start justify-center gap-8">
        {error?.status === 429 ? (
          <h2 className="font-bold text-xl text-white text-left mt-4 mb-10">
            Sorry, API request call has reached the max amount. Displaying
            random videos instead.
          </h2>
        ) : (
          <h2 className="font-bold text-3xl text-white text-left mt-4 mb-10">
            Top Youtube Videos
          </h2>
        )}
      </div>

      <div className="ml-5 flex flex-wrap sm:justify-start justify-center gap-8">
        {workingData.map((video, i) => (
          <VideoCard video={video} key={i} />
        ))}
      </div>
    </div>
  );
};

export default TopVideos;
