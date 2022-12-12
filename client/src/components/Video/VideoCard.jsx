import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Typography, Card, CardContent, CardMedia } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import moment from "moment";
import { fetchFromAPI } from "../../utils/fetchFromAPI";
import {
  demoThumbnailUrl,
  demoVideoUrl,
  demoVideoTitle,
  demoChannelUrl,
  demoChannelTitle,
} from "../../assets/constants";

const VideoCard = ({
  video: {
    id: { videoId },
    snippet,
  },
}) => {
  const [videoFooter, setVideoFooter] = useState(null);
  useEffect(() => {
    fetchFromAPI(
      `videos?part=contentDetails%2Csnippet%2Cstatistics&id=${videoId}`
    ).then((data) => setVideoFooter(data.items[0].statistics));
  }, [videoId]);

  var videoViews = parseInt(videoFooter?.viewCount);
  switch (true) {
    case videoViews > 1000000:
      videoViews = `${(videoViews / 1000000).toString().slice(0, 4)}M`;
      break;
    case videoViews > 100000:
      videoViews = `${(videoViews / 1000).toString().slice(0, 3)}K`;
      break;
    case videoViews > 1000:
      videoViews = `${(videoViews / 1000).toString().slice(0, 4)}K`;
      break;
    case videoViews > 1:
      videoViews = `${videoViews}`;
      break;
    default:
      videoViews = "? views";
      break;
  }

  return (
    <Card
      sx={{
        width: { xs: "100%", sm: "358px", md: "310px" },
        boxShadow: "none",
        borderRadius: 0,
      }}
    >
      <Link to={videoId ? `/video/${videoId}` : `/video/cV2gBU6hKfY`}>
        <CardMedia
          image={snippet?.thumbnails?.high?.url || demoThumbnailUrl}
          alt={snippet?.title}
          sx={{ width: { xs: "100%", sm: "310px" }, height: 180 }}
        />
      </Link>
      <CardContent sx={{ backgroundColor: "#1E1E1E", height: "126px" }}>
        <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
          <Typography variant="subtitle1" fontWeight="bold" color="#FFF">
            {snippet?.title.length > 54
              ? snippet?.title.toUpperCase()
                ? snippet?.title.slice(0, 45) + "..."
                : snippet?.title.slice(0, 54) + "..."
              : demoVideoTitle}
          </Typography>
        </Link>
        <Link
          to={
            snippet?.channelId
              ? `/channel/${snippet?.channelId}`
              : demoChannelUrl
          }
        >
          <Typography variant="subtitle2" color="gray">
            {snippet?.channelTitle
              ? snippet?.channelTitle.length > 28
                ? snippet?.channelTitle.slice(0, 28) + "..."
                : snippet?.channelTitle
              : demoChannelTitle}
            <CheckCircleIcon
              sx={{ fontSize: "12px", color: "gray", ml: "5px" }}
            />
          </Typography>
        </Link>
        <Typography
          className="flex justify-between items-center "
          variant="subtitle2"
          color="gray"
        >
          {moment(snippet?.publishedAt).fromNow() + " • " + videoViews}
        </Typography>
      </CardContent>
    </Card>
  );
};
export default VideoCard;
