import React, { useEffect, useState } from "react";
import { Box, Stack, Typography } from "@mui/material";
import { fetchFromAPI } from "../utils/fetchFromAPI";
import { Videos } from "../components";

const SportsVideo = ({ setPage }) => {
  const [videos, setVideos] = useState(null);

  useEffect(() => {
    setVideos(null);
    setPage("Video");
    fetchFromAPI(`search?part=snippet&q=Sports`).then((data) =>
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
          Sports <span style={{ color: "#FC1503" }}>videos</span>
        </Typography>

        <Videos videos={videos} />
      </Box>
    </Stack>
  );
};

export default SportsVideo;
