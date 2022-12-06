import { createSlice } from "@reduxjs/toolkit";

const drawerSlice = createSlice({
  name: "drawer",
  initialState: { showDrawer: false },
  reducers: {
    showDrawer(state) {
      state.showDrawer = !state.showDrawer;
    },
  },
});

export const drawerActions = drawerSlice.actions

export default drawerSlice.reducer
