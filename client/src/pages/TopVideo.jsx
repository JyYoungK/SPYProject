import React, { useEffect, useState } from "react";
import { Box, Stack, Typography } from "@mui/material";
import { fetchFromAPI } from "../utils/fetchFromAPI";
import { Videos } from "../components";

const TopVideo = ({ setPage }) => {
  const [videos, setVideos] = useState(null);

  useEffect(() => {
    setVideos(null);
    setPage("Video");
    fetchFromAPI(`search?part=snippet&q=New`).then((data) =>
      setVideos(data.items)
    );
  }, []);

  return (
    <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
      <Box p={2} sx={{ height: "90vh", flex: 2 }}>
        <Typography
          variant="h4"
          fontWeight="bold"
          mb={2}
          sx={{ color: "white" }}
        >
          New Videos
        </Typography>

        <Videos videos={videos} />
      </Box>
    </Stack>
  );
};

export default TopVideo;
