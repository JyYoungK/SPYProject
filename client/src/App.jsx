import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { Navbar, Sidebar, TopPlay, Bio, MusicPlayer } from "./components";
import {
  TopCharts,
  SearchMusic,
  TopArtists,
  ArtistDetails,
  SongDetails,
  SearchPicture,
  DisplayPictures,
  SearchVideo,
  TopVideo,
  MovieVideo,
  SportsVideo,
  GamingVideo,
  VideoDetail,
  ChannelDetail,
} from "./pages";

const App = () => {
  const { activeSong } = useSelector((state) => state.player);
  const [page, setPage] = useState("");
  const [currentSeason, setCurrentSeason] = useState(1);
  const [currentTheme, setCurrentTheme] = useState(1);
  const spring_theme = "from-theme_green ";
  const summer_theme = "from-theme_blue ";
  const autumn_theme = "from-theme_red ";
  const winter_theme = "from-theme_black ";
  const light_theme = "to-theme_white";
  const dark_theme = "to-theme_black";

  useEffect(() => {
    const seasonData = window.localStorage.getItem("season");
    const themeData = window.localStorage.getItem("theme");
    if (seasonData !== null) {
      setCurrentSeason(JSON.parse(seasonData));
    }
    if (themeData !== null) {
      setCurrentTheme(JSON.parse(themeData));
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem("season", JSON.stringify(currentSeason));
  }, [currentSeason]);

  useEffect(() => {
    window.localStorage.setItem("theme", JSON.stringify(currentTheme));
  }, [currentTheme]);

  const handleSetPage = (newPage) => {
    setPage(newPage);
  };

  const handleSetSeason = (newSeason) => {
    setCurrentSeason(newSeason);
  };

  const handleSetTheme = (newTheme) => {
    setCurrentTheme(newTheme);
  };

  return (
    <div className="relative flex">
      <Sidebar />

      <div
        className={`flex-1 flex flex-col bg-gradient-to-br ${
          currentSeason === 1
            ? spring_theme
            : currentSeason === 2
            ? summer_theme
            : currentSeason === 3
            ? autumn_theme
            : winter_theme
        }${currentTheme === 1 ? dark_theme : light_theme}`}
      >
        <Navbar
          page={page}
          currentSeason={currentSeason}
          handleSetSeason={handleSetSeason}
          currentTheme={currentTheme}
          handleSetTheme={handleSetTheme}
        />

        <div className=" h-[calc(100vh-100px)] overflow-y-scroll hide-scrollbar flex xl:flex-row flex-col-reverse">
          <div className="flex-1 h-fit pb-40">
            <Routes>
              <Route
                path="/"
                element={
                  <Bio
                    setPage={handleSetPage}
                    currentSeason={currentSeason}
                    currentTheme={currentTheme}
                  />
                }
              />
              <Route
                path="/searchMusic/:searchTerm"
                element={<SearchMusic setPage={handleSetPage} />}
              />
              <Route
                path="/top-charts"
                element={<TopCharts setPage={handleSetPage} />}
              />
              <Route
                path="/top-artists"
                element={<TopArtists setPage={handleSetPage} />}
              />
              <Route
                path="/artists/:artistid"
                element={<ArtistDetails setPage={handleSetPage} />}
              />
              <Route
                path="/songs/:songid"
                element={<SongDetails setPage={handleSetPage} />}
              />

              {/* --------------------------------------------------- */}
              <Route
                path="/searchPicture/:searchTerm"
                element={<SearchPicture setPage={handleSetPage} />}
              />
              <Route
                path="/pictures"
                element={<DisplayPictures setPage={handleSetPage} />}
              />
              {/* --------------------------------------------------- */}
              <Route path="/search/:searchTerm" element={<SearchVideo />} />
              <Route
                path="/top-videos"
                element={<TopVideo setPage={handleSetPage} />}
              />
              <Route
                path="/movie-videos"
                element={<MovieVideo setPage={handleSetPage} />}
              />
              <Route
                path="/sports-videos"
                element={<SportsVideo setPage={handleSetPage} />}
              />
              <Route
                path="/gaming-videos"
                element={<GamingVideo setPage={handleSetPage} />}
              />
              <Route path="/video/:id" element={<VideoDetail />} />
              <Route path="/channel/:id" element={<ChannelDetail />} />
            </Routes>
          </div>
          <div className=" xl:sticky relative top-0 h-fit">
            {activeSong?.title && <MusicPlayer />}
            <TopPlay />
          </div>
        </div>
      </div>

      {/* {activeSong?.title && (
        <div className="absolute h-28 bottom-0 left-0 right-0 flex animate-slideup bg-gradient-to-br from-white/10 to-[#2a2a80] backdrop-blur-lg rounded-t-3xl z-10">
          <MusicPlayer />
        </div>
      )} */}
    </div>
  );
};

export default App;
