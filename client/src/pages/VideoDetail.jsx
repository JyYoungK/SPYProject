import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import { Typography, Box, Stack } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { Videos, Loader } from "../components";
import { fetchFromAPI } from "../utils/fetchFromAPI";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";

const VideoDetail = () => {
  const [videoDetail, setVideoDetail] = useState(null);
  const [videos, setVideos] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetchFromAPI(
      `videos?part=contentDetails%2Csnippet%2Cstatistics&id=${id}`
    ).then((data) => setVideoDetail(data.items[0]));

    fetchFromAPI(`search?part=snippet&relatedToVideoId=${id}&type=video`).then(
      (data) => setVideos(data.items)
    );
  }, [id]);

  if (!videoDetail?.snippet) return <Loader title={`Searching videos...`} />;

  const {
    snippet: { title, channelId, channelTitle },
    statistics: { viewCount, likeCount },
  } = videoDetail;

  return (
    <Box minHeight="95vh">
      <Stack className="pb-5 " direction={{ xs: "column", md: "row" }}>
        <Box flex={1}>
          <Box className="bg-black w-full ">
            <Container>
              <div className="ratio ratio-16x9">
                <iframe
                  src={`https://www.youtube.com/embed/${id}`}
                  frameborder="0"
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                  title="video"
                  className="react-player "
                />
              </div>
            </Container>
            {/* <div className=" w-full h-full">
              <ReactPlayer
                url={`https://www.youtube.com/watch?v=${id}`}
                className="react-player "
                controls
              />
            </div> */}
            <Typography
              color="#fff"
              variant="h5"
              fontWeight="bold"
              p={2}
              className="bg-black"
            >
              {title}
            </Typography>
            <Stack
              direction="row"
              sx={{ color: "#fff" }}
              py={1}
              px={2}
              className="bg-black justify-between"
            >
              <Link to={`/channel/${channelId}`}>
                <Typography
                  variant={{ sm: "subtitle1", md: "h6" }}
                  color="#fff"
                  className="text-lg"
                >
                  {channelTitle}
                  <CheckCircleIcon className="text-2xl text-white-100" />
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
      </Stack>
      <Videos videos={videos} direction="row" />
    </Box>
  );
};

export default VideoDetail;
