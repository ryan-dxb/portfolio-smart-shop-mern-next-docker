import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";

import sidebarReducer from "./features/sidebar/sidebarSlice";

import { authApi } from "./features/auth/api/authApi";

import customStorage from "./customStorage";

const persistConfig = {
  key: "user",
  storage: customStorage,
  whitelist: ["userDetails", "token"],
};

const rootReducer = combineReducers({
  [authApi.reducerPath]: authApi.reducer,
  // [userApi.reducerPath]: userApi.reducer,

  // user: persistReducer(persistConfig, userReducer),
  // sidebar: sidebarReducer,
});

export const store = configureStore({
  reducer: rootReducer,

  devTools: process.env.NODE_ENV === "development",
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat([
      authApi.middleware,
      // userApi.middleware,
    ]),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export const persistor = persistStore(store);
