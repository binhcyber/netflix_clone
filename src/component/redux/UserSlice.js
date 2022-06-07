import { createSlice } from "@reduxjs/toolkit";
import localstorageserv from "../../LocalStorage/LocalStorage";

const initialState = {
  value: null,
};
export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    signUp: (state, action) => {
      state.value = action.payload;
      console.log(action.payload);
      localstorageserv.userInfor.set(action.payload);
    },
    signIn: (state, action) => {
      state.value = action.payload;
      console.log(action.payload);
      localstorageserv.userInfor.set(action.payload);
    },
    logOut: (state, action) => {
      state.value = null;
      localstorageserv.userInfor.remove();
    },
  },
});

// Action creators are generated for each case reducer function
export const { signUp, signIn, logOut } = userSlice.actions;
export const selectUser = (state) => state.user.value;
export default userSlice.reducer;
