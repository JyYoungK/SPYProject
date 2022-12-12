import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import { Typography, Box, Stack } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { Loader } from "../components";
import { RelatedVideoCard } from "../components";
import { fetchFromYoutubeAPI } from "../redux/fetchFromYoutubeAPI";

const VideoDetail = () => {
  const [videoDetail, setVideoDetail] = useState(null);
  const { videoid } = useParams();

  useEffect(() => {
    fetchFromYoutubeAPI(`videos?part=snippet,statistics&id=${videoid}`).then(
      (data) => setVideoDetail(data.items[0])
    );

    // fetchFromYoutubeAPI(
    //   `search?relatedToVideoId=${videoid}&part=id%2Csnippet&type=video`
    // ).then((data) => setVideos(data.items));
  }, [videoid]);

  console.log(videoDetail);
  if (!videoDetail?.snippet) return <Loader title="Loading Videos..." />;

  const {
    snippet: { title, channelId, channelTitle },
    statistics: { viewCount, likeCount },
  } = videoDetail;

  return (
    <Box minHeight="95vh">
      <Stack direction={{ xs: "column", md: "row" }}>
        <Box flex={1}>
          <Box sx={{ width: "100%", position: "sticky", top: "86px" }}>
            <ReactPlayer
              url={`https://www.youtube.com/watch?v=${videoid}`}
              className="react-player"
              controls
              style={{ maxWidth: "100% !important" }}
            />
            <Typography color="#fff" variant="h5" fontWeight="bold" p={2}>
              {title}
            </Typography>
            <Stack
              direction="row"
              justifyContent="space-between"
              sx={{ color: "#fff" }}
              py={1}
              px={2}
            >
              <Link to={`/channel/${channelId}`}>
                <Typography
                  variant={{ sm: "subtitle1", md: "h6" }}
                  color="#fff"
                >
                  {channelTitle}
                  <CheckCircleIcon
                    sx={{ fontSize: "12px", color: "gray", ml: "5px" }}
                  />
                </Typography>
              </Link>
              <Stack direction="row" gap="20px" alignItems="center">
                <Typography variant="body1" sx={{ opacity: 0.7 }}>
                  {parseInt(viewCount).toLocaleString()} views
                </Typography>
                <Typography variant="body1" sx={{ opacity: 0.7 }}>
                  {parseInt(likeCount).toLocaleString()} likes
                </Typography>
              </Stack>
            </Stack>
          </Box>
        </Box>
        <Box
          px={2}
          py={{ md: 1, xs: 5 }}
          justifyContent="center"
          alignItems="center"
        ></Box>
      </Stack>
    </Box>
    // <Box minHeight="95vh">
    //   <Stack direction={{ xs: "column", md: "row" }}>
    //     <Box flex={1}>
    //       <Box sx={{ width: "100%", position: "sticky", top: "86px" }}>
    //         <ReactPlayer
    //           url={`https://www.youtube.com/watch?v=${videoid}`}
    //           className="react-player"
    //           controls
    //         />
    //         <Typography color="#fff" variant="h5" fontWeight="bold" p={2}>
    //           {title}
    //         </Typography>
    //         <Stack
    //           direction="row"
    //           justifyContent="space-between"
    //           sx={{ color: "#fff" }}
    //           py={1}
    //           px={2}
    //         >
    //           <Link to={`/channel/${channelId}`}>
    //             <Typography
    //               variant={{ sm: "subtitle1", md: "h6" }}
    //               color="#fff"
    //             >
    //               {channelTitle}
    //               <CheckCircleIcon
    //                 sx={{ fontSize: "12px", color: "gray", ml: "5px" }}
    //               />
    //             </Typography>
    //           </Link>
    //           <Stack direction="row" gap="20px" alignItems="center">
    //             <Typography variant="body1" sx={{ opacity: 0.7 }}>
    //               {parseInt(viewCount).toLocaleString()} views
    //             </Typography>
    //             <Typography variant="body1" sx={{ opacity: 0.7 }}>
    //               {parseInt(likeCount).toLocaleString()} likes
    //             </Typography>
    //           </Stack>
    //         </Stack>
    //       </Box>
    //     </Box>
    //     <Box
    //       px={2}
    //       py={{ md: 1, xs: 5 }}
    //       justifyContent="center"
    //       alignItems="center"
    //     >
    //       {/* <RelatedVideoCard videos={videos} direction="column" /> */}
    //     </Box>
    //   </Stack>
    // </Box>
  );
};

export default VideoDetail;
