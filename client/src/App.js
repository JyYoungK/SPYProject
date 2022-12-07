import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Box, CssBaseline, ThemeProvider, Stack } from "@mui/material";
import { useSelector } from "react-redux";
import { useMemo, useState } from "react";
import { createTheme } from "@mui/material/styles";
import { themeSettings } from "./theme";
import {
  ChannelDetail,
  VideoDetail,
  SearchFeed,
  Navbar,
  Feed,
} from "./components";
import { Sidebar } from "./components/Sidebar";

function App() {
  const mode = useSelector((state) => state.mode);
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
  const [selectedCategory, setSelectedCategory] = useState("");

  return (
    <BrowserRouter>
      {/* To enable to this, add provider in root index.js */}
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Navbar />
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

          <Routes>
            <Route
              exact
              path="/"
              element={<Feed selectedCategory={selectedCategory} />}
            />
            <Route path="/video/:id" element={<VideoDetail />} />
            <Route path="/channel/:id" element={<ChannelDetail />} />
            <Route path="/search/:searchTerm" element={<SearchFeed />} />
          </Routes>
        </Stack>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
