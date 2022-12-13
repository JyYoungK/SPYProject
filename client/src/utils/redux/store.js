// Attempt 1
// import { configureStore } from "@reduxjs/toolkit";
// import { shazamCoreApi } from "./services/shazamCore";
// import { shazamCoreArtistApi } from "./services/shazamCore";
// import { unsplashCoreApi } from "./services/unsplashCore";
// import playerReducer from "./features/playerSlice";

// export const store = configureStore({
//   reducer: {
//     [shazamCoreApi.reducerPath]: shazamCoreApi.reducer,
//     [shazamCoreArtistApi.reducerPath]: shazamCoreArtistApi.reducer,
//     [unsplashCoreApi.reducerPath]: unsplashCoreApi.reducer,
//     player: playerReducer,
//   },
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware().concat(
//       shazamCoreApi.middleware,
//       shazamCoreArtistApi.middleware,
//       unsplashCoreApi.middleware
//     ),
// });

// Attempt 2
// import { configureStore } from "@reduxjs/toolkit";
// import { persistReducer, persistStore } from "redux-persist";
// import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
// import { shazamCoreApi } from "./services/shazamCore";
// import { shazamCoreArtistApi } from "./services/shazamCore";
// import { unsplashCoreApi } from "./services/unsplashCore";
// import playerReducer from "./features/playerSlice";

// const persistConfig = {
//   key: "root",
//   storage,
// };

// const persistedReducer = persistReducer(persistConfig, {
//   [shazamCoreApi.reducerPath]: shazamCoreApi.reducer,
//   [shazamCoreArtistApi.reducerPath]: shazamCoreArtistApi.reducer,
//   [unsplashCoreApi.reducerPath]: unsplashCoreApi.reducer,
//   player: playerReducer,
// });

// const store = configureStore({
//   reducer: persistedReducer,
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware().concat(
//       shazamCoreApi.middleware,
//       shazamCoreArtistApi.middleware,
//       unsplashCoreApi.middleware
//     ),
// });
// export const persistor = persistStore(store);
// export default store;

import { configureStore, combineReducers } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import {
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  persistStore,
} from "redux-persist";
import { shazamCoreApi } from "./services/shazamCore";
import { shazamCoreArtistApi } from "./services/shazamCore";
import { unsplashCoreApi } from "./services/unsplashCore";
import playerReducer from "./features/playerSlice";

const persistConfig = {
  key: "root",
  storage,
};

const rootReducer = combineReducers({
  [shazamCoreApi.reducerPath]: shazamCoreApi.reducer,
  [shazamCoreArtistApi.reducerPath]: shazamCoreArtistApi.reducer,
  [unsplashCoreApi.reducerPath]: unsplashCoreApi.reducer,
  player: playerReducer,
});

const store = configureStore({
  reducer: persistReducer(persistConfig, rootReducer),
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(
      shazamCoreApi.middleware,
      shazamCoreArtistApi.middleware,
      unsplashCoreApi.middleware
    ),
});

export const persistor = persistStore(store);
export default store;
