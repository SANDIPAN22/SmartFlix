import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithEmailAndPassword,
} from "firebase/auth";
import auth from "../Firebase";

const initialState = {
  user: null,
  isLoading: false,
  error: null,
};
export const validateToken = createAsyncThunk(
  "userData/validateToken",
  async (AT) => {
    const user = JSON.parse(atob(AT.split(".")[1]));
    return JSON.stringify(user);
  }
);

export const signUpUser = createAsyncThunk(
  "userData/signUpUser",
  async ({ username, email, password }) => {
    const data = await createUserWithEmailAndPassword(auth, email, password);
    await updateProfile(data.user, {
      displayName: username,
      photoURL: "https://multiavatar.com/1732818129085",
    });
    return JSON.stringify(data.user);
  }
);

export const signInUser = createAsyncThunk(
  "userData/signInUser",
  async ({ email, password }) => {
    const data = await signInWithEmailAndPassword(auth, email, password);
    return JSON.stringify(data.user);
  }
);

const userDataSlice = createSlice({
  name: "userData",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(signUpUser.pending, (state) => {
      state.isLoading = true;
      state.error = null;
      state.user = null;
    });
    builder.addCase(signUpUser.fulfilled, (state, action) => {
      state.isLoading = false;
      state.user = action.payload;
      state.error = null;
    });
    builder.addCase(signUpUser.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
      state.user = null;
    });
    builder.addCase(signInUser.pending, (state) => {
      state.isLoading = true;
      state.error = null;
      state.user = null;
    });
    builder.addCase(signInUser.fulfilled, (state, action) => {
      state.isLoading = false;
      state.user = action.payload;
      state.error = null;
    });
    builder.addCase(signInUser.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
      state.user = null;
    });
    builder.addCase(validateToken.pending, (state) => {
      state.isLoading = true;
      state.error = null;
      state.user = null;
    });
    builder.addCase(validateToken.fulfilled, (state, action) => {
      state.isLoading = false;
      state.user = action.payload;
      state.error = null;
    });
    builder.addCase(validateToken.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
      state.user = null;
    });
  },
});

export default userDataSlice.reducer;
