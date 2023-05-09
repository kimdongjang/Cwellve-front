import { createSlice } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";
import { RootState } from "./store";

export interface ThemeState {
  theme: string;
}
const initialState: ThemeState = {
  theme: "light",
};

export const themeSlice = createSlice({
  name: "themeStore",
  initialState,
  reducers: {
    // Action to set the authentication status
    setThemeState(state, action) {
      console.log(action.payload);
      state.theme = action.payload;
    },
  },

  /** 페이지 이동 시 상태 초기화가 필요한 경우 추가해야 함 */
  // extraReducers: {
  //   [HYDRATE]: (state, action) => {
  //     return {
  //       ...state
  //       // ...action.payload.auth
  //     };
  //   }
  // }
});

export const { setThemeState } = themeSlice.actions;
export const selectThemeStore = (state: RootState) => state.themeStore;
export default themeSlice.reducer;
