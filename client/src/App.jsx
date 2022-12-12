import { useState } from "react";
import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { Navbar, Sidebar, MusicPlayer, TopPlay } from "./components";
import {
  Discover,
  SearchMusic,
  TopArtists,
  ArtistDetails,
  SongDetails,
  SearchPicture,
  DisplayPictures,
  TopVideos,
  VideoDetails,
} from "./pages";

const App = () => {
  const { activeSong } = useSelector((state) => state.player);
  const [page, setPage] = useState("");

  const handleSetPage = (newPage) => {
    setPage(newPage);
  };

  return (
    <div className="relative flex">
      <Sidebar />
      <div className="flex-1 flex flex-col bg-gradient-to-br from-black to-[#121286]">
        <Navbar page={page} />

        <div className=" h-[calc(100vh-72px)] overflow-y-scroll hide-scrollbar flex xl:flex-row flex-col-reverse">
          <div className="flex-1 h-fit pb-40">
            <Routes>
              <Route path="/" element={<Discover setPage={handleSetPage} />} />
              <Route
                path="/searchMusic/:searchTerm"
                element={<SearchMusic setPage={handleSetPage} />}
              />
              <Route
                path="/top-charts"
                element={<Discover setPage={handleSetPage} />}
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
              <Route path="/top-videos" element={<TopVideos />} />
              <Route path="/video/:videoid" element={<VideoDetails />} />
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
