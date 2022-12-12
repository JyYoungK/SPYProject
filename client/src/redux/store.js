import { configureStore } from "@reduxjs/toolkit";
import { shazamCoreApi } from "./services/shazamCore";
import { shazamCoreArtistApi } from "./services/shazamCore";
import { unsplashCoreApi } from "./services/unsplashCore";
import playerReducer from "./features/playerSlice";

export const store = configureStore({
  reducer: {
    [shazamCoreApi.reducerPath]: shazamCoreApi.reducer,
    [shazamCoreArtistApi.reducerPath]: shazamCoreArtistApi.reducer,
    [unsplashCoreApi.reducerPath]: unsplashCoreApi.reducer,
    player: playerReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      shazamCoreApi.middleware,
      shazamCoreArtistApi.middleware,
      unsplashCoreApi.middleware
    ),
});
