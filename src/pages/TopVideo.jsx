import React, { useEffect, useState } from "react";
import { Box, Stack, Typography } from "@mui/material";
import { fetchFromAPI } from "../utils/fetchFromAPI";
import { Videos } from "../components";
import { dummyVideoData } from "../assets";
const TopVideo = ({ setPage }) => {
  const [videos, setVideos] = useState(null);
  let error = false;
  useEffect(() => {
    setVideos(null);
    setPage("Video");
    fetchFromAPI(`search?part=snippet&q=New`).then((data) => {
      if (data.items) {
        error = false;
        setVideos(data.items);
      } else {
        error = true;
        setVideos(dummyVideoData);
      }
    });
  }, []);

  return (
    <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
      <Box p={2} sx={{ height: "90vh", flex: 2 }}>
        {error ? (
          <Typography
            variant="h4"
            fontWeight="bold"
            mb={2}
            sx={{ color: "white" }}
          >
            Sorry, API request call has reached the max amount. Displaying
            random videos instead.{" "}
          </Typography>
        ) : (
          <Typography
            variant="h4"
            fontWeight="bold"
            mb={2}
            sx={{ color: "white" }}
          >
            New Videos
          </Typography>
        )}
        <Videos videos={videos} />
      </Box>
    </Stack>
  );
};

export default TopVideo;
