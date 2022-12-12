import React, { useEffect } from "react";
import { Error, Loader, VideoCard } from "../components";
import { useGetTopVideosQuery } from "../redux/services/youtubeCore";

const TopVideos = ({ setPage }) => {
  useEffect(() => {
    setPage("Video");
  }, []);
  const { data, isFetching, error } = useGetTopVideosQuery();
  console.log(data?.videos);

  //   data?.map((video, i) => console.log(video));
  if (isFetching) return <Loader title="Loading videos..." />;

  if (error) return <Error />;

  return (
    <div className="flex flex-col">
      <div className="flex flex-wrap sm:justify-start justify-center gap-8">
        <h2 className="ml-5 font-bold text-3xl text-white text-left mt-4 mb-10">
          Top Youtube Videos
        </h2>
        <a href="https://www.youtube.com/" target="_blank">
          <img
            src="/YoutubeLogo.png"
            alt="image"
            className="w-20 h-20 rounded-full"
          />
        </a>
      </div>

      <div className="ml-5 flex flex-wrap sm:justify-start justify-center gap-8">
        {data.videos.map((video, i) => (
          <VideoCard video={video} key={i} />
        ))}
      </div>
    </div>
  );
};

export default TopVideos;
