import React, { useEffect, useState } from "react";
import { Box, Stack, Typography } from "@mui/material";
import { fetchFromAPI } from "../utils/fetchFromYoutubeAPI";
import { Sidebar } from "./Sidebar";
import { Videos } from "./Youtube/Videos";
import { SearchBar } from "./Youtube/SearchBar";
import { Link } from "react-router-dom";

const Feed = () => {
  const [selectedCategory, setSelectedCategory] = useState("New");
  const [videos, setVideos] = useState(null);

  useEffect(() => {
    setVideos(null);
    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`).then((data) => {
      setVideos(data.items);
    });
  }, [selectedCategory]);

  return (
    <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
      <Box
        sx={{
          height: { sx: "auto", md: "92vh" },
          borderRight: "1px solid #3d3d3d",
          px: { sx: 0, md: 1 },
        }}
      >
        <Sidebar
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
      </Box>

      <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 3 }}>
        <div
          className="youtubeHeader"
          style={{ display: "flex", flexDirection: "row" }}
        >
          <Typography
            variant="h4"
            fontWeight="bold"
            mb={2}
            sx={{ color: "white" }}
          >
            New Youtube <span style={{ color: "#FC1503" }}>videos</span>
          </Typography>
          <a href="https://www.youtube.com/" target="_blank">
            <img
              src="/YoutubeLogo.png"
              alt="image"
              height="50px"
              style={{ marginLeft: 10, marginBottom: 10 }}
            />
          </a>

          <div
            style={{
              display: "flex",
              flexDirection: "row",
              marginLeft: "auto",
              marginTop: 5,
              marginBottom: 20,
              marginRight: 20,
            }}
          >
            <SearchBar />
          </div>
        </div>

        <Videos videos={videos} />
      </Box>
    </Stack>
  );
};

export default Feed;
