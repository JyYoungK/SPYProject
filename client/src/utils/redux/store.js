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
import {
  shazamCoreApi,
  shazamCoreArtistApi,
} from "./services/shazam/shazamCore";
// import * as shazamCore from "./services/shazam/";
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

// const rootReducer = combineReducers({
//   [shazamCore.shazamCoreApi.reducerPath]: shazamCore.shazamCoreApi.reducer,
//   [shazamCore.shazamCoreArtistApi.reducerPath]:
//     shazamCore.shazamCoreArtistApi.reducer,
//   [shazamCore.shazamCoreApi2.reducerPath]: shazamCore.shazamCoreApi2.reducer,
//   [shazamCore.shazamCoreArtistApi2.reducerPath]:
//     shazamCore.shazamCoreArtistApi2.reducer,
//   [shazamCore.shazamCoreApi3.reducerPath]: shazamCore.shazamCoreApi3.reducer,
//   [shazamCore.shazamCoreArtistApi3.reducerPath]:
//     shazamCore.shazamCoreArtistApi3.reducer,
//   [shazamCore.shazamCoreApi4.reducerPath]: shazamCore.shazamCoreApi4.reducer,
//   [shazamCore.shazamCoreArtistApi4.reducerPath]:
//     shazamCore.shazamCoreArtistApi4.reducer,
//   [shazamCore.shazamCoreApi5.reducerPath]: shazamCore.shazamCoreApi5.reducer,
//   [shazamCore.shazamCoreArtistApi5.reducerPath]:
//     shazamCore.shazamCoreArtistApi5.reducer,
//   [shazamCore.shazamCoreApi6.reducerPath]: shazamCore.shazamCoreApi6.reducer,
//   [shazamCore.shazamCoreArtistApi6.reducerPath]:
//     shazamCore.shazamCoreArtistApi6.reducer,
//   [shazamCore.shazamCoreApi7.reducerPath]: shazamCore.shazamCoreApi7.reducer,
//   [shazamCore.shazamCoreArtistApi7.reducerPath]:
//     shazamCore.shazamCoreArtistApi7.reducer,
//   [shazamCore.shazamCoreApi8.reducerPath]: shazamCore.shazamCoreApi8.reducer,
//   [shazamCore.shazamCoreArtistApi8.reducerPath]:
//     shazamCore.shazamCoreArtistApi8.reducer,
//   [shazamCore.shazamCoreApi9.reducerPath]: shazamCore.shazamCoreApi9.reducer,
//   [shazamCore.shazamCoreArtistApi9.reducerPath]:
//     shazamCore.shazamCoreArtistApi9.reducer,
//   [shazamCore.shazamCoreApi10.reducerPath]: shazamCore.shazamCoreApi10.reducer,
//   [shazamCore.shazamCoreArtistApi10.reducerPath]:
//     shazamCore.shazamCoreArtistApi10.reducer,
//   [shazamCore.shazamCoreApi11.reducerPath]: shazamCore.shazamCoreApi11.reducer,
//   [shazamCore.shazamCoreArtistApi11.reducerPath]:
//     shazamCore.shazamCoreArtistApi11.reducer,
//   [shazamCore.shazamCoreApi12.reducerPath]: shazamCore.shazamCoreApi12.reducer,
//   [shazamCore.shazamCoreArtistApi12.reducerPath]:
//     shazamCore.shazamCoreArtistApi12.reducer,
//   [shazamCore.shazamCoreApi13.reducerPath]: shazamCore.shazamCoreApi13.reducer,
//   [shazamCore.shazamCoreArtistApi13.reducerPath]:
//     shazamCore.shazamCoreArtistApi13.reducer,
//   [shazamCore.shazamCoreApi14.reducerPath]: shazamCore.shazamCoreApi14.reducer,
//   [shazamCore.shazamCoreArtistApi14.reducerPath]:
//     shazamCore.shazamCoreArtistApi14.reducer,
//   [unsplashCoreApi.reducerPath]: unsplashCoreApi.reducer,
//   player: playerReducer,
// });

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
