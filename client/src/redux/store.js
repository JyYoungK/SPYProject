import { configureStore } from "@reduxjs/toolkit";
import { shazamCoreApi } from "./services/shazamCore";
import { shazamCoreArtistApi } from "./services/shazamCore";
import { unsplashCoreApi } from "./services/unsplashCore";
import { youtubeCoreApi } from "./services/youtubeCore";
import playerReducer from "./features/playerSlice";

export const store = configureStore({
  reducer: {
    [shazamCoreApi.reducerPath]: shazamCoreApi.reducer,
    [shazamCoreArtistApi.reducerPath]: shazamCoreArtistApi.reducer,
    [unsplashCoreApi.reducerPath]: unsplashCoreApi.reducer,
    [youtubeCoreApi.reducerPath]: youtubeCoreApi.reducer,
    player: playerReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      shazamCoreApi.middleware,
      shazamCoreArtistApi.middleware,
      unsplashCoreApi.middleware,
      youtubeCoreApi.middleware
    ),
});
