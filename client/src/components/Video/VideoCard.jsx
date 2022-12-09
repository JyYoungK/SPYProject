import { Link } from "react-router-dom";
import { Typography, Card, CardContent, CardMedia } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import React from "react";
import { useGetChannelDetailsQuery } from "../../redux/services/youtubeCore";

import {
  demoThumbnailUrl,
  demoVideoUrl,
  demoVideoTitle,
  demoChannelUrl,
  demoChannelTitle,
} from "../../assets/constants";

// const VideoCard = ({
//   video: {
//     channel_id,
//     number_of_views,
//     published_time,
//     thumbnails,
//     title,
//     video_id,
//     video_length,
//   },
// }) => {
//   const { data } = useGetChannelDetailsQuery(channel_id);
//   var videoViews = parseInt(number_of_views.slice(0, -6).replaceAll(",", ""));
//   switch (true) {
//     case videoViews > 1000000:
//       videoViews = `${(videoViews / 1000000).toString().slice(0, 4)}M`;
//       break;
//     case videoViews > 100000:
//       videoViews = `${(videoViews / 1000).toString().slice(0, 3)}K`;
//       break;
//     case videoViews > 1000:
//       videoViews = `${(videoViews / 1000).toString().slice(0, 4)}K`;
//       break;
//     default:
//       break;
//   }

//   return (
//     <Card
//       sx={{
//         width: { xs: "100%", sm: "250px", md: "300px" },
//         boxShadow: "none",
//         borderRadius: 3,
//       }}
//     >
//       {/* Video Detail */}
//       <Link to={video_id ? `/video/${video_id}` : `/video/cV2gBU6hKfY`}>
//         <div className="relative">
//           <CardMedia
//             image={thumbnails[0].url || demoThumbnailUrl}
//             alt={title}
//             sx={{ width: { xs: "100%", sm: "358px" }, height: 180 }}
//           />
//           <div className="absolute rounded-md bg-black text-white bottom-1 right-1">
//             {video_length && video_length}
//           </div>
//         </div>
//       </Link>
//       <CardContent sx={{ backgroundColor: "#1E1E1E", height: "126px" }}>
//         {/* Video */}
//         <Link to={video_id ? `/video/${video_id}` : demoVideoUrl}>
//           <Typography variant="subtitle1" fontWeight="bold" color="#FFF">
//             {title.slice(0, 30) || demoVideoTitle.slice(0, 40)}
//           </Typography>
//         </Link>
//         {/* Channel */}
//         <Link to={channel_id ? `/channel/${channel_id}` : demoChannelUrl}>
//           <Typography variant="subtitle2" color="gray">
//             {data?.items[0].snippet.title || demoChannelTitle}
//             <CheckCircleIcon
//               sx={{ fontSize: "13px", color: "gray", ml: "5px" }}
//             />
//           </Typography>
//         </Link>
//         <Typography variant="subtitle2" color="gray">
//           {videoViews + " • " + published_time}
//         </Typography>
//       </CardContent>
//     </Card>
//   );
// };
const VideoCard = () => {
  return (
    <div>
      <h1>VideoCard</h1>
    </div>
  );
};

export default VideoCard;
