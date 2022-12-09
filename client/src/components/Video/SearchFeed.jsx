import { useState, useEffect } from "react";
import { Stack, Typography, Box } from "@mui/material";
import { useParams } from "react-router-dom";
import { Sidebar } from "../Sidebar";
import { SearchBar } from "./SearchBar";
import { useTheme } from "@mui/material";
import { fetchFromAPI } from "../../utils/fetchFromYoutubeAPI";
import { Videos } from "./Videos";

const SearchFeed = () => {
  const [videos, setVideos] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("New");
  const { searchTerm } = useParams();
  const theme = useTheme();

  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${searchTerm}`).then((data) =>
      setVideos(data.items)
    );
  }, [searchTerm]);

  // useEffect(() => {
  //   setVideos(null);
  //   fetchFromAPI(`search?part=snippet&q=${selectedCategory}`).then((data) => {
  //     setVideos(data.items);
  //   });
  // }, [selectedCategory]);

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
            <span style={{ color: theme.palette.neutral.dark }}>
              Search Results for{" "}
            </span>
            <span style={{ color: "#FC1503" }}>{searchTerm}</span>
            <span style={{ color: theme.palette.neutral.dark }}> videos </span>
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

export default SearchFeed;
