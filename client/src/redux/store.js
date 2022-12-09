import { configureStore } from "@reduxjs/toolkit";
import { youtubeCoreApi } from "./services/youtubeCore";
import { shazamCoreApi } from "./services/shazamCore";
import { shazamCoreArtistApi } from "./services/shazamCore";
import playerReducer from "./features/playerSlice";

export const store = configureStore({
  reducer: {
    [shazamCoreApi.reducerPath]: shazamCoreApi.reducer,
    [shazamCoreArtistApi.reducerPath]: shazamCoreArtistApi.reducer,
    [youtubeCoreApi.reducerPath]: youtubeCoreApi.reducer,
    player: playerReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      shazamCoreApi.middleware,
      shazamCoreArtistApi.middleware,
      youtubeCoreApi.middleware
    ),
});
