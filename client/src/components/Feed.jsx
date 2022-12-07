import React, { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import { fetchFromAPI } from "../utils/fetchFromYoutubeAPI";
import { Sidebar } from "./Sidebar";
import { Videos } from "./Youtube/Videos";
import { SearchBar } from "./Youtube/SearchBar";
import { Link } from "react-router-dom";
import { useTheme } from "@mui/material";

const Feed = ({ selectedCategory }) => {
  const [videos, setVideos] = useState(null);
  const theme = useTheme();

  useEffect(() => {
    setVideos(null);
    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`).then((data) => {
      setVideos(data.items);
    });
  }, [selectedCategory]);

  return (
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
          <span style={{ color: theme.palette.neutral.dark }}>
            New {selectedCategory}
          </span>{" "}
          <span style={{ color: "#FC1503" }}>Videos</span>
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
  );
};

export default Feed;
