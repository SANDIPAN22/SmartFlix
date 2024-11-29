import { configureStore } from "@reduxjs/toolkit";
import userDataReducers from "./slice/UserDataSlice";
import { movieApiSlice } from "./slice/movieApiSlice";
export const store = configureStore({
  reducer: {
    userData: userDataReducers,
    [movieApiSlice.reducerPath]: movieApiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(movieApiSlice.middleware), // Add the API middleware
});
